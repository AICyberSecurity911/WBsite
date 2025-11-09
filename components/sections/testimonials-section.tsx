'use client'

import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight, TrendingUp, Clock, DollarSign, Sparkles, Zap } from 'lucide-react'
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
    name: 'Elias T. Montrose',
    role: 'Founder',
    company: 'Tech Startup',
    quote: "Hiring was overwhelming. QuantumLeap cut our hiring costs 60% and reduced time-to-fill by 53%. Efficiency soared—now we scale without the chaos. Before: Endless resume sifting, missed talent windows. After: Filled roles 53% faster, costs slashed 60%.",
    metrics: [
      { icon: DollarSign, label: 'Cost Reduction', value: '60%' },
      { icon: Clock, label: 'Faster Hiring', value: '53%' }
    ],
    avatar: '/images/testimonials/elias.jpg',
    featured: true
  }
]

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const featuredTestimonials = testimonials.filter(t => t.featured)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  const currentTestimonial = featuredTestimonials[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45
    })
  }

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-20 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header with Enhanced Badge */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="mb-6 inline-flex items-center gap-3 glass-premium px-6 py-3 text-sm font-bold shadow-xl shadow-teal-500/20 group cursor-default"
            >
              <Star className="h-5 w-5 fill-teal-500 text-teal-500 animate-pulse" />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Real Results from Real Businesses
              </span>
              <Sparkles className="h-4 w-4 text-teal-500 group-hover:animate-spin" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white"
            >
              See How Businesses Like Yours{' '}
              <span className="text-shimmer relative inline-block">
                Are Winning
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl font-medium text-gray-600 dark:text-gray-300"
            >
              From construction to healthcare, businesses are cutting costs by{' '}
              <span className="font-bold text-teal-600 dark:text-teal-400">87%</span>
              {' '}and reclaiming{' '}
              <span className="font-bold text-emerald-600 dark:text-emerald-400">15-25 hours per week</span>
            </motion.p>
          </div>

          {/* Featured Testimonial Carousel with 3D Effects */}
          <div className="relative mx-auto mb-16 max-w-6xl perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4 },
                      rotateY: { duration: 0.5 }
                    }}
                    className="glass-card-depth p-10 lg:p-14 shadow-[0_25px_60px_rgba(20,184,166,0.25)]"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Floating Accent Elements */}
                    <motion.div 
                      className="absolute top-8 right-8 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                      {/* Left: Enhanced Quote Section */}
                      <div className="relative z-10">
                        <motion.div 
                          className="mb-6 flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + i * 0.1 }}
                            >
                              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, rotate: -15 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Quote className="mb-6 h-16 w-16 text-teal-500 dark:text-teal-400 opacity-80" />
                        </motion.div>
                        
                        <motion.blockquote 
                          className="mb-10 text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed text-gray-900 dark:text-white break-words hyphens-auto"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <span className="text-teal-600 dark:text-teal-400">"</span>
                          {currentTestimonial.quote}
                          <span className="text-teal-600 dark:text-teal-400">"</span>
                        </motion.blockquote>
                        
                        <motion.div 
                          className="flex items-center gap-5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        >
                          <motion.div 
                            className="h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-500 p-1 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="h-full w-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                              <span className="text-3xl font-black text-transparent bg-gradient-to-br from-teal-600 to-emerald-600 bg-clip-text">
                                {currentTestimonial.name.charAt(0)}
                              </span>
                            </div>
                          </motion.div>
                          <div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {currentTestimonial.name}
                            </div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {currentTestimonial.role}
                            </div>
                            <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                              {currentTestimonial.company}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right: Premium Metrics Cards */}
                      <div className="grid gap-5">
                        {currentTestimonial.metrics?.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50, rotateY: -15 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ delay: 0.7 + idx * 0.15 }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -5,
                              transition: { type: "spring", stiffness: 400 }
                            }}
                            className="group relative flex items-center gap-6 glass-premium p-7 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 cursor-default"
                          >
                            {/* Animated Background Gradient on Hover */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={false}
                            />
                            
                            <motion.div 
                              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/40"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <metric.icon className="h-8 w-8 text-white" />
                            </motion.div>
                            
                            <div className="relative z-10">
                              <div className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">
                                {metric.value}
                              </div>
                              <div className="text-base font-semibold text-gray-700 dark:text-gray-300">
                                {metric.label}
                              </div>
                            </div>
                            
                            {/* Pulse Effect Icon */}
                            <motion.div
                              className="absolute top-3 right-3 text-teal-500 opacity-0 group-hover:opacity-100"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <Zap className="h-5 w-5" />
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Enhanced Navigation with Magnetic Buttons */}
            <motion.div 
              className="mt-10 flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-full glass-premium shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all group"
              >
                <ArrowLeft className="h-6 w-6 text-teal-600 dark:text-teal-400 group-hover:-translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex gap-3">
                {featuredTestimonials.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1)
                      setCurrentIndex(idx)
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-12 bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/50'
                        : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-full glass-premium shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all group"
              >
                <ArrowRight className="h-6 w-6 text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  )
}
