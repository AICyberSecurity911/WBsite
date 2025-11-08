
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award, TrendingUp, Users, Rocket } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function FounderStorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Parallax effect on image - moves slower than container
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])

  return (
    <section id="about" ref={containerRef} className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Image Only */}
          <motion.div 
            className="space-y-8"
            style={{ y: imageY }}
          >
            {/* Founder Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/founder-paras-khurana-new.jpg"
                alt="Paras Khurana, Founder & CEO of QuantumLeap AI"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Quote, Name/Title, and Credential Cards */}
          <motion.div 
            className="space-y-6 lg:pt-12"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/20 rounded-full mb-4">
                <Award className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Meet the Founder</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Built by Someone Who's Been in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400">
                  Your Shoes
                </span>{' '}
                — and in the Boardroom
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-lg text-slate-800 dark:text-gray-100 leading-relaxed border-l-4 border-primary-accent pl-6 italic">
                "I've spent 20 years building systems for Fortune 500s — and I've also been the exhausted small-business owner doing payroll at midnight. I founded QuantumLeap AI to bridge that gap: bringing enterprise-level power to everyday entrepreneurs. When you partner with us, you don't just get AI and Security— you get freedom, clarity, and a team that never quits."
              </blockquote>

              <div className="pt-4 pb-6">
                <div className="text-xl font-bold text-slate-900 dark:text-white">
                  — Paras Khurana
                </div>
                <div className="text-base text-teal-600 dark:text-teal-400 font-semibold">
                  Founder & CEO
                </div>
              </div>

              {/* 4 Credential Cards in 2x2 Grid - Using shadcn Card */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {/* Card 1: MIT & Caltech Alumni */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-purple-600 border-purple-500 hover:border-accent-cyan hover:scale-[1.05] transition-all duration-300">
                    <div className="p-5 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-bold text-white">MIT & Caltech Alumni</p>
                    </div>
                  </Card>
                </motion.div>

                {/* Card 2: $170M+ Business Value */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-emerald-600 border-emerald-500 hover:border-accent-cyan hover:scale-[1.05] transition-all duration-300">
                    <div className="p-5 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-bold text-white">Delivered $170M+ Business Value</p>
                    </div>
                  </Card>
                </motion.div>

                {/* Card 3: 65+ Epic Transformations */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-blue-600 border-blue-500 hover:border-accent-cyan hover:scale-[1.05] transition-all duration-300">
                    <div className="p-5 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-bold text-white">Orchestrated 65+ Epic Transformations</p>
                    </div>
                  </Card>
                </motion.div>

                {/* Card 4: 75+ Game-Changing Products */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-orange-600 border-orange-500 hover:border-accent-cyan hover:scale-[1.05] transition-all duration-300">
                    <div className="p-5 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-bold text-white">Ignited 75+ Game-Changing Products</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
