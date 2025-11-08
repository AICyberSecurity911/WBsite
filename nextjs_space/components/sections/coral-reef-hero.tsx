
'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRef } from 'react'

export function CoralReefHero() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
    >
      {/* RIGHT PANEL: Visual (Black Background) - First on Mobile */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="order-1 lg:order-2 w-full lg:w-1/2 bg-secondary-bg relative flex items-center justify-center p-8 lg:p-12 min-h-[50vh] lg:min-h-screen"
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
                className="absolute inset-4 rounded-full border-2 border-accent-cyan/40"
              />
              
              {/* Inner Glow */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-accent via-accent-purple to-accent-cyan blur-3xl opacity-50" />
              
              {/* Core */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary-accent to-accent-cyan flex items-center justify-center shadow-2xl">
                <Sparkles className="w-16 h-16 text-text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Floating Accent Dots */}
          {[
            { color: 'accent-coral', delay: 0, x: -100, y: -50 },
            { color: 'accent-cyan', delay: 1, x: 100, y: -80 },
            { color: 'accent-purple', delay: 2, x: 120, y: 60 },
            { color: 'accent-gold', delay: 1.5, x: -120, y: 80 },
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
              <div className={`w-3 h-3 rounded-full bg-${dot.color} shadow-lg`} />
            </motion.div>
          ))}
        </div>

        {/* Play Button Overlay (Optional) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 w-14 h-14 rounded-full bg-primary-accent/90 backdrop-blur-sm flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow group focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:outline-none"
        >
          <Play className="w-6 h-6 text-text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
        </motion.button>
      </motion.div>

      {/* LEFT PANEL: Content (Teal Background) - Second on Mobile */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="order-2 lg:order-1 w-full lg:w-1/2 bg-primary-bg relative flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 min-h-[50vh] lg:min-h-screen"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        {/* Content Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-primary-accent" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary-accent">
              AI-Powered Business Transformation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text-primary leading-[1.1] mb-6"
          >
            Fire Your Biggest{' '}
            <span className="text-primary-accent">Headache</span>
            <br />
            Hire Your Most{' '}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Reliable Employee
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8"
          >
            Deploy battle-tested AI employees trained on 10,000+ hours. Zero interviews. 
            Zero drama. <span className="text-text-primary font-semibold">87% cost savings</span>, 
            <span className="text-text-primary font-semibold"> 99.2% accuracy rate</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-accent hover:bg-primary-accent/90 text-text-primary font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-primary-accent hover:ring-offset-2 hover:ring-offset-primary-bg focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:outline-none group"
            >
              <Link href="/consultation" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-text-primary/30 hover:border-primary-accent text-text-primary hover:bg-text-primary/5 font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-accent-cyan hover:ring-offset-2 hover:ring-offset-primary-bg focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:outline-none"
            >
              <Link href="#features" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-text-primary/10"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-accent to-accent-cyan border-2 border-primary-bg"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="text-text-primary font-semibold">500+ Businesses</div>
                <div className="text-text-secondary text-xs">Transformed</div>
              </div>
            </div>

            <div className="text-sm">
              <div className="text-text-primary font-semibold">$250M+ Saved</div>
              <div className="text-text-secondary text-xs">In Business Costs</div>
            </div>

            <div className="text-sm">
              <div className="text-text-primary font-semibold">24/7 Support</div>
              <div className="text-text-secondary text-xs">Always Available</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
