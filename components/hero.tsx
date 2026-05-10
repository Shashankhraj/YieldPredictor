'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Zap, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/40">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Powered by AWS SageMaker</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Predict Your Crop Yield with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Precision</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Harness machine learning to forecast crop yields with high accuracy. Make data-driven farming decisions using real-time climate and soil analysis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button className="w-full sm:w-auto px-8 py-6 text-base bg-primary text-primary-foreground hover:opacity-90 font-semibold">
                  Start Predicting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base border-primary text-primary hover:bg-primary/10 font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">94%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">500K+</p>
                <p className="text-sm text-muted-foreground">Predictions Made</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">60+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual/Stats boxes */}
          <div className="relative h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
            
            <div className="relative space-y-4">
              {/* Top box */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Current Season Projection</p>
                    <p className="text-3xl font-bold text-primary">6,240 kg/ha</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-secondary to-accent" />
                </div>
              </div>

              {/* Middle box */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Confidence Level</p>
                    <p className="text-3xl font-bold text-accent">92.3%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <p className="text-xs text-muted-foreground">Based on real-time soil & weather data</p>
              </div>

              {/* Bottom box */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-sm text-muted-foreground mb-3">Key Insights</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">Optimal soil pH detected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm text-foreground">Rainfall above average</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm text-foreground">Temperature in range</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: TrendingUp,
              title: 'Accurate Predictions',
              description: 'ML model trained on millions of agricultural data points with 94% accuracy',
            },
            {
              icon: Zap,
              title: 'Real-Time Analysis',
              description: 'Instant predictions based on current soil, weather, and crop conditions',
            },
            {
              icon: BarChart3,
              title: 'Detailed Insights',
              description: 'Get actionable recommendations to optimize your farming practices',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
