
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react'
import Image from 'next/image'

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
      value: 'Money Back',
      label: 'Guarantee',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  // Actual company logos
  const companyLogos = [
    { name: 'IBM', logo: '/company-logos/ibm.png' },
    { name: 'GE', logo: '/company-logos/ge.png' },
    { name: 'Deloitte', logo: '/company-logos/deloitte.png' },
    { name: 'BMO', logo: '/company-logos/bmo.png' },
    { name: 'CIBC', logo: '/company-logos/cibc.png' },
    { name: 'ING', logo: '/company-logos/ing.png' },
    { name: 'Husky', logo: '/company-logos/husky.png' },
    { name: 'Allianz', logo: '/company-logos/allianz.png' },
    { name: 'UCOL', logo: '/company-logos/ucol.png' },
    { name: 'CIIS', logo: '/company-logos/ciis.png' },
    { name: 'Scotiabank', logo: '/company-logos/scotiabank.png' },
    { name: 'HSBC', logo: '/company-logos/hsbc.png' },
    { name: 'ICICI Bank', logo: '/company-logos/icici.png' },
    { name: 'NASA', logo: '/company-logos/nasa.png' },
    { name: 'RIM', logo: '/company-logos/rim.png' }
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
              Trusted by companies that demand Perfection
            </p>
          </div>

          {/* Animated Logo Strip */}
          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {companyLogos.map((logo, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="flex h-16 w-32 flex-shrink-0 items-center justify-center transition-all duration-300"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                      sizes="128px"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop - hidden from accessibility tree */}
              <div aria-hidden="true" className="contents">
                {companyLogos.map((logo, idx) => (
                  <div
                    key={`logo-2-${idx}`}
                    className="flex h-16 w-32 flex-shrink-0 items-center justify-center transition-all duration-300"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={logo.logo}
                        alt=""
                        fill
                        className="object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                        sizes="128px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
