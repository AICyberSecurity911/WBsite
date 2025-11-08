
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Zap, CheckCircle, TrendingUp, Users, Star } from 'lucide-react'
import { AnimatedButton } from './animated-button'
import { AnimatedBackground } from './animated-background'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { useTheme } from './theme-context'

export function HeroSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const shouldReduceMotion = useReducedMotion()
  const { theme } = useTheme()
  const [count, setCount] = useState(0)

  // Counter animation for "200+ businesses"
  useEffect(() => {
    if (inView && count < 200) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 8, 200))
      }, 20)
      return () => clearTimeout(timer)
    }
  }, [count, inView])

  // Word-by-word animation variants
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  }

  const headline = "Stop Working 70-Hour Weeks"
  const subheadline = "AI Automation That Actually Saves Small Business Owners Time"
  const words = headline.split(' ')

  return (
    <section
      ref={ref}
      className={`
        relative min-h-screen flex items-center overflow-hidden
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-[#0A0E27] via-[#151B3D] to-[#0A0E27]' 
          : 'bg-gradient-to-br from-white via-[#F8F9FA] to-white'
        }
      `}
      style={{ marginTop: '64px' }}
    >
      {/* Animated Background */}
      {!shouldReduceMotion && <AnimatedBackground />}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0E27]/20 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center py-20">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="inline-block mb-8"
          >
            <span className={`
              inline-flex items-center px-6 py-3 rounded-full text-sm font-bold
              ${theme === 'dark'
                ? 'bg-[#20C997]/20 border-2 border-[#20C997] text-[#20C997]'
                : 'bg-[#20C997]/10 border-2 border-[#20C997] text-[#20C997]'
              }
              shadow-lg shadow-[#20C997]/20
            `}>
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              Small Business Edition
            </span>
          </motion.div>

          {/* Headline with word-by-word animation */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={inView && !shouldReduceMotion ? "visible" : "hidden"}
                  variants={!shouldReduceMotion ? wordVariants : { hidden: {}, visible: {} }}
                  className={`
                    inline-block mr-4
                    ${theme === 'dark' ? 'text-white' : 'text-[#0A0E27]'}
                  `}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Subheadline */}
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: shouldReduceMotion ? 0 : 0.8 } }
            }}
            className={`
              text-2xl sm:text-3xl md:text-4xl font-bold mb-4
              bg-gradient-to-r from-[#FF6B6B] to-[#20C997] bg-clip-text text-transparent
            `}
          >
            {subheadline}
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: shouldReduceMotion ? 0 : 1.0 } }
            }}
            className={`
              text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto
              ${theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#1F2937]'}
            `}
          >
            Get back <span className="font-bold text-[#FF6B6B]">25 hours every week</span>. 
            No tech skills needed. Setup in 48 hours.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: shouldReduceMotion ? 0 : 1.2 } }
            }}
            className="mb-16"
          >
            <AnimatedButton
              href="/consultation"
              size="lg"
              className="text-xl px-10 py-5 shadow-2xl shadow-[#FF6B6B]/40 hover:shadow-[#FF6B6B]/60"
            >
              Show Me My 25 Hours Back
            </AnimatedButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: shouldReduceMotion ? 0 : 1.4 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {/* Businesses Counter */}
            <div className={`
              p-6 rounded-2xl backdrop-blur-md border
              ${theme === 'dark'
                ? 'bg-[#151B3D]/50 border-white/10'
                : 'bg-white/70 border-gray-200/50'
              }
              shadow-lg hover:shadow-xl transition-shadow duration-300
            `}>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 1.6, type: 'spring', stiffness: 200 }}
                className="flex items-center justify-center mb-2"
              >
                <Users className="w-8 h-8 text-[#20C997] mr-2" />
                <span className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0A0E27]'}`}>
                  {count}+
                </span>
              </motion.div>
              <p className={theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#1F2937]'}>
                Businesses Transformed
              </p>
            </div>

            {/* Rating */}
            <div className={`
              p-6 rounded-2xl backdrop-blur-md border
              ${theme === 'dark'
                ? 'bg-[#151B3D]/50 border-white/10'
                : 'bg-white/70 border-gray-200/50'
              }
              shadow-lg hover:shadow-xl transition-shadow duration-300
            `}>
              <div className="flex items-center justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 1.6 + (star * 0.1) }}
                  >
                    <Star className="w-6 h-6 text-[#F59E0B] fill-[#F59E0B]" />
                  </motion.div>
                ))}
              </div>
              <p className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#0A0E27]'}`}>
                4.9/5 Rating
              </p>
              <p className={theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#1F2937]'}>
                From Happy Owners
              </p>
            </div>

            {/* Average Time Saved */}
            <div className={`
              p-6 rounded-2xl backdrop-blur-md border
              ${theme === 'dark'
                ? 'bg-[#151B3D]/50 border-white/10'
                : 'bg-white/70 border-gray-200/50'
              }
              shadow-lg hover:shadow-xl transition-shadow duration-300
            `}>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 1.6, type: 'spring', stiffness: 200 }}
                className="flex items-center justify-center mb-2"
              >
                <TrendingUp className="w-8 h-8 text-[#10B981] mr-2" />
                <span className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0A0E27]'}`}>
                  25hrs
                </span>
              </motion.div>
              <p className={theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#1F2937]'}>
                Saved Every Week
              </p>
            </div>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: shouldReduceMotion ? 0 : 1.8 } }
            }}
            className={`mt-10 flex flex-wrap justify-center gap-6 text-sm ${theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#1F2937]'}`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
              <span>Setup in 48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
              <span>30-day money-back guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
