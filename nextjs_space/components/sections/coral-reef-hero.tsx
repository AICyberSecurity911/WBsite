'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CoralReefHero() {
  const [mounted, setMounted] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
    // Autoplay video on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err)
        // If autoplay fails, just show the slides
        setVideoEnded(true)
      })
    }
  }, [])

  const handleVideoEnd = () => {
    setVideoEnded(true)
  }

  if (!mounted) {
    return null
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ 
        height: 'calc(100vh - 26px)', // Increased by 1cm (38px)
        marginTop: '64px'
      }}
    >
      <AnimatePresence mode="wait">
        {!videoEnded ? (
          // VIDEO PHASE - Full Screen Split Video with Text Overlays
          <motion.div
            key="video-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            {/* Full-Width Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              autoPlay
              onEnded={handleVideoEnd}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            
            {/* Text Overlays Container - Split Screen Format */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
              {/* LEFT - "Entrepreneur" Overlay - 3mm (11px) top margin */}
              <div className="relative flex-1 flex items-start justify-start pl-6 md:pl-8 lg:pl-12" style={{ paddingTop: '11px' }}>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white drop-shadow-2xl"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.4)'
                  }}
                >
                  Entrepreneur
                </motion.h1>
              </div>

              {/* RIGHT - "Enterprise" Overlay - 3mm (11px) top margin */}
              <div className="relative flex-1 flex items-start justify-start pl-6 md:pl-8 lg:pl-12" style={{ paddingTop: '11px' }}>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white drop-shadow-2xl"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.4)'
                  }}
                >
                  Enterprise
                </motion.h1>
              </div>
            </div>
          </motion.div>
        ) : (
          // SLIDE PANELS PHASE - After Video Ends (ALWAYS SPLIT SCREEN LEFT/RIGHT)
          <motion.div
            key="slides-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="relative h-full grid grid-cols-2"
          >

            {/* LEFT SLIDE: Small Business Edition (Deep Forest Teal #004D40) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative bg-primary-bg flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 h-full"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-xl space-y-4 md:space-y-6">
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-display font-bold text-white leading-[1.15]"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                >
                  Finally Compete with Fortune 500s—
                  <span className="text-primary-accent">Without Their Budget</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg text-teal-100 leading-relaxed"
                >
                  Stop doing everything yourself. Get the AI workforce and intelligence protection that billion-dollar companies use, at prices that make sense for your business.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="pt-4"
                >
                  <Link href="/business-transformation">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-accent text-white font-bold text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-2xl hover:shadow-primary-accent/50 transition-all duration-300 hover:ring-4 hover:ring-primary-accent/30 focus-visible:ring-4 focus-visible:ring-primary-accent focus-visible:outline-none group flex items-center justify-center gap-2 md:gap-3 w-full"
                    >
                      <span>View Small Business Solutions</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SLIDE: Enterprise Edition (Almost Black #121212) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative bg-secondary-bg flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 h-full"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,127,80,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
              </div>

              {/* Ambient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary-accent/10 via-transparent to-transparent opacity-30" />

              {/* Content Container */}
              <div className="relative z-10 max-w-xl space-y-4 md:space-y-6">
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-display font-bold text-white leading-[1.15]"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                >
                  Enterprise AI That Turns{' '}
                  <span className="text-primary-accent">Risk Into Profit</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
                >
                  Stop gambling with AI experiments. Scale automation with intelligence-grade security to capture 30% efficiency gains while competitors fail.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="pt-4"
                >
                  <Link href="/consultation">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-accent text-white font-bold text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-2xl hover:shadow-primary-accent/50 transition-all duration-300 hover:ring-4 hover:ring-primary-accent/30 focus-visible:ring-4 focus-visible:ring-primary-accent focus-visible:outline-none group flex items-center justify-center gap-2 md:gap-3 w-full"
                    >
                      <span>View Enterprise Solutions</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
