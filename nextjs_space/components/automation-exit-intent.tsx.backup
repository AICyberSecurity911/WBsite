
'use client'

import { useState, useEffect } from 'react'
import { X, Download, Zap, CheckCircle2, Mail } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useExitIntent } from '@/hooks/use-exit-intent'

export function AutomationExitIntent() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { shouldShow, closeModal } = useExitIntent({
    enabled: typeof window !== 'undefined' && !sessionStorage.getItem('automation_exit_submitted'),
    exitIntentEnabled: true,
    scrollDepthEnabled: true,
    scrollDepthPercentage: 60,
    cookieExpiryDays: 7
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name || undefined,
          source: 'automation_exit_intent',
          leadMagnet: '10 Workflows to Automate Computer Use',
          page: '/intelligent-automation'
        })
      })

      const data = await response.json()

      if (data.ok) {
        setSubmitted(true)
        sessionStorage.setItem('automation_exit_submitted', 'true')
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lead_capture', {
            event_category: 'Exit Intent',
            event_label: 'Automation - 10 Workflows',
            value: 1
          })
        }

        // Auto-close after 5 seconds
        setTimeout(() => {
          closeModal()
        }, 5000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Exit intent submission error:', err)
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={shouldShow} onOpenChange={closeModal}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-teal-950/30 dark:via-zinc-900 dark:to-emerald-950/30 border-2 border-teal-300 dark:border-teal-700">
        {!submitted ? (
          <>
            {/* Header */}
            <div className="relative bg-gradient-to-r from-teal-600 to-emerald-600 p-6 text-white">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Wait! Before You Go...</h2>
                  <p className="text-teal-100 text-sm">Get your free automation playbook</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-teal-600" />
                  Free Download: 10 Workflows to Automate Computer Use
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Stop wasting time on repetitive tasks. This instant-download guide reveals the exact 10 workflows SMB owners automate first for maximum ROI.
                </p>
                
                {/* What's Inside */}
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 border border-gray-200 dark:border-zinc-700 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm">
                    What's Inside:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'The 3 workflows that save 10+ hours/week (start here)',
                      'Real automation examples with tools & setup time',
                      'ROI calculator: Which automation pays for itself first?',
                      'Step-by-step deployment checklist',
                      'Bonus: 5 automation mistakes that waste money'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-6 text-lg"
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Email My Free Guide
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  Instant delivery. No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Check Your Inbox!
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Your <strong>10 Workflows to Automate Computer Use</strong> guide is on its way to <strong className="text-teal-600 dark:text-teal-400">{email}</strong>
            </p>
            
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800 mb-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Pro Tip:</strong> While you wait, scroll down to try our free ROI Scanner and see which automations would save <em>you</em> the most time.
              </p>
            </div>

            <Button
              onClick={closeModal}
              variant="outline"
              className="border-2 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
            >
              Continue Exploring
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
