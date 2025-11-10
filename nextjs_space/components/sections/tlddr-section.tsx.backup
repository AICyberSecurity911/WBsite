
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function TLDDRSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="section-padding bg-teal-50 dark:bg-teal-950/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-3xl font-bold text-[#f6f7ff] sm:text-4xl"
            >
              What You Need to Know About AI Workforce Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#b8b6c9]"
            >
              <strong className="text-[#f6f7ff]">Bottom Line:</strong> Traditional hiring is broken, expensive, and unreliable. AI employees work 24/7, never quit, never complain, and cost 87% less than human employees.
            </motion.p>
          </div>

          {/* Key Takeaways */}
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: CheckCircle,
                title: "Immediate Deployment",
                description: "AI employees start working the moment you deploy them. No weeks of training, no onboarding drama."
              },
              {
                icon: CheckCircle,
                title: "Guaranteed Accuracy",
                description: "99.2% accuracy rate with built-in error detection and self-correction capabilities."
              },
              {
                icon: CheckCircle,
                title: "Massive Cost Savings",
                description: "Average 87% cost reduction compared to traditional employees when factoring in salary, benefits, and overhead."
              },
              {
                icon: CheckCircle,
                title: "Zero Management Overhead",
                description: "No sick days, no drama, no HR issues. Just consistent, reliable performance every single day."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                  <item.icon className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#f6f7ff]">{item.title}</h3>
                  <p className="text-sm font-medium text-[#f6f7ff]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Note */}
          <motion.div
            initial={{ opacity: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8 rounded-2xl border border-teal-200 bg-white p-6 dark:border-teal-800 dark:bg-gray-800"
          >
            <h3 className="mb-2 font-bold text-[#f6f7ff]">Research Note:</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Based on analysis of 10,000+ hours of business operations across 200+ companies, our AI employees consistently outperform human counterparts in accuracy, speed, and cost-effectiveness. Data compiled by our team of former McKinsey consultants and AI researchers.
            </p>
          </motion.div>

          {/* Critical Decision Point */}
          <motion.div
            initial={{ opacity: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-center text-white"
          >
            <h3 className="mb-4 text-2xl font-bold">The Critical Decision Point</h3>
            <p className="mb-6 text-lg">
              Every day you delay is another day of unnecessary costs, errors, and management headaches. 
              The question isn't whether AI will replace traditional business operations—it's whether you'll be ahead of the curve or behind it.
            </p>
            <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-50 font-semibold">
              <Link href="#calculator">
                Get My Free Assessment Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Author Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 flex items-center justify-center gap-4 text-center"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-r from-teal-400 to-emerald-500"
                />
              ))}
            </div>
            <div className="text-left text-sm">
              <p className="font-semibold text-[#f6f7ff]">QuantumLeap AI Research Team</p>
              <p className="text-[#f6f7ff]">Former McKinsey consultants & AI researchers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
