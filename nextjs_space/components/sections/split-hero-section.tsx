'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function SplitHeroSection() {
  const [videoEnded, setVideoEnded] = useState(false)
  const [hoveredPanel, setHoveredPanel] = useState<'smb' | 'enterprise' | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    setVideoEnded(true)
  }

  useEffect(() => {
    // Ensure video autoplays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err)
      })
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-slate-950" style={{ height: 'calc(100vh - 4rem)' }}>
      <AnimatePresence mode="wait">
        {!videoEnded ? (
          // VIDEO PHASE
          <motion.div
            key="video-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            {/* Video Container with Split Text Overlays */}
            <div className="relative w-full h-full flex flex-col md:flex-row">
              
              {/* LEFT PANEL - Video with "Entrepreneur" Overlay */}
              <div className="relative flex-1 overflow-hidden">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  autoPlay
                  onEnded={handleVideoEnd}
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                
                {/* Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* "Entrepreneur" Text Overlay */}
                <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-16 lg:pt-20">
                  <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white drop-shadow-2xl"
                    style={{
                      textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.3)'
                    }}
                  >
                    Entrepreneur
                  </motion.h1>
                </div>
              </div>

              {/* DIVIDER LINE */}
              <div className="w-full md:w-1 h-px md:h-full bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/60 to-transparent z-10" />

              {/* RIGHT PANEL - Video with "Enterprise" Overlay */}
              <div className="relative flex-1 overflow-hidden">
                {/* Same video mirrored/cloned for right panel */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  autoPlay
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                
                {/* Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* "Enterprise" Text Overlay */}
                <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-16 lg:pt-20">
                  <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white drop-shadow-2xl"
                    style={{
                      textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.3)'
                    }}
                  >
                    Enterprise
                  </motion.h1>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          // INTERACTIVE PANELS PHASE
          <motion.div
            key="panels-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="relative h-full flex flex-col md:flex-row"
          >
            {/* LEFT PANEL - Entrepreneurs (Teal Background) */}
            <motion.div
              className="relative flex-1 group cursor-pointer overflow-hidden"
              onHoverStart={() => setHoveredPanel('smb')}
              onHoverEnd={() => setHoveredPanel(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Teal Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800" />
              
              {/* Animated Background Effects */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400/30 to-cyan-600/30 animate-blob" />
                <div className="absolute top-10 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-morph" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 lg:p-12 text-white z-10">
                <motion.div
                  className="text-center space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white drop-shadow-lg"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    Entrepreneurs
                  </motion.h2>

                  <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-light text-teal-50 max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Build Your AI-Powered Business Empire
                  </motion.p>

                  <Link href="/business-transformation">
                    <motion.button
                      className="mt-8 px-10 py-5 bg-white text-teal-900 rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:shadow-teal-300/60 hover:bg-teal-50 transition-all flex items-center gap-3 mx-auto group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-teal-900 font-bold">Enter Here</span>
                      <ArrowRight className="w-6 h-6 text-teal-900 group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* DIVIDER LINE */}
            <div className="w-full md:w-1 h-px md:h-full bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/30 to-transparent" />

            {/* RIGHT PANEL - Enterprises (Gray Background) */}
            <motion.div
              className="relative flex-1 group cursor-pointer overflow-hidden"
              onHoverStart={() => setHoveredPanel('enterprise')}
              onHoverEnd={() => setHoveredPanel(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gray Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
              
              {/* Animated Background Effects */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-600/30 to-slate-700/30 animate-blob" />
                <div className="absolute top-10 left-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-morph" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 lg:p-12 text-white">
                <motion.div
                  className="text-center space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white drop-shadow-lg"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    Enterprises
                  </motion.h2>

                  <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-light text-gray-50 max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Transform Operations at Enterprise Scale
                  </motion.p>

                  <Link href="/consultation">
                    <motion.button
                      className="mt-8 px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:shadow-gray-300/60 hover:bg-gray-50 transition-all flex items-center gap-3 mx-auto group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-900 font-bold">Enter Here</span>
                      <ArrowRight className="w-6 h-6 text-gray-900 group-hover:translate-x-2 transition-transform duration-300" />
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
