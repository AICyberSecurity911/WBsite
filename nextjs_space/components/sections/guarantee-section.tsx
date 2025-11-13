
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Clock, TrendingUp, DollarSign, ArrowRight, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FlameBorder } from '@/components/ui/flame-border'
import Link from 'next/link'

export function GuaranteeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="guarantee" ref={ref} className="py-12 sm:py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
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
            <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
              <Shield className="h-16 w-16 text-qgd-fg" style={{ filter: 'drop-shadow(0 0 10px rgba(124, 58, 237, 0.5))' }} />
            </div>
            
            <h2 className="mb-4 text-4xl font-bold text-[#f6f7ff] sm:text-5xl">
              Our 30-Day "Time-Back & ROI" Guarantee
            </h2>
            
            <p className="mx-auto max-w-3xl text-xl text-[#b8b6c9]">
              If you don't save at least 10 hours a week OR see measurable ROI within 30 days, we'll continue optimizing your automations <strong className="font-semibold text-[#f6f7ff]">at no additional cost</strong> until you do. Terms and conditions apply.*
            </p>
          </motion.div>

          {/* Guarantee Features */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: 'Free Until It Works',
                description: 'Your plan is free until you save time',
              },
              {
                icon: Clock,
                title: '30 Days to Prove It',
                description: 'Fast results or we keep working for free',
              },
              {
                icon: CheckCircle,
                title: 'Zero Risk Promise',
                description: 'We only win when you win',
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="relative rounded-2xl qgd-card qgd-card-hover p-8 text-center overflow-hidden"
              >
                <FlameBorder />
                <div className="relative z-20">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: 'var(--primary)' }}>
                    <feature.icon className="h-8 w-8 text-qgd-fg" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#f6f7ff]">
                    {feature.title}
                  </h3>
                  <p className="text-[#b8b6c9]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why We Can Offer This */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12 relative rounded-2xl qgd-card qgd-card-hover p-8 text-qgd-fg lg:p-12 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
          >
            <FlameBorder />
            <div className="relative z-20">
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
                    <p className="text-qgd-fg/80">
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
                    <p className="text-qgd-fg/80">
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
                    <p className="text-qgd-fg/80">
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
                    <p className="text-qgd-fg/80">
                      Every AI employee comes with built-in time tracking. You'll see exactly how many hours you're getting back, in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12 relative grid gap-6 rounded-2xl qgd-card qgd-card-hover p-8 md:grid-cols-4 overflow-hidden"
          >
            <FlameBorder />
            {[
              { value: '97%', label: 'Client Success Rate' },
              { value: '30 days', label: 'Average Time to ROI' },
              { value: '200+', label: 'Businesses Transformed' },
              { value: '$47K', label: 'Average Annual Savings' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center relative z-20">
                <div className="mb-2 text-3xl font-bold" style={{ color: 'var(--ring)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#b8b6c9]">
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
            <h3 className="mb-4 text-3xl font-bold text-[#f6f7ff]">
              Ready to Get Your Time Back?
            </h3>
            <p className="mb-8 text-xl text-[#b8b6c9]">
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#b8b6c9]">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Questions? Call us: (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@quantumleap.io" className="hover:text-qgd-ring600 dark:hover:text-qgd-ring400">
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
            className="mt-12 border-t border-qgd-border pt-8 text-center text-sm text-qgd-muted dark:border-qgd-border dark:text-qgd-muted"
          >
            <p className="mb-4">
              <strong className="text-[#f6f7ff]">Zero Risk.</strong> If you're not saving time within 30 days, we'll continue optimizing at no additional cost. 
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
