
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export function SplitHeroSection() {
  const [hoveredPanel, setHoveredPanel] = useState<'smb' | 'enterprise' | null>(null)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      
      {/* Split Panels Container */}
      <div className="relative h-screen flex flex-col lg:flex-row">
        
        {/* LEFT PANEL - SMB Focus */}
        <motion.div
          className="relative flex-1 group cursor-pointer overflow-hidden"
          onHoverStart={() => setHoveredPanel('smb')}
          onHoverEnd={() => setHoveredPanel(null)}
          animate={{
            flex: hoveredPanel === 'smb' ? 1.2 : hoveredPanel === 'enterprise' ? 0.8 : 1,
            opacity: hoveredPanel === 'enterprise' ? 0.7 : 1
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 via-teal-700/90 to-cyan-900/90" />
          
          {/* Animated Background Video Placeholder */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-teal-400/30 to-cyan-600/30 animate-pulse" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 lg:p-12 text-white">
            <motion.div
              className="max-w-xl text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">For Small Business Owners</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Stop Working <span className="text-cyan-300">70-Hour Weeks</span> While Your Business Barely Grows
              </h1>

              <h2 className="text-xl lg:text-2xl font-light text-cyan-100">
                Get the same AI workforce that Fortune 500 companies use—without the Fortune 500 price tag.
              </h2>

              <p className="text-lg text-cyan-50 font-medium">
                Reclaim your life while your revenue grows.
              </p>

              <div className="space-y-4 pt-4">
                <p className="text-base text-cyan-100 italic">
                  Tired of being trapped in your own business?
                </p>

                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-cyan-50">Join 200+ owners who escaped the burnout trap</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/90 rounded-lg text-white font-semibold text-sm animate-pulse">
                  <Zap className="w-4 h-4" />
                  <span>🔥 Only 3 Small Business Transformation Spots Left This Month</span>
                </div>
              </div>

              <Link href="/business-transformation">
                <motion.button
                  className="mt-6 px-8 py-4 bg-white text-teal-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-3 mx-auto group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Stop the Burnout – Get My Freedom Back
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        <div className="w-px lg:w-1 h-1 lg:h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />

        {/* RIGHT PANEL - Enterprise Focus */}
        <motion.div
          className="relative flex-1 group cursor-pointer overflow-hidden"
          onHoverStart={() => setHoveredPanel('enterprise')}
          onHoverEnd={() => setHoveredPanel(null)}
          animate={{
            flex: hoveredPanel === 'enterprise' ? 1.2 : hoveredPanel === 'smb' ? 0.8 : 1,
            opacity: hoveredPanel === 'smb' ? 0.7 : 1
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90" />
          
          {/* Animated Background Video Placeholder */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-600/30 animate-pulse" />
          </div>

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
