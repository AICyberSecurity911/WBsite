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
  AlertCircle,
  Workflow,
  Target,
  BarChart3,
  Shield
} from 'lucide-react'
import Image from 'next/image'
import { AITeamCalculator } from '@/components/calculator/ai-team-calculator'
import { AIEmployeesSection } from '@/components/sections/ai-employees-section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
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
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [costRef, costInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [delivRef, delivInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [calcRef, calcInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const timeWasteStats = [
    { icon: Clock, value: '21.8 hrs', label: 'Weekly Time Waste', color: 'text-red-500' },
    { icon: DollarSign, value: '$47K', label: 'Annual Cost per Employee', color: 'text-amber-500' },
    { icon: TrendingUp, value: '68%', label: 'Productivity Loss', color: 'text-orange-500' }
  ]

  const problemAreas = [
    {
      icon: Mail,
      title: 'Email & Communication Chaos',
      problem: 'Spending 3+ hours daily sorting emails, scheduling meetings, and managing communications',
      impact: '~750 hours/year wasted',
      solution: 'Automated email sorting, smart scheduling, and response templates'
    },
    {
      icon: FileText,
      title: 'Manual Data Entry Hell',
      problem: 'Copy-pasting data between systems, updating spreadsheets, and reconciling records',
      impact: '~500 hours/year wasted',
      solution: 'Automated data sync between all your business tools'
    },
    {
      icon: Calendar,
      title: 'Scheduling Nightmares',
      problem: 'Back-and-forth emails coordinating meetings, following up on appointments',
      impact: '~200 hours/year wasted',
      solution: 'Self-scheduling tools with automated reminders'
    },
    {
      icon: Database,
      title: 'Report Generation Drudgery',
      problem: 'Manually compiling reports, pulling data from multiple sources',
      impact: '~300 hours/year wasted',
      solution: 'Automated real-time dashboards and scheduled reports'
    },
    {
      icon: FileText,
      title: 'Invoice & Payment Chasing',
      problem: 'Creating invoices manually, sending payment reminders, tracking receivables',
      impact: '~250 hours/year wasted',
      solution: 'Automated invoicing and payment follow-up systems'
    },
    {
      icon: Workflow,
      title: 'Repetitive Task Loops',
      problem: 'Doing the same tasks over and over: file organization, data backups, status updates',
      impact: '~400 hours/year wasted',
      solution: 'Intelligent workflows that run on autopilot'
    }
  ]

  const automationProcess = [
    {
      phase: 'Phase 1',
      title: 'Time Audit',
      duration: '1-2 Days',
      description: 'We shadow your team to identify the biggest time drains and automation opportunities',
      deliverables: ['Task inventory', 'Time waste analysis', 'Priority matrix', 'Quick-win identification']
    },
    {
      phase: 'Phase 2',
      title: 'Automation Design',
      duration: '2-3 Days',
      description: 'We design simple, bulletproof workflows that eliminate your repetitive tasks',
      deliverables: ['Workflow diagrams', 'Tool integration plan', 'Error prevention protocols', 'Training materials']
    },
    {
      phase: 'Phase 3',
      title: 'Implementation',
      duration: '3-5 Days',
      description: 'We build and test your automations, ensuring they work flawlessly',
      deliverables: ['Configured workflows', 'Tested integrations', 'Documentation', 'Emergency rollback plan']
    },
    {
      phase: 'Phase 4',
      title: 'Optimization',
      duration: 'Ongoing',
      description: 'We monitor performance and continuously improve your automations',
      deliverables: ['Weekly performance reports', 'Optimization recommendations', 'New automation opportunities', 'Priority support']
    }
  ]

  const deliverables = [
    {
      title: 'Custom Automation Workflows',
      description: 'Tailored to your exact business processes, not generic templates',
      icon: Workflow
    },
    {
      title: 'System Integration',
      description: 'Connect all your tools: CRM, email, accounting, project management',
      icon: Database
    },
    {
      title: 'Error Prevention',
      description: 'Built-in safeguards to catch mistakes before they become problems',
      icon: Shield
    },
    {
      title: 'Performance Dashboard',
      description: 'Real-time visibility into time saved, errors prevented, and ROI',
      icon: BarChart3
    },
    {
      title: 'Training & Documentation',
      description: 'Step-by-step guides so your team can use and maintain the automations',
      icon: FileText
    },
    {
      title: 'Ongoing Support',
      description: '30-day money-back guarantee + priority support to ensure everything runs smoothly',
      icon: Target
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,997',
      description: 'Perfect for solo entrepreneurs and micro-businesses',
      features: [
        'Up to 3 automation workflows',
        '2 system integrations',
        'Email & calendar automation',
        'Basic reporting dashboard',
        '1 month support',
        '2-week implementation'
      ],
      ideal: 'Ideal for: Solopreneurs, freelancers, 1-2 person teams',
      cta: 'Start Automating',
      popular: false
    },
    {
      name: 'Growth',
      price: '$7,497',
      description: 'Best for small teams ready to scale',
      features: [
        'Up to 10 automation workflows',
        '5 system integrations',
        'Complete email & communication suite',
        'Advanced reporting & analytics',
        'Data sync & backup automation',
        'Invoice & payment automation',
        '3 months support',
        '1-week implementation',
        'Priority support'
      ],
      ideal: 'Ideal for: 3-15 person teams, growing businesses',
      cta: 'Scale Your Business',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For established businesses with complex needs',
      features: [
        'Unlimited automation workflows',
        'Unlimited system integrations',
        'Custom API development',
        'Advanced security & compliance',
        'Dedicated automation engineer',
        'White-glove onboarding',
        '12 months support',
        'Custom implementation timeline',
        '24/7 priority support'
      ],
      ideal: 'Ideal for: 15+ person teams, complex operations',
      cta: 'Schedule Consultation',
      popular: false
    }
  ]

  const faqs = [
    {
      question: "I'm barely keeping up as it is—how do I find time to implement this?",
      answer: "You're busy. That's why we handle everything: 60 minutes on a strategy call, then we deploy and integrate your first AI employee while you focus on your business. Most see results in 3–5 days.",
      cta: {
        text: "Book a Free Consult",
        link: "/consultation"
      }
    },
    {
      question: "Will AI replace my team or help them?",
      answer: "AI handles busywork. Your team has more time for clients and sales. Most staff are happy to lose repetitive tasks.",
      cta: {
        text: "Book a Free Consult",
        link: "/consultation"
      }
    },
    {
      question: "Can I really trust a machine with sensitive client data and finances?",
      answer: "Our AI employees use NASA-recognized security protocols. More secure than human teams—every action is logged and auditable.",
      cta: {
        text: "Book a Free Consult",
        link: "/consultation"
      }
    },
    {
      question: "I've been burned by tech promises before. How is this different?",
      answer: "AI employees do the work—not just automate software. 30-day guarantee means your risk is zero.",
      cta: {
        text: "Try Savings Calculator",
        link: "#calculator"
      }
    },
    {
      question: "How fast can I see results?",
      answer: "Most clients save 15-30 hours/week in the first month.",
      cta: {
        text: "Try Savings Calculator",
        link: "#calculator"
      }
    },
    {
      question: "How much does it cost?",
      answer: "Starting at $499/month—up to 85% less than staff.",
      cta: {
        text: "Try Savings Calculator",
        link: "#calculator"
      }
    },
    {
      question: "What if I hire an AI employee and then realize I don't need it?",
      answer: "Your 30-day guarantee covers you. If your AI employee isn't saving you time and money, your plan is free until it does.",
      cta: {
        text: "Book a Free Consult",
        link: "/consultation"
      }
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/automation-hero-bg.jpg"
              alt="Automation Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Fire Your Biggest Headache.<br />
                <span className="text-brand-teal-400">Hire Your Most Reliable Employee</span>—Same Day.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto">
                Hire digital employees that work 24/7, cost 85% less than humans, and never miss a task.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-2xl lg:text-3xl text-teal-200 mb-12 max-w-4xl mx-auto font-semibold">
                Free yourself from busywork and finally run a business that runs without you.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg shadow-brand-teal-500/50"
                >
                  Calculate My Savings in 60s
                </a>
                <a 
                  href="#ai-employees" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white/10 transition"
                >
                  See AI Employees
                </a>
              </motion.div>

              {/* Trust Bar */}
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <p className="text-sm font-semibold text-teal-100 tracking-wide">
                  Fortune 500 Strategy | MIT & Caltech Engineering | Money-Back Guarantee
                </p>
              </motion.div>

              {/* Core Results Stat Bar */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
                {[
                  { value: '200+', label: 'Businesses Transformed' },
                  { value: 'Money Back', label: 'Guarantee' },
                  { value: '24/7', label: 'Uptime' },
                  { value: '99.2%', label: 'Accuracy Rate' },
                  { value: '87%', label: 'Cost Savings' },
                  { value: '8', label: 'AI Roles' },
                  { value: '24-48h', label: 'Deployment' },
                  { value: '$499', label: 'Starting From' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold text-brand-teal-300 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-300 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* TLDDR Box Section */}
        <section className="py-16 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-teal-50 to-emerald-50 dark:from-brand-teal-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border-2 border-brand-teal-200 dark:border-brand-teal-800"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">PK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">What Is Intelligent Automation?</h3>
                  <p className="text-sm text-brand-teal-700 dark:text-brand-teal-300 font-semibold">
                    From the desk of Paras Khurana, Founder & CEO
                  </p>
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Intelligent Automation means connecting your business tools (CRM, email, accounting software, calendars) 
                  so they work together automatically. Instead of copying data manually or remembering to send follow-ups, 
                  your systems do it for you—24/7, error-free, and without you lifting a finger.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Think of it as giving your business a digital nervous system. When a lead fills out a form, 
                  your CRM updates automatically, an email goes out, a task gets created, and your team gets notified—all 
                  in seconds, without human intervention.
                </p>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-brand-teal-500 mt-6">
                  <p className="text-sm font-semibold text-brand-teal-700 dark:text-brand-teal-300 uppercase tracking-wide mb-2">
                    💡 Critical Insight
                  </p>
                  <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg">
                    Every manual workflow is a hidden expense center. Find it, automate it, and your margins expand.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Hidden Reality: Pain Story Section */}
        <section ref={costRef} className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={costInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  The Hidden Reality: <span className="text-brand-teal-500">What's Breaking You?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  You're Working Harder Than Ever, But Getting Less Time Back
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div variants={fadeInUp}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/manual-tasks-burden.jpg"
                      alt="Manual Tasks Burden"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div variants={staggerContainer} className="space-y-6">
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-3xl font-bold mb-4">
                      Why That "$50K Employee" Just Bankrupted Your Q4
                    </h3>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
                      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6 italic">
                        "I hired Sarah as my bookkeeper for '$50K' thinking I was getting a great deal. Three months later, I discovered $23,000 in uncategorized expenses, missed tax deadlines, and she quit via text message during our busiest season.
                      </p>
                      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-semibold">
                        By the time I calculated recruitment, training, mistakes, and replacement costs, that '$50K employee' actually cost me $118,958."
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* TRUE Cost Breakdown */}
              <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-brand-teal-200 dark:border-brand-teal-800">
                  <h3 className="text-3xl font-bold text-center mb-8 text-brand-teal-600 dark:text-brand-teal-400">
                    TRUE Cost Breakdown
                  </h3>
                  <div className="space-y-4">
                    {[
                      { item: 'Base Salary', amount: '$52,000' },
                      { item: 'Payroll Taxes (15.3%)', amount: '$7,956' },
                      { item: 'Benefits & Insurance', amount: '$8,840' },
                      { item: 'Recruiting Costs', amount: '$6,500' },
                      { item: 'Training Time (40 hours)', amount: '$8,250' },
                      { item: 'Management Overhead', amount: '$15,600' },
                      { item: 'Lost Revenue (mistakes)', amount: '$12,000' },
                      { item: 'Replacement Cost (turnover)', amount: '$7,812' }
                    ].map((cost, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <span className="font-medium text-gray-900 dark:text-gray-100">{cost.item}</span>
                        <span className="text-xl font-bold text-red-600 dark:text-red-400">{cost.amount}</span>
                      </motion.div>
                    ))}
                    <div className="border-t-4 border-brand-teal-500 pt-6 mt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">TOTAL ACTUAL COST per employee, per year:</span>
                        <span className="text-4xl font-extrabold text-red-600 dark:text-red-400">$118,958</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Impact Stats */}
              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
                <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-6 border border-red-200 dark:border-red-800 text-center">
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">73%</div>
                  <p className="text-sm text-red-800 dark:text-red-200 font-medium">of small business owners work weekends</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-6 border border-amber-200 dark:border-amber-800 text-center">
                  <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">$12K</div>
                  <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">average cost of a bad hire</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800 text-center">
                  <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">18 months</div>
                  <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">average employee tenure</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What's Stealing Your Time Section */}
        <section id="solution" ref={problemRef} className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  What's <span className="text-brand-teal-500">Stealing Your Time?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  These are the silent productivity killers draining your team's energy and your business's potential.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="group relative bg-background rounded-xl p-6 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-brand-teal-50 dark:bg-brand-teal-950/30 group-hover:bg-brand-teal-100 dark:group-hover:bg-brand-teal-900/50 transition-colors">
                          <Icon className="w-6 h-6 text-brand-teal-600" />
                        </div>
                        <h3 className="font-bold text-lg">{area.title}</h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">{area.problem}</p>
                      
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-semibold text-red-600 dark:text-red-400">{area.impact}</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-medium text-brand-teal-700 dark:text-brand-teal-300">
                          {area.solution}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Critical Decision & Solution Section */}
        <section className="py-24 bg-gradient-to-br from-brand-teal-50 to-emerald-50 dark:from-brand-teal-950/30 dark:to-emerald-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  You started a business to create <span className="text-brand-teal-600 dark:text-brand-teal-400">freedom and wealth</span>
                </h2>
                <p className="text-2xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto mb-8">
                  Instead, you're spending 60% of your time managing people, fixing their mistakes, and dealing with HR drama.
                </p>
                <p className="text-3xl font-bold text-brand-teal-600 dark:text-brand-teal-400 max-w-3xl mx-auto">
                  Imagine employees who never quit, never make mistakes, and cost 87% less…
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="max-w-5xl mx-auto mb-16">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border-4 border-brand-teal-500">
                  <h3 className="text-3xl font-bold text-center mb-8">Bottom Line:</h3>
                  <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed text-center mb-8">
                    Traditional hiring is broken, expensive, and unreliable. AI employees work 24/7, never quit, never complain, and cost 87% less than human employees.
                  </p>
                </div>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Immediate Deployment',
                    description: 'AI employees start working the moment you deploy them. No weeks of training, no onboarding drama.',
                    icon: Zap
                  },
                  {
                    title: 'Guaranteed Accuracy',
                    description: '99.2% accuracy rate with built-in error detection and self-correction capabilities.',
                    icon: Target
                  },
                  {
                    title: 'Massive Cost Savings',
                    description: 'Average 87% cost reduction compared to traditional employees when factoring in salary, benefits, and overhead.',
                    icon: DollarSign
                  },
                  {
                    title: 'Zero Management Overhead',
                    description: 'No sick days, no drama, no HR issues. Just consistent, reliable performance every single day.',
                    icon: CheckCircle
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-brand-teal-200 dark:border-brand-teal-800 hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal-500 to-emerald-500 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Branded Automation Solutions Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-brand-teal-500">Intelligent Automation</span> Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                  Proprietary systems designed to eliminate busywork and maximize efficiency.
                </p>
                <p className="text-lg text-brand-teal-600 dark:text-brand-teal-400 font-semibold max-w-3xl mx-auto">
                  These are just some of our Intelligent Automations. We can automate any workflow you can think of.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInUp}
                  className="group relative bg-background rounded-2xl p-8 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-brand-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    PROPRIETARY
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-teal-500 to-emerald-500 flex items-center justify-center mb-6">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">InvoiceIQ™</h3>
                  <p className="text-muted-foreground mb-6">
                    Intelligent invoice and payment automation system that creates, sends, and tracks invoices automatically. 
                    Never chase payments manually again—InvoiceIQ handles reminders, payment processing, and reconciliation 24/7.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Automated invoice generation and delivery</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Smart payment reminders and follow-ups</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Real-time payment tracking and reporting</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="group relative bg-background rounded-2xl p-8 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-brand-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    PROPRIETARY
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-teal-500 to-emerald-500 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">LeadFlow™</h3>
                  <p className="text-muted-foreground mb-6">
                    Automated lead response and nurture system that captures, qualifies, and engages leads instantly. 
                    No more missed opportunities—LeadFlow ensures every prospect gets immediate attention and personalized follow-up.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Instant lead capture and qualification</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized email sequences and nurturing</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Automated task creation for your sales team</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="group relative bg-background rounded-2xl p-8 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-brand-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    PROPRIETARY
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-teal-500 to-emerald-500 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">ClientPulse™</h3>
                  <p className="text-muted-foreground mb-6">
                    Seamless customer onboarding workflow that guides new clients from signup to success automatically. 
                    ClientPulse creates a VIP experience for every customer without manual intervention.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Automated welcome sequences and onboarding</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Smart document collection and setup</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Progress tracking and milestone notifications</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="group relative bg-background rounded-2xl p-8 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-brand-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    PROPRIETARY
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-teal-500 to-emerald-500 flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">SmartDocs™</h3>
                  <p className="text-muted-foreground mb-6">
                    Automated financial reporting and dashboard system that compiles data from all your sources into 
                    real-time, actionable insights. No more manual spreadsheets—SmartDocs delivers intelligence on demand.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Automated data aggregation and reporting</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Real-time dashboards and visualizations</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                      <span>Scheduled reports delivered to your inbox</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <a
                  href="/consultation"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg"
                >
                  See Which Processes You Can Automate for Faster ROI
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI Employees Section */}
        <AIEmployeesSection />

        {/* How We Automate Section */}
        <section ref={processRef} className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-brand-teal-500">4-Phase</span> Automation Framework
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven process that delivers results fast—without disrupting your operations.
                </p>
              </motion.div>

              {/* Visual Process Diagram */}
              <motion.div variants={fadeInUp} className="mb-16">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/automation-workflow.jpg"
                    alt="Automation Workflow"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Phase Cards */}
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                {automationProcess.map((phase, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-background rounded-xl p-8 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-brand-teal-600 dark:text-brand-teal-400 font-semibold">{phase.phase}</div>
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                      </div>
                      <div className="ml-auto text-sm font-semibold text-muted-foreground">{phase.duration}</div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-brand-teal-500 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What You Receive Section */}
        <section ref={delivRef} className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={delivInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  What You <span className="text-brand-teal-500">Actually Get</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Not just technology—a complete system that transforms how your business operates.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {deliverables.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-background rounded-xl p-6 border-2 border-border hover:border-brand-teal-500 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal-500 to-emerald-500 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Success Visual */}
              <motion.div variants={fadeInUp} className="mt-16">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
                  <Image
                    src="/time-savings-visual.jpg"
                    alt="Time Savings Success"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" ref={calcRef} className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={calcInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <div className="inline-block bg-brand-teal-100 dark:bg-brand-teal-900/30 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-semibold text-brand-teal-700 dark:text-brand-teal-300 uppercase tracking-wide">
                    Interactive Assessment
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Calculate Your <span className="text-brand-teal-500">AI Workforce Savings</span>
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  See exactly how much time and money you could save—get your free estimate in 2 minutes.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <AITeamCalculator />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-muted to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Real Results from <span className="text-brand-teal-500">Real Business Owners</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  See how AI employees transformed these businesses
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    before: "Our bookkeeper kept missing things and I was constantly stressed about our finances. I was working weekends just to double-check everything.",
                    after: "The AI Bookkeeper caught a $15,000 accounting error our human bookkeeper missed three times. It paid for itself in month one.",
                    result: "Now I have real-time visibility into my financials instead of waiting weeks. I finally have peace of mind.",
                    author: "Peter Fernandes",
                    company: "Construction Company Owner"
                  },
                  {
                    before: "I was drowning in emails and calls. I couldn't focus on landing new contracts because I was too busy scheduling and following up.",
                    after: "My AI Executive Assistant handles all my scheduling and email management. I went from 60-hour weeks to 35-hour weeks.",
                    result: "I finally have weekends back with my family. My stress levels dropped dramatically.",
                    author: "Sofia Delacroix",
                    company: "Marketing Agency Owner"
                  },
                  {
                    before: "We were losing leads left and right because we couldn't follow up fast enough. Our sales process was a mess.",
                    after: "The AI Sales Rep follows up with every lead within 5 minutes, 24/7. Our close rate increased by 40%.",
                    result: "Our sales pipeline has never been more organized. We're closing deals we would have lost before.",
                    author: "Marcus Chen",
                    company: "TechFlow Solutions"
                  },
                  {
                    before: "Customers were complaining about slow response times. We couldn't afford 24/7 support but were losing business because of it.",
                    after: "The AI Customer Service Rep handles inquiries instantly, any time of day. Customer satisfaction scores increased 40% in 2 months.",
                    result: "We're keeping customers happy without the overhead of night shift employees.",
                    author: "Lisa Rodriguez",
                    company: "HomeComfort Services"
                  },
                  {
                    before: "Hiring was a nightmare. We wasted months interviewing the wrong people and made several bad hires that cost us thousands.",
                    after: "The AI Recruiter screens candidates, schedules interviews, and even handles onboarding paperwork automatically.",
                    result: "We've hired 5 great employees in half the time it used to take. No more bad hires.",
                    author: "David Kim",
                    company: "GreenTech Manufacturing"
                  },
                  {
                    before: "Our social media was inconsistent and engagement was terrible. I didn't have time to post regularly or engage with followers.",
                    after: "The AI Social Media Manager posts daily, responds to comments, and even suggests content ideas. Our engagement tripled in 2 months.",
                    result: "We're actually building a real brand presence now without me spending hours every day on social media.",
                    author: "Amanda Foster",
                    company: "Boutique Fashion Co."
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                  >
                    <div className="mb-6">
                      <div className="inline-block bg-red-100 dark:bg-red-900/30 rounded-full px-3 py-1 text-xs font-semibold text-red-700 dark:text-red-300 mb-3">
                        BEFORE
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "{testimonial.before}"
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="inline-block bg-amber-100 dark:bg-amber-900/30 rounded-full px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300 mb-3">
                        AFTER
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        "{testimonial.after}"
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
                        RESULT
                      </div>
                      <p className="text-sm text-brand-teal-700 dark:text-brand-teal-300 font-semibold">
                        "{testimonial.result}"
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Simple, Transparent <span className="text-brand-teal-500">Pricing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  One-time investment. Lifetime of savings. Choose the package that fits your needs.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative bg-background rounded-2xl p-8 border-2 ${
                      tier.popular 
                        ? 'border-brand-teal-500 shadow-[0_0_30px_rgba(20,184,166,0.3)]' 
                        : 'border-border hover:border-brand-teal-500'
                    } transition-all duration-300`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold mb-2">{tier.price}</div>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-medium text-center">{tier.ideal}</p>
                    </div>

                    <a
                      href="/consultation"
                      className={`block w-full text-center py-4 rounded-lg font-semibold transition ${
                        tier.popular
                          ? 'bg-brand-teal-500 text-white hover:bg-brand-teal-600'
                          : 'bg-muted border-2 border-border hover:border-brand-teal-500 hover:bg-brand-teal-50 dark:hover:bg-brand-teal-950/30'
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <p className="text-muted-foreground">
                  💡 <strong>Not sure which package is right for you?</strong> Take the{' '}
                  <a href="#calculator" className="text-brand-teal-500 hover:underline">
                    AI Workforce Calculator
                  </a>{' '}
                  above for a personalized recommendation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Money-Back Guarantee Section */}
        <section className="py-24 bg-gradient-to-r from-brand-teal-600 to-emerald-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                <Shield className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our 30-Day "Time-Back & ROI" Guarantee
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 mb-8">
                <p className="text-2xl text-white leading-relaxed mb-6">
                  If you don't save at least <span className="font-bold text-teal-200">10 hours a week</span> OR see measurable ROI within 30 days, we'll continue optimizing your automations at no additional cost until you do.
                </p>
                <p className="text-xl text-teal-100">
                  No gotchas, no fine print. We only win when you win.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <CheckCircle className="w-10 h-10 mx-auto mb-3 text-teal-200" />
                  <h3 className="font-bold mb-2">Zero Risk</h3>
                  <p className="text-sm text-teal-100">Your investment is protected by our guarantee</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Target className="w-10 h-10 mx-auto mb-3 text-teal-200" />
                  <h3 className="font-bold mb-2">Results Guaranteed</h3>
                  <p className="text-sm text-teal-100">Measurable time savings or we keep working</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Workflow className="w-10 h-10 mx-auto mb-3 text-teal-200" />
                  <h3 className="font-bold mb-2">Continuous Support</h3>
                  <p className="text-sm text-teal-100">We optimize until you see the results you need</p>
                </div>
              </div>

              <p className="mt-8 text-sm text-teal-100">
                * Terms and conditions apply. See our full guarantee policy for details.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Frequently Asked <span className="text-brand-teal-500">Questions</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know about automation for your business.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background border-2 border-border rounded-xl px-6 hover:border-brand-teal-500 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-brand-teal-500">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-4">{faq.answer}</p>
                        {faq.cta && (
                          <a
                            href={faq.cta.link}
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-md hover:shadow-lg"
                          >
                            {faq.cta.text}
                          </a>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Contact Support Button */}
                <motion.div variants={fadeInUp} className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Still have questions? We're here to help!
                  </p>
                  <a
                    href="/intelligent-automation/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg hover:shadow-xl"
                  >
                    Contact Support
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-brand-teal-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Reclaim Your Time?
              </h2>
              <p className="text-xl mb-8 text-teal-50">
                Stop wasting 21.8 hours per week on busywork. Let's build automations that actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-brand-teal-600 rounded-lg hover:bg-gray-100 transition shadow-lg"
                >
                  Calculate Your Savings
                </a>
                <a
                  href="/consultation"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white/10 transition"
                >
                  Schedule Free Consultation
                </a>
              </div>
              <p className="mt-6 text-sm text-teal-100">
                🔒 No credit card required • Money Back Guarantee • Free time audit
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
