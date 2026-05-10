'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

const predictionSchema = z.object({
  cropType: z.enum(['wheat', 'corn', 'rice', 'soybeans', 'cotton']),
  soilPhLevel: z.coerce.number().min(4).max(9),
  soilMoisture: z.coerce.number().min(0).max(100),
  nitrogen: z.coerce.number().min(0).max(300),
  phosphorus: z.coerce.number().min(0).max(100),
  potassium: z.coerce.number().min(0).max(500),
  rainfall: z.coerce.number().min(0).max(1000),
  temperature: z.coerce.number().min(-10).max(50),
  humidity: z.coerce.number().min(0).max(100),
})

type PredictionFormData = z.infer<typeof predictionSchema>

interface PredictionResult {
  yieldKgHa: number
  confidence: number
  message: string
}

interface PredictionFormProps {
  onResult?: (result: PredictionResult) => void
}

export function PredictionForm({ onResult }: PredictionFormProps) {
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PredictionFormData>({
    resolver: zodResolver(predictionSchema),
    defaultValues: {
      cropType: 'wheat',
      soilPhLevel: 6.5,
      soilMoisture: 60,
      nitrogen: 100,
      phosphorus: 40,
      potassium: 150,
      rainfall: 600,
      temperature: 25,
      humidity: 70,
    },
  })

  const onSubmit = async (data: PredictionFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      setResult(result)
      onResult?.(result)
    } catch (error) {
      console.error('Prediction failed:', error)
      setResult({
        yieldKgHa: 0,
        confidence: 0,
        message: 'Error making prediction. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Crop Yield Prediction</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Crop Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Crop Type
              </label>
              <select
                {...register('cropType')}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="wheat">Wheat</option>
                <option value="corn">Corn</option>
                <option value="rice">Rice</option>
                <option value="soybeans">Soybeans</option>
                <option value="cotton">Cotton</option>
              </select>
              {errors.cropType && (
                <p className="text-destructive text-sm mt-1">{errors.cropType.message}</p>
              )}
            </div>
          </div>

          {/* Soil Parameters */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Soil Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  pH Level (4-9)
                </label>
                <input
                  type="number"
                  step="0.1"
                  {...register('soilPhLevel')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.soilPhLevel && (
                  <p className="text-destructive text-sm mt-1">{errors.soilPhLevel.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Moisture (%)
                </label>
                <input
                  type="number"
                  step="1"
                  {...register('soilMoisture')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.soilMoisture && (
                  <p className="text-destructive text-sm mt-1">{errors.soilMoisture.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nitrogen (mg/kg)
                </label>
                <input
                  type="number"
                  step="1"
                  {...register('nitrogen')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.nitrogen && (
                  <p className="text-destructive text-sm mt-1">{errors.nitrogen.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phosphorus (mg/kg)
                </label>
                <input
                  type="number"
                  step="1"
                  {...register('phosphorus')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.phosphorus && (
                  <p className="text-destructive text-sm mt-1">{errors.phosphorus.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Potassium (mg/kg)
                </label>
                <input
                  type="number"
                  step="1"
                  {...register('potassium')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.potassium && (
                  <p className="text-destructive text-sm mt-1">{errors.potassium.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Weather Parameters */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Weather Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Rainfall (mm)
                </label>
                <input
                  type="number"
                  step="1"
                  {...register('rainfall')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.rainfall && (
                  <p className="text-destructive text-sm mt-1">{errors.rainfall.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Temperature (°C)
                </label>
                <input
                  type="number"
                  step="0.1"
                  {...register('temperature')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.temperature && (
                  <p className="text-destructive text-sm mt-1">{errors.temperature.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Humidity (%)
                </label>
                <input
                  type="number"
                  step="1"
                  {...register('humidity')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.humidity && (
                  <p className="text-destructive text-sm mt-1">{errors.humidity.message}</p>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 py-2 font-semibold"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Predicting...
              </div>
            ) : (
              'Get Yield Prediction'
            )}
          </Button>
        </form>
      </Card>

      {/* Results Card */}
      {result && (
        <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Prediction Result</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">Estimated Yield</p>
              <p className="text-4xl font-bold text-primary">
                {result.yieldKgHa.toFixed(1)}
              </p>
              <p className="text-sm text-muted-foreground mt-2">kg/hectare</p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">Confidence Score</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-bold text-secondary">
                  {(result.confidence * 100).toFixed(1)}
                </p>
                <p className="text-sm text-muted-foreground mb-1">%</p>
              </div>
              <div className="mt-4 bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-secondary to-accent"
                  style={{ width: `${result.confidence * 100}%` }}
                />
              </div>
            </div>
          </div>

          <p className="text-foreground mt-6 p-4 bg-card rounded-lg">{result.message}</p>

          <Button
            onClick={() => reset()}
            className="w-full mt-6 border border-primary text-primary hover:bg-primary/10"
            variant="outline"
          >
            Make Another Prediction
          </Button>
        </Card>
      )}
    </div>
  )
}
