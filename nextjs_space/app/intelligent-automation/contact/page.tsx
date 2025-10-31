
'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function ContactSupportPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

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
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help you'
    } else if (formData.message.length > 400) {
      newErrors.message = 'Message must be 400 characters or less'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/contact-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        toast.success('Message sent successfully!')
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-brand-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We've received your message and will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/intelligent-automation"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Intelligent Automation
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border-2 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-teal-50 dark:hover:bg-brand-teal-950/30 rounded-lg transition"
                >
                  Go to Homepage
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section ref={ref} className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-brand-teal-100 dark:bg-brand-teal-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-brand-teal-700 dark:text-brand-teal-300 uppercase tracking-wide">
                  We're Here to Help
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact <span className="text-brand-teal-500">Support</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about Intelligent Automation? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-2xl p-8 border-2 border-border shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.name ? 'border-red-500' : 'border-border'
                    } focus:border-brand-teal-500 focus:outline-none transition bg-background`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.email ? 'border-red-500' : 'border-border'
                    } focus:border-brand-teal-500 focus:outline-none transition bg-background`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.phone ? 'border-red-500' : 'border-border'
                    } focus:border-brand-teal-500 focus:outline-none transition bg-background`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    How can we help you? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    maxLength={400}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } focus:border-brand-teal-500 focus:outline-none transition bg-background resize-none`}
                    placeholder="Please describe your question or concern in detail..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {formData.message.length}/400 characters
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="mr-2">Sending...</span>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Additional Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="text-center p-6 bg-background rounded-xl border-2 border-border">
                <div className="w-12 h-12 bg-brand-teal-100 dark:bg-brand-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-brand-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:hello@quantumleap.io"
                  className="text-brand-teal-500 hover:underline"
                >
                  hello@quantumleap.io
                </a>
              </div>

              <div className="text-center p-6 bg-background rounded-xl border-2 border-border">
                <div className="w-12 h-12 bg-brand-teal-100 dark:bg-brand-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-brand-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="text-brand-teal-500 hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>

              <div className="text-center p-6 bg-background rounded-xl border-2 border-border">
                <div className="w-12 h-12 bg-brand-teal-100 dark:bg-brand-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-brand-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm">Within 24 hours</p>
              </div>
            </motion.div>

            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <Link
                href="/intelligent-automation"
                className="inline-flex items-center text-brand-teal-500 hover:text-brand-teal-600 font-semibold"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Intelligent Automation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
