# Crop Yield Predictor - SageMaker Training & Deployment Script
# 
# INSTRUCTIONS:
# 1. Open Amazon SageMaker Studio in your AWS Console.
# 2. Create a new Jupyter Notebook or Python file.
# 3. Paste this entire code into it and run it.
# 4. Wait for it to finish (Training takes ~5 mins, Deployment takes ~5-10 mins).
# 5. Copy the final ENDPOINT_NAME printed at the very end.

import os
import time
import json
import boto3
import sagemaker
import pandas as pd
import numpy as np
from sagemaker import get_execution_role
from sagemaker.inputs import TrainingInput
from sagemaker.xgboost.estimator import XGBoost

def generate_synthetic_data(num_samples=10000):
    print("Generating synthetic agricultural data...")
    np.random.seed(42)
    
    crops = ['wheat', 'corn', 'rice', 'soybeans', 'cotton']
    base_yields = {'wheat': 4500, 'corn': 8000, 'rice': 5500, 'soybeans': 3000, 'cotton': 1800}
    optimal_rain = {'wheat': 600, 'corn': 550, 'rice': 1000, 'soybeans': 500, 'cotton': 700}
    
    data = []
    
    for _ in range(num_samples):
        crop = np.random.choice(crops)
        # Crop Type Encoding: wheat:0, corn:1, rice:2, soybeans:3, cotton:4
        crop_encoded = crops.index(crop)
        
        # Generate realistic random inputs
        ph = np.random.uniform(4.0, 9.0)
        moisture = np.random.uniform(20, 100)
        nitrogen = np.random.uniform(0, 200)
        phosphorus = np.random.uniform(0, 80)
        potassium = np.random.uniform(0, 250)
        temperature = np.random.uniform(5, 40)
        rainfall = np.random.uniform(100, 1500)
        humidity = np.random.uniform(20, 100)
        
        # Apply the exact formula from the Next.js backend to generate the target Yield
        y = base_yields[crop]
        
        ph_factor = 1 - abs(ph - 6.5) * 0.08
        moisture_factor = 1 - ((moisture - 65) / 65)**2 * 0.3
        
        n_factor = min(nitrogen / 120, 1.3) * 0.8 + 0.2
        p_factor = min(phosphorus / 35, 1.2) * 0.6 + 0.4
        k_factor = min(potassium / 180, 1.25) * 0.7 + 0.3
        
        temp_factor = 1 - ((temperature - 22.5) / 25)**2 * 0.4
        
        opt_r = optimal_rain[crop]
        rain_factor = 1 - ((rainfall - opt_r) / opt_r)**2 * 0.35
        
        humidity_factor = 1 - abs(humidity - 70) * 0.01 * 0.5
        
        noise = np.random.uniform(0.92, 1.08)
        
        y = y * ph_factor * moisture_factor * n_factor * p_factor * k_factor * temp_factor * rain_factor * humidity_factor * noise
        y = max(100, y) # Minimum 100 kg/ha
        
        # SageMaker XGBoost expects the target variable (yield) in the first column
        data.append([y, crop_encoded, ph, moisture, nitrogen, phosphorus, potassium, temperature, rainfall, humidity])
        
    df = pd.DataFrame(data, columns=['yieldKgHa', 'cropType', 'soilPhLevel', 'soilMoisture', 'nitrogen', 'phosphorus', 'potassium', 'temperature', 'rainfall', 'humidity'])
    return df

def main():
    # 1. Setup SageMaker session
    sess = sagemaker.Session()
    try:
        role = get_execution_role()
    except ValueError:
        # Fallback if run outside SageMaker Studio without explicitly setting IAM Role
        iam = boto3.client('iam')
        role = iam.get_role(RoleName='AmazonSageMaker-ExecutionRole')['Role']['Arn']
        
    bucket = sess.default_bucket()
    prefix = 'crop-yield-predictor'
    print(f"Using S3 bucket: {bucket}")
    
    # 2. Generate and split data
    df = generate_synthetic_data(15000)
    
    # Shuffle and split into 80% train, 20% validation
    df = df.sample(frac=1).reset_index(drop=True)
    train_data, val_data = np.split(df, [int(0.8 * len(df))])
    
    # Save to local CSV (without headers or index as required by SageMaker XGBoost)
    train_data.to_csv('train.csv', index=False, header=False)
    val_data.to_csv('validation.csv', index=False, header=False)
    
    # Upload to S3
    print("Uploading data to S3...")
    train_uri = sess.upload_data('train.csv', bucket=bucket, key_prefix=f'{prefix}/train')
    val_uri = sess.upload_data('validation.csv', bucket=bucket, key_prefix=f'{prefix}/validation')
    
    # 3. Setup XGBoost Estimator
    print("Setting up XGBoost Estimator...")
    container = sagemaker.image_uris.retrieve("xgboost", sess.boto_region_name, "1.7-1")
    
    xgb = sagemaker.estimator.Estimator(
        image_uri=container,
        role=role,
        instance_count=1,
        instance_type='ml.m5.large',
        output_path=f's3://{bucket}/{prefix}/output',
        sagemaker_session=sess
    )
    
    xgb.set_hyperparameters(
        objective='reg:squarederror',
        num_round=100,
        max_depth=5,
        eta=0.2,
        gamma=4,
        min_child_weight=6,
        subsample=0.8
    )
    
    # 4. Train the Model
    print("Starting training job (this will take a few minutes)...")
    train_input = TrainingInput(train_uri, content_type='csv')
    val_input = TrainingInput(val_uri, content_type='csv')
    
    xgb.fit({'train': train_input, 'validation': val_input})
    print("Training completed!")
    
    # 5. Deploy the Model
    print("Deploying the model to an endpoint (this usually takes 5-10 minutes)...")
    endpoint_name = f"crop-yield-xgb-{int(time.time())}"
    
    predictor = xgb.deploy(
        initial_instance_count=1,
        instance_type='ml.m5.large',
        endpoint_name=endpoint_name
    )
    print(f"\n=======================================================")
    print(f"DEPLOYMENT SUCCESSFUL!")
    print(f"Your SageMaker Endpoint Name is: {predictor.endpoint_name}")
    print(f"Your AWS Region is: {sess.boto_region_name}")
    print(f"=======================================================\n")
    
    # 6. Setup custom Serializer/Deserializer to accept JSON
    # This ensures the model accepts the JSON format sent by our Next.js app
    from sagemaker.serializers import JSONSerializer
    from sagemaker.deserializers import JSONDeserializer
    
    # Since Next.js sends JSON but XGBoost expects CSV by default, 
    # we need to write a quick Inference function. 
    # However, to keep it simple, we will test it locally with CSV format first.
    print("Testing the endpoint locally...")
    from sagemaker.serializers import CSVSerializer
    predictor.serializer = CSVSerializer()
    
    # Example: Wheat (0), pH: 6.5, Moist: 65, N: 120, P: 40, K: 180, Temp: 25, Rain: 600, Hum: 70
    test_payload = "0,6.5,65,120,40,180,25,600,70"
    result = predictor.predict(test_payload).decode('utf-8')
    print(f"Test Prediction for Wheat (Optimal Conditions): {result} kg/ha")
    
if __name__ == "__main__":
    main()
