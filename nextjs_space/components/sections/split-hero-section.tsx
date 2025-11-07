
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function SplitHeroSection() {
  const [hoveredPanel, setHoveredPanel] = useState<'smb' | 'enterprise' | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const smbRef = useRef<HTMLDivElement>(null)
  const enterpriseRef = useRef<HTMLDivElement>(null)

  // Smooth mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 300 })
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 300 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="gradient-mesh-overlay" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const isClient = typeof window !== 'undefined'
          const initialX = isClient ? Math.random() * window.innerWidth : Math.random() * 1920
          const initialY = isClient ? window.innerHeight + 100 : 1080 + 100
          const animateX = isClient ? Math.random() * window.innerWidth : Math.random() * 1920
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-400/20 rounded-full"
              initial={{
                x: initialX,
                y: initialY,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: -100,
                x: animateX,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          )
        })}
      </div>
      
      {/* Split Panels Container */}
      <div className="relative h-screen flex flex-col md:flex-row">
        
        {/* LEFT PANEL - SMB Focus */}
        <motion.div
          ref={smbRef}
          className="relative flex-1 group cursor-pointer overflow-hidden"
          onHoverStart={() => setHoveredPanel('smb')}
          onHoverEnd={() => setHoveredPanel(null)}
          animate={{
            flex: hoveredPanel === 'smb' ? 1.2 : hoveredPanel === 'enterprise' ? 0.8 : 1,
            opacity: hoveredPanel === 'enterprise' ? 0.7 : 1
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gradient Overlay with Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/95 via-teal-700/90 to-cyan-900/95" />
          
          {/* Animated Background with Blob Morphing */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400/40 to-cyan-600/40 animate-blob" />
            <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-morph" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* Glassmorphism Layer */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-t from-black/10 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 lg:p-12 text-white z-10">
            <motion.div
              className="max-w-xl text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Glassmorphic Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-premium rounded-full border border-white/30 mb-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Clock className="w-4 h-4 text-cyan-300" />
                <span className="text-sm font-semibold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  For Small Business Owners
                </span>
                <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
              </motion.div>

              <motion.h1 
                className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Stop Working{' '}
                <span className="relative inline-block">
                  <span className="text-shimmer">70-Hour Weeks</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                {' '}While Your Business Barely Grows
              </motion.h1>

              <motion.h2 
                className="text-xl lg:text-2xl font-light text-cyan-100/90 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Get the same AI workforce that Fortune 500 companies use—without the Fortune 500 price tag.
              </motion.h2>

              <motion.p 
                className="text-lg lg:text-xl text-white font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Reclaim your life while your revenue grows.
              </motion.p>

              <motion.div 
                className="space-y-6 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <p className="text-base lg:text-lg text-cyan-100/80 italic font-light">
                  Tired of being trapped in your own business?
                </p>

                {/* Social Proof Avatars */}
                <motion.div 
                  className="flex items-center justify-center gap-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 border-2 border-white shadow-lg"
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                    ))}
                  </div>
                  <span className="text-sm lg:text-base text-white font-medium">
                    Join 200+ owners who escaped the burnout trap
                  </span>
                </motion.div>

                {/* Urgency Badge */}
                <motion.div 
                  className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold text-sm lg:text-base shadow-lg shadow-orange-500/30 animate-glow-pulse"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Zap className="w-5 h-5 animate-pulse" />
                  <span>🔥 Only 3 Transformation Spots Left This Month</span>
                </motion.div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <Link href="/business-transformation">
                <motion.button
                  className="relative mt-8 px-10 py-5 bg-white text-teal-700 rounded-2xl font-bold text-base lg:text-lg shadow-2xl hover:shadow-cyan-300/60 transition-all flex items-center gap-3 mx-auto group overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="relative z-10">Stop the Burnout – Get My Freedom Back</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-teal-50"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Hover Expansion Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredPanel === 'smb' ? 1 : 0 }}
          >
            <div className="text-white text-sm animate-bounce">
              Click to explore →
            </div>
          </motion.div>
        </motion.div>

        {/* DIVIDER LINE */}
        <div className="w-full md:w-1 h-px md:h-full bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/30 to-transparent" />

        {/* RIGHT PANEL - Enterprise Focus */}
        <motion.div
          ref={enterpriseRef}
          className="relative flex-1 group cursor-pointer overflow-hidden"
          onHoverStart={() => setHoveredPanel('enterprise')}
          onHoverEnd={() => setHoveredPanel(null)}
          animate={{
            flex: hoveredPanel === 'enterprise' ? 1.2 : hoveredPanel === 'smb' ? 0.8 : 1,
            opacity: hoveredPanel === 'smb' ? 0.7 : 1
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gradient Overlay with Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95" />
          
          {/* Animated Background with Blob Morphing */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/40 to-purple-600/40 animate-blob" />
            <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-morph" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* Glassmorphism Layer */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-t from-black/10 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 lg:p-12 text-white">
            <motion.div
              className="max-w-xl text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">For Enterprise Leaders</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Turn Your Biggest <span className="text-blue-300">Operational Risks</span> Into Your Competitive Edge
              </h1>

              <h2 className="text-xl lg:text-2xl font-light text-blue-100">
                Unleash NASA-Vetted AI Intelligence for 30% Instant Efficiency Leaps—While Rivals Fumble with Outdated Tools.
              </h2>

              <div className="flex items-center justify-center gap-4 text-lg font-semibold text-blue-50">
                <span>Secure Your Edge.</span>
                <span className="text-blue-300">•</span>
                <span>Slash Costs.</span>
                <span className="text-blue-300">•</span>
                <span>Dominate the Market.</span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-blue-100">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-medium">The team behind $250M+ in documented business value</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/90 rounded-lg text-white font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Every day you delay costs you $47,000 in lost efficiency</span>
                </div>
              </div>

              <Link href="/consultation">
                <motion.button
                  className="mt-6 px-8 py-4 bg-white text-indigo-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-3 mx-auto group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Secure Your Market Advantage Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Hover Expansion Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredPanel === 'enterprise' ? 1 : 0 }}
          >
            <div className="text-white text-sm animate-bounce">
              Click to explore →
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
