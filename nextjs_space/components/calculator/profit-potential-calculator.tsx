
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Card } from '@/components/ui/card'
import { DollarSign, Clock, TrendingUp, Zap, ArrowRight, Loader2, Shield, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export function ProfitPotentialCalculator() {
  const [revenue, setRevenue] = useState<string>('2000000')
  const [teamSize, setTeamSize] = useState<string>('15')
  const [monthlyCost, setMonthlyCost] = useState<string>('150000')
  const [efficiency, setEfficiency] = useState<number[]>([3])
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [showEmailGate, setShowEmailGate] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Calculate results
  const calculateResults = () => {
    const rev = parseInt(revenue) || 0
    const cost = parseInt(monthlyCost) || 0
    const eff = efficiency[0] || 3
    
    // Efficiency-based leak percentage (higher efficiency = lower leak)
    const leakPercentage = 0.45 - (eff * 0.06) // 15% at level 5, 35% at level 1
    const profitLeak = rev * leakPercentage
    const achievableSavings = profitLeak * 0.65 // Can recover 65% of leaks
    const timeReclaimed = 8 + (5 - eff) * 4 // 8-24 hours/week based on efficiency
    const freedomScore = Math.min(100, Math.round((eff * 15) + (achievableSavings / rev * 100)))
    
    return {
      profitLeak,
      leakPercentage: leakPercentage * 100,
      achievableSavings,
      timeReclaimed,
      freedomScore
    }
  }

  const results = calculateResults()

  const handleCalculate = () => {
    setShowResults(true)
    setTimeout(() => {
      setShowEmailGate(true)
    }, 2000) // Show email gate after 2 seconds
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'profit_calculator',
          calculatorData: {
            revenue,
            teamSize,
            monthlyCost,
            efficiency: efficiency[0],
            ...results
          }
        })
      })

      if (response.ok) {
        toast.success('Check your email! Your custom blueprint is on its way.')
        setShowEmailGate(false)
        
        // Track event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'calculator_complete', {
            profit_leak: results.profitLeak,
            estimated_savings: results.achievableSavings,
            freedom_score: results.freedomScore
          })
        }
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Column */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Your Business Details</h3>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="revenue" className="text-sm font-semibold mb-2 block">
                Annual Revenue
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="revenue"
                  type="number"
                  value={revenue}
                  onChange={(e) => {
                    setRevenue(e.target.value)
                    setShowResults(false)
                    setShowEmailGate(false)
                  }}
                  className="pl-10"
                  placeholder="2000000"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Current: {formatCurrency(parseInt(revenue) || 0)}
              </p>
            </div>

            <div>
              <Label htmlFor="teamSize" className="text-sm font-semibold mb-2 block">
                Team Size (Full-time employees)
              </Label>
              <Input
                id="teamSize"
                type="number"
                value={teamSize}
                onChange={(e) => {
                  setTeamSize(e.target.value)
                  setShowResults(false)
                  setShowEmailGate(false)
                }}
                placeholder="15"
              />
            </div>

            <div>
              <Label htmlFor="monthlyCost" className="text-sm font-semibold mb-2 block">
                Monthly Operating Cost
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="monthlyCost"
                  type="number"
                  value={monthlyCost}
                  onChange={(e) => {
                    setMonthlyCost(e.target.value)
                    setShowResults(false)
                    setShowEmailGate(false)
                  }}
                  className="pl-10"
                  placeholder="150000"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Current: {formatCurrency(parseInt(monthlyCost) || 0)}/month
              </p>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">
                Current Operational Efficiency
              </Label>
              <div className="space-y-3">
                <Slider
                  value={efficiency}
                  onValueChange={(value) => {
                    setEfficiency(value)
                    setShowResults(false)
                    setShowEmailGate(false)
                  }}
                  min={1}
                  max={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Chaotic (1)</span>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Level {efficiency[0]}
                  </span>
                  <span>Optimized (5)</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Calculate My Profit Potential
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>

        {/* Results Column */}
        <Card className={`p-8 relative ${!showResults && 'opacity-50'}`}>
          {!showResults && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
              <p className="text-muted-foreground text-center px-4">
                Enter your details and click calculate to see results
              </p>
            </div>
          )}

          <h3 className="text-2xl font-bold mb-6">Your Profit Potential</h3>

          <div className="space-y-6">
            {/* Profit Leak */}
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                  Estimated Profit Leak
                </h4>
              </div>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                {formatCurrency(results.profitLeak)}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Approximately {results.leakPercentage.toFixed(1)}% of revenue
              </p>
            </div>

            {/* Achievable Savings */}
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                  Achievable Savings (Year 1)
                </h4>
              </div>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(results.achievableSavings)}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Through systems optimization & automation
              </p>
            </div>

            {/* Time Reclaimed */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                  Time Reclaimed Per Week
                </h4>
              </div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {results.timeReclaimed} hours
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Focus on strategy, not firefighting
              </p>
            </div>

            {/* Freedom Score */}
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                  Freedom Score
                </h4>
              </div>
              <div className="flex items-end gap-3">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {results.freedomScore}
                </p>
                <p className="text-sm text-muted-foreground mb-1">/ 100</p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {results.freedomScore < 40 && 'Your business owns you'}
                {results.freedomScore >= 40 && results.freedomScore < 70 && 'Making progress, but trapped'}
                {results.freedomScore >= 70 && 'You\'re leading, not drowning'}
              </p>
            </div>
          </div>

          {/* Service Recommendations - When Freedom Score is low or leak is high */}
          {showResults && (results.freedomScore < 50 || results.leakPercentage > 25) && (
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  💡 Based on Your Results:
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {results.freedomScore < 40 
                    ? "Your business is overwhelming you. These services can help you regain control:"
                    : "You're making progress, but these solutions can accelerate your transformation:"
                  }
                </p>

                <div className="space-y-3">
                  {/* Intelligent Automation Recommendation */}
                  {results.leakPercentage > 20 && (
                    <div className="rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 p-2">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                            Intelligent Automation
                          </h5>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                            You're leaking {results.leakPercentage.toFixed(1)}% to inefficiency. Automation can eliminate 30-40% of manual tasks.
                          </p>
                          <a href="/intelligent-automation">
                            <Button size="sm" className="w-full sm:w-auto text-xs bg-teal-600 hover:bg-teal-700 text-white">
                              Explore Automation →
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cyber Intelligence Recommendation */}
                  {parseInt(revenue) > 1000000 && (
                    <div className="rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 p-2">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                            Cyber Intelligence
                          </h5>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                            At {formatCurrency(parseInt(revenue))} revenue, you're a high-value target. One breach could cost more than your profit leak.
                          </p>
                          <a href="/cyber-intelligence">
                            <Button size="sm" className="w-full sm:w-auto text-xs bg-blue-600 hover:bg-blue-700 text-white">
                              Secure Your Business →
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3 text-xs text-center text-purple-900 dark:text-purple-100 italic">
                  💬 Not sure which fits best? Book a free consultation below.
                </div>
              </div>
            </div>
          )}

          {/* Email Gate */}
          {showEmailGate && (
            <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <h4 className="text-lg font-bold mb-2">Get Your Custom Recovery Blueprint</h4>
              <p className="text-sm mb-4 opacity-90">
                Enter your email to receive a detailed 5-step action plan tailored to your numbers.
              </p>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-900"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Email Me My Blueprint
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
