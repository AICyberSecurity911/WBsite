
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'
import { AITeamCalculator } from '@/components/calculator/ai-team-calculator'

export function CalculatorSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="calculator" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0.7, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0.7, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-900 dark:bg-teal-900 dark:text-teal-100"
            >
              <Calculator className="h-4 w-4" />
              Interactive Assessment
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0.7, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            >
              Calculate Your AI Workforce Savings
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0.7, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            >
              Answer 7 quick questions to discover which AI employees can save you the most time and money
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0.7, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AITeamCalculator />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
