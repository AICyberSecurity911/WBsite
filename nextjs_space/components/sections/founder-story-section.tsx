
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award, TrendingUp, Users, Zap } from 'lucide-react'

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image with Parallax Effect */}
          <motion.div 
            className="relative"
            style={{ y: imageY }}
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 mix-blend-overlay z-10" />
              <Image
                src="/founder-paras-khurana.jpg"
                alt="Paras Khurana, Founder & CEO of QuantumLeap AI"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Credential Cards */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">$170M+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Business Value</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">65+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Transformations</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content with Parallax Effect */}
          <motion.div 
            className="space-y-6"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
                <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">Meet the Founder</span>
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
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-teal-500 pl-6 italic">
                "I've spent 20 years building systems for Fortune 500s — and I've also been the exhausted small-business owner doing payroll at midnight. I founded QuantumLeap AI to bridge that gap: bringing enterprise-level power to everyday entrepreneurs. When you partner with us, you don't just get AI and Security— you get freedom, clarity, and a team that never quits."
              </blockquote>

              <div className="pt-4">
                <div className="text-xl font-bold text-slate-900 dark:text-white">
                  — Paras Khurana
                </div>
                <div className="text-base text-teal-600 dark:text-teal-400 font-semibold">
                  Founder & CEO
                </div>
              </div>
            </motion.div>

            {/* Credentials Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">MIT & Caltech</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Alumni</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">$170M+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Business Value</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">65+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Transformations</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">75+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Products Launched</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
