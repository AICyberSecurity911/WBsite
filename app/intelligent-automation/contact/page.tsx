
'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, User, MessageSquare, CheckCircle, Send, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function ContactSupportPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help you'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 overflow-hidden bg-gradient-to-b from-brand-teal-50 to-white dark:from-brand-teal-950/30 dark:to-background">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeInUp} className="inline-block bg-brand-teal-100 dark:bg-brand-teal-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-brand-teal-700 dark:text-brand-teal-300 uppercase tracking-wide">
                  Contact Support
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                We're Here to <span className="text-brand-teal-500">Help You</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about Intelligent Automation? Our team of experts is ready to assist you. 
                Fill out the form below and we'll get back to you within 24 hours.
              </motion.p>

              {/* Quick Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-brand-teal-100 dark:bg-brand-teal-900/50 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-brand-teal-600 dark:text-brand-teal-400" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Average Response</div>
                  <div className="text-2xl font-bold text-brand-teal-600 dark:text-brand-teal-400">Under 24hrs</div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Support Availability</div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Customer Satisfaction</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section ref={formRef} className="py-24 bg-white dark:bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-emerald-800 dark:text-emerald-200 mb-4">
                        Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                      </p>
                      <Link href="/intelligent-automation">
                        <Button variant="outline" className="border-emerald-500 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/50">
                          Return to Intelligent Automation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 bg-red-50 dark:bg-red-950/30 border-2 border-red-500 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                        Something Went Wrong
                      </h3>
                      <p className="text-red-800 dark:text-red-200">
                        We couldn't submit your message. Please try again or contact us directly at hello@quantumleap.io
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Contact Form */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-border p-8">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2 text-sm font-semibold">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${errors.name ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2 text-sm font-semibold">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${errors.email ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2 text-sm font-semibold">
                      <Phone className="w-4 h-4" />
                      Contact Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${errors.phone ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="flex items-center gap-2 mb-2 text-sm font-semibold">
                      <MessageSquare className="w-4 h-4" />
                      How can we help you? *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your automation needs, questions, or concerns..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </motion.div>

              {/* Alternative Contact Methods */}
              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-6">Or reach us directly</h3>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="mailto:hello@quantumleap.io"
                    className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-border hover:border-brand-teal-500 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-brand-teal-600 dark:text-brand-teal-400" />
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">hello@quantumleap.io</div>
                    </div>
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-border hover:border-brand-teal-500 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-teal-600 dark:text-brand-teal-400" />
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-semibold">(555) 123-4567</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
