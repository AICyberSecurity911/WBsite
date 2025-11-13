
'use client'

import { Calculator } from 'lucide-react'
import { AITeamCalculator } from '@/components/calculator/ai-team-calculator'

export function CalculatorSection() {
  return (
    <section id="calculator" className="section-padding bg-[#07070b]">
      <div className="container">
        <div>
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-qgd-primary/100 px-4 py-2 text-sm font-semibold text-qgd-ring900 dark:bg-qgd-primary/900 dark:text-qgd-ring100">
              <Calculator className="h-4 w-4" />
              Interactive Assessment
            </div>
            
            <h2 className="mb-4 text-3xl font-extrabold text-[#f6f7ff] sm:text-4xl">
              Calculate Your AI Workforce Savings
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg font-medium text-[#f6f7ff]">
              See exactly how much time and money you could save—get your free estimate in 2 minutes
            </p>
          </div>

          <AITeamCalculator />
        </div>
      </div>
    </section>
  )
}
