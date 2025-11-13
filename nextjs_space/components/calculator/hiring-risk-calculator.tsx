'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { AlertTriangle, Shield, TrendingUp, Zap, DollarSign, Users, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function HiringRiskCalculator() {
  const [hires, setHires] = useState([5])
  const [revenue, setRevenue] = useState([2000000])
  const [employeeCount, setEmployeeCount] = useState([15])
  const [showResults, setShowResults] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(false)

  const calculateRisk = () => {
    const hiresPerYear = hires[0]
    const annualRevenue = revenue[0]
    const teamSize = employeeCount[0]

    // Bad hire costs average $240K (considering all factors)
    const badHireCost = 240000
    // Industry average bad hire rate is 1 in 5 (20%)
    const badHireRate = 0.2
    
    const expectedBadHires = hiresPerYear * badHireRate
    const annualRiskCost = expectedBadHires * badHireCost
    const riskPercentageOfRevenue = (annualRiskCost / annualRevenue) * 100

    // Risk score out of 100 (higher = more risk)
    let riskScore = 0
    riskScore += Math.min(hiresPerYear * 5, 25) // More hires = more risk
    riskScore += Math.min((annualRevenue / 1000000) * 10, 30) // More revenue = higher target
    riskScore += Math.min(teamSize * 2, 45) // Larger team = more potential for bad hires

    return {
      expectedBadHires: Math.round(expectedBadHires * 10) / 10,
      annualRiskCost,
      riskPercentageOfRevenue: Math.round(riskPercentageOfRevenue * 10) / 10,
      riskScore: Math.min(riskScore, 100),
      investigationCost: Math.min(hiresPerYear * 7500, 50000) // Avg investigation cost
    }
  }

  const results = showResults ? calculateRisk() : null

  const handleCalculate = () => {
    setShowResults(true)
    setTimeout(() => {
      setShowRecommendations(true)
    }, 1500)
  }

  const getRiskLevel = (score: number) => {
    if (score < 30) return { label: 'Low', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/20' }
    if (score < 60) return { label: 'Medium', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-950/20' }
    return { label: 'High', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/20' }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Column */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Your Hiring Profile</h3>
          
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-semibold mb-3 block">
                Hires Per Year: {hires[0]}
              </Label>
              <Slider
                value={hires}
                onValueChange={(value) => {
                  setHires(value)
                  setShowResults(false)
                  setShowRecommendations(false)
                }}
                min={1}
                max={50}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 hire</span>
                <span>50+ hires</span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">
                Annual Revenue: ${(revenue[0] / 1000000).toFixed(1)}M
              </Label>
              <Slider
                value={revenue}
                onValueChange={(value) => {
                  setRevenue(value)
                  setShowResults(false)
                  setShowRecommendations(false)
                }}
                min={500000}
                max={10000000}
                step={100000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$500K</span>
                <span>$10M+</span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">
                Current Team Size: {employeeCount[0]}
              </Label>
              <Slider
                value={employeeCount}
                onValueChange={(value) => {
                  setEmployeeCount(value)
                  setShowResults(false)
                  setShowRecommendations(false)
                }}
                min={1}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Solo</span>
                <span>100+ employees</span>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-qgd-fg font-bold text-lg py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Calculate My Hiring Risk
              <AlertTriangle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>

        {/* Results Column */}
        <Card className={`p-8 relative ${!showResults && 'opacity-50'}`}>
          {!showResults && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
              <p className="text-muted-foreground text-center px-4">
                Adjust your inputs and calculate to see your risk
              </p>
            </div>
          )}

          <h3 className="text-2xl font-bold mb-6">Your Hiring Risk Profile</h3>

          {results && (
            <div className="space-y-6">
              {/* Risk Score */}
              <div className={`p-4 rounded-xl ${getRiskLevel(results.riskScore).bg} border-2`}>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className={`h-5 w-5 ${getRiskLevel(results.riskScore).color}`} />
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                    Overall Risk Level
                  </h4>
                </div>
                <p className={`text-3xl font-bold ${getRiskLevel(results.riskScore).color}`}>
                  {getRiskLevel(results.riskScore).label} ({results.riskScore}/100)
                </p>
              </div>

              {/* Expected Bad Hires */}
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                    Expected Bad Hires Per Year
                  </h4>
                </div>
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                  {results.expectedBadHires}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on industry 20% bad hire rate
                </p>
              </div>

              {/* Annual Risk Cost */}
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                    Annual Risk Cost
                  </h4>
                </div>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  ${(results.annualRiskCost / 1000).toFixed(0)}K
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.riskPercentageOfRevenue.toFixed(1)}% of your annual revenue
                </p>
              </div>

              {/* Prevention Cost */}
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                    Investigation Investment
                  </h4>
                </div>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  ${(results.investigationCost / 1000).toFixed(0)}K
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Only {((results.investigationCost / results.annualRiskCost) * 100).toFixed(1)}% of the risk cost
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Service Recommendations */}
      {showRecommendations && results && results.riskScore > 30 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 border-2 border-red-300 dark:border-red-800"
        >
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-qgd-fg dark:text-qgd-fg mb-2">
              💡 Protect Your Business with These Solutions:
            </h3>
            <p className="text-qgd-muted dark:text-gray-300">
              Based on your risk profile, these services can help you avoid costly bad hires:
            </p>
          </div>

          <div className="space-y-4">
            {/* Cyber Intelligence Recommendation */}
            {results.riskScore > 60 && (
              <div className="rounded-xl border-2 border-qgd-border bg-qgd-card p-6 shadow-sm dark:border-qgd-border dark:bg-qgd-card">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 p-3">
                    <Shield className="h-6 w-6 text-qgd-fg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-qgd-fg dark:text-qgd-fg mb-1">
                      Cyber Intelligence
                    </h4>
                    <p className="text-sm text-qgd-muted dark:text-gray-300 mb-3">
                      Verify candidates haven't had credentials exposed in data breaches
                    </p>
                    <div className="mb-3 space-y-1">
                      <p className="text-xs font-semibold uppercase text-qgd-muted dark:text-qgd-muted">
                        Why this is perfect for you:
                      </p>
                      <p className="flex items-start gap-2 text-sm text-qgd-muted dark:text-gray-300">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        Your risk score is {results.riskScore}/100 - protect sensitive access
                      </p>
                      <p className="flex items-start gap-2 text-sm text-qgd-muted dark:text-gray-300">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        One compromised employee could cost ${(results.annualRiskCost / 1000).toFixed(0)}K+
                      </p>
                    </div>
                    <a href="/cyber-intelligence">
                      <Button className="w-full sm:w-auto bg-qgd-primary/600 hover:bg-qgd-primary/700 text-qgd-fg">
                        Check Email Security →
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Business Transformation Recommendation */}
            {hires[0] > 10 && (
              <div className="rounded-xl border-2 border-qgd-border bg-qgd-card p-6 shadow-sm dark:border-qgd-border dark:bg-qgd-card">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3">
                    <TrendingUp className="h-6 w-6 text-qgd-fg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-qgd-fg dark:text-qgd-fg mb-1">
                      Business Transformation
                    </h4>
                    <p className="text-sm text-qgd-muted dark:text-gray-300 mb-3">
                      Build hiring systems that reduce bad hire risk by design
                    </p>
                    <div className="mb-3 space-y-1">
                      <p className="text-xs font-semibold uppercase text-qgd-muted dark:text-qgd-muted">
                        Why this is perfect for you:
                      </p>
                      <p className="flex items-start gap-2 text-sm text-qgd-muted dark:text-gray-300">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                        Hiring {hires[0]} people/year needs structured systems
                      </p>
                      <p className="flex items-start gap-2 text-sm text-qgd-muted dark:text-gray-300">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                        Prevent bad hires before they happen with better processes
                      </p>
                    </div>
                    <a href="/business-transformation">
                      <Button className="w-full sm:w-auto bg-qgd-primary/600 hover:bg-qgd-primary/700 text-qgd-fg">
                        Transform Your Hiring →
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Intelligent Automation Recommendation */}
            <div className="rounded-xl border-2 border-qgd-border bg-qgd-card p-6 shadow-sm dark:border-qgd-border dark:bg-qgd-card">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 p-3">
                  <Zap className="h-6 w-6 text-qgd-fg" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-qgd-fg dark:text-qgd-fg mb-1">
                    Intelligent Automation
                  </h4>
                  <p className="text-sm text-qgd-muted dark:text-gray-300 mb-3">
                    Automate reference checks and credential verification
                  </p>
                  <div className="mb-3 space-y-1">
                    <p className="text-xs font-semibold uppercase text-qgd-muted dark:text-qgd-muted">
                      Why this is perfect for you:
                    </p>
                    <p className="flex items-start gap-2 text-sm text-qgd-muted dark:text-gray-300">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-qgd-ring600" />
                      Save time on every hire with automated verification
                    </p>
                    <p className="flex items-start gap-2 text-sm text-qgd-muted dark:text-gray-300">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-qgd-ring600" />
                      Catch discrepancies faster than manual review
                    </p>
                  </div>
                  <a href="/intelligent-automation">
                    <Button className="w-full sm:w-auto bg-qgd-primary/600 hover:bg-qgd-primary/700 text-qgd-fg">
                      Automate Verification →
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
            <p className="text-sm text-red-900 dark:text-red-100">
              <strong>💬 Want a custom prevention plan?</strong> Book a free consultation to see which combination of services best protects your specific hiring needs.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
