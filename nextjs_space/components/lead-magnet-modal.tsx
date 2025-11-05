
'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X, Download, CheckCircle2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface LeadMagnetModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('')
      setName('')
      setIsSuccess(false)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !name) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSuccess(true)
      
      toast({
        title: "Success! Check your inbox 📧",
        description: "Your free AI Workforce Blueprint is on its way. Check your email in a few moments.",
      })

      // Auto-close after 3 seconds on success
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-2 border-gradient-to-r from-[#FF6B35] to-[#F7931E]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-50"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {!isSuccess ? (
          <>
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] p-6 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  <Download className="h-6 w-6" />
                  Before You Go—Get Your Free AI Workforce Blueprint
                </DialogTitle>
                <DialogDescription className="text-white/90 text-base mt-2">
                  <span className="font-semibold text-lg block mb-2">
                    Learn How Entrepreneurs Are Reclaiming Time and Profits
                  </span>
                  Discover how custom AI employees are designed for their exact workflows—delivered instantly to your inbox.
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF6B35]/90 hover:to-[#F7931E]/90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Send My Free Blueprint
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Check Your Inbox! 📧
            </h3>
            <p className="text-gray-600">
              Your free AI Workforce Blueprint is on its way to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500">
              (Don't forget to check your spam folder)
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
