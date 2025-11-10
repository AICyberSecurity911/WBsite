
'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Calculator, TrendingUp, Clock, Zap, Shield, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { calculatorQuestions, type AIEmployee, type ServiceRecommendation } from '@/lib/calculator'
import Link from 'next/link'

// Form validation schemas
const calculatorSchema = yup.object({
  answers: yup.object().required()
})

const leadCaptureSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  company: yup.string(),
  phone: yup.string()
})

interface CalculatorResults {
  recommendations: AIEmployee[]
  serviceRecommendations?: ServiceRecommendation[]
  estimatedROI: any
  priority: string
  deploymentTimeline: string
}

export function AITeamCalculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [results, setResults] = useState<CalculatorResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const { toast } = useToast()

  const {
    register: registerLead,
    handleSubmit: handleLeadSubmit,
    formState: { errors: leadErrors, isSubmitting },
    reset: resetLead
  } = useForm({
    resolver: yupResolver(leadCaptureSchema)
  })

  const totalSteps = calculatorQuestions.length

  // Handle answer selection
  const handleAnswer = (questionId: string, answer: string | string[]) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)

    // Auto-advance to next question after short delay
    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        calculateResults(newAnswers)
      }
    }, 500)
  }

  // Calculate recommendations
  const calculateResults = async (finalAnswers: Record<string, any>) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/calculator/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: finalAnswers })
      })

      if (!response.ok) {
        throw new Error('Failed to calculate recommendations')
      }

      const data = await response.json()
      setResults(data)
      setShowEmailForm(true)
    } catch (error) {
      console.error('Calculator error:', error)
      toast({
        title: 'Error',
        description: 'Failed to calculate recommendations. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle lead capture
  const handleLeadCapture = async (data: any) => {
    try {
      const response = await fetch('/api/leads/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          calculatorData: {
            answers,
            results
          }
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to capture lead')
      }

      const result = await response.json()
      
      toast({
        title: 'Success!',
        description: result.message,
        variant: 'default'
      })

      setShowEmailForm(false)
      // Show success state or redirect
    } catch (error) {
      console.error('Lead capture error:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save information. Please try again.',
        variant: 'destructive'
      })
    }
  }

  // Navigate between steps
  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step)
    }
  }

  const currentQuestion = calculatorQuestions[currentStep]
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="mx-auto max-w-4xl">
      {/* Calculator Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-qgd-fg dark:text-qgd-fg">
          Find Out Which AI Employee You Need First
        </h2>
        <p className="text-lg text-qgd-muted dark:text-gray-300">
          90-second assessment • Personalized recommendations • Free consultation
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-qgd-muted dark:text-qgd-muted">
            Question {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-qgd-muted dark:text-qgd-muted">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Content */}
      {!isLoading && !showEmailForm && (
        <div className="card">
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold text-qgd-fg dark:text-qgd-fg">
              {currentQuestion.question}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <button
                  key={`${currentQuestion.id}-${index}`}
                  type="button"
                  className={`w-full rounded-xl border-2 p-5 text-left transition-all duration-200 hover:shadow-md cursor-pointer hover:scale-[1.01] ${
                    answers[currentQuestion.id] === option
                      ? 'border-teal-500 bg-qgd-primary/50 dark:bg-qgd-primary/900/30 shadow-lg'
                      : 'border-[var(--border)] bg-qgd-card dark:bg-qgd-card hover:border-teal-400'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Button clicked:', option)
                    handleAnswer(currentQuestion.id, option)
                  }}
                >
                  <div className="flex items-center justify-between pointer-events-none">
                    <span className="font-medium text-qgd-fg dark:text-qgd-fg">{option}</span>
                    {answers[currentQuestion.id] === option && (
                      <CheckCircle className="h-6 w-6 text-qgd-ring600 dark:text-qgd-ring400" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => goToStep(currentStep - 1)}
              disabled={currentStep === 0}
              className="flex items-center gap-2 border-2 hover:bg-[var(--card)] dark:hover:bg-qgd-card"
              size="lg"
            >
              <ArrowLeft className="h-5 w-5" />
              Previous
            </Button>

            {answers[currentQuestion.id] && currentStep < totalSteps - 1 && (
              <Button
                onClick={() => goToStep(currentStep + 1)}
                className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-qgd-fg shadow-lg"
                size="lg"
              >
                Next
                <ArrowRight className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="card text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-teal-500 border-t-transparent" />
            <div>
              <h3 className="text-xl font-semibold text-qgd-fg dark:text-qgd-fg">
                Calculating Your Results...
              </h3>
              <p className="text-qgd-muted dark:text-qgd-muted">
                Analyzing your responses to find the perfect AI employees for your business.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Email Capture Form */}
      {showEmailForm && results && (
        <div className="space-y-6">
            {/* Results Preview - When AI Employees are recommended */}
            {results.recommendations.length > 0 && (
              <div className="card bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950">
                <h3 className="mb-4 text-xl font-semibold text-qgd-fg dark:text-qgd-fg">
                  🎉 Your AI Workforce Plan is Ready!
                </h3>
                
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-qgd-ring600">
                      {results.recommendations.length}
                    </div>
                    <div className="text-sm text-qgd-muted dark:text-qgd-muted">
                      Recommended AI Employees
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-emerald-600">
                      {results.estimatedROI?.monthlySavings ? `$${Math.round(results.estimatedROI.monthlySavings)}` : '$0'}
                    </div>
                    <div className="text-sm text-qgd-muted dark:text-qgd-muted">
                      Monthly Savings
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-purple-600">
                      {results.deploymentTimeline}
                    </div>
                    <div className="text-sm text-qgd-muted dark:text-qgd-muted">
                      Time to Deploy
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Service Recommendations - When NO AI Employees match */}
            {results.recommendations.length === 0 && results.serviceRecommendations && results.serviceRecommendations.length > 0 && (
              <div className="card bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
                <div className="mb-4">
                  <h3 className="mb-2 text-2xl font-bold text-qgd-fg dark:text-qgd-fg">
                    💡 We Have Better Solutions For You
                  </h3>
                  <p className="text-qgd-muted dark:text-gray-300">
                    Based on your answers, AI employees might not be the best fit right now. 
                    However, we identified services that can deliver immediate impact for your business:
                  </p>
                </div>

                <div className="space-y-4">
                  {results.serviceRecommendations.slice(0, 3).map((service, index) => {
                    const IconComponent = service.icon === 'Zap' ? Zap : service.icon === 'Shield' ? Shield : TrendingUp
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-xl border-2 border-qgd-border bg-qgd-card p-6 shadow-sm dark:border-qgd-border dark:bg-qgd-card"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 p-3">
                            <IconComponent className="h-6 w-6 text-qgd-fg" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1">
                              <h4 className="text-lg font-bold text-qgd-fg dark:text-qgd-fg">
                                {service.name}
                              </h4>
                            </div>
                            <p className="mb-3 text-sm text-qgd-muted dark:text-gray-300">
                              {service.description}
                            </p>
                            <div className="mb-3 space-y-1">
                              <p className="text-xs font-semibold uppercase text-qgd-muted dark:text-qgd-muted">
                                Why this is perfect for you:
                              </p>
                              {service.reasons.slice(0, 2).map((reason, idx) => (
                                <p key={idx} className="flex items-start gap-2 text-sm text-qgd-muted dark:text-gray-300">
                                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-qgd-ring600" />
                                  {reason}
                                </p>
                              ))}
                            </div>
                            <Link href={service.url}>
                              <Button
                                className="btn-primary group w-full sm:w-auto"
                                size="sm"
                              >
                                {service.ctaText}
                                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-6 rounded-lg border-2 border-teal-200 bg-qgd-primary/50 p-4 dark:border-teal-800 dark:bg-qgd-primary/950">
                  <p className="text-sm text-qgd-ring900 dark:text-qgd-ring100">
                    <strong>💬 Want to discuss which solution is right for you?</strong> Book a free consultation below and let's find the perfect fit for your business goals.
                  </p>
                </div>
              </div>
            )}

            {/* Email Form */}
            <div className="card">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-6 w-6 text-qgd-ring600" />
                <h3 className="text-xl font-semibold text-qgd-fg dark:text-qgd-fg">
                  {results.recommendations.length > 0 
                    ? 'Get Your Custom AI Workforce Plan'
                    : 'Book Your Free Consultation'
                  }
                </h3>
              </div>

              <form onSubmit={handleLeadSubmit(handleLeadCapture)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      {...registerLead('name')}
                      id="name"
                      placeholder="John Smith"
                      className="mt-1"
                    />
                    {leadErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{String(leadErrors.name.message)}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      {...registerLead('email')}
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="mt-1"
                    />
                    {leadErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{String(leadErrors.email.message)}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      {...registerLead('company')}
                      id="company"
                      placeholder="Acme Corp"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      {...registerLead('phone')}
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="rounded-lg bg-qgd-primary/50 p-4 dark:bg-qgd-primary/950">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    📧 <strong>What happens next:</strong> Check your email for a confirmation link. 
                    Once confirmed, you'll receive {results.recommendations.length > 0 
                      ? 'your detailed AI workforce recommendations and implementation roadmap'
                      : 'a personalized consultation link to discuss the best solutions for your business'
                    } within 5 minutes.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      {results.recommendations.length > 0 
                        ? 'Get My Custom AI Workforce Plan'
                        : 'Book My Free Consultation'
                      }
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        )}
    </div>
  )
}
