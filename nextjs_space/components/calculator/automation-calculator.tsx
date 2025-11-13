
'use client'

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2, TrendingUp, Clock, DollarSign, Zap } from 'lucide-react'
import type { IAutomationForm, IAutomationResult } from '@/types/automation'

export function AutomationCalculator() {
  const [form, setForm] = useState<IAutomationForm>({
    dataEntryHours: 0,
    emailHours: 0,
    invoicingHours: 0,
    reportingHours: 0,
    projectCoordHours: 0,
    hourlyRate: 0,
    email: '',
    name: ''
  })

  const [sessionId] = useState(() => {
    if (typeof window !== 'undefined' && window.crypto) {
      return crypto.randomUUID()
    }
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  })
  
  const [result, setResult] = useState<IAutomationResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [captured, setCaptured] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateForm = (key: keyof IAutomationForm, value: number | string) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const canCapture = useMemo(() => {
    return form.email && /^\S+@\S+\.\S+$/.test(form.email)
  }, [form.email])

  const totalHours = useMemo(() => {
    return form.dataEntryHours + form.emailHours + form.invoicingHours + 
           form.reportingHours + form.projectCoordHours
  }, [form.dataEntryHours, form.emailHours, form.invoicingHours, form.reportingHours, form.projectCoordHours])

  async function calculate() {
    setLoading(true)
    setError(null)
    
    try {
      const res = await fetch('/api/automation-calc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) throw new Error('Calculation failed')
      
      const data = await res.json()
      setResult(data)
    } catch (e: any) {
      setError('Something went wrong. Please try again.')
      console.error('Calculator error:', e)
    } finally {
      setLoading(false)
    }
  }

  async function captureLead() {
    if (!canCapture || !result) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/automation-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          sessionId,
          formData: form,
          result,
          source: 'automation_calculator'
        })
      })

      const data = await res.json()
      if (!data.ok) throw new Error('Lead not saved')

      setCaptured(true)
    } catch (e: any) {
      setError('Could not save your details. Please try again.')
      console.error('Lead capture error:', e)
    } finally {
      setLoading(false)
    }
  }

  const renderSlider = (
    key: keyof IAutomationForm,
    label: string,
    max: number = 30
  ) => (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-qgd-fg dark:text-gray-100">
        {label}: <span className="text-qgd-ring600 dark:text-qgd-ring400">{(form as any)[key]} hrs/wk</span>
      </label>
      <input
        type="range"
        min={0}
        max={max}
        value={(form as any)[key]}
        onChange={(e) => updateForm(key, Number(e.target.value))}
        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-600"
      />
      <div className="flex justify-between text-xs text-qgd-muted dark:text-qgd-muted mt-1">
        <span>0</span>
        <span>{max}</span>
      </div>
    </div>
  )

  return (
    <div className="bg-qgd-card dark:bg-zinc-900 rounded-2xl shadow-xl border border-qgd-border dark:border-zinc-800 p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-qgd-primary/100 dark:bg-qgd-primary/900/30 rounded-full mb-4">
          <Zap className="w-4 h-4 text-qgd-ring600 dark:text-qgd-ring400" />
          <span className="text-sm font-semibold text-qgd-ring700 dark:text-qgd-ring300">
            FREE ROI SCANNER
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-qgd-fg dark:text-gray-100">
          Automation ROI Scanner
        </h2>
        <p className="text-qgd-muted dark:text-qgd-muted max-w-2xl mx-auto">
          Find out how many hours and dollars your manual work is burning—and which automations fix it first.
        </p>
      </div>

      {/* Input Form */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-2">
          {renderSlider('dataEntryHours', 'Data Entry & Copy/Paste', 30)}
          {renderSlider('emailHours', 'Email Triage & Replies', 30)}
          {renderSlider('invoicingHours', 'Invoicing & Collections', 20)}
        </div>
        
        <div className="space-y-2">
          {renderSlider('reportingHours', 'Reporting & Dashboards', 20)}
          {renderSlider('projectCoordHours', 'Project Coordination', 25)}

          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2 text-qgd-fg dark:text-gray-100">
              Your Hourly Value ($)
            </label>
            <Input
              type="number"
              value={form.hourlyRate || ''}
              onChange={(e) => updateForm('hourlyRate', Number(e.target.value) || 0)}
              className="w-full"
              min="1"
              step="5"
              placeholder="e.g., 75"
            />
            <p className="text-xs text-qgd-muted dark:text-qgd-muted mt-1">
              What your time is truly worth per hour
            </p>
          </div>

          <div className="mt-6">
            <Button
              onClick={calculate}
              disabled={loading || totalHours === 0}
              className="w-full bg-qgd-primary/600 hover:bg-qgd-primary/700 text-qgd-fg font-semibold py-6 text-lg"
            >
              {loading ? (
                'Calculating...'
              ) : (
                <>
                  <Clock className="w-5 h-5 mr-2" />
                  Reveal My Hidden Hours & Savings
                </>
              )}
            </Button>
            {totalHours === 0 && (
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 text-center">
                Move the sliders to see your potential savings
              </p>
            )}
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8 border-t border-qgd-border dark:border-zinc-800 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 text-qgd-fg dark:text-gray-100 flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-qgd-ring600" />
              Your Automation Snapshot
            </h3>
            <p className="text-sm text-qgd-muted dark:text-qgd-muted">
              Based on your inputs, here's what a custom automation suite could do for your business:
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-xl bg-[var(--card)] dark:bg-zinc-800 border border-qgd-border dark:border-zinc-700 text-center">
              <div className="text-sm text-qgd-muted dark:text-qgd-muted mb-2">
                Current Monthly Human Cost
              </div>
              <div className="text-3xl font-bold text-qgd-fg dark:text-gray-100">
                ${result.monthlyHumanCost.toLocaleString()}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-qgd-primary/50 dark:bg-qgd-primary/900/20 border-2 border-teal-500 text-center">
              <div className="text-sm text-qgd-ring700 dark:text-qgd-ring300 mb-2 font-medium">
                Potential Monthly Savings
              </div>
              <div className="text-3xl font-bold text-qgd-ring600 dark:text-qgd-ring400">
                ${result.potentialSavingsMonthly.toLocaleString()}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-center">
              <div className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">
                Annual Savings Potential
              </div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                ${result.potentialSavingsAnnual.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {result.recommendations && result.recommendations.length > 0 && (
            <div className="mb-8">
              <h4 className="font-bold text-lg mb-2 text-qgd-fg dark:text-gray-100 flex items-center gap-2">
                <Zap className="w-5 h-5 text-qgd-ring600" />
                Custom Automation Recommendations for Your Workflow
              </h4>
              <p className="text-sm text-qgd-muted dark:text-qgd-muted mb-4 italic">
                These are the custom automations we'd prioritize for your business. Each one is designed around your specific tools and processes—not a template.
              </p>
              <div className="space-y-3">
                {result.recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-gradient-to-r from-gray-50 to-teal-50 dark:from-zinc-800 dark:to-teal-900/10 border border-qgd-border dark:border-zinc-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-bold text-qgd-fg dark:text-gray-100">
                        {rec.automation}
                      </div>
                      <div className="text-xs font-medium text-qgd-muted dark:text-qgd-muted bg-qgd-card dark:bg-zinc-900 px-3 py-1 rounded-full">
                        from ${rec.startingAt}/mo
                      </div>
                    </div>
                    <p className="text-sm text-qgd-muted dark:text-gray-300 mb-3">
                      {rec.reason}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-qgd-ring600" />
                        <span className="text-qgd-muted dark:text-qgd-muted">
                          <strong className="text-qgd-fg dark:text-gray-100">{rec.estHoursSaved}</strong> hrs/wk saved
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span className="text-qgd-muted dark:text-qgd-muted">
                          <strong className="text-emerald-600 dark:text-emerald-400">
                            ${rec.estAnnualValue.toLocaleString()}
                          </strong> annual value
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cross-Sell Recommendations */}
          {(() => {
            const crossSellServices = []
            
            // Business Transformation - if spending 15+ hrs/wk on manual work OR hourly rate >$100
            if (totalHours >= 15 || form.hourlyRate >= 100) {
              crossSellServices.push({
                title: 'Business Transformation',
                description: `You're spending ${totalHours} hrs/wk on manual tasks. That's costing your business ${Math.round(totalHours * (form.hourlyRate || 75) * 52 / 1000)}K annually in lost strategic time.`,
                benefit: 'Transform your entire operation—not just automate tasks. Restructure workflows, eliminate bottlenecks, and build scalable systems.',
                link: '/business-transformation',
                color: 'blue',
                icon: '🚀'
              })
            }
            
            // Cyber Intelligence - if hourly rate suggests high-value business
            if (form.hourlyRate >= 75 || totalHours >= 20) {
              crossSellServices.push({
                title: 'Cyber Intelligence',
                description: 'Automation creates more attack surface. Every integrated tool is a potential breach point.',
                benefit: 'Protect your automated systems with 24/7 threat monitoring, breach detection, and security hardening.',
                link: '/cyber-intelligence',
                color: 'purple',
                icon: '🛡️'
              })
            }
            
            // Background Checks - if lots of email/coordination hours (suggests team management)
            if (form.emailHours >= 8 || form.projectCoordHours >= 6) {
              crossSellServices.push({
                title: 'Background Checks',
                description: `${form.emailHours + form.projectCoordHours} hrs/wk on coordination suggests you manage a team. One bad hire costs 2.5x their salary.`,
                benefit: 'Screen candidates in 48 hours with enterprise-grade checks—before they become expensive mistakes.',
                link: '/background-checks',
                color: 'amber',
                icon: '🔍'
              })
            }
            
            return crossSellServices.length > 0 ? (
              <div className="mb-8 border-t border-qgd-border dark:border-zinc-800 pt-8">
                <h4 className="font-bold text-lg mb-4 text-qgd-fg dark:text-gray-100">
                  Complete Your Growth Stack
                </h4>
                <p className="text-sm text-qgd-muted dark:text-qgd-muted mb-4">
                  Based on your inputs, these services would amplify your automation results:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {crossSellServices.slice(0, 2).map((service, i) => (
                    <div
                      key={i}
                      className={`p-5 rounded-xl border-2 ${
                        service.color === 'blue' ? 'border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20' :
                        service.color === 'purple' ? 'border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20' :
                        'border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20'
                      } hover:shadow-lg transition-shadow`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-qgd-fg dark:text-gray-100 mb-1">
                            {service.title}
                          </h5>
                          <p className="text-sm text-qgd-muted dark:text-gray-300 mb-2">
                            {service.description}
                          </p>
                          <p className="text-xs text-qgd-muted dark:text-qgd-muted italic mb-3">
                            → {service.benefit}
                          </p>
                          <a
                            href={service.link}
                            className={`inline-flex items-center gap-1 text-sm font-semibold ${
                              service.color === 'blue' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-700' :
                              service.color === 'purple' ? 'text-purple-600 dark:text-purple-400 hover:text-purple-700' :
                              'text-amber-600 dark:text-amber-400 hover:text-amber-700'
                            } transition-colors`}
                          >
                            Learn More →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          })()}

          {/* Lead Capture */}
          {!captured ? (
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-800">
              <h5 className="font-bold text-lg mb-2 text-qgd-fg dark:text-gray-100">
                Get Your 30-Day Automation Plan + ROI Report
              </h5>
              <p className="text-sm text-qgd-muted dark:text-gray-300 mb-4">
                We'll email your personalized blueprint and open our calendar to map your first month of wins—tailored to your business.
              </p>
              
              <div className="grid md:grid-cols-3 gap-3">
                <Input
                  placeholder="Your name (optional)"
                  value={form.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="bg-qgd-card dark:bg-zinc-900"
                />
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="bg-qgd-card dark:bg-zinc-900"
                  required
                />
                <Button
                  onClick={captureLead}
                  disabled={!canCapture || loading}
                  className="bg-qgd-primary/600 hover:bg-qgd-primary/700 text-qgd-fg font-semibold"
                >
                  {loading ? 'Submitting...' : 'Email My Plan'}
                </Button>
              </div>
              
              {!canCapture && form.email && (
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
                  Please enter a valid email address
                </p>
              )}
            </div>
          ) : (
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h5 className="font-bold text-xl mb-2 text-qgd-fg dark:text-gray-100">
                Check Your Inbox in ~5 Minutes
              </h5>
              <p className="text-qgd-muted dark:text-gray-300 mb-6">
                Your Automation Blueprint is on its way!
              </p>
              <a
                href={process.env.NEXT_PUBLIC_TIDYCAL_BOOK_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-qgd-fg font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                📅 Book My Free 30-Day Efficiency Plan Session
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
