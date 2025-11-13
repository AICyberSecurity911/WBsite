
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
    <section ref={ref} className="relative min-h-[90vh] sm:min-h-screen overflow-hidden gradient-bg">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-400/20 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/2 -right-1/4 h-[1000px] w-[1000px] rounded-full bg-gradient-to-tl from-emerald-400/20 to-teal-400/20 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-teal-300/10 to-transparent blur-2xl" 
        />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 flex min-h-screen items-center pt-24 pb-20 lg:pt-28 lg:pb-16">
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
              className="mb-6 text-hero text-[#f6f7ff]"
            >
              <span className="text-gradient block">Fire Your Biggest Headache.</span>
              <span className="mt-2 block">Hire Your Most</span>
              <span className="mt-2 block">Reliable Employee.</span>
              <span className="mt-2 block text-gradient">Same Day.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 text-body-large text-[#b8b6c9]"
            >
              Hire digital employees that work 24/7, cost 85% less than humans, and never miss a task.{' '}
              <strong className="font-semibold text-[#f6f7ff]">Free yourself from busywork and finally run a business that runs without you.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link href="#calculator" className="btn-premium-primary touch-target group">
                Calculate My Savings in 60s
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link href="#ai-employees" className="btn-premium-secondary touch-target">
                See AI Employees
              </Link>
            </motion.div>

            {/* Credibility Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mb-8 text-center lg:text-left"
            >
              <p className="text-sm font-semibold text-[#b8b6c9] tracking-wide">
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
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#b8b6c9] lg:justify-start"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 px-4 py-3 shadow-sm border border-teal-100 dark:border-teal-800/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 shadow-md">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-[#f6f7ff]">200+ Businesses Transformed</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 px-4 py-3 shadow-sm border border-purple-100 dark:border-purple-800/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-[#f6f7ff]">Money Back Guarantee</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual Card - Premium Design */}
            <div className="relative group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 p-8 shadow-2xl shadow-teal-600/30 hover:shadow-[0_0_60px_rgba(20,184,166,0.4)] transition-all duration-500">
                {/* Animated decorative elements */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white blur-2xl" 
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.4, 0.3]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-400 blur-xl" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                
                {/* Enhanced visual elements with better styling */}
                <div className="relative flex h-full items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {/* Animated stat blocks with premium styling */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-2xl bg-white/25 backdrop-blur-md p-6 text-white shadow-lg hover:shadow-xl transition-all border border-white/30"
                    >
                      <div className="text-4xl font-bold mb-1">24/7</div>
                      <div className="text-sm font-medium opacity-90">Uptime</div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-2xl bg-white/25 backdrop-blur-md p-6 text-white shadow-lg hover:shadow-xl transition-all border border-white/30"
                    >
                      <div className="text-4xl font-bold mb-1">99%</div>
                      <div className="text-sm font-medium opacity-90">Accurate</div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-2xl bg-white/25 backdrop-blur-md p-6 text-white shadow-lg hover:shadow-xl transition-all border border-white/30"
                    >
                      <div className="text-4xl font-bold mb-1">87%</div>
                      <div className="text-sm font-medium opacity-90">Savings</div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-2xl bg-white/25 backdrop-blur-md p-6 text-white shadow-lg hover:shadow-xl transition-all border border-white/30"
                    >
                      <div className="text-4xl font-bold mb-1">8</div>
                      <div className="text-sm font-medium opacity-90">AI Roles</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards - Premium Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
                className="absolute -bottom-8 -left-8 rounded-2xl bg-gradient-to-br from-white via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-teal-950/50 dark:to-cyan-950/50 p-6 shadow-2xl border border-teal-200/50 dark:border-teal-800/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] dark:hover:shadow-[0_0_40px_rgba(45,212,191,0.4)] transition-all duration-300 lg:-left-12 backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">87%</div>
                  <div className="text-sm font-semibold text-[#b8b6c9]">Cost Savings</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, delay: 1.1, type: "spring" }}
                className="absolute -right-8 -top-8 rounded-2xl bg-gradient-to-br from-white via-emerald-50 to-green-50 dark:from-gray-900 dark:via-emerald-950/50 dark:to-green-950/50 p-6 shadow-2xl border border-emerald-200/50 dark:border-emerald-800/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] dark:hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] transition-all duration-300 lg:-right-12 backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">99.2%</div>
                  <div className="text-sm font-semibold text-[#b8b6c9]">Accuracy Rate</div>
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
                    <div className="text-sm font-semibold text-[#f6f7ff]">24/7</div>
                    <div className="text-xs text-[#b8b6c9]">Always On</div>
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
