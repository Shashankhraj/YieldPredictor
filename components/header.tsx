'use client'

import Link from 'next/link'
import { Leaf } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span>CropYield AI</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="#features" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Features
          </Link>
          <Link href="/dashboard" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
