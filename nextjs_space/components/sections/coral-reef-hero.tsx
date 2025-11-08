
'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Zap, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function CoralReefHero() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
      style={{ marginTop: '64px' }}
    >
      {/* LEFT PANEL: Content (Deep Forest Teal #004D40) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-primary-bg flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 min-h-[600px] lg:min-h-screen"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-xl space-y-8">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="h-px w-8 bg-primary-accent" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary-accent">
              AI-Powered Business Transformation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display font-bold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Fire Your Biggest{' '}
            <span className="text-primary-accent">Operational Risks</span>
            <br />
            Hire Your Most{' '}
            <span className="text-white">
              Reliable Employees
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-teal-100 leading-relaxed"
          >
            Deploy battle-tested AI employees trained on 10,000+ hours. Zero interviews. 
            Zero drama. <span className="text-white font-semibold">87% cost savings</span>, 
            <span className="text-white font-semibold"> 99.2% accuracy rate</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA: Coral Background */}
            <Link href="/business-transformation">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-accent text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-primary-accent hover:ring-offset-2 hover:ring-offset-primary-bg focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:outline-none group flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Secondary CTA: White Background with Teal Text */}
            <Link href="/consultation">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-bg font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-primary-bg focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none flex items-center justify-center gap-2"
              >
                <span>Book a Call</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-accent" />
              <span className="text-sm text-teal-100">99.2% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-accent" />
              <span className="text-sm text-teal-100">Deploy in Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-accent" />
              <span className="text-sm text-teal-100">24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT PANEL: Visual (Almost Black #121212) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-secondary-bg flex items-center justify-center p-8 lg:p-12 min-h-[600px] lg:min-h-screen"
      >
        {/* Ambient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-accent/10 via-transparent to-transparent opacity-40" />
        
        {/* Hero Visual Container */}
        <div className="relative w-full max-w-lg aspect-square">
          {/* Floating Orb Animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Central Orb */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-primary-accent/30"
              />
              
              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-2 border-primary-accent/20"
              />
              
              {/* Inner Glow */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-accent/50 via-primary-accent/30 to-primary-accent/10 blur-3xl" />
              
              {/* Core */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary-accent to-primary-accent/80 flex items-center justify-center shadow-2xl">
                <Zap className="w-16 h-16 text-white" strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* Floating Accent Dots */}
          {[
            { x: -100, y: -50, delay: 0 },
            { x: 100, y: -80, delay: 1 },
            { x: 120, y: 60, delay: 2 },
            { x: -120, y: 80, delay: 1.5 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: dot.delay,
                ease: 'easeInOut'
              }}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${dot.x}px, ${dot.y}px)`,
              }}
            >
              <div className="w-3 h-3 rounded-full bg-primary-accent shadow-lg shadow-primary-accent/50" />
            </motion.div>
          ))}
        </div>

        {/* Floating Stats Cards */}
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
          >
            <p className="text-primary-accent font-bold text-2xl">87%</p>
            <p className="text-white/80 text-sm">Cost Savings</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
          >
            <p className="text-primary-accent font-bold text-2xl">99.2%</p>
            <p className="text-white/80 text-sm">Accuracy Rate</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
