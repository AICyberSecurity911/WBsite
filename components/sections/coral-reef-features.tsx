
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon, Zap, Shield, Users, TrendingUp, Clock, Lock, Target, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Feature Card Type
interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accentColor: string
  link?: string
  index: number
}

// Feature Card Component with Hover Effects
export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  accentColor, 
  link,
  index 
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Ring color mapping for Tailwind
  const ringColorMap: Record<string, string> = {
    'accent-coral': 'hover:ring-accent-coral',
    'accent-cyan': 'hover:ring-accent-cyan',
    'accent-purple': 'hover:ring-accent-purple',
    'accent-gold': 'hover:ring-accent-gold',
    'accent-lime': 'hover:ring-accent-lime',
    'accent-pink': 'hover:ring-accent-pink',
    'accent-teal': 'hover:ring-accent-teal',
    'accent-white': 'hover:ring-accent-white',
  }

  const ringClass = ringColorMap[accentColor] || 'hover:ring-primary-accent'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative bg-secondary-bg rounded-2xl p-6 
        min-h-[280px] flex flex-col
        transition-all duration-300 ease-in-out
        hover:scale-[1.03] hover:ring-2 ${ringClass}
        focus-within:ring-2 focus-within:ring-primary-accent
        group cursor-pointer
      `}
    >
      {/* Top Accent Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
        style={{ 
          backgroundColor: isHovered ? `var(--${accentColor})` : 'transparent',
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Icon Container */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center w-14 h-14 rounded-xl mb-4"
        style={{ 
          backgroundColor: `rgba(var(--${accentColor}-rgb, 255, 127, 80), 0.1)`,
        }}
      >
        <Icon 
          className="w-7 h-7 transition-colors duration-300"
          style={{ 
            color: isHovered 
              ? `var(--${accentColor})` 
              : 'var(--text-secondary)'
          }}
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-display font-bold text-text-primary mb-3 group-hover:text-primary-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed flex-grow mb-4">
        {description}
      </p>

      {/* Optional Link */}
      {link && (
        <Link 
          href={link}
          className="text-sm font-semibold text-primary-accent hover:text-accent-cyan transition-colors duration-200 flex items-center gap-1 group/link focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:outline-none rounded px-1 -mx-1"
        >
          Learn more 
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </Link>
      )}

      {/* Glow Effect on Hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: isHovered 
            ? `0 0 40px rgba(var(--${accentColor}-rgb, 255, 127, 80), 0.15)` 
            : 'none'
        }}
      />
    </motion.div>
  )
}

// Features Section Component
export function CoralReefFeatures() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Deployment',
      description: 'Get your AI workforce up and running in 48 hours. No lengthy onboarding, no training delays.',
      accentColor: 'accent-coral',
      link: '/intelligent-automation'
    },
    {
      icon: Shield,
      title: 'NASA-Grade Security',
      description: 'Military-level encryption and compliance. Your data is protected by the same standards used in aerospace.',
      accentColor: 'accent-cyan',
      link: '/cyber-intelligence'
    },
    {
      icon: Users,
      title: 'AI Workforce Scaling',
      description: 'Scale your team from 1 to 100 AI employees in minutes. Pay only for what you use.',
      accentColor: 'accent-purple',
      link: '/ai-workforce'
    },
    {
      icon: TrendingUp,
      title: '87% Cost Reduction',
      description: 'Average savings across all clients. Eliminate overhead, benefits, and turnover costs.',
      accentColor: 'accent-gold',
      link: '/business-transformation'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Your AI team never sleeps, takes breaks, or calls in sick. Continuous productivity guaranteed.',
      accentColor: 'accent-lime',
      link: '/ai-workforce'
    },
    {
      icon: Lock,
      title: 'Zero Data Leakage',
      description: 'Advanced threat detection catches risks that traditional background checks miss.',
      accentColor: 'accent-pink',
      link: '/background-checks'
    },
    {
      icon: Target,
      title: '99.2% Accuracy Rate',
      description: 'Proven performance across 10,000+ hours of training. Human-level decision making.',
      accentColor: 'accent-teal',
      link: '/intelligent-automation'
    },
    {
      icon: Sparkles,
      title: 'Fortune 500 Quality',
      description: 'Enterprise-grade AI accessible to businesses of all sizes. Level the playing field.',
      accentColor: 'accent-white',
      link: '/business-transformation'
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-primary-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary-accent" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary-accent">
              Why Choose QuantumLeap AI
            </span>
            <div className="h-px w-8 bg-primary-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            Built for Modern Business Challenges
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed">
            Every feature is designed to solve real problems. No gimmicks, just proven technology 
            that delivers measurable results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary-accent hover:bg-primary-accent/90 text-text-primary font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-primary-accent hover:ring-offset-2 hover:ring-offset-primary-bg focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:outline-none"
          >
            <Link href="/consultation">
              Start Your Free Assessment
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
