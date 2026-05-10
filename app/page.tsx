'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { StatsSection } from '@/components/stats-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <StatsSection />
      <Footer />
    </main>
  )
}
