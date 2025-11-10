'use client'

import Image from 'next/image'
import { Award, TrendingUp, Users, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { FlameBorder } from '@/components/ui/flame-border'

const credentials = [
  {
    icon: Award,
    label: 'MIT/Caltech Alumni',
    description: 'Elite education background',
  },
  {
    icon: TrendingUp,
    label: '$170M+ Business Value',
    description: 'Proven track record',
  },
  {
    icon: Users,
    label: '65+ Transformations',
    description: 'Successful projects delivered',
  },
  {
    icon: Rocket,
    label: '75+ Products',
    description: 'Built and scaled',
  },
]

export function FounderStorySection() {
  return (
    <section className="py-20 lg:py-32 bg-qgd-bg relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-qgd-card/20 via-qgd-bg to-qgd-card/20" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Founder Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100 qgd-gradient-overlay" />
              <div className="relative aspect-square rounded-xl overflow-hidden border border-qgd-border shadow-qgd">
                <Image
                  src="/founder-paras-khurana-new.jpg"
                  alt="Paras Khurana - Founder & CEO, QuantumLeap AI"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <FlameBorder />
            </div>
          </motion.div>

          {/* Right: Story & Credentials */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-qgd-fg mb-6">
              Built by Someone Who <span className="text-qgd-accent">Gets It</span>
            </h2>
            <blockquote className="text-lg text-qgd-muted italic border-l-4 border-qgd-primary pl-6 mb-8">
              "After scaling 65+ businesses and building 75+ products, I realized one thing: 
              the gap between small businesses and Fortune 500s isn't talent—it's access to tools. 
              QuantumLeap AI exists to close that gap."
            </blockquote>
            <div className="mb-8">
              <p className="text-qgd-fg font-semibold text-xl mb-1">Paras Khurana</p>
              <p className="text-qgd-muted">Founder & CEO, QuantumLeap AI</p>
            </div>

            {/* Credential Cards */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.label}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative group">
                    <div className="absolute -inset-0.5 rounded-xl opacity-0 blur transition duration-500 group-hover:opacity-100 qgd-gradient-overlay" />
                    <div className="relative bg-qgd-card border border-qgd-border rounded-xl p-4 transition-all duration-300 hover:shadow-qgd">
                      <cred.icon className="w-8 h-8 text-qgd-primary mb-3" />
                      <div className="font-semibold text-qgd-fg text-sm mb-1">
                        {cred.label}
                      </div>
                      <div className="text-xs text-qgd-muted">
                        {cred.description}
                      </div>
                    </div>
                    <FlameBorder r={8} seg={1} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
