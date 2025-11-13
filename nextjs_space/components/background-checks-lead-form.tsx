'use client'

import { useState } from 'react'
import { GlowInput } from '@/components/ui/glow-input'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Loader2 } from 'lucide-react'

export function BackgroundChecksLeadForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name || undefined,
          source: 'background_checks_gated_offer',
          leadMagnet: '5 Red Flags Standard Background Checks Always Miss',
          page: '/background-checks'
        })
      })

      const data = await response.json()

      if (data.ok) {
        setIsSubmitted(true)
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lead_capture', {
            event_category: 'Gated Offer',
            event_label: 'Background Checks - 5 Red Flags Guide',
            value: 1
          })
        }
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Lead capture error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="w-16 h-16 text-[color:var(--accent)] mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-[color:var(--fg)] mb-2">
          Check Your Inbox!
        </h3>
        <p className="text-[color:var(--muted)]">
          We've sent your free guide to <strong className="text-[color:var(--fg)]">{email}</strong>. 
          It should arrive within 5 minutes.
        </p>
        <p className="text-sm text-[color:var(--muted)] mt-4">
          Don't see it? Check your spam folder or{' '}
          <a href="mailto:security@quantumleapai.com" className="text-[color:var(--accent)] underline">
            contact us
          </a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[color:var(--fg)] mb-2 text-left">
          Name (Optional)
        </label>
        <GlowInput
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          showFlame={false}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[color:var(--fg)] mb-2 text-left">
          Email Address <span className="text-[color:var(--accent)]">*</span>
        </label>
        <GlowInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          required
          showFlame={false}
        />
      </div>
      {error && (
        <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-200">
          {error}
        </div>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Get My Free Guide →'
        )}
      </Button>
    </form>
  )
}

