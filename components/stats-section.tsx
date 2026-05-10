'use client'

import { Card } from '@/components/ui/card'
import { BarChart3, TrendingUp, Zap, Target } from 'lucide-react'

interface Stat {
  label: string
  value: string
  icon: React.ReactNode
  color: string
}

export function StatsSection() {
  const stats: Stat[] = [
    {
      label: 'Total Predictions',
      value: '2,847',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-primary/10 text-primary',
    },
    {
      label: 'Average Accuracy',
      value: '92.3%',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-secondary/10 text-secondary',
    },
    {
      label: 'Model Performance',
      value: '+18%',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-accent/10 text-accent',
    },
    {
      label: 'Active Users',
      value: '1,243',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-primary/10 text-primary',
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Platform Statistics</h2>
          <p className="text-lg text-muted-foreground">See how our ML model is transforming agriculture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
