# CropYield AI - Example Predictions & Scenarios

## Real-World Prediction Examples

Use these examples to understand how different conditions affect crop yields.

---

## 🌾 Wheat Predictions

### Example 1: Optimal Wheat Growing Conditions
```json
Input:
{
  "cropType": "wheat",
  "soilPhLevel": 6.5,
  "soilMoisture": 65,
  "nitrogen": 120,
  "phosphorus": 40,
  "potassium": 180,
  "rainfall": 600,
  "temperature": 25,
  "humidity": 70
}

Output:
{
  "yieldKgHa": 4911.23,
  "confidence": 0.95,
  "message": "Excellent conditions detected! Your crop should perform very well."
}

Analysis:
✅ pH level (6.5) is optimal
✅ Moisture (65%) is within ideal range
✅ All nutrients at good levels
✅ Weather conditions favorable
⚡ Expected: 4,900+ kg/ha
```

### Example 2: Drought-Stressed Wheat
```json
Input:
{
  "cropType": "wheat",
  "soilPhLevel": 6.2,
  "soilMoisture": 35,      // VERY LOW
  "nitrogen": 80,           // BELOW OPTIMAL
  "phosphorus": 25,         // BELOW OPTIMAL
  "potassium": 120,
  "rainfall": 350,          // BELOW OPTIMAL
  "temperature": 32,        // QUITE HOT
  "humidity": 45
}

Output:
{
  "yieldKgHa": 2234.56,
  "confidence": 0.65,
  "message": "Challenging conditions ahead. Implement adaptive farming practices and careful management. Expected yield is below average - review input conditions."
}

Analysis:
❌ Moisture stress evident
❌ Nutrient deficiencies
❌ Insufficient rainfall
❌ High temperature stress
⚠️ Expected: 2,200 kg/ha (50% below baseline)
```

### Example 3: Over-Fertilized Wheat
```json
Input:
{
  "cropType": "wheat",
  "soilPhLevel": 6.8,
  "soilMoisture": 70,
  "nitrogen": 250,          // EXCESSIVE
  "phosphorus": 80,         // EXCESSIVE
  "potassium": 300,         // EXCESSIVE
  "rainfall": 550,
  "temperature": 22,
  "humidity": 65
}

Output:
{
  "yieldKgHa": 3847.12,
  "confidence": 0.78,
  "message": "Good growing conditions. Monitor soil moisture and nutrients for optimal results."
}

Analysis:
⚠️ Excessive nutrients don't increase yield proportionally
📉 Diminishing returns from over-fertilization
💰 Wasted fertilizer investment
💡 Recommendation: Reduce fertilizer application by 30%
```

---

## 🌽 Corn Predictions

### Example 1: High-Yield Corn Field
```json
Input:
{
  "cropType": "corn",
  "soilPhLevel": 6.8,
  "soilMoisture": 70,
  "nitrogen": 150,
  "phosphorus": 50,
  "potassium": 200,
  "rainfall": 550,
  "temperature": 28,
  "humidity": 65
}

Output:
{
  "yieldKgHa": 10684.41,
  "confidence": 0.95,
  "message": "Excellent conditions detected! Your crop should perform very well. Expected yield is above average - excellent farming conditions detected!"
}

Analysis:
✅ Perfect soil pH for corn (6.8)
✅ Optimal moisture & NPK balance
✅ Ideal temperature (28°C)
✅ Good rainfall (550mm)
🎯 Expected: 10,600+ kg/ha (33% above baseline!)
```

### Example 2: Water-Logged Corn
```json
Input:
{
  "cropType": "corn",
  "soilPhLevel": 6.5,
  "soilMoisture": 95,       // EXCESSIVE
  "nitrogen": 100,
  "phosphorus": 35,
  "potassium": 160,
  "rainfall": 800,          // TOO MUCH
  "temperature": 20,
  "humidity": 85
}

Output:
{
  "yieldKgHa": 3421.78,
  "confidence": 0.68,
  "message": "Moderate conditions. Consider adjusting irrigation and fertilization strategies."
}

Analysis:
❌ Waterlogging risk (95% moisture)
❌ Excess rainfall (800mm)
❌ Root rot potential
❌ Cooler than optimal (20°C)
📉 Expected: 3,400 kg/ha (57% below baseline)
💡 Solution: Improve field drainage
```

---

## 🍚 Rice Predictions

### Example 1: Ideal Paddy Conditions
```json
Input:
{
  "cropType": "rice",
  "soilPhLevel": 6.5,
  "soilMoisture": 85,       // NORMAL FOR RICE
  "nitrogen": 100,
  "phosphorus": 35,
  "potassium": 150,
  "rainfall": 1000,         // OPTIMAL FOR RICE
  "temperature": 28,
  "humidity": 80
}

Output:
{
  "yieldKgHa": 5234.67,
  "confidence": 0.93,
  "message": "Excellent conditions detected! Your crop should perform very well."
}

Analysis:
✅ Flooded conditions optimal (85% moisture)
✅ High rainfall ideal for paddies (1000mm)
✅ Good temperature (28°C)
✅ High humidity (80%) beneficial
🎯 Expected: 5,200+ kg/ha
```

### Example 2: Drought in Rice Paddy
```json
Input:
{
  "cropType": "rice",
  "soilPhLevel": 5.8,
  "soilMoisture": 45,       // CRITICALLY LOW
  "nitrogen": 60,
  "phosphorus": 20,
  "potassium": 100,
  "rainfall": 300,          // SEVERE DROUGHT
  "temperature": 35,        // HEAT STRESS
  "humidity": 40
}

Output:
{
  "yieldKgHa": 897.34,
  "confidence": 0.52,
  "message": "Challenging conditions ahead. Implement adaptive farming practices and careful management."
}

Analysis:
❌ Severe drought (45% moisture, 300mm rain)
❌ Critical nutrient deficiency
❌ Heat stress (35°C)
❌ Low humidity increases evaporation
📉 Expected: 900 kg/ha (84% below baseline!)
💡 Solution: Irrigation essential - not viable without water
```

---

## 🌱 Soybeans Predictions

### Example 1: Well-Managed Soybean Field
```json
Input:
{
  "cropType": "soybeans",
  "soilPhLevel": 6.2,
  "soilMoisture": 60,
  "nitrogen": 80,
  "phosphorus": 30,
  "potassium": 140,
  "rainfall": 500,
  "temperature": 24,
  "humidity": 65
}

Output:
{
  "yieldKgHa": 2456.78,
  "confidence": 0.92,
  "message": "Excellent conditions detected! Your crop should perform very well."
}

Analysis:
✅ Optimal pH for soybeans (6.2)
✅ Good moisture balance (60%)
✅ Appropriate N level (soybeans fix N2)
✅ Adequate rainfall (500mm)
🎯 Expected: 2,450+ kg/ha
```

### Example 2: Acidic Soil Soybeans
```json
Input:
{
  "cropType": "soybeans",
  "soilPhLevel": 4.8,       // TOO ACIDIC
  "soilMoisture": 55,
  "nitrogen": 120,          // EXCESSIVE for N-fixing crop
  "phosphorus": 25,
  "potassium": 130,
  "rainfall": 480,
  "temperature": 23,
  "humidity": 60
}

Output:
{
  "yieldKgHa": 1689.45,
  "confidence": 0.72,
  "message": "Good growing conditions. Monitor soil moisture and nutrients for optimal results."
}

Analysis:
❌ Too acidic (4.8 pH, optimal 6.0-7.0)
⚠️ Excess nitrogen (soybeans don't need it)
📉 Expected: 1,690 kg/ha (44% below baseline)
💡 Solution: Lime application to raise pH to 6.0+
```

---

## 🌾 Cotton Predictions

### Example 1: Premium Cotton Growing Conditions
```json
Input:
{
  "cropType": "cotton",
  "soilPhLevel": 6.3,
  "soilMoisture": 60,
  "nitrogen": 90,
  "phosphorus": 38,
  "potassium": 160,
  "rainfall": 700,
  "temperature": 26,
  "humidity": 65
}

Output:
{
  "yieldKgHa": 1567.89,
  "confidence": 0.95,
  "message": "Excellent conditions detected! Your crop should perform very well."
}

Analysis:
✅ Ideal pH & moisture
✅ Balanced NPK nutrients
✅ Good rainfall (700mm)
✅ Warm temperature (26°C)
🎯 Expected: 1,570+ kg/ha (high quality fiber)
```

### Example 2: Cold-Stressed Cotton
```json
Input:
{
  "cropType": "cotton",
  "soilPhLevel": 6.5,
  "soilMoisture": 50,
  "nitrogen": 85,
  "phosphorus": 35,
  "potassium": 150,
  "rainfall": 550,
  "temperature": 15,        // TOO COLD
  "humidity": 70
}

Output:
{
  "yieldKgHa": 978.23,
  "confidence": 0.68,
  "message": "Moderate conditions. Consider adjusting irrigation and fertilization strategies."
}

Analysis:
❌ Temperature too low (15°C, optimal 20-30°C)
⚠️ Cotton is a warm-season crop
❌ Growth will be severely delayed
❌ Fiber quality may suffer
📉 Expected: 980 kg/ha (46% below baseline)
💡 Note: Plant later in season or use heated soil
```

---

## 📊 Comparison Matrix

| Scenario | Wheat | Corn | Rice | Soybeans | Cotton | Notes |
|----------|-------|------|------|----------|--------|-------|
| **Optimal** | 4,911 | 10,684 | 5,235 | 2,457 | 1,568 | All factors aligned |
| **Drought** | 2,235 | 3,422 | 897 | 1,689 | 978 | -50% to -84% yield |
| **Flood/Excess** | 3,847 | 3,422 | 5,235 | 1,432 | 1,234 | Rice tolerates high water |
| **Wrong pH** | 3,200 | 4,100 | 3,200 | 1,690 | 1,200 | -30% to -50% yield |
| **Cold Stress** | 2,500 | 2,300 | 3,100 | 1,800 | 978 | Spring crops worse |
| **Heat Stress** | 2,100 | 2,500 | 3,200 | 1,500 | 1,100 | Rice tolerates heat |

---

## 🎯 Key Takeaways

### Optimal Conditions for Each Crop

**Wheat**
- pH: 6.5 (slightly acidic)
- Moisture: 60-70%
- Rainfall: 500-700mm
- Temp: 20-25°C
- Best season: Spring (cool, wet)

**Corn**
- pH: 6.8 (neutral)
- Moisture: 65-75%
- Rainfall: 500-600mm
- Temp: 25-30°C (warmth critical)
- Best season: Summer

**Rice**
- pH: 6.5
- Moisture: 80-95% (flooded)
- Rainfall: 800-1200mm
- Temp: 25-30°C
- Best season: Monsoon (flood)

**Soybeans**
- pH: 6.0-7.0
- Moisture: 55-65%
- Rainfall: 450-550mm
- Temp: 20-28°C
- Best season: Summer

**Cotton**
- pH: 6.3
- Moisture: 55-70%
- Rainfall: 650-800mm
- Temp: 26-32°C (warmth critical)
- Best season: Hot summer

---

## 💡 Practical Insights

### From Low Yields (< 2,000 kg/ha)
- Usually multiple stress factors
- Primary: Water (too much or too little)
- Secondary: Nutrient imbalance
- Action: Improve irrigation/drainage first

### From Moderate Yields (2,000-4,000 kg/ha)
- One or two limiting factors
- Adjustable with management
- Action: Identify bottleneck & fix

### From High Yields (> 8,000 kg/ha)
- Rare - requires near-perfect conditions
- Specific to corn (high potential yield)
- Action: Maintain conditions, document practices

### Confidence Score Interpretation
- **90%+**: Highly reliable prediction
- **80-90%**: Good reliability
- **70-80%**: Moderate - verify conditions
- **< 70%**: Challenging - proceed carefully

---

## 🧪 Try These Predictions Yourself

### Beginner Prediction
Copy and paste into the form or API:
```json
{
  "cropType": "wheat",
  "soilPhLevel": 6.5,
  "soilMoisture": 65,
  "nitrogen": 120,
  "phosphorus": 40,
  "potassium": 180,
  "rainfall": 600,
  "temperature": 25,
  "humidity": 70
}
```

### Challenge Prediction
Create extreme conditions and see how yield drops:
```json
{
  "cropType": "corn",
  "soilPhLevel": 4.0,        // Very acidic
  "soilMoisture": 20,        // Very dry
  "nitrogen": 20,            // Very low
  "phosphorus": 5,           // Very low
  "potassium": 30,           // Very low
  "rainfall": 200,           // Severe drought
  "temperature": 40,         // Extreme heat
  "humidity": 20             // Very dry air
}
```

### Your Real Farm
Substitute your actual field measurements to predict your real yield!

---

**Use these examples to understand how environmental factors impact crop yields. Then apply this knowledge to your own farming operations!**
