'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { FlameBorder } from '@/components/ui/flame-border'

export function CoralReefHero() {
  const [videoEnded, setVideoEnded] = useState(false)
  const [showPanels, setShowPanels] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    // Auto-show panels after 8 seconds if video doesn't load/play
    const timer = setTimeout(() => {
      if (!videoEnded) {
        setShowPanels(true)
      }
    }, 8000)

    return () => clearTimeout(timer)
  }, [videoEnded])

  const handleVideoEnd = () => {
    setVideoEnded(true)
    setShowPanels(true)
  }

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-qgd-bg">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-qgd-primary/20 via-qgd-bg to-qgd-accent/10" />
      
      {/* Video Background (if not ended) */}
      {!showPanels && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover opacity-90"
            
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-qgd-bg/40 backdrop-blur-sm" />
        </div>
      )}

      {/* Split Panel Layout */}
      <div className={`container relative z-10 transition-opacity duration-1000 ${showPanels ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel: SMB/Entrepreneur */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100 qgd-gradient-overlay" />
              <div className="relative bg-qgd-card border border-qgd-border rounded-xl p-8 lg:p-10 shadow-qgd">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-qgd-accent" />
                  <span className="text-sm font-semibold text-qgd-accent uppercase tracking-wide">
                    For Entrepreneurs & SMBs
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-qgd-fg mb-4">
                  Compete Like Fortune 500s
                </h2>
                <p className="text-qgd-muted mb-6 leading-relaxed">
                  Get AI employees, intelligent automation, and NASA-grade security at a fraction of enterprise costs. No massive budgets required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/smb"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-qgd-primary hover:bg-qgd-primary/90 text-qgd-primaryContrast rounded-lg font-semibold transition-all hover:shadow-qgd-glow"
                  >
                    View Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/smb#calculator"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-qgd-ring/10 hover:bg-qgd-ring/20 text-qgd-ring border border-qgd-ring/30 rounded-lg font-semibold transition-all"
                  >
                    Calculate Savings
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-qgd-border">
                  <p className="text-xs text-qgd-muted">
                    ✓ Setup in 15 minutes  |  ✓ Results in 48 hours  |  ✓ 100% money-back guarantee
                  </p>
                </div>
              </div>
              <FlameBorder />
            </div>
          </motion.div>

          {/* Right Panel: Enterprise */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100 qgd-gradient-overlay" />
              <div className="relative bg-qgd-card border border-qgd-border rounded-xl p-8 lg:p-10 shadow-qgd">
                <div className="flex items-center gap-2 mb-4">
                  <Play className="w-6 h-6 text-qgd-ring" />
                  <span className="text-sm font-semibold text-qgd-ring uppercase tracking-wide">
                    For Enterprises
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-qgd-fg mb-4">
                  Scale Without the Chaos
                </h2>
                <p className="text-qgd-muted mb-6 leading-relaxed">
                  Transform your operations with AI workforce deployment, intelligent automation, and comprehensive cyber intelligence. Built for scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/business-transformation"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-qgd-accent hover:bg-qgd-accent/90 text-qgd-primaryContrast rounded-lg font-semibold transition-all hover:shadow-qgd-glow"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-qgd-primary/10 hover:bg-qgd-primary/20 text-qgd-primary border border-qgd-primary/30 rounded-lg font-semibold transition-all"
                  >
                    Book Consultation
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-qgd-border">
                  <p className="text-xs text-qgd-muted">
                    ✓ MIT/Caltech alumni  |  ✓ NASA recognition  |  ✓ 65+ transformations
                  </p>
                </div>
              </div>
              <FlameBorder />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
