
'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, XCircle, Calendar, ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ConfirmationContent() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const success = searchParams?.get('success')
    const error = searchParams?.get('error')
    const name = searchParams?.get('name')

    if (success === 'true') {
      setStatus('success')
      setMessage('Your email has been confirmed successfully!')
      setUserName(name || '')
    } else if (error) {
      setStatus('error')
      switch (error) {
        case 'missing-token':
          setMessage('Confirmation link is missing required information.')
          break
        case 'invalid-token':
          setMessage('This confirmation link is invalid or has expired.')
          break
        case 'update-failed':
          setMessage('Failed to confirm your email. Please try again.')
          break
        case 'server-error':
          setMessage('A server error occurred. Please try again later.')
          break
        default:
          setMessage('An error occurred during confirmation.')
      }
    } else {
      setStatus('error')
      setMessage('Invalid confirmation request.')
    }
  }, [searchParams])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-teal-500 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      {status === 'success' ? (
        <>
          {/* Success State */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            {userName ? `Welcome, ${userName}!` : 'Email Confirmed!'}
          </h1>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            {message}
          </p>

          {/* What's Next Section */}
          <div className="mb-8 rounded-2xl bg-teal-50 p-6 dark:bg-teal-950">
            <h2 className="mb-4 text-xl font-semibold text-teal-900 dark:text-teal-100">
              What Happens Next?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-teal-600" />
                <div className="text-left">
                  <h3 className="font-semibold text-teal-800 dark:text-teal-200">
                    Check Your Email (in 5 minutes)
                  </h3>
                  <p className="text-sm text-teal-700 dark:text-teal-300">
                    Your personalized AI workforce recommendations and implementation roadmap will arrive shortly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-teal-600" />
                <div className="text-left">
                  <h3 className="font-semibold text-teal-800 dark:text-teal-200">
                    Schedule Your Free Consultation
                  </h3>
                  <p className="text-sm text-teal-700 dark:text-teal-300">
                    Book a 30-minute call to discuss your specific needs and get a custom implementation plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/consultation">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Free Consultation
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <ArrowRight className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              While You Wait, Learn More About AI Workforce
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href="#ai-employees" 
                className="rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <h4 className="font-medium text-gray-900 dark:text-white">Meet Your AI Team</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Explore all 8 AI employees available for your business
                </p>
              </Link>
              
              <Link 
                href="#testimonials" 
                className="rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <h4 className="font-medium text-gray-900 dark:text-white">Success Stories</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  See how other businesses transformed with AI workforce
                </p>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Error State */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <XCircle className="h-10 w-10 text-red-600" />
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Confirmation Failed
          </h1>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            {message}
          </p>

          <div className="mb-8 rounded-2xl bg-yellow-50 p-6 dark:bg-yellow-950">
            <h2 className="mb-2 text-lg font-semibold text-yellow-900 dark:text-yellow-100">
              Need Help?
            </h2>
            <p className="text-yellow-800 dark:text-yellow-200">
              If you continue to experience issues, please contact our support team at{' '}
              <a href="mailto:support@quantumleap.io" className="underline">
                support@quantumleap.io
              </a>{' '}
              and we'll get this resolved for you.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="#calculator">
                Try Assessment Again
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                Return to Homepage
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container section-padding">
        <Suspense fallback={
          <div className="flex items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-teal-500 border-t-transparent" />
          </div>
        }>
          <ConfirmationContent />
        </Suspense>
      </div>
    </div>
  )
}
