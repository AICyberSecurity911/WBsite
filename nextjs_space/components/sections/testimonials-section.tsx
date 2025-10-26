'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  metrics?: {
    icon: any
    label: string
    value: string
  }[]
  avatar: string
  featured?: boolean
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Peter Fernandes',
    role: 'Owner',
    company: 'AAA Construction Services',
    quote: "The AI Bookkeeper caught a $15,000 accounting error our human bookkeeper had missed three times. It paid for itself in month one. Now I have real-time visibility into my financials instead of waiting weeks for reports.",
    metrics: [
      { icon: DollarSign, label: 'Saved', value: '$47K/year' },
      { icon: Clock, label: 'Time Saved', value: '15 hrs/week' }
    ],
    avatar: '/images/testimonials/peter.jpg',
    featured: true
  },
  {
    id: '2',
    name: 'Masoud Nasserie',
    role: 'Principal Broker',
    company: 'Blueprint Realty Inc.',
    quote: "I was spending 25 hours a week just staying afloat in my inbox and scheduling showings. The AI assistant gave me my life back. Revenue up 34% in 6 months because I can focus on closing deals instead of administrative tasks.",
    metrics: [
      { icon: TrendingUp, label: 'Revenue Growth', value: '+34%' },
      { icon: Clock, label: 'Time Saved', value: '20 hrs/week' }
    ],
    avatar: '/images/testimonials/masoud.jpg',
    featured: true
  },
  {
    id: '3',
    name: 'Sofia J. Delacroix',
    role: 'Founder & CEO',
    company: 'Delacroix Marketing Agency',
    quote: "Our automation workflows reduced manual tasks by 70%, freeing our team to focus on clients and creative strategy. We scaled from 15 to 40 clients without hiring additional staff. Game changer.",
    metrics: [
      { icon: TrendingUp, label: 'Client Growth', value: '+167%' },
      { icon: DollarSign, label: 'Cost Savings', value: '$120K/year' }
    ],
    avatar: '/images/testimonials/sofia.jpg',
    featured: true
  },
  {
    id: '4',
    name: 'Elias T. Montrose',
    role: 'Co-Founder',
    company: 'Montrose Tech Solutions',
    quote: "Hiring was overwhelming us. QuantumLeap's AI Recruiter cut our hiring costs by 60% and reduced time-to-fill by 53%. We found better candidates faster, and our new hires are performing above expectations.",
    metrics: [
      { icon: DollarSign, label: 'Savings', value: '$38K/year' },
      { icon: Clock, label: 'Faster Hiring', value: '-53%' }
    ],
    avatar: '/images/testimonials/elias.jpg'
  },
  {
    id: '5',
    name: 'Dr. Rachel Chen',
    role: 'Medical Director',
    company: 'Chen Family Practice',
    quote: "The AI Customer Service Rep handles appointment scheduling, insurance questions, and follow-ups 24/7. Our patient satisfaction scores increased by 28%, and my staff can focus on in-person patient care.",
    metrics: [
      { icon: TrendingUp, label: 'Satisfaction', value: '+28%' },
      { icon: Clock, label: 'Response Time', value: '< 2 min' }
    ],
    avatar: '/images/testimonials/rachel.jpg'
  },
  {
    id: '6',
    name: 'Marcus Williams',
    role: 'Owner',
    company: 'Williams & Associates Law',
    quote: "The AI handles intake forms, schedules consultations, and follows up with prospects automatically. We're capturing 3x more leads and converting them 40% faster. Best investment we've made in the practice.",
    metrics: [
      { icon: TrendingUp, label: 'Lead Capture', value: '+200%' },
      { icon: TrendingUp, label: 'Conversion', value: '+40%' }
    ],
    avatar: '/images/testimonials/marcus.jpg'
  }
]

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredTestimonials = testimonials.filter(t => t.featured)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  const currentTestimonial = featuredTestimonials[currentIndex]

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 px-4 py-2 text-sm font-semibold text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300"
            >
              <Star className="h-4 w-4 fill-current" />
              Real Results from Real Businesses
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              See How Businesses Like Yours Are Winning
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            >
              From construction to healthcare, businesses are cutting costs by 87% and reclaiming 15-25 hours per week
            </motion.p>
          </div>

          {/* Featured Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mx-auto mb-16 max-w-5xl"
          >
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-50 p-8 shadow-2xl dark:from-teal-950/30 dark:to-emerald-950/30 lg:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                {/* Left: Quote */}
                <div>
                  <Quote className="mb-6 h-12 w-12 text-teal-500 dark:text-teal-400" />
                  <blockquote className="mb-8 text-xl font-medium leading-relaxed text-gray-900 dark:text-white lg:text-2xl">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full bg-gradient-to-r from-teal-400 to-emerald-500">
                      {/* Avatar placeholder - will be replaced with actual images */}
                      <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {currentTestimonial.role} • {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Metrics */}
                <div className="grid gap-4">
                  {currentTestimonial.metrics?.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500">
                        <metric.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {featuredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? 'w-8 bg-teal-600'
                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Grid of Additional Testimonials */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.filter(t => !t.featured).map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="mb-6 text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                
                {testimonial.metrics && (
                  <div className="mb-4 flex gap-4">
                    {testimonial.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-teal-600 dark:text-teal-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-teal-400 to-emerald-500">
                    <div className="flex h-full w-full items-center justify-center text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Trusted by businesses across industries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
              {/* Company logos would go here */}
              <div className="h-12 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
              <div className="h-12 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
              <div className="h-12 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
              <div className="h-12 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
