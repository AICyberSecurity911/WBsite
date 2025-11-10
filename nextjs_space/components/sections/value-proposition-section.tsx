'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { FlameBorder } from '@/components/ui/flame-border'

export function ValuePropositionSection() {
  return (
    <section className="py-20 lg:py-32 bg-qgd-bg relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* SMB Panel */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100 qgd-gradient-overlay" />
              <div className="relative bg-gradient-to-br from-qgd-primary/10 to-qgd-card border border-qgd-border rounded-xl p-8 shadow-qgd">
                <h3 className="text-2xl font-bold text-qgd-fg mb-4">
                  Small Business Edition
                </h3>
                <p className="text-qgd-muted mb-6">
                  Get Fortune 500 capabilities at startup prices. AI employees, automation, and security that scales with you.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Setup in 15 minutes',
                    'Results in 48 hours',
                    '87% average cost savings',
                    '100% money-back guarantee',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-qgd-fg">
                      <CheckCircle className="w-5 h-5 text-qgd-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/smb"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-qgd-primary hover:bg-qgd-primary/90 text-qgd-primaryContrast rounded-lg font-semibold transition-all hover:shadow-qgd-glow"
                >
                  Explore SMB Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <FlameBorder />
            </div>
          </motion.div>

          {/* Enterprise Panel */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100 qgd-gradient-overlay" />
              <div className="relative bg-gradient-to-br from-qgd-accent/10 to-qgd-card border border-qgd-border rounded-xl p-8 shadow-qgd">
                <h3 className="text-2xl font-bold text-qgd-fg mb-4">
                  Enterprise Edition
                </h3>
                <p className="text-qgd-muted mb-6">
                  Complete business transformation with AI deployment, cybersecurity intelligence, and strategic advisory.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'NASA-grade security',
                    'MIT/Caltech alumni team',
                    '65+ transformations completed',
                    'Custom integration support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-qgd-fg">
                      <CheckCircle className="w-5 h-5 text-qgd-ring flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/business-transformation"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-qgd-accent hover:bg-qgd-accent/90 text-qgd-primaryContrast rounded-lg font-semibold transition-all hover:shadow-qgd-glow"
                >
                  Explore Enterprise Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <FlameBorder />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
