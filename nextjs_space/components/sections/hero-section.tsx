
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden gradient-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>

      <div className="container relative z-10 flex min-h-screen items-center">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Pre-headline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 dark:bg-teal-950 dark:text-teal-300"
            >
              <CheckCircle className="h-4 w-4" />
              For business owners spending more time managing people than growing revenue
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">Fire Your Biggest Headache.</span>
              <br />
              Hire Your Most Reliable Employee.
              <br />
              <span className="text-teal-600">Same Day.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-lg text-gray-600 dark:text-gray-300 sm:text-xl"
            >
              Deploy battle-tested AI employees trained on 10,000+ hours of real business operations. 
              <strong className="text-gray-900 dark:text-white"> Zero interviews. Zero drama. Immediate relief.</strong>
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-teal-600" />
                <span>Trusted by 200+ businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-teal-600" />
                <span>NASA-recognized security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-600" />
                <span>60-day money-back guarantee</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="btn-primary">
                <Link href="#calculator">
                  Calculate My Savings in 60 Seconds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <Link href="#ai-employees">
                  See AI Employees
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Video & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Video Container */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-2xl">
              {/* Placeholder for video - will be replaced with actual video */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-white">
                  <TrendingUp className="mx-auto mb-4 h-16 w-16" />
                  <p className="text-lg font-semibold">AI Workforce Demo Video</p>
                  <p className="text-sm opacity-90">Coming soon...</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-4 rounded-xl bg-white p-4 shadow-xl dark:bg-gray-800 lg:-left-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">87%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 -top-6 rounded-xl bg-white p-4 shadow-xl dark:bg-gray-800 lg:-right-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">99.2%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
            <div className="h-6 w-px bg-gradient-to-b from-teal-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
