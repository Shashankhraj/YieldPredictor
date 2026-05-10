'use client'

import { Card } from '@/components/ui/card'
import { Database, Cpu, BarChart3, CheckCircle } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Database,
      title: 'Input Your Data',
      description: 'Provide soil parameters and weather conditions for your farm',
    },
    {
      number: 2,
      icon: Cpu,
      title: 'ML Processing',
      description: 'Our SageMaker model analyzes inputs using advanced algorithms',
    },
    {
      number: 3,
      icon: BarChart3,
      title: 'Get Predictions',
      description: 'Receive yield forecasts with confidence scores',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Optimize',
      description: 'Use insights to improve your farming decisions',
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Simple steps to get your crop yield predictions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-background">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mt-2">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>

                {/* Arrow */}
                {step.number < 4 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-primary/10 rounded-lg p-6 max-w-2xl">
            <p className="text-muted-foreground mb-4">
              The entire process takes less than 30 seconds, giving you actionable insights in real-time.
            </p>
            <p className="font-semibold text-foreground">
              Our ML model is trained on millions of agricultural data points from across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
