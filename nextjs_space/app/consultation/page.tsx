
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

const consultationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  company: yup.string(),
  phone: yup.string(),
  message: yup.string().required('Please tell us about your business needs')
})

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(consultationSchema)
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          message: data.message,
          subject: 'Free Consultation Request'
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit request')
      }
      
      setIsSubmitted(true)
      reset()
      
      toast({
        title: 'Request Submitted!',
        description: 'We\'ll contact you within 24 hours to schedule your consultation.',
      })
    } catch (error) {
      console.error('Consultation submission error:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to submit request. Please try again.',
        variant: 'destructive'
      })
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Consultation Requested!
            </h1>

            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Thank you for your interest in QuantumLeap AI. We'll contact you within 24 hours to schedule your free consultation.
            </p>

            <div className="mb-8 rounded-2xl bg-teal-50 p-6 dark:bg-teal-950">
              <h2 className="mb-4 text-xl font-semibold text-teal-900 dark:text-teal-100">
                What to Expect
              </h2>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-teal-600" />
                  <div>
                    <h3 className="font-semibold text-teal-800 dark:text-teal-200">
                      30-Minute Strategic Session
                    </h3>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Deep dive into your business challenges and automation opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 text-teal-600" />
                  <div>
                    <h3 className="font-semibold text-teal-800 dark:text-teal-200">
                      Custom Implementation Roadmap
                    </h3>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Detailed plan showing exactly which AI employees to deploy and when
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="btn-primary">
              <Link href="/">
                Return to Homepage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container section-padding">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Schedule Your Free Consultation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get a personalized 30-minute strategy session to discover how AI employees can transform your business
            </p>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    {...register('name')}
                    id="name"
                    placeholder="John Smith"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    {...register('email')}
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    {...register('company')}
                    id="company"
                    placeholder="Acme Corp"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your business needs *</Label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="mt-1 flex w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-teal-400"
                  placeholder="What challenges are you facing? What processes take up most of your time? What are your main business goals?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{String(errors.message.message)}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Schedule Free Consultation
                    <Calendar className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            By submitting this form, you agree to receive communications from QuantumLeap AI.
          </div>
        </div>
      </div>
    </div>
  )
}
