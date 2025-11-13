'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FlameBorder } from '@/components/ui/flame-border'

const testimonials = [
  {
    quote: "QuantumLeap's AI workforce reduced our customer support costs by 68% while improving response times. Game-changing.",
    author: "Sarah Chen",
    role: "COO",
    company: "TechScale Inc",
    rating: 5,
  },
  {
    quote: "The background check service uncovered critical red flags our standard process missed. Saved us from a $2M+ disaster.",
    author: "Marcus Williams",
    role: "CHRO",
    company: "BuildRight Enterprises",
    rating: 5,
  },
  {
    quote: "NASA-grade security without the enterprise price tag. Finally, SMBs can protect their data like Fortune 500s.",
    author: "Priya Patel",
    role: "Founder",
    company: "SecureFlow Solutions",
    rating: 5,
  },
  {
    quote: "Automation eliminated 70% of admin work. My team now focuses on revenue-generating activities. ROI in 3 weeks.",
    author: "James Rodriguez",
    role: "CEO",
    company: "GrowthLab Agency",
    rating: 5,
  },
]

export function HomeTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 bg-qgd-bg relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-qgd-card/20 via-qgd-bg to-qgd-card/20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-qgd-fg mb-4">
            Trusted by <span className="text-qgd-accent">Industry Leaders</span>
          </h2>
          <p className="text-qgd-muted text-lg max-w-2xl mx-auto">
            See why businesses of all sizes choose QuantumLeap AI to transform their operations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative group glow-card">
                  <div className="relative bg-[color:var(--card)] border border-[color:var(--border)] rounded-[24px] p-8 lg:p-12">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-qgd-accent text-qgd-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl text-qgd-fg font-medium mb-8 leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-qgd-primary/20 flex items-center justify-center">
                        <span className="text-qgd-primary font-bold text-lg">
                          {testimonials[currentIndex].author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-qgd-fg">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-sm text-qgd-muted">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                  <FlameBorder />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-qgd-card border border-qgd-border hover:bg-qgd-primary/10 hover:border-qgd-ring transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-qgd-muted hover:text-qgd-ring" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-qgd-accent'
                      : 'bg-qgd-border hover:bg-qgd-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-qgd-card border border-qgd-border hover:bg-qgd-primary/10 hover:border-qgd-ring transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-qgd-muted hover:text-qgd-ring" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
