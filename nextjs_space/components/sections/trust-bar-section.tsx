
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react'

export function TrustBarSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const trustStats = [
    {
      icon: TrendingUp,
      value: '87%',
      label: 'Cost Savings',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: CheckCircle,
      value: '99.2%',
      label: 'Accuracy Rate',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Always On',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      value: '60-Day',
      label: 'Guarantee',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  // Mock company logos - these would be replaced with actual client logos
  const companyLogos = [
    { name: 'TechCorp', color: 'from-blue-600 to-cyan-600' },
    { name: 'GlobalCo', color: 'from-purple-600 to-pink-600' },
    { name: 'Innovate', color: 'from-teal-600 to-emerald-600' },
    { name: 'Nexus', color: 'from-orange-600 to-red-600' },
    { name: 'Vertex', color: 'from-indigo-600 to-blue-600' },
    { name: 'Catalyst', color: 'from-green-600 to-teal-600' }
  ]

  if (!mounted) {
    return null
  }

  return (
    <section ref={ref} className="border-t border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="container">
        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Deploy battle-tested AI employees trained on 10,000+ hours...
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center">
                  <div className={`flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="mb-4 text-center">
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Trusted by innovative businesses worldwide
            </p>
          </div>

          {/* Animated Logo Strip */}
          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {companyLogos.map((logo, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="flex h-16 w-40 flex-shrink-0 items-center justify-center"
                >
                  <div className={`flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-r ${logo.color} px-6 py-3 text-center font-bold text-white shadow-md opacity-80 hover:opacity-100 transition-opacity`}>
                    {logo.name}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo, idx) => (
                <div
                  key={`logo-2-${idx}`}
                  className="flex h-16 w-40 flex-shrink-0 items-center justify-center"
                >
                  <div className={`flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-r ${logo.color} px-6 py-3 text-center font-bold text-white shadow-md opacity-80 hover:opacity-100 transition-opacity`}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
