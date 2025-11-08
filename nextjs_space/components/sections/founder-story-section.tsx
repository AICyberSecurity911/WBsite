
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award, TrendingUp, Users, Rocket } from 'lucide-react'

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
          
          {/* LEFT COLUMN: Image + Credential Cards Below */}
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

            {/* 4 Credential Cards in 2x2 Grid with 3D Effect */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Card 1: MIT & Caltech Alumni */}
              <motion.div 
                className="group relative p-5 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 rounded-xl transition-all duration-300 hover:ring-2 hover:ring-accent-cyan hover:scale-[1.05] shadow-lg hover:shadow-purple-500/50"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-white">MIT & Caltech Alumni</div>
                </div>
              </motion.div>

              {/* Card 2: $170M+ Business Value */}
              <motion.div 
                className="group relative p-5 bg-gradient-to-br from-green-400 via-emerald-500 to-emerald-600 rounded-xl transition-all duration-300 hover:ring-2 hover:ring-accent-cyan hover:scale-[1.05] shadow-lg hover:shadow-emerald-500/50"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-white">Delivered $170M+ Business Value</div>
                </div>
              </motion.div>

              {/* Card 3: 65+ Epic Transformations */}
              <motion.div 
                className="group relative p-5 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-xl transition-all duration-300 hover:ring-2 hover:ring-accent-cyan hover:scale-[1.05] shadow-lg hover:shadow-blue-500/50"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-white">Orchestrated 65+ Epic Transformations</div>
                </div>
              </motion.div>

              {/* Card 4: 75+ Game-Changing Products */}
              <motion.div 
                className="group relative p-5 bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 rounded-xl transition-all duration-300 hover:ring-2 hover:ring-accent-cyan hover:scale-[1.05] shadow-lg hover:shadow-orange-500/50"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-white">Ignited 75+ Game-Changing Products</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Quote and Content */}
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
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-primary-accent pl-6 italic">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
