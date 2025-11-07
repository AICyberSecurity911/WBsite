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
    "name": "Custom Intelligent Automations for SMBs",
    "description": "Stop losing time and profit to manual work. QuantumLeap's custom Intelligent Automations connect your tools, eliminate repetitive tasks, and save 20+ hours/week—without hiring. Run the free ROI scan and get your personalized automation blueprint.",
    "provider": {
      "@type": "Organization",
      "name": "QuantumLeap AI",
      "url": "https://quantumleapai.abacusai.app"
    },
    "areaServed": "United States",
    "serviceType": "Custom Business Process Automation",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "299",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "299",
        "priceCurrency": "USD",
        "billingIncrement": "Monthly"
      }
    }
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
        "name": "Do you provide plug-and-play automation, or do you build custom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We custom-build every automation to fit your exact tools, workflows, and business logic. You're not buying a pre-built template—you're getting intelligent workflows designed specifically for how you operate."
        }
      },
      {
        "@type": "Question",
        "name": "Isn't automation expensive or complicated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Intelligent Automations are modular and plug directly into your existing tools. Most clients see ROI within the first month. The average SMB loses $93,000/year to manual work. Our automations typically cost a fraction of that."
        }
      },
      {
        "@type": "Question",
        "name": "Will automation replace my employees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. Automation replaces tasks, not people. Your team spends less time on manual work and more time creating value."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every integration is built on encrypted APIs and monitored 24/7 by a team that's helped secure NASA systems. We follow enterprise-grade security protocols including end-to-end encryption (AES-256) and SOC2-compliant data handling."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't know where to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That's exactly why we built the calculator and free audit. You'll get a clear roadmap showing which workflows cost you the most time, which automations deliver the fastest ROI, and a 30-day deployment plan."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preliminary findings within 72 hours. Full deployment in 7–14 days. We prioritize quick wins first so you start seeing time savings within the first week."
        }
      },
      {
        "@type": "Question",
        "name": "What if my tools are unique or niche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perfect. We've integrated with hundreds of platforms—from mainstream to niche industry software. If your tools have APIs or CSV exports, we can automate them."
        }
      },
      {
        "@type": "Question",
        "name": "Is this affordable for SMBs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A custom automation costs ~$299–499/mo—less than one day of an employee's salary but works 24/7. Most clients save 10–20x the cost in recovered productivity."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get ongoing monitoring, optimization, and monthly ROI reports. Your dedicated success manager monitors performance 24/7 and handles any tweaks or expansions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I start small and scale later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Most founders start with 1–2 high-impact automations. Once you see the ROI, you expand. Every automation is modular so you can scale without rebuilding."
        }
      },
      {
        "@type": "Question",
        "name": "What if it breaks or stops working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We monitor 24/7 and fix issues proactively. Average response time is under 2 hours. Most issues are resolved in under 30 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from Zapier or Make?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zapier and Make are DIY tools you maintain yourself. QuantumLeap is done-for-you: we design, build, monitor 24/7, and provide human support. Think of it this way: Zapier is buying lumber; QuantumLeap is hiring an architect and crew."
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
    { name: 'LeadFlow', description: 'Custom-captures and routes leads from every source you use—web forms, email, calls, chat', price: 'Custom pricing', icon: Target },
    { name: 'InvoiceIQ', description: 'Auto-creates invoices based on your triggers and sends smart follow-ups on your schedule', price: 'Custom pricing', icon: FileText },
    { name: 'MailPilot', description: 'Reads, tags, prioritizes, and auto-responds to emails using your tone and rules', price: 'Custom pricing', icon: Mail },
    { name: 'OpsSync', description: 'Links your CRMs, Sheets, and project apps into one seamless flow—no manual imports ever', price: 'Custom pricing', icon: Workflow },
    { name: 'ClientPulse', description: 'Automated feedback loops and retention triggers tailored to your customer lifecycle', price: 'Custom pricing', icon: TrendingUp },
    { name: 'DataBridge', description: 'Syncs your apps in real-time—custom-built for your exact software stack', price: 'Custom pricing', icon: Database },
    { name: 'FormFlow', description: 'Auto-processes forms and PDFs, routing data exactly where you need it', price: 'Custom pricing', icon: FileText },
    { name: 'SmartDocs', description: 'Auto-routes and summarizes reports based on your business logic', price: 'Custom pricing', icon: FileText }
  ]

  const testimonials = [
    {
      name: 'Peter Fernandes',
      company: 'AAA Construction Services',
      before: '7 days/month on invoicing; late payments bleeding cash',
      after: 'InvoiceIQ + OpsSync automated billing & reminders',
      result: '12 hours/week saved, 62% faster collections, +$45K cash-flow gain',
      quote: '"I used to dread month-end. Now everything closes by the 3rd—automatically."',
      image: '/company-logos/allianz.png'
    },
    {
      name: 'Tiffany Duncan',
      company: 'Talent Leap AI',
      title: 'Director',
      before: '6 platforms to track leads and follow-ups; deals falling through cracks',
      after: 'LeadFlow + MailPilot centralized and nurtured automatically',
      result: '+34% revenue; 2 extra client slots/month',
      quote: '"We went from reactive chaos to proactive growth—without adding headcount."',
      image: '/company-logos/ibm.png'
    },
    {
      name: 'Gurpreet Sandhu',
      company: 'Real Estate Vision',
      title: 'Broker',
      before: 'Manual listing updates across CRM, MLS, and ads—18 hours/week',
      after: 'OpsSync + DataBridge synced all channels in real-time',
      result: '18 hours/week saved; errors down 97%; ~$61K annual savings',
      quote: '"I got my weekends back. And my team stopped making costly mistakes."',
      image: '/company-logos/deloitte.png'
    },
    {
      name: 'Lydia V. Penrose',
      company: 'Code Vibe Studio',
      title: 'Co-Founder',
      before: 'Clients waited days for reports; manual compilation killed velocity',
      after: 'SmartDocs compiled insights overnight',
      result: 'Turnaround cut from 72h to 6h; retention up 29%',
      quote: '"Our clients think we\'re psychic. We\'re just automated."',
      image: '/company-logos/ge.png'
    },
    {
      name: 'Harper Kingsley',
      company: 'Adroit Infosystems',
      title: 'VP',
      before: 'Overwhelmed inbox; missed deals; team drowning in triage',
      after: 'MailPilot handled 75% of inbound messages',
      result: 'Team stress ↓68%; close rate ↑41%',
      quote: '"MailPilot didn\'t replace us—it freed us to do our actual jobs."',
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
                The Intelligent Automation Suite—Custom-Built to Connect Your Exact Tools and Workflows
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  We don't sell you off-the-shelf automation. We map your current stack, identify the friction points costing you time and money, then build intelligent workflows that run in the background—24/7, error-free.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 italic">
                  Below are examples of automation types we've deployed for clients. Your solution will be tailored to your unique processes, tools, and goals.
                </p>
              </div>
            </motion.div>
            
            {/* Automation Cards Grid */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {auto.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-zinc-800">
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Starting from
                        </p>
                        <p className="text-lg font-bold text-teal-600 dark:text-teal-400">
                          $299/mo
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 italic">
                          *Final pricing based on scope
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
            
            {/* Disclaimer Note */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic max-w-3xl mx-auto">
                *Sample automation types. Your solution will be custom-designed for your business.
              </p>
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
                  className="bg-gradient-to-br from-gray-50 to-teal-50 dark:from-zinc-900 dark:to-teal-950/10 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col"
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
                  
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                      Result:
                    </p>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {test.result}
                    </p>
                  </div>
                  
                  {/* Emotional Quote */}
                  {test.quote && (
                    <div className="mt-auto pt-4 border-t border-gray-300 dark:border-zinc-700">
                      <p className="text-sm italic text-gray-700 dark:text-gray-300">
                        {test.quote}
                      </p>
                    </div>
                  )}
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
                
                {/* First FAQ - Custom vs Templates */}
                <AccordionItem value="faq-0" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    Do you provide plug-and-play automation, or do you build custom?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      We custom-build every automation to fit your exact tools, workflows, and business logic. You're not buying a pre-built template—you're getting intelligent workflows designed specifically for how <em>you</em> operate.
                    </p>
                    <p>
                      The automation types you see on this page (LeadFlow, InvoiceIQ, etc.) are examples from past client projects. Your solution will be tailored to your unique tech stack and processes.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Book Your Free Discovery Call →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-1" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    Isn't automation expensive or complicated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      No. Intelligent Automations are modular and plug directly into your existing tools—no rip-and-replace required.
                    </p>
                    <p>
                      We design each workflow to start simple and scale as you grow. Most clients see ROI within the first month because we focus on high-impact, low-complexity wins first.
                    </p>
                    <p>
                      The average SMB loses $93,000/year to manual work. Our automations typically cost a fraction of that—and pay for themselves in weeks, not months.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        onClick={scrollToCalculator}
                        variant="outline"
                        className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                      >
                        Show Me My ROI →
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        variant="outline"
                        className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                      >
                        <Link href="/consultation">
                          Book a Consultation →
                        </Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-2" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    Will automation replace my employees?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Not at all. Automation replaces <em>tasks</em>, not people.
                    </p>
                    <p>
                      Your team spends less time clicking, copying, and chasing—and more time creating value. We've seen teams become more engaged (not less) because they finally have bandwidth for strategic work.
                    </p>
                    <p>
                      Custom automation makes your team more productive, not redundant.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        See How Automation Complements Your Team →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-3" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    How secure is it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Every integration is built on encrypted APIs and monitored 24/7 by a team that's helped secure NASA systems.
                    </p>
                    <p>
                      We follow enterprise-grade security protocols:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>End-to-end encryption (AES-256)</li>
                      <li>SOC2-compliant data handling</li>
                      <li>Zero-storage of sensitive credentials</li>
                      <li>Audit logs for every automated action</li>
                    </ul>
                    <p>
                      Your data is more secure than most manual processes—because humans make mistakes, automation doesn't.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Request a Security Walkthrough →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-4" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    What if I don't know where to start?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      That's exactly why we built the calculator and free audit.
                    </p>
                    <p>
                      You'll get a clear roadmap showing:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Which workflows are costing you the most time</li>
                      <li>Which automations deliver the fastest ROI</li>
                      <li>A 30-day deployment plan tailored to your business</li>
                    </ul>
                    <p>
                      No guesswork. No overwhelm. Just a prioritized plan you can act on immediately.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        asChild
                        variant="outline"
                        className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                      >
                        <Link href="/consultation">
                          Start Your Free Audit →
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        onClick={scrollToCalculator}
                        variant="outline"
                        className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                      >
                        Run the Calculator →
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-5" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    How long does it take to see results?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Preliminary findings within 72 hours. Full deployment in 7–14 days.
                    </p>
                    <p>
                      Because we're building custom workflows (not installing templates), the timeline depends on complexity. But we prioritize quick wins first—so you start seeing time savings within the first week of deployment.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Book a Free Scoping Call →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-6" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    What if my tools are unique or niche?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Perfect. That's what we're built for.
                    </p>
                    <p>
                      Most automation vendors only work with the top 20 SaaS tools. We've integrated with hundreds of platforms—from mainstream (HubSpot, Salesforce) to niche industry software.
                    </p>
                    <p>
                      If your tools have APIs (or even just CSV exports), we can automate them. If they don't, we'll find creative workarounds.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Book a Technical Review Call →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-7" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    Is this affordable for SMBs?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Yes. Our automations cost a fraction of a typical hire—and far less than the profit you're losing to manual work.
                    </p>
                    <p>
                      <strong>Example:</strong> A custom DataBridge automation (syncing 3 tools) costs ~$299–499/mo. That's less than one day of an employee's salary—but it works 24/7 and never makes mistakes.
                    </p>
                    <p>
                      Most clients save 10–20x the cost of automation in recovered productivity and reduced errors.
                    </p>
                    <Button
                      size="sm"
                      onClick={scrollToCalculator}
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      See Your Cost-Benefit Breakdown →
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-8" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    What happens after deployment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      You get ongoing monitoring, optimization, and monthly ROI reports.
                    </p>
                    <p>
                      We don't just "set and forget." Your dedicated success manager:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Monitors performance 24/7</li>
                      <li>Optimizes workflows based on usage patterns</li>
                      <li>Reports monthly time/cost savings</li>
                      <li>Handles any tweaks or expansions</li>
                    </ul>
                    <p>
                      You'll always have real human support—not chatbots.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Meet Your Potential Success Manager →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-9" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    Can I start small and scale later?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Absolutely. That's our recommended approach.
                    </p>
                    <p>
                      Most founders start with 1–2 high-impact automations (usually invoice processing or lead routing). Once you see the ROI, you expand.
                    </p>
                    <p>
                      We design every automation to be modular—so you can add, adjust, or scale without rebuilding from scratch.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Start Small. Scale Smart. →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-10" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    What if it breaks or stops working?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      We monitor 24/7 and fix issues proactively—usually before you even notice.
                    </p>
                    <p>
                      If an integration changes (like when a SaaS tool updates its API), we handle the update automatically. If something unexpected happens, we're alerted instantly and resolve it.
                    </p>
                    <p>
                      Our average response time is under 2 hours. Most issues are resolved in under 30 minutes.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Request Service Level Agreement Details →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-11" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    How is this different from Zapier or Make?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Great question.
                    </p>
                    <p>
                      Zapier and Make are DIY automation tools—you build and maintain everything yourself. They're powerful, but they require technical knowledge, ongoing maintenance, and troubleshooting when things break.
                    </p>
                    <p>
                      QuantumLeap is a done-for-you service. We:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Design the automation logic</li>
                      <li>Build and test the workflows</li>
                      <li>Monitor performance 24/7</li>
                      <li>Optimize and troubleshoot automatically</li>
                      <li>Provide human support when you need it</li>
                    </ul>
                    <p>
                      Think of it this way: Zapier is like buying lumber to build a house. QuantumLeap is hiring an architect and construction crew.
                    </p>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      <Link href="/consultation">
                        Book a Live Demo →
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-12" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                    How do I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4 space-y-4">
                    <p>
                      Simple:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li><strong>Run the free automation scan</strong> (2 minutes) to see where you're losing time</li>
                      <li><strong>Book a complimentary strategy call</strong> (30 minutes) to review your results</li>
                      <li><strong>Get your custom 30-day automation plan</strong> (delivered within 48 hours)</li>
                      <li><strong>Deploy your first automation</strong> (7–14 days from approval)</li>
                    </ol>
                    <p>
                      No obligation. No pressure. Just clarity on what's possible for your business.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        onClick={scrollToCalculator}
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        Start Your Free Automation Scan →
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        variant="outline"
                        className="border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                      >
                        <Link href="/consultation">
                          Book Your Strategy Call →
                        </Link>
                      </Button>
                    </div>
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
