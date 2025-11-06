'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Zap, 
  Mail, 
  FileText, 
  Calendar, 
  Database,
  CheckCircle,
  CheckCircle2,
  AlertCircle,
  Workflow,
  Target,
  BarChart3,
  Shield,
  ArrowRight,
  Users,
  Lock,
  Award,
  LightbulbIcon,
  Timer,
  Building
} from 'lucide-react'
import Link from 'next/link'
import { AutomationCalculator } from '@/components/calculator/automation-calculator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function IntelligentAutomationPage() {
  // Schema markup for SEO/AEO/AGO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intelligent Automations for SMBs",
    "description": "Stop losing time and profit to manual work. QuantumLeap's Intelligent Automations connect your tools, eliminate repetitive tasks, and save 20+ hours/week—without hiring.",
    "provider": {
      "@type": "Organization",
      "name": "QuantumLeap AI",
      "url": "https://quantumleapai.abacusai.app"
    },
    "areaServed": "United States",
    "serviceType": "Business Process Automation"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QuantumLeap AI",
    "url": "https://quantumleapai.abacusai.app",
    "logo": "https://quantumleapai.abacusai.app/logo.png",
    "description": "Intelligent automations, AI workforce solutions, cyber intelligence, and business transformation for SMBs.",
    "founder": {
      "@type": "Person",
      "name": "Paras Khurana"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://quantumleapai.abacusai.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Intelligent Automation",
        "item": "https://quantumleapai.abacusai.app/intelligent-automation"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Isn't automation expensive or complicated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Intelligent Automations are modular and plug directly into your existing tools. Most clients see ROI within the first month."
        }
      },
      {
        "@type": "Question",
        "name": "Will automation replace my employees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. It replaces tasks, not people. Your team spends less time clicking and more time creating value."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every integration is built on encrypted APIs and monitored 24/7 by a team that's helped secure NASA systems."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't know where to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That's exactly why we built the calculator and free audit. You'll get a clear roadmap tailored to your business."
        }
      }
    ]
  }

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [tlddrRef, tlddrInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [calculatorRef, calculatorInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [blogRef, blogInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [guaranteeRef, guaranteeInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const automations = [
    { name: 'LeadFlow', description: 'Captures and routes leads from every source', price: 299, icon: Target },
    { name: 'InvoiceIQ', description: 'Auto-creates invoices & follow-ups', price: 399, icon: FileText },
    { name: 'MailPilot', description: 'Reads, tags & auto-responds to emails', price: 299, icon: Mail },
    { name: 'OpsSync', description: 'Links CRMs, Sheets & project apps into one flow', price: 499, icon: Workflow },
    { name: 'ClientPulse', description: 'Automated feedback & retention loops', price: 399, icon: TrendingUp },
    { name: 'DataBridge', description: 'Syncs apps—no manual imports ever', price: 299, icon: Database },
    { name: 'FormFlow', description: 'Auto-processes forms & PDFs', price: 199, icon: FileText },
    { name: 'SmartDocs', description: 'Auto-routes and summarizes reports', price: 299, icon: FileText }
  ]

  const testimonials = [
    {
      name: 'Peter Fernandes',
      company: 'AAA Construction Services',
      before: '7 days/month on invoicing; late payments',
      after: 'InvoiceIQ + OpsSync automated billing & reminders',
      result: '12 hours/week saved, 62% faster collections, +$45K cash-flow gain',
      image: '/company-logos/allianz.png'
    },
    {
      name: 'Tiffany Duncan',
      company: 'Talent Leap AI',
      title: 'Director',
      before: '6 platforms to track leads and follow-ups',
      after: 'LeadFlow + MailPilot centralized and nurtured automatically',
      result: '+34% revenue; 2 extra client slots/month',
      image: '/company-logos/ibm.png'
    },
    {
      name: 'Gurpreet Sandhu',
      company: 'Real Estate Vision',
      title: 'Broker',
      before: 'Manual listing updates across CRM, MLS, and ads',
      after: 'OpsSync + DataBridge synced all channels',
      result: '18 hours/week saved; errors down 97%; ~$61K annual savings',
      image: '/company-logos/deloitte.png'
    },
    {
      name: 'Lydia V. Penrose',
      company: 'Code Vibe Studio',
      title: 'Co-Founder',
      before: 'Clients waited days for reports',
      after: 'SmartDocs compiled insights overnight',
      result: 'Turnaround cut from 72h to 6h; retention up 29%',
      image: '/company-logos/ge.png'
    },
    {
      name: 'Harper Kingsley',
      company: 'Adroit Infosystems',
      title: 'VP',
      before: 'Overwhelmed inbox; missed deals',
      after: 'MailPilot handled 75% of inbound messages',
      result: 'Team stress ↓ 68%; close rate ↑ 41%',
      image: '/company-logos/hsbc.png'
    }
  ]

  const scrollToCalculator = () => {
    const calc = document.getElementById('calculator')
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-white dark:bg-zinc-950">
        
        {/* HERO SECTION */}
        <section 
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-white dark:from-zinc-950 dark:via-teal-950/10 dark:to-zinc-950 py-20 lg:py-32"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Copy */}
              <motion.div variants={fadeInUp} className="space-y-8">
                
                {/* Trust Bar Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  <Shield className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                    Fortune 500 Strategy | MIT & Caltech Engineering | NASA-Recognized Security
                  </span>
                </div>
                
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Save 20+ Hours a Week and Cut Costs by{' '}
                  <span className="text-teal-600 dark:text-teal-400">60–85%</span>
                  {' '}— Automate the Busywork That's Holding You Back
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Your time drives growth. Our Intelligent Automations connect your tools, remove repetitive tasks, and work 24/7—so you can do the work that moves the needle.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={scrollToCalculator}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-6 text-lg group"
                  >
                    <Timer className="w-5 h-5 mr-2" />
                    Reveal My Hidden Hours & Savings
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-2 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 px-8 py-6 text-lg font-semibold"
                  >
                    <Link href="#solution">
                      <Workflow className="w-5 h-5 mr-2" />
                      Show Me What I Can Automate
                    </Link>
                  </Button>
                </div>
                
              </motion.div>
              
              {/* Right Column: Illustration/Stats */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/20 dark:to-emerald-900/20 p-8 border border-teal-200 dark:border-teal-800 shadow-2xl">
                  
                  {/* Automation Icons Flow */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-6">
                      {[Mail, FileText, Database, Workflow, Target, TrendingUp, Calendar, BarChart3, CheckCircle2].map((Icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="w-16 h-16 bg-white dark:bg-zinc-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-200 dark:border-zinc-800"
                        >
                          <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-zinc-800"
                  >
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">20+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Hours Saved/Week</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -top-4 -right-4 bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-zinc-800"
                  >
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">60-85%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
                  </motion.div>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </section>

        {/* TL;DR SECTION (AEO/AGO Optimized) */}
        <section 
          ref={tlddrRef}
          className="py-16 bg-gray-50 dark:bg-zinc-900/50"
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={tlddrInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border-2 border-teal-200 dark:border-teal-800 p-8 shadow-lg">
              
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
                  <LightbulbIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    What is QuantumLeap Intelligent Automations?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    The executive summary for decision-makers
                  </p>
                </div>
              </div>
              
              {/* Bottom Line */}
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 mb-6">
                <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                  A self-learning automation layer that links your CRM, email, finance, and operations tools—then takes over the repeatable work.
                </p>
              </div>
              
              {/* Key Outcomes */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Outcomes (typical):
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: Clock, text: 'Reclaim 15–25 hours per week per employee' },
                    { icon: DollarSign, text: 'Reduce manual labor costs by 60–85%' },
                    { icon: Zap, text: 'Deploy in ≤ 14 days (no code)' },
                    { icon: Shield, text: 'Built by the team that secured NASA systems' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Founder Quote */}
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-6 mb-6">
                <p className="text-gray-900 dark:text-gray-100 italic mb-3">
                  "Automation doesn't replace people. It replaces the repetitive grind that keeps them from doing their best work."
                </p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  — Paras Khurana, Founder & CEO
                </p>
              </div>
              
              {/* Critical Insight */}
              <div className="border-l-4 border-amber-500 pl-6 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Critical Insight (250+ years combined experience):
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Every manual workflow is a hidden expense center. Find it, automate it, and your margins expand.
                </p>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={scrollToCalculator}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                >
                  Take the 90-Second Assessment
                </Button>
              </div>
              
            </div>
          </motion.div>
        </section>


        {/* PROBLEM SECTION */}
        <section 
          ref={problemRef}
          className="py-20 bg-white dark:bg-zinc-950"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={problemInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                The Manual Trap
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                You didn't start a business to babysit spreadsheets
              </p>
            </motion.div>
            
            {/* Problem Cards */}
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto space-y-6 mb-12">
              <div className="bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20 border border-red-200 dark:border-red-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  But today you:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Copy/paste data between CRMs and sheets',
                    'Manually chase invoices and follow-ups',
                    'Spend weekends "catching up" on reports'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 dark:text-gray-200 text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-lg p-6">
                <p className="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-2">
                  Reality:
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  The average SMB loses <strong>~1,200 hours/year</strong> to manual tasks—that's{' '}
                  <strong className="text-amber-600 dark:text-amber-400">~$93,000 in hidden waste</strong>.
                </p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <p className="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-2">
                  Result:
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  Burnout, errors, slow cash flow, missed sales.
                </p>
              </div>
            </motion.div>
            
            {/* CTA */}
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                There's a better way. Let automation handle the grind while you focus on growth.
              </p>
              <Button
                size="lg"
                onClick={scrollToCalculator}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
              >
                <Zap className="w-5 h-5 mr-2" />
                See What You Can Automate
              </Button>
            </motion.div>
            
          </motion.div>
        </section>

        {/* SOLUTION SECTION */}
        <section 
          id="solution"
          ref={solutionRef}
          className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900/50 dark:to-zinc-950"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6">
                <Workflow className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  THE INTELLIGENT AUTOMATION SUITE
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Your Automated Business Backbone
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each automation plugs directly into your existing tools and works 24/7—no coding required
              </p>
            </motion.div>
            
            {/* Automation Cards Grid */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {automations.map((auto, i) => {
                const Icon = auto.icon
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {auto.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {auto.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Starts at
                      </span>
                      <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                        ${auto.price}<span className="text-sm">/mo</span>
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
            
            {/* CTA */}
            <motion.div variants={fadeInUp} className="text-center bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-teal-200 dark:border-teal-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Build My Automated Business Plan (Free)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Pinpoint the top 3 workflows to automate first and the ROI you can expect.
              </p>
              <Button
                size="lg"
                onClick={scrollToCalculator}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Get My Free Automation Plan
              </Button>
            </motion.div>
            
          </motion.div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section 
          ref={testimonialsRef}
          className="py-20 bg-white dark:bg-zinc-950"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6">
                <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  REAL BEFORE/AFTER RESULTS
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Results That Speak for Themselves
              </h2>
            </motion.div>
            
            {/* Testimonials Grid */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((test, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-50 to-teal-50 dark:from-zinc-900 dark:to-teal-950/10 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {test.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {test.title && `${test.title}, `}{test.company}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Before:
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {test.before}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          After:
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {test.after}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                      Result:
                    </p>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {test.result}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* CTA */}
            <motion.div variants={fadeInUp} className="text-center">
              <Button
                size="lg"
                onClick={scrollToCalculator}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                I Want Results Like These
              </Button>
            </motion.div>
            
          </motion.div>
        </section>

        {/* CALCULATOR SECTION */}
        <section 
          id="calculator"
          ref={calculatorRef}
          className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 dark:from-teal-950/20 dark:via-emerald-950/20 dark:to-teal-950/20"
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={calculatorInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                You're Not Just "Busy." You're Leaking Profit.
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                In under 2 minutes, this free scan shows how many hours manual work is stealing each month, 
                how much money that equals at your rate, and which automations recover the most time and cost first.
              </p>
            </div>
            
            {/* Calculator Component */}
            <AutomationCalculator />
            
          </motion.div>
        </section>


        {/* STRATEGIC BLOG SECTION */}
        <section 
          ref={blogRef}
          className="py-20 bg-white dark:bg-zinc-950"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            
            {/* Blog Article */}
            <motion.article variants={fadeInUp} className="prose prose-lg dark:prose-invert max-w-none">
              
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6">
                  <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                    STRATEGIC INSIGHT
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  When Busy Feels Productive — The Hidden Cost of Doing Everything Manually
                </h2>
              </div>
              
              <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 mb-8 border border-gray-200 dark:border-zinc-800">
                <p className="text-lg leading-relaxed">
                  Mark thought he was productive. He ran a small design agency, worked 12-hour days, and never missed a deadline.
                </p>
                <p className="text-lg leading-relaxed">
                  But he was constantly copying leads from email into his CRM, manually sending invoices, and checking Slack at midnight to see if a client approved a mockup.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-gray-900 dark:text-gray-100">
                  On paper, he was "busy." In reality, he was stuck in maintenance mode — running the business instead of growing it.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                The Myth of "I'll Just Do It Myself"
              </h3>
              
              <p>Most entrepreneurs start with this mindset. It feels smart at first:</p>
              
              <blockquote className="border-l-4 border-teal-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300">
                "Why pay for tools or help when I can just do it myself?"
              </blockquote>
              
              <p>But over time, every "quick manual fix" becomes a brick in a wall that traps your time.</p>
              
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Here's what it really costs:
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Copying leads/emails</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">312 hrs/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Creating invoices</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">208 hrs/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Updating reports</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">156 hrs/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Managing projects manually</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">260 hrs/year</span>
                  </div>
                  <div className="border-t-2 border-amber-300 dark:border-amber-700 pt-3 mt-3 flex justify-between items-center">
                    <span className="font-bold text-gray-900 dark:text-gray-100">Total</span>
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">936 hrs/year</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic pt-2">
                    That's almost 24 work weeks — on things a simple automation could do in the background.
                  </p>
                </div>
              </div>
              
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                So when you say, "I don't have time to automate," what you're really saying is: 
                <em className="text-teal-600 dark:text-teal-400"> "I'd rather spend six months every year on tasks a bot can do."</em>
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-teal-600" />
                The Automation Effect: Turning Chaos into Flow
              </h3>
              
              <p>When Mark finally automated, the change was instant.</p>
              
              <ul className="space-y-2 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span><strong>LeadFlow</strong> captured every web inquiry and tagged it in his CRM.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span><strong>InvoiceIQ</strong> generated and sent invoices automatically after client approvals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span><strong>OpsSync</strong> updated tasks across ClickUp, Slack, and Google Sheets without him touching a thing.</span>
                </li>
              </ul>
              
              <p>He didn't add new staff. He added systems that never sleep.</p>
              
              <div className="bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-500 rounded-xl p-6 my-8">
                <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-4">
                  The result?
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">19 hours a week freed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">$48,000 in recovered productivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">Zero "forgotten" client follow-ups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">And his evenings — finally quiet</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Mark realized something powerful: automation didn't make him less human. It made his business more intelligent.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                Why Automation Pays for Itself
              </h3>
              
              <p>Let's talk numbers — because entrepreneurs respect math.</p>
              
              <p>
                If your effective hourly value is <strong>$75/hour</strong> (what your time's truly worth), 
                and you spend even <strong>10 hours/week</strong> on manual admin, 
                that's <strong className="text-red-600 dark:text-red-400">$39,000 a year</strong> burned on low-value tasks.
              </p>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-6 my-8">
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  QuantumLeap's Intelligent Automations start at just <strong className="text-teal-600 dark:text-teal-400">$299/month</strong>, 
                  which means the first automation typically <strong>pays for itself in under two weeks</strong>.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  That's not "nice to have." That's profit recovery.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-4 flex items-center gap-2">
                <Building className="w-6 h-6 text-gray-600" />
                The QuantumLeap Difference
              </h3>
              
              <p>Other automation agencies sell complexity — custom scripts, long onboarding, or "digital transformation" buzzwords.</p>
              
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                QuantumLeap's Intelligent Automations are built differently:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">No-Code Deployments:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> Launch within 14 days.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">24/7 Monitoring:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> Runs in the background, silently.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Scalable:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> Start with one workflow and grow to enterprise-grade.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Secure:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> Built by the team that helped secure NASA systems.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">World's best:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> Team from MIT, Caltech, and leading tech institutes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Expertise:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> 250+ years of combined experience.</span>
                  </div>
                </li>
              </ul>
              
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border-2 border-teal-300 dark:border-teal-700 rounded-xl p-8 my-8 text-center">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Your only job? Tell us what drains your time.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  We'll automate it and show you exactly how much it's worth.
                </p>
                <Button
                  size="lg"
                  onClick={scrollToCalculator}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Reveal My Hidden Hours & Savings
                </Button>
              </div>
              
              <div className="border-t-2 border-gray-200 dark:border-zinc-800 pt-8 mt-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  The Bottom Line
                </h3>
                <p className="text-lg">
                  Automation isn't about robots taking over. It's about reclaiming what matters — your time, focus, and sanity.
                </p>
                <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mt-4">
                  You can't scale chaos. But you can automate it.
                </p>
              </div>
              
            </motion.article>
            
          </motion.div>
        </section>


        {/* FAQ SECTION */}
        <section 
          ref={faqRef}
          className="py-20 bg-gray-50 dark:bg-zinc-900/50"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Get answers to common questions about intelligent automation
              </p>
            </motion.div>
            
            {/* FAQ Accordion */}
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-4">
                
                <AccordionItem value="faq-1" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    Isn't automation expensive or complicated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                    <p className="mb-4">
                      No. Intelligent Automations are modular and plug directly into your existing tools. Most clients see ROI within the first month.
                    </p>
                    <Button
                      size="sm"
                      onClick={scrollToCalculator}
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      Show Me My ROI
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-2" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    Will automation replace my employees?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                    <p className="mb-4">
                      Not at all. It replaces tasks, not people. Your team spends less time clicking and more time creating value.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="#solution">
                        Automate the Repetitive Work
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-3" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    How secure is it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                    <p className="mb-4">
                      Every integration is built on encrypted APIs and monitored 24/7 by a team that's helped secure NASA systems.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/">
                        Learn More About Security
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-4" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    What if I don't know where to start?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                    <p className="mb-4">
                      That's exactly why we built the calculator and free audit. You'll get a clear roadmap tailored to your business.
                    </p>
                    <Button
                      size="sm"
                      onClick={scrollToCalculator}
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      Get My 30-Day Efficiency Plan
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
              </Accordion>
            </motion.div>
            
          </motion.div>
        </section>

        {/* GUARANTEE SECTION */}
        <section 
          ref={guaranteeRef}
          className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={guaranteeInView ? "visible" : "hidden"}
            className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our 60-Day "Time-Back" Guarantee
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                If you don't save at least 10 hours a week or see measurable ROI in 60 days, 
                we'll continue optimizing your automations free until you do.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToCalculator}
                className="bg-white text-teal-700 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-xl"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Get My Free Automation Blueprint
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
              >
                <a 
                  href={process.env.NEXT_PUBLIC_TIDYCAL_BOOK_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">14</div>
                  <div className="text-white/80">Days to Deploy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">60-85%</div>
                  <div className="text-white/80">Cost Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Always Working</div>
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  )
}
