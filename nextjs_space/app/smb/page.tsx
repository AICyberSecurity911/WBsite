
'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/smb/theme-context'
import { ThemeToggle } from '@/components/smb/theme-toggle'
import { HeroSection } from '@/components/smb/hero-section'
import { ScrollProgress } from '@/components/smb/scroll-progress'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  Award,
  Clock,
  Target,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function SMBLandingPage() {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Schema markup for SEO/AEO/AGO
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Small Business AI Solutions - QuantumLeap AI",
    "description": "Stop doing everything yourself. Get Fortune 500-level AI workforce and intelligence protection at prices that make sense for your business. Join 200+ owners who escaped the 70-hour work week.",
    "url": "https://quantumleapai.abacusai.app/smb",
    "provider": {
      "@type": "Organization",
      "name": "QuantumLeap AI",
      "url": "https://quantumleapai.abacusai.app"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Workforce for Small Business",
        "description": "Your on-demand team of AI experts to handle tasks automatically",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Intelligent Automation for SMBs",
        "description": "Save hours every week with custom business automations",
        "priceCurrency": "USD"
      }
    ]
  }

  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      <ScrollProgress />
      
      <div className="min-h-screen transition-colors duration-300 dark:bg-[#0A0E27] bg-white">
        {/* Header with Theme Toggle */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0A0E27]/80 border-b border-gray-200 dark:border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Header />
              <ThemeToggle />
            </div>
          </div>
        </header>
        
        <main>
          {/* Hero Section - NEW DESIGN */}
          <HeroSection />

          {/* Services Preview Section */}
          <section 
            ref={servicesRef}
            className="py-20 md:py-32 bg-gradient-to-b from-secondary-bg via-primary-bg/10 to-secondary-bg"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Your Complete Small Business Toolkit
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Everything you need to run your business like the big players—without the enterprise price tag.
                  </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* AI Workforce */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/ai-workforce" className="block group">
                      <div className="relative bg-gradient-to-br from-accent-cyan/10 to-accent-teal/10 border border-accent-cyan/30 rounded-2xl p-8 hover:border-accent-cyan transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/20 h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-cyan/20 rounded-xl">
                            <Users className="w-8 h-8 text-accent-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                              AI Workforce
                            </h3>
                            <p className="text-gray-300 text-lg">
                              Your on-demand team of experts.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          Need a marketing manager? Data analyst? Customer service team? Get AI employees who work 24/7, never call in sick, and cost less than hiring one intern.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Intelligent Automation */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/intelligent-automation" className="block group">
                      <div className="relative bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 border border-accent-purple/30 rounded-2xl p-8 hover:border-accent-purple transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple/20 h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-purple/20 rounded-xl">
                            <Zap className="w-8 h-8 text-accent-purple" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors">
                              Intelligent Automation
                            </h3>
                            <p className="text-gray-300 text-lg">
                              Save hours every week, automatically.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          Stop copying data between systems, chasing invoices, and sending the same emails over and over. Let automation handle the boring stuff while you focus on growth.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Beyond Background Checks */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/background-checks" className="block group">
                      <div className="relative bg-gradient-to-br from-primary-accent/10 to-accent-coral/10 border border-primary-accent/30 rounded-2xl p-8 hover:border-primary-accent transition-all duration-300 hover:shadow-xl hover:shadow-primary-accent/20 h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-primary-accent/20 rounded-xl">
                            <Shield className="w-8 h-8 text-primary-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-accent transition-colors">
                              Beyond Background Checks™
                            </h3>
                            <p className="text-gray-300 text-lg">
                              Avoid disastrous hires with deep vetting.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-primary-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          Standard background checks miss the red flags that cost you everything. Find out what they're hiding before they join your team—not after they destroy it.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Cyber Intelligence */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/cyber-intelligence" className="block group">
                      <div className="relative bg-gradient-to-br from-accent-gold/10 to-accent-lime/10 border border-accent-gold/30 rounded-2xl p-8 hover:border-accent-gold transition-all duration-300 hover:shadow-xl hover:shadow-accent-gold/20 h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-gold/20 rounded-xl">
                            <Award className="w-8 h-8 text-accent-gold" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-gold transition-colors">
                              Cyber Intelligence
                            </h3>
                            <p className="text-gray-300 text-lg">
                              NASA-trusted protection at a small business price.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          Think you're too small for hackers? Think again. Get the same intelligence protection trusted by NASA and Fortune 500s—before a cyberattack wipes you out.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Business Transformation - Full Width */}
                  <motion.div variants={fadeInUp} className="md:col-span-2">
                    <Link href="/business-transformation" className="block group">
                      <div className="relative bg-gradient-to-br from-accent-teal/10 to-accent-cyan/10 border border-accent-teal/30 rounded-2xl p-8 hover:border-accent-teal transition-all duration-300 hover:shadow-xl hover:shadow-accent-teal/20">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-teal/20 rounded-xl">
                            <TrendingUp className="w-8 h-8 text-accent-teal" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-teal transition-colors">
                              Business Transformation
                            </h3>
                            <p className="text-gray-300 text-lg">
                              The roadmap to scale your business without the chaos.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          Struggling to grow without burning out? Get a proven, step-by-step plan to scale profitably—without working more hours or hiring a massive team.
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section 
            ref={testimonialsRef}
            className="py-20 md:py-32 bg-gradient-to-b from-secondary-bg to-primary-bg/10"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate={testimonialsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Join 200+ Business Owners Who Escaped the 70-Hour Work Week
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Real entrepreneurs. Real results. Real freedom.
                  </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="space-y-8">
                  {/* Testimonial 1 - Harper L. Kingsley */}
                  <motion.div variants={fadeInUp}>
                    <div className="bg-gradient-to-br from-secondary-bg to-primary-bg border border-accent-cyan/30 rounded-2xl p-8 hover:border-accent-cyan transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-teal flex items-center justify-center text-white text-2xl font-bold">
                            HK
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                            ))}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-1">Harper L. Kingsley</h4>
                          <p className="text-accent-cyan text-sm">Founder, Adroit</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">BEFORE</span>
                          </div>
                          <p className="text-gray-300">
                            Working 65-hour weeks, drowning in admin tasks. My family barely saw me. Growth was stalled because I couldn't focus on strategy.
                          </p>
                        </div>
                        
                        <div className="bg-accent-lime/10 border border-accent-lime/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-accent-lime/20 text-accent-lime text-xs font-bold rounded-full">AFTER</span>
                          </div>
                          <p className="text-gray-300">
                            QuantumLeap AI cut my admin time in half. I have my weekends back, and revenue is up 28%. My team actually enjoys coming to work now because we're not constantly firefighting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Testimonial 2 - Lydia V. Penrose */}
                  <motion.div variants={fadeInUp}>
                    <div className="bg-gradient-to-br from-secondary-bg to-primary-bg border border-accent-purple/30 rounded-2xl p-8 hover:border-accent-purple transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple/10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center text-white text-2xl font-bold">
                            LP
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                            ))}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-1">Lydia V. Penrose</h4>
                          <p className="text-accent-purple text-sm">CTO, Code Vibe Studio</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">BEFORE</span>
                          </div>
                          <p className="text-gray-300">
                            We thought we were too small for a cyberattack. No security plan, no backups, just hoping for the best.
                          </p>
                        </div>
                        
                        <div className="bg-accent-lime/10 border border-accent-lime/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-accent-lime/20 text-accent-lime text-xs font-bold rounded-full">AFTER</span>
                          </div>
                          <p className="text-gray-300">
                            QuantumLeap found 19 vulnerabilities we fixed immediately. That peace of mind is priceless. Now I sleep at night knowing our clients' data is actually protected.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Testimonial 3 - Tiffany Duncan */}
                  <motion.div variants={fadeInUp}>
                    <div className="bg-gradient-to-br from-secondary-bg to-primary-bg border border-primary-accent/30 rounded-2xl p-8 hover:border-primary-accent transition-all duration-300 hover:shadow-xl hover:shadow-primary-accent/10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-accent to-accent-coral flex items-center justify-center text-white text-2xl font-bold">
                            TD
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                            ))}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-1">Tiffany Duncan</h4>
                          <p className="text-primary-accent text-sm">CEO, Talent Leap AI</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">BEFORE</span>
                          </div>
                          <p className="text-gray-300">
                            I nearly hired someone with a hidden history of fraud that a standard background check missed completely. My gut said something was off, but the paperwork looked clean.
                          </p>
                        </div>
                        
                        <div className="bg-accent-lime/10 border border-accent-lime/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-accent-lime/20 text-accent-lime text-xs font-bold rounded-full">AFTER</span>
                          </div>
                          <p className="text-gray-300">
                            QuantumLeap flagged it instantly and saved us from a disaster. They found court records under a different name, social media posts bragging about scams—stuff no regular check would catch. Worth every penny.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Urgency & Final CTA Section */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-primary-bg/10 to-secondary-bg relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-primary-accent to-accent-purple animate-gradient-shift" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div variants={fadeInUp} className="mb-8">
                  <Clock className="w-16 h-16 mx-auto text-primary-accent mb-6" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Get Your Time Back?
                  </h2>
                  <p className="text-xl text-gray-300 mb-4">
                    Stop working <span className="text-primary-accent font-bold">IN</span> your business. Start working <span className="text-accent-cyan font-bold">ON</span> your business.
                  </p>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Over 200 entrepreneurs have already taken back control. The only question is: how much longer can you afford to wait?
                  </p>
                </motion.div>

                {/* Urgency indicators */}
                <motion.div 
                  variants={fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                  <div className="bg-secondary-bg/80 border border-accent-cyan/30 rounded-xl p-6">
                    <CheckCircle className="w-8 h-8 text-accent-lime mx-auto mb-3" />
                    <p className="text-white font-semibold mb-1">Fast Setup</p>
                    <p className="text-gray-400 text-sm">Live in 48 hours</p>
                  </div>
                  <div className="bg-secondary-bg/80 border border-accent-purple/30 rounded-xl p-6">
                    <Target className="w-8 h-8 text-accent-purple mx-auto mb-3" />
                    <p className="text-white font-semibold mb-1">Zero Risk</p>
                    <p className="text-gray-400 text-sm">30-day guarantee</p>
                  </div>
                  <div className="bg-secondary-bg/80 border border-primary-accent/30 rounded-xl p-6">
                    <Award className="w-8 h-8 text-primary-accent mx-auto mb-3" />
                    <p className="text-white font-semibold mb-1">Real Results</p>
                    <p className="text-gray-400 text-sm">Proven ROI</p>
                  </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div variants={fadeInUp}>
                  <Link 
                    href="/consultation"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-accent via-accent-coral to-primary-accent bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-primary-accent/50 transition-all duration-500 transform hover:scale-105"
                  >
                    Claim My Spot
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                  <p className="text-gray-400 text-sm mt-4">
                    Free consultation • No obligations • Results guaranteed
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
