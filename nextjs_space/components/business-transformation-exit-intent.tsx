
'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, TrendingUp, ArrowRight, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export function BusinessTransformationExitIntent() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if already shown in this session
    if (typeof window !== 'undefined') {
      const shown = sessionStorage.getItem('bt_exit_intent_shown')
      if (shown) {
        setHasShown(true)
        return
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('bt_exit_intent_shown', 'true')
      }
    }

    const handleScroll = () => {
      if (window.scrollY < 100 && window.scrollY > 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('bt_exit_intent_shown', 'true')
      }
    }

    let idleTimer: NodeJS.Timeout
    const resetIdleTimer = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        if (!hasShown) {
          setIsOpen(true)
          setHasShown(true)
          sessionStorage.setItem('bt_exit_intent_shown', 'true')
        }
      }, 30000) // 30 seconds
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousemove', resetIdleTimer)
    document.addEventListener('keypress', resetIdleTimer)
    
    resetIdleTimer()

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', resetIdleTimer)
      document.removeEventListener('keypress', resetIdleTimer)
      clearTimeout(idleTimer)
    }
  }, [hasShown])

  const handleSubmit = async (e: React.FormEvent) => {
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
          source: 'business_transformation_exit_intent',
          offer: '12 Questions Checklist'
        })
      })

      if (response.ok) {
        toast.success('Check your email! The checklist is on its way.')
        setIsOpen(false)
        
        // Track event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exit_intent_conversion', {
            offer_type: 'checklist',
            page: 'business_transformation'
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

  const scrollToCalculator = () => {
    setIsOpen(false)
    const calculator = document.getElementById('calculator')
    if (calculator) {
      calculator.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-qgd-fg" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Before You Go...</h3>
              <p className="text-sm text-muted-foreground">See what you're leaving on the table</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Most businesses leak 15–35% of revenue to inefficiency. Take 60 seconds to see your number.
          </p>

          <div className="space-y-3">
            <Button
              onClick={scrollToCalculator}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-qgd-fg text-lg py-6 h-auto"
            >
              Show Me My Profit Leak
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 px-2 text-muted-foreground">
                  Or get our free guide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-qgd-card dark:bg-gray-950">
          <h4 className="font-bold mb-2">Get Our Free Checklist</h4>
          <p className="text-sm text-muted-foreground mb-4">
            <strong>The 12 Questions Every Founder Should Ask Before Hiring a Consultant</strong>
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-500 hover:bg-purple-600 text-qgd-fg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Email Me the Checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
