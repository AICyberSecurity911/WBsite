
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
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

  // Actual company logos
  const companyLogos = [
    { name: 'IBM', logo: '/company-logos/ibm.png' },
    { name: 'GE', logo: '/company-logos/ge.png' },
    { name: 'Deloitte', logo: '/company-logos/deloitte.png' },
    { name: 'BMO', logo: '/company-logos/bmo.png' },
    { name: 'CIBC', logo: '/company-logos/cibc.png' },
    { name: 'ING', logo: '/company-logos/ing.png' },
    { name: 'Husky', logo: '/company-logos/husky.png' },
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
                      className="object-contain opacity-90 hover:opacity-100 transition-all"
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
                        className="object-contain opacity-90 hover:opacity-100 transition-all"
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
