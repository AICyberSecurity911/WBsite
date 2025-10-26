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
      description: '30-day guarantee + priority support to ensure everything runs smoothly',
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
      question: "Will automation break my current processes?",
      answer: "Not if done right. We implement automations gradually, with extensive testing and rollback plans. You'll never be left in a worse position than when you started. Plus, we provide a 30-day guarantee—if the automations don't work as promised, we'll fix them or refund you."
    },
    {
      question: "How long until I see results?",
      answer: "Most clients report immediate time savings within the first week of implementation. The full ROI typically becomes visible within 30-60 days as the automations handle more tasks. We provide weekly performance reports so you can track the exact hours and money saved."
    },
    {
      question: "What if my team doesn't adopt the new workflows?",
      answer: "We design automations that are so simple and beneficial that adoption happens naturally. We also provide hands-on training and create easy-to-follow documentation. If your team struggles with any workflow, we'll redesign it until it works seamlessly for everyone."
    },
    {
      question: "Can you automate tasks specific to my industry?",
      answer: "Absolutely. We've implemented automations across dozens of industries—from healthcare to construction to e-commerce. Every automation is custom-designed for your specific business processes, not generic templates. If you do it manually today, we can likely automate it."
    },
    {
      question: "What happens after implementation?",
      answer: "You get ongoing support for the duration of your plan (1-12 months depending on tier). We monitor your automations, provide optimization recommendations, identify new automation opportunities, and offer priority support whenever you need help. You're never left on your own."
    },
    {
      question: "How much technical knowledge do I need?",
      answer: "Zero. We handle all the technical setup and provide training so simple that anyone can use the automations. If you can use email and a web browser, you can use our automations. Plus, we document everything step-by-step."
    },
    {
      question: "What if I want to change something later?",
      answer: "Automations are meant to evolve with your business. All our clients get ongoing support that includes workflow modifications. Need to add a step, change a trigger, or integrate a new tool? Just let us know, and we'll handle it."
    },
    {
      question: "How do I know which automations to start with?",
      answer: "That's what the Time Audit (Phase 1) is for. We'll identify your biggest time drains and prioritize automations based on impact and ease of implementation. You'll get a clear roadmap showing exactly which automations to tackle first for maximum ROI."
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
              <motion.div variants={fadeInUp} className="inline-block bg-amber-100 dark:bg-amber-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wide">
                  Intelligent Automation
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Stop Drowning in Busywork.<br />
                <span className="text-brand-teal-400">Get 10 Hours Back</span> Every Week.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                You're wasting <strong className="text-white">21.8 hours every week</strong> on manual tasks that could be automated. 
                We build simple, affordable automations that eliminate errors, save thousands, and let you 
                finally focus on growing your business.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {timeWasteStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                    >
                      <Icon className={`w-10 h-10 ${stat.color} mb-3 mx-auto`} />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg shadow-brand-teal-500/50"
                >
                  Calculate Your Time Waste
                </a>
                <a 
                  href="#solution" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white/10 transition"
                >
                  See Solutions
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Hidden Cost Section */}
        <section ref={costRef} className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={costInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
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
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    The Hidden Cost of <span className="text-brand-teal-500">Manual Work</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Every hour your team spends on repetitive tasks is an hour not spent on revenue-generating activities.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                        You're Hemorrhaging Money
                      </h3>
                      <p className="text-red-800 dark:text-red-200 text-sm">
                        At $50/hour (average fully-loaded cost per employee), 21.8 hours of busywork = 
                        <strong> $1,090 wasted per employee per week</strong>. That's $56,680 per year per person.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <AlertCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                        Manual Errors Are Crushing You
                      </h3>
                      <p className="text-amber-800 dark:text-amber-200 text-sm">
                        Human error in data entry costs businesses an average of <strong>$3.1 million annually</strong>. 
                        One mistake in pricing, invoicing, or accounting can cost thousands.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                    <AlertCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">
                        Your Best People Are Leaving
                      </h3>
                      <p className="text-orange-800 dark:text-orange-200 text-sm">
                        68% of employees say they'd be more satisfied if they didn't have to do repetitive tasks. 
                        Busywork is driving away your top talent.
                      </p>
                    </div>
                  </div>
                </motion.div>
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
                  Answer 7 quick questions to discover which AI employees can save you the most time and money.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <AITeamCalculator />
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
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
                🔒 No credit card required • 30-day satisfaction guarantee • Free time audit
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
