
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Clock, TrendingUp, DollarSign, ArrowRight, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function GuaranteeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="guarantee" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-dark-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          {/* Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 shadow-2xl shadow-teal-500/30">
              <Shield className="h-16 w-16 text-white" />
            </div>
            
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Our 30-Day "Time-Back & ROI" Guarantee
            </h2>
            
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              If you don't save at least 10 hours a week OR see measurable ROI within 30 days, we'll continue optimizing your automations <strong className="font-semibold text-gray-900 dark:text-white">at no additional cost</strong> until you do. Terms and conditions apply.*
            </p>
          </motion.div>

          {/* Guarantee Features */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: 'Free Until It Works',
                description: 'Your plan is free until you save time',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: Clock,
                title: '30 Days to Prove It',
                description: 'Fast results or we keep working for free',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: CheckCircle,
                title: 'Zero Risk Promise',
                description: 'We only win when you win',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 p-8 text-center shadow-lg border-2 border-teal-200 dark:border-teal-800"
              >
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color}`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why We Can Offer This */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-white lg:p-12"
          >
            <h3 className="mb-6 text-center text-2xl font-bold lg:text-3xl">
              Why We Can Confidently Offer This Guarantee
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Proven Track Record</h4>
                  <p className="text-teal-50">
                    93% of our clients see measurable time savings within the first 30 days. Most save 15-20 hours per week immediately.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Battle-Tested Technology</h4>
                  <p className="text-teal-50">
                    Our AI employees are trained on 10,000+ hours of real business operations. They've already made and learned from millions of decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Dedicated Support</h4>
                  <p className="text-teal-50">
                    You're not alone. Our team provides white-glove onboarding and ongoing optimization to ensure you start saving time fast.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Measurable Results</h4>
                  <p className="text-teal-50">
                    Every AI employee comes with built-in time tracking. You'll see exactly how many hours you're getting back, in real-time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12 grid gap-6 rounded-2xl bg-gray-50 p-8 dark:bg-gray-800/50 md:grid-cols-4"
          >
            {[
              { value: '97%', label: 'Client Success Rate' },
              { value: '30 days', label: 'Average Time to ROI' },
              { value: '200+', label: 'Businesses Transformed' },
              { value: '$47K', label: 'Average Annual Savings' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-2 text-3xl font-bold text-teal-600 dark:text-teal-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center"
          >
            <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Get Your Time Back?
            </h3>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              See exactly how much time and money you could save—get your free estimate in 2 minutes
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="btn-primary text-lg">
                <Link href="#calculator">
                  Get My Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" className="btn-secondary text-lg">
                <Link href="/consultation">
                  Schedule a Call
                </Link>
              </Button>
            </div>

            {/* Contact Options */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Questions? Call us: (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@quantumleap.io" className="hover:text-teal-600 dark:hover:text-teal-400">
                  hello@quantumleap.io
                </a>
              </div>
            </div>
          </motion.div>

          {/* Trust Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400"
          >
            <p className="mb-4">
              <strong className="text-gray-900 dark:text-white">Zero Risk.</strong> If you're not saving time within 30 days, we'll continue optimizing at no additional cost. 
              That's how confident we are that intelligent automation will transform your business.
            </p>
            <p className="text-xs">
              *Guarantee applies to clients who actively participate in implementation, provide necessary system access, and follow recommended workflows. 
              "Measurable ROI" is defined as documented time savings of 10+ hours per week or quantifiable cost reductions exceeding the service investment. 
              Continued optimization services are subject to availability and reasonable use terms. Full terms available upon request.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
