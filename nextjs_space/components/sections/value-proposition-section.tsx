
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, AlertTriangle } from 'lucide-react'

export function ValuePropositionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* SEO H1 - Hidden but accessible */}
      <h1 className="sr-only">
        AI-Powered Business Transformation and Cybersecurity Solutions for Growth-Focused Companies
      </h1>

      <div className="flex min-h-screen flex-col md:flex-row">
        {/* LEFT PANEL - ENTREPRENEUR (SMB) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex w-full flex-1 items-center justify-center overflow-hidden p-8 md:w-1/2 lg:p-12 xl:p-16"
          style={{
            background: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00423A 100%)'
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-teal-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-teal-600/20 blur-3xl" />

            <div className="relative z-10 flex min-h-[500px] flex-col justify-between text-white">
              {/* Content */}
              <div className="space-y-6">
                {/* Pain Hook */}
                <p className="text-lg font-medium text-teal-100 lg:text-xl">
                  Tired of being trapped in your own business?
                </p>

                {/* Headline */}
                <h2 className="text-3xl font-bold leading-tight lg:text-4xl xl:text-5xl">
                  Stop Working 70-Hour Weeks While Your Business Barely Grows.
                </h2>

                {/* Subheading */}
                <p className="text-lg text-white/90 lg:text-xl">
                  Get the same AI workforce that Fortune 500 companies use—without the Fortune 500 price tag. Reclaim your life while your revenue grows.
                </p>

                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 ring-2 ring-white" />
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 ring-2 ring-white" />
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 ring-2 ring-white" />
                  </div>
                  <span className="text-sm font-semibold">
                    Join 200+ owners who escaped the burnout trap
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link href="/business-transformation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full overflow-hidden rounded-lg px-8 py-4 font-bold text-white shadow-2xl transition-all lg:w-auto"
                    style={{
                      background: 'linear-gradient(90deg, #00897B 0%, #00695C 50%, #00897B 100%)',
                      boxShadow: '0 20px 50px rgba(0, 137, 123, 0.3)'
                    }}
                  >
                    {/* Pulse Animation */}
                    <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-teal-300 to-cyan-300 opacity-0 group-hover:opacity-30" />
                    
                    <span className="relative flex items-center justify-center gap-2 text-lg">
                      Stop the Burnout – Get My Freedom Back
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

        {/* RIGHT PANEL - ENTERPRISE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex w-full flex-1 items-center justify-center overflow-hidden p-8 md:w-1/2 lg:p-12 xl:p-16"
          style={{
            background: 'linear-gradient(135deg, #FF7F50 0%, #FF6347 50%, #FF4500 100%)'
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-orange-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-red-400/30 blur-3xl" />

            <div className="relative z-10 flex min-h-[500px] flex-col justify-between text-white">
              {/* Content */}
              <div className="space-y-6">
                {/* Authority Signal */}
                <p className="text-lg font-medium text-orange-100 lg:text-xl">
                  The team behind $250M+ in documented business value.
                </p>

                {/* Headline */}
                <h2 className="text-3xl font-bold leading-tight lg:text-4xl xl:text-5xl">
                  Turn Your Biggest Operational Risks Into Your Competitive Edge.
                </h2>

                {/* Subheading */}
                <p className="text-lg text-white/90 lg:text-xl">
                  Stop losing millions to preventable failures. Deploy NASA-recognized intelligence to capture 30% efficiency gains while competitors struggle with basic automation.
                </p>

                {/* Risk Trigger */}
                <div className="flex items-start gap-3 rounded-lg border border-yellow-400/40 bg-yellow-950/60 p-4 backdrop-blur-sm">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-yellow-300" />
                  <p className="text-base font-semibold text-yellow-100 lg:text-lg">
                    Every day you delay costs you $47,000 in lost efficiency.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link href="/consultation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full overflow-hidden rounded-lg px-8 py-4 font-bold text-white shadow-2xl ring-2 ring-yellow-400/60 transition-all lg:w-auto"
                    style={{
                      background: 'linear-gradient(90deg, #D84315 0%, #BF360C 50%, #D84315 100%)',
                      boxShadow: '0 20px 50px rgba(216, 67, 21, 0.4)'
                    }}
                  >
                    <span className="relative flex items-center justify-center gap-2 text-lg">
                      Secure Your Market Advantage Now
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  )
}
