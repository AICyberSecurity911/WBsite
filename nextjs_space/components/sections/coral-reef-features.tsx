'use client'

import Link from 'next/link'
import { Zap, Shield, Users, TrendingUp, Bot, Lock, BarChart, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { FlameBorder } from '@/components/ui/flame-border'

const features = [
  {
    icon: Bot,
    title: 'AI Workforce',
    description: 'Deploy AI employees that work 24/7, handle repetitive tasks, and scale instantly.',
    href: '/ai-workforce',
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Eliminate 70%+ of busywork with smart workflows that adapt to your business.',
    href: '/intelligent-automation',
  },
  {
    icon: Shield,
    title: 'Beyond Background Checks™',
    description: 'Prevent costly bad hires with comprehensive cyber intelligence investigations.',
    href: '/background-checks',
  },
  {
    icon: Lock,
    title: 'Cyber Intelligence',
    description: 'NASA-grade threat detection and security monitoring for your business.',
    href: '/cyber-intelligence',
  },
  {
    icon: TrendingUp,
    title: 'Business Transformation',
    description: 'Scale profitably without chaos using data-driven process optimization.',
    href: '/business-transformation',
  },
  {
    icon: Users,
    title: 'Expert Advisory',
    description: 'Strategic guidance from MIT/Caltech alumni and industry leaders.',
    href: '/about-us',
  },
  {
    icon: BarChart,
    title: 'ROI Guaranteed',
    description: 'See measurable results in 48 hours or get 100% money back.',
    href: '/consultation',
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Setup in 15 minutes, integrate in days, not months.',
    href: '/consultation',
  },
]

export function CoralReefFeatures() {
  return (
    <section className="py-20 lg:py-32 bg-qgd-bg relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-qgd-bg via-qgd-card/20 to-qgd-bg" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-qgd-fg mb-4">
            Everything You Need to <span className="text-qgd-accent">Scale Smart</span>
          </h2>
          <p className="text-qgd-muted text-lg max-w-3xl mx-auto">
            From AI employees to cybersecurity intelligence, get the complete toolkit to compete at enterprise level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={feature.href} className="block h-full group">
                <div className="relative h-full">
                  <div className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100 qgd-gradient-overlay" />
                  <div className="relative h-full bg-qgd-card border border-qgd-border rounded-xl p-6 transition-all duration-300 hover:shadow-qgd-glow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-qgd-primary/10 border border-qgd-primary/20 group-hover:bg-qgd-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-qgd-primary group-hover:text-qgd-accent transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-qgd-fg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-qgd-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <FlameBorder />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
