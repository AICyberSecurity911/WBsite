
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
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 h-[1000px] w-[1000px] rounded-full bg-gradient-to-tl from-emerald-400/20 to-teal-400/20 blur-3xl" />
        <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-teal-300/10 to-transparent blur-2xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 flex min-h-screen items-center py-20 lg:py-0">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Pre-headline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 px-5 py-2.5 text-sm font-semibold text-teal-700 shadow-sm dark:from-teal-950/50 dark:to-emerald-950/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
            >
              <CheckCircle className="h-4 w-4" />
              For business owners ready to scale without the headaches
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              <span className="text-gradient">Fire Your Biggest Headache.</span>
              <br />
              <span className="mt-2 block">Hire Your Most</span>
              <span className="mt-2 block">Reliable Employee.</span>
              <span className="mt-2 block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Same Day.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 text-xl leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl"
            >
              Hire digital employees that work 24/7, cost 85% less than humans, and never miss a task.{' '}
              <strong className="font-semibold text-gray-900 dark:text-white">Free yourself from busywork and finally run a business that runs without you.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="btn-primary text-lg">
                <Link href="#calculator">
                  Calculate My Savings in 60s
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="btn-secondary text-lg">
                <Link href="#ai-employees">
                  See AI Employees
                </Link>
              </Button>
            </motion.div>

            {/* Credibility Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mb-8 text-center lg:text-left"
            >
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                <span className="text-gradient-subtle">Fortune 500 Strategy</span>
                <span className="mx-2 text-gray-400 dark:text-gray-600">|</span>
                <span className="text-gradient-subtle">MIT & Caltech Engineering</span>
                <span className="mx-2 text-gray-400 dark:text-gray-600">|</span>
                <span className="text-gradient-subtle">Money Back Guarantee</span>
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/50">
                  <Users className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                </div>
                <span className="font-medium">200+ Businesses Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="font-medium">Money Back Guarantee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 p-8 shadow-2xl shadow-teal-600/30">
                {/* Decorative elements */}
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-400/30 blur-xl" />
                
                {/* Content placeholder */}
                <div className="relative flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <TrendingUp className="h-10 w-10" />
                    </div>
                    <p className="mb-2 text-2xl font-bold">AI Workforce Demo</p>
                    <p className="text-base opacity-90">Video coming soon</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
                className="absolute -bottom-8 -left-8 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-950/50 dark:to-cyan-950/50 p-5 shadow-2xl border-2 border-teal-200 dark:border-teal-800 hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] dark:hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-300 lg:-left-12"
              >
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-teal-600 dark:text-teal-400">87%</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Cost Savings</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1, type: "spring" }}
                className="absolute -right-8 -top-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950/50 dark:to-green-950/50 p-5 shadow-2xl border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] dark:hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transition-all duration-300 lg:-right-12"
              >
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-emerald-600 dark:text-emerald-400">99.2%</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Accuracy Rate</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3, type: "spring" }}
                className="absolute bottom-4 right-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 backdrop-blur-sm p-4 shadow-lg border-2 border-purple-200 dark:border-purple-800 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] dark:hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">24/7</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300">Always On</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 transform hidden lg:flex"
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Scroll to explore</span>
            <motion.div 
              className="h-8 w-px bg-gradient-to-b from-teal-500 to-transparent"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
