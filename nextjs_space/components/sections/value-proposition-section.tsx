

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
          className="relative flex w-full flex-1 items-center justify-center overflow-hidden p-8 md:w-1/2 lg:p-12 xl:p-16 bg-qgd-bg"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-qgd-primary/10 via-transparent to-qgd-accent/10" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-qgd-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-qgd-accent/20 blur-3xl" />

            <div className="relative z-10 flex min-h-[500px] flex-col justify-between text-white">
              {/* Content */}
              <div className="space-y-6">
                {/* Pain Hook */}
                <p className="text-lg font-medium text-qgd-muted lg:text-xl">
                  Tired of being trapped in your own business?
                </p>

                {/* Headline */}
                <h2 className="text-3xl font-bold leading-tight lg:text-4xl xl:text-5xl text-qgd-fg">
                  Stop Working 70-Hour Weeks While Your Business Barely Grows.
                </h2>

                {/* Subheading */}
                <p className="text-lg text-qgd-muted lg:text-xl">
                  Get the same AI workforce that Fortune 500 companies use—without the Fortune 500 price tag. Reclaim your life while your revenue grows.
                </p>

                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-qgd-card/50 px-4 py-2 backdrop-blur-sm border border-qgd-border">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-qgd-primary to-qgd-accent ring-2 ring-qgd-border" />
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-qgd-accent to-qgd-ring ring-2 ring-qgd-border" />
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-qgd-ring to-qgd-primary ring-2 ring-qgd-border" />
                  </div>
                  <span className="text-sm font-semibold text-qgd-fg">
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
                    className="group relative w-full overflow-hidden rounded-lg px-8 py-4 font-bold text-qgd-bg shadow-2xl transition-all lg:w-auto bg-qgd-primary hover:bg-qgd-accent"
                    style={{
                      boxShadow: '0 20px 50px var(--glow)'
                    }}
                  >
                    {/* Pulse Animation */}
                    <span className="absolute inset-0 animate-pulse bg-qgd-accent opacity-0 group-hover:opacity-30" />
                    
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
          className="relative flex w-full flex-1 items-center justify-center overflow-hidden p-8 md:w-1/2 lg:p-12 xl:p-16 bg-qgd-card"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-qgd-accent/10 via-transparent to-qgd-ring/10" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-qgd-accent/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-qgd-ring/30 blur-3xl" />

            <div className="relative z-10 flex min-h-[500px] flex-col justify-between text-white">
              {/* Content */}
              <div className="space-y-6">
                {/* Authority Signal */}
                <p className="text-lg font-medium text-qgd-muted lg:text-xl">
                  The team behind $250M+ in documented business value.
                </p>

                {/* Headline */}
                <h2 className="text-3xl font-bold leading-tight lg:text-4xl xl:text-5xl text-qgd-fg">
                  Turn Your Biggest Operational Risks Into Your Competitive Edge.
                </h2>

                {/* Subheading */}
                <p className="text-lg text-qgd-muted lg:text-xl">
                  Stop losing millions to preventable failures. Deploy NASA-recognized intelligence to capture 30% efficiency gains while competitors struggle with basic automation.
                </p>

                {/* Risk Trigger */}
                <div className="flex items-start gap-3 rounded-lg border border-qgd-ring/40 bg-qgd-bg/60 p-4 backdrop-blur-sm">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-qgd-ring" />
                  <p className="text-base font-semibold text-qgd-fg lg:text-lg">
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
                    className="group relative w-full overflow-hidden rounded-lg px-8 py-4 font-bold text-qgd-bg shadow-2xl ring-2 ring-qgd-ring transition-all lg:w-auto bg-qgd-accent hover:bg-qgd-primary"
                    style={{
                      boxShadow: '0 20px 50px var(--glow)'
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
