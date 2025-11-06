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
  Shield,
  ArrowRight,
  CheckCircle2
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
  // Schema markup for SEO/AEO/AGO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intelligent Automation Services",
    "description": "Save 20+ hours a week and cut costs by 60-85% with QuantumLeap's Intelligent Automations. Connect your tools, eliminate repetitive tasks, and work 24/7 without hiring.",
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
        "name": "How fast can I see results from automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most businesses see measurable results within 14–30 days. Once your automation is set up, it starts working immediately. Clients often report saving 15–25 hours per week in the first month. Book a complimentary consultation to see your 30-day ROI timeline."
        }
      },
      {
        "@type": "Question",
        "name": "Will automation replace my team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — automation replaces repetitive work, not people. Your automated workflows handle data entry, emails, and routine tasks so your human team can focus on clients and strategy. Most teams become more productive and less stressed with automation."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure with automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — your automations are built by the same engineers who secured NASA's systems. Your data is encrypted end-to-end (AES-256) and protected by enterprise-grade security protocols. Book a call with our deployment team for a security walk-through."
        }
      },
      {
        "@type": "Question",
        "name": "How much does intelligent automation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each automation starts at $199–$499/month, all-inclusive. That's about 60–85% less than hiring additional staff, with zero training, benefits, or turnover costs. Use the free Automation ROI Calculator to see your potential savings."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to switch my current tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your automations integrate directly with your existing stack — Gmail, Outlook, QuickBooks, HubSpot, Salesforce, ClickUp, Shopify, and more. We make it fit your current system, not the other way around."
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
      roles: 'InvoiceIQ + OpsSync'
    },
    {
      name: 'Tiffany Duncan',
      company: 'Talent Leap AI',
      title: 'Director',
      before: '6 platforms to track leads and follow-ups',
      after: 'LeadFlow + MailPilot centralized and nurtured automatically',
      result: '+34% revenue; 2 extra client slots/month',
      roles: 'LeadFlow + MailPilot'
    },
    {
      name: 'Gurpreet Sandhu',
      company: 'Real Estate Vision',
      title: 'Broker',
      before: 'Manual listing updates across CRM, MLS, and ads',
      after: 'OpsSync + DataBridge synced all channels',
      result: '18 hours/week saved; errors down 97%; ~$61K annual savings',
      roles: 'OpsSync + DataBridge'
    },
    {
      name: 'Lydia V. Penrose',
      company: 'Code Vibe Studio',
      title: 'Co-Founder',
      before: 'Clients waited days for reports',
      after: 'SmartDocs compiled insights overnight',
      result: 'Turnaround cut from 72h to 6h; retention up 29%',
      roles: 'SmartDocs'
    }
  ]

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [tlddrRef, tlddrInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
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
      question: "Do you provide plug-and-play automation, or do you build custom?",
      answer: "We custom-build every automation to fit your exact tools, workflows, and business logic. You're not buying a pre-built template—you're getting intelligent workflows designed specifically for how you operate. The automation types you see on this page (LeadFlow, InvoiceIQ, etc.) are examples from past client projects. Your solution will be tailored to your unique tech stack and processes.",
      cta: {
        text: "⚙️ Ready to see what custom automation would look like for your business? Book your free discovery call →",
        link: "/consultation"
      }
    },
    {
      question: "Isn't automation expensive or complicated?",
      answer: "No. Intelligent Automations are modular and plug directly into your existing tools—no rip-and-replace required. We design each workflow to start simple and scale as you grow. Most clients see ROI within the first month because we focus on high-impact, low-complexity wins first. The average SMB loses $93,000/year to manual work. Our automations typically cost a fraction of that—and pay for themselves in weeks, not months.",
      cta: {
        text: "🟢 Show me my ROI → Run the free automation scan or book a consultation",
        link: "#calculator"
      }
    },
    {
      question: "Will automation replace my employees?",
      answer: "Not at all. Automation replaces tasks, not people. Your team spends less time clicking, copying, and chasing—and more time creating value. We've seen teams become more engaged (not less) because they finally have bandwidth for strategic work. Custom automation makes your team more productive, not redundant.",
      cta: {
        text: "🟢 See how automation would complement your team → Book a free consultation",
        link: "/consultation"
      }
    },
    {
      question: "How secure is it?",
      answer: "Every integration is built on encrypted APIs and monitored 24/7 by a team that's helped secure NASA systems. We follow enterprise-grade security protocols: End-to-end encryption (AES-256), SOC2-compliant data handling, Zero-storage of sensitive credentials, and Audit logs for every automated action. Your data is more secure than most manual processes—because humans make mistakes, automation doesn't.",
      cta: {
        text: "🔒 Want to see how we secure your data? Request a security walkthrough →",
        link: "/consultation"
      }
    },
    {
      question: "What if I don't know where to start?",
      answer: "That's exactly why we built the calculator and free audit. You'll get a clear roadmap showing: Which workflows are costing you the most time, Which automations deliver the fastest ROI, and A 30-day deployment plan tailored to your business. No guesswork. No overwhelm. Just a prioritized plan you can act on immediately.",
      cta: {
        text: "🧭 Get your custom roadmap → Start your free audit or run the calculator",
        link: "#calculator"
      }
    },
    {
      question: "How long does it take to see results?",
      answer: "Preliminary findings within 72 hours. Full deployment in 7–14 days. Because we're building custom workflows (not installing templates), the timeline depends on complexity. But we prioritize quick wins first—so you start seeing time savings within the first week of deployment.",
      cta: {
        text: "📅 Want to see your deployment timeline? Book a free scoping call →",
        link: "/consultation"
      }
    },
    {
      question: "What if my tools are unique or niche?",
      answer: "Perfect. That's what we're built for. Most automation vendors only work with the top 20 SaaS tools. We've integrated with hundreds of platforms—from mainstream (HubSpot, Salesforce) to niche industry software. If your tools have APIs (or even just CSV exports), we can automate them. If they don't, we'll find creative workarounds.",
      cta: {
        text: "💡 Curious if your stack is compatible? Book a technical review call →",
        link: "/consultation"
      }
    },
    {
      question: "Is this affordable for SMBs?",
      answer: "Yes. Our automations cost a fraction of a typical hire—and far less than the profit you're losing to manual work. Example: A custom DataBridge automation (syncing 3 tools) costs ~$299–499/mo. That's less than one day of an employee's salary—but it works 24/7 and never makes mistakes. Most clients save 10–20x the cost of automation in recovered productivity and reduced errors.",
      cta: {
        text: "💰 See your cost-benefit breakdown → Run the free ROI scan",
        link: "#calculator"
      }
    },
    {
      question: "What happens after deployment?",
      answer: "You get ongoing monitoring, optimization, and monthly ROI reports. We don't just 'set and forget.' Your dedicated success manager: Monitors performance 24/7, Optimizes workflows based on usage patterns, Reports monthly time/cost savings, and Handles any tweaks or expansions. You'll always have real human support—not chatbots.",
      cta: {
        text: "🙌 Want to meet your potential success manager? Book your free consultation →",
        link: "/consultation"
      }
    },
    {
      question: "Can I start small and scale later?",
      answer: "Absolutely. That's our recommended approach. Most founders start with 1–2 high-impact automations (usually invoice processing or lead routing). Once you see the ROI, you expand. We design every automation to be modular—so you can add, adjust, or scale without rebuilding from scratch.",
      cta: {
        text: "🎯 Start small. Scale smart. Book your free scoping call →",
        link: "/consultation"
      }
    },
    {
      question: "What if it breaks or stops working?",
      answer: "We monitor 24/7 and fix issues proactively—usually before you even notice. If an integration changes (like when a SaaS tool updates its API), we handle the update automatically. If something unexpected happens, we're alerted instantly and resolve it. Our average response time is under 2 hours. Most issues are resolved in under 30 minutes.",
      cta: {
        text: "🛡️ See our uptime guarantee → Request service level agreement details →",
        link: "/consultation"
      }
    },
    {
      question: "How is this different from Zapier or Make?",
      answer: "Great question. Zapier and Make are DIY automation tools—you build and maintain everything yourself. They're powerful, but they require technical knowledge, ongoing maintenance, and troubleshooting when things break. QuantumLeap is a done-for-you service. We: Design the automation logic, Build and test the workflows, Monitor performance 24/7, Optimize and troubleshoot automatically, and Provide human support when you need it. Think of it this way: Zapier is like buying lumber to build a house. QuantumLeap is hiring an architect and construction crew.",
      cta: {
        text: "🧠 Want to see the difference in action? Book a live demo →",
        link: "/consultation"
      }
    },
    {
      question: "How do I get started?",
      answer: "Simple: 1) Run the free automation scan (2 minutes) to see where you're losing time, 2) Book a complimentary strategy call (30 minutes) to review your results, 3) Get your custom 30-day automation plan (delivered within 48 hours), 4) Deploy your first automation (7–14 days from approval). No obligation. No pressure. Just clarity on what's possible for your business.",
      cta: {
        text: "🚀 Start your free automation scan → or Book your strategy call →",
        link: "#calculator"
      }
    }
  ]

  // FAQ Schema for AEO (Answer Engine Optimization)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

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
                Save 20+ Hours a Week and Cut Costs by 60–85%—<br />
                <span className="text-brand-teal-400">Automate the Busywork That's Holding You Back</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Your time drives growth. Our custom Intelligent Automations connect your tools, remove repetitive tasks, and work 24/7—so you can do the work that moves the needle.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg shadow-brand-teal-500/50"
                >
                  🟢 Reveal My Hidden Hours & Savings
                </a>
                <a 
                  href="/consultation" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white/10 transition"
                >
                  ⚙️ Show Me What I Can Automate (Free Audit)
                </a>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-sm text-teal-100 mb-4">
                See how much time and money you can free up this month.
              </motion.p>

              {/* Trust Bar */}
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <p className="text-sm font-semibold text-teal-100 tracking-wide">
                  Fortune 500 Strategy | MIT & Caltech Engineering | Team That Secured NASA
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
                  <h3 className="text-2xl font-bold mb-2">What is QuantumLeap Intelligent Automations?</h3>
                  <p className="text-sm text-brand-teal-700 dark:text-brand-teal-300 font-semibold">
                    From the Desk of Paras Khurana, Founder & CEO
                  </p>
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  A custom-learning automation layer that links your CRM, email, finance, and operations tools—then takes over the repeatable work. Built for your business, not copied from a template.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Typical Outcomes:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal-500 flex-shrink-0">⏱</span>
                      <span>Reclaim 15–25 hours per week per employee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal-500 flex-shrink-0">💵</span>
                      <span>Reduce manual labor costs by 60–85%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal-500 flex-shrink-0">⚙️</span>
                      <span>Deploy in ≤14 days (no code required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal-500 flex-shrink-0">🔒</span>
                      <span>Built by the team that secured NASA systems</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
                  <em>From the desk of Paras Khurana, Founder & CEO</em>
                </p>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-brand-teal-500 mt-6">
                  <p className="text-sm font-semibold text-brand-teal-700 dark:text-brand-teal-300 uppercase tracking-wide mb-2">
                    💡 Critical Insight (from 250+ years combined experience)
                  </p>
                  <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg">
                    Every manual workflow is a hidden expense center. Find it, automate it, and your margins expand.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Manual Trap: Problem Section */}
        <section ref={costRef} className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={costInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  The Manual Trap—<span className="text-brand-teal-500">Where Profits Go to Die</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  You didn't start a business to babysit spreadsheets
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
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
                      <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                        You didn't start a business to babysit spreadsheets. But today you:
                      </p>
                      <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 mb-6">
                        <li className="flex items-start gap-3">
                          <span className="text-red-500 font-bold">•</span>
                          <span>Copy/paste data between CRMs and sheets</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-500 font-bold">•</span>
                          <span>Manually chase invoices and follow-ups</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-500 font-bold">•</span>
                          <span>Spend weekends "catching up" on reports</span>
                        </li>
                      </ul>
                      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4 font-semibold">
                        Reality: The average SMB loses ~1,200 hours/year to manual tasks—that's ~$93,000 in hidden waste.
                      </p>
                      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                        <strong>Result:</strong> Burnout, errors, slow cash flow, missed sales.
                      </p>
                      <p className="text-xl text-brand-teal-700 dark:text-brand-teal-300 font-bold mt-6">
                        Every manual step is a leak in your profit pipe. And most owners never see it until they calculate the real cost.
                      </p>
                    </div>
                    <div className="mt-6 text-center">
                      <a
                        href="#calculator"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg"
                      >
                        🔍 Calculate My Hidden Waste Now →
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Hidden Manual Task Costs */}
              <motion.div variants={fadeInUp} className="max-w-5xl mx-auto mt-16">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-brand-teal-200 dark:border-brand-teal-800">
                  <h3 className="text-3xl font-bold text-center mb-8 text-brand-teal-600 dark:text-brand-teal-400">
                    Hidden Cost of Manual Work (Per Year)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { item: 'Data Entry & Copy/Paste (8h/week)', amount: '$20,800' },
                      { item: 'Email Management & Triage (6h/week)', amount: '$15,600' },
                      { item: 'Invoice Creation & Follow-ups (4h/week)', amount: '$10,400' },
                      { item: 'Report Compilation (4h/week)', amount: '$10,400' },
                      { item: 'Calendar & Meeting Scheduling (3h/week)', amount: '$7,800' },
                      { item: 'Customer Follow-ups (4h/week)', amount: '$10,400' },
                      { item: 'Errors & Rework (3h/week)', amount: '$15,600' },
                      { item: 'Opportunity Cost (Lost Sales)', amount: '$12,000' }
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
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">TOTAL ANNUAL COST:</span>
                        <span className="text-4xl font-extrabold text-red-600 dark:text-red-400">$93,000+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Impact Stats */}
              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
                <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-6 border border-red-200 dark:border-red-800 text-center">
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">1,200+</div>
                  <p className="text-sm text-red-800 dark:text-red-200 font-medium">hours wasted yearly on manual tasks</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-6 border border-amber-200 dark:border-amber-800 text-center">
                  <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">68%</div>
                  <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">productivity loss from context switching</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800 text-center">
                  <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">3-7x</div>
                  <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">error rate in manual processes</p>
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
                  You're Working Harder Than Ever—<br /><span className="text-brand-teal-500">But Getting Less Time Back</span>
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                  <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    You built your business to gain freedom.<br />
                    Now you're the owner, assistant, and accountant—all before lunch.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Every email, invoice, and customer follow-up takes your focus away from growth.<br />
                    Hiring help means $68K+ salaries and training delays.<br />
                    Doing it yourself means burnout.
                  </p>
                  <p className="text-xl text-brand-teal-700 dark:text-brand-teal-300 font-bold">
                    If growth depends on you doing everything, you're not scaling—you're stalling.
                  </p>
                </div>
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

        {/* Custom Automation Solutions Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  The Intelligent Automation Suite—<span className="text-brand-teal-500">Custom-Built to Connect Your Exact Tools and Workflows</span>
                </h2>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We don't sell you off-the-shelf automation. We map your current stack, identify the friction points costing you time and money, then build intelligent workflows that run in the background—24/7, error-free.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Below are examples of automation types we've deployed for clients. Your solution will be tailored to your unique processes, tools, and goals.
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
                    Auto-creates invoices based on your triggers and sends smart follow-ups on your schedule. Custom-built for your billing workflow—never chase payments manually again.
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
                    Custom-captures and routes leads from every source you use—web forms, email, calls, chat. Ensures every prospect gets immediate attention with personalized follow-up sequences.
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
                    Automated feedback loops and retention triggers tailored to your customer lifecycle. Creates a VIP experience for every customer without manual intervention.
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
                    Auto-routes and summarizes reports based on your business logic. Compiles data from all your sources into real-time, actionable insights—no more manual spreadsheets.
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
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-6">
                  *Sample automation types. Your solution will be custom-designed for your business.
                </p>
                <a
                  href="/consultation"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg"
                >
                  🟢 Build My Custom Automation Plan (Free)
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  Pinpoint the top 3 workflows to automate first and the ROI you can expect.
                </p>
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
                  See How Much Your Time Is Really Worth—<br /><span className="text-brand-teal-500">And What We Could Custom-Build to Save It</span>
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
                  Answer a few questions to see how much money you're losing to manual work—and which custom AI roles could eliminate it.
                </p>
                <p className="text-lg text-brand-teal-700 dark:text-brand-teal-300 font-semibold max-w-3xl mx-auto">
                  Based on your inputs, here's what a custom AI workforce could do for your business:
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
                    before: "7 days/month on invoicing; late payments bleeding cash.",
                    after: "InvoiceIQ + OpsSync automated billing & reminders.",
                    result: "12 hours/week saved, 62% faster collections, +$45K cash-flow gain.",
                    quote: "I used to dread month-end. Now everything closes by the 3rd—automatically.",
                    author: "Peter Fernandes",
                    company: "AAA Construction Services"
                  },
                  {
                    before: "6 platforms to track leads and follow-ups; deals falling through cracks.",
                    after: "LeadFlow + MailPilot centralized and nurtured automatically.",
                    result: "+34% revenue; 2 extra client slots/month.",
                    quote: "We went from reactive chaos to proactive growth—without adding headcount.",
                    author: "Tiffany Duncan",
                    company: "Director, Talent Leap AI"
                  },
                  {
                    before: "Manual listing updates across CRM, MLS, and ads—18 hours/week.",
                    after: "OpsSync + DataBridge synced all channels in real-time.",
                    result: "18 hours/week saved; errors down 97%; ~$61K annual savings.",
                    quote: "I got my weekends back. And my team stopped making costly mistakes.",
                    author: "Gurpreet Sandhu",
                    company: "Broker, Real Estate Vision"
                  },
                  {
                    before: "Clients waited days for reports; manual compilation killed velocity.",
                    after: "SmartDocs compiled insights overnight.",
                    result: "Turnaround cut from 72h to 6h; retention up 29%.",
                    quote: "Our clients think we're psychic. We're just automated.",
                    author: "Lydia V. Penrose",
                    company: "Co-Founder, Code Vibe Studio"
                  },
                  {
                    before: "Overwhelmed inbox; missed deals; team drowning in triage.",
                    after: "MailPilot handled 75% of inbound messages.",
                    result: "Team stress ↓68%; close rate ↑41%.",
                    quote: "MailPilot didn't replace us—it freed us to do our actual jobs.",
                    author: "Harper Kingsley",
                    company: "VP, Adroit Infosystems"
                  },
                  {
                    before: "Invoice chasing consumed 10+ hours/week; cash flow unpredictable.",
                    after: "InvoiceIQ + ClientPulse automated billing and payment reminders.",
                    result: "10 hours/week recovered; payment time cut by 55%.",
                    quote: "I finally have predictable cash flow. Game changer.",
                    author: "Michael Torres",
                    company: "Torres Consulting Group"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-border hover:border-brand-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                  >
                    <div className="mb-4">
                      <div className="inline-block bg-red-100 dark:bg-red-900/30 rounded-full px-3 py-1 text-xs font-semibold text-red-700 dark:text-red-300 mb-2">
                        BEFORE
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.before}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="inline-block bg-amber-100 dark:bg-amber-900/30 rounded-full px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
                        AFTER
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {testimonial.after}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                        RESULT
                      </div>
                      <p className="text-sm text-brand-teal-700 dark:text-brand-teal-300 font-semibold">
                        {testimonial.result}
                      </p>
                    </div>
                    
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition shadow-lg"
                >
                  🟢 I Want Results Like These—Show Me My Automation ROI →
                </a>
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
                Our 60-Day "Time-Back" Guarantee
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 mb-8">
                <p className="text-2xl text-white leading-relaxed mb-6">
                  If you don't save at least <span className="font-bold text-teal-200">10 hours a week</span> or see measurable ROI within 60 days, we'll continue optimizing your automations free until you do.
                </p>
                <p className="text-xl text-teal-100">
                  Because confidence shouldn't be a risk.
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

              <a
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 hover:bg-white/30 rounded-lg transition shadow-lg mt-8 border-2 border-white/30"
              >
                🟢 Get My Free Automation Blueprint—Start Risk-Free →
              </a>
              
              <p className="mt-6 text-sm text-teal-100">
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

        {/* Schema Markup for SEO/AEO/AGO */}
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
      </main>

      <Footer />
    </div>
  )
}
