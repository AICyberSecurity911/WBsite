'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { GlowCard } from '@/components/ui/glow-card'
import { FlameBorder } from '@/components/ui/flame-border'
import { useState, useEffect } from 'react'
import { 
  Shield, 
  AlertTriangle, 
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  Target,
  Mail,
  Zap,
  ArrowRight,
  Star,
  CheckCircle2,
  FileText,
  Workflow,
  Database,
  Timer,
  Calculator,
  ChevronRight,
  Play,
  Building,
  Award,
  Lock
} from 'lucide-react'
import Link from 'next/link'

// ========================================
// PHASE 1: SEO & META DATA
// ========================================
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Intelligent Automation Workflows",
  "description": "Custom-built automation systems that connect business tools, eliminate repetitive tasks, and save 15-25 hours per week per employee",
  "provider": {
    "@type": "Organization",
    "name": "QuantumLeap AI"
  },
  "areaServed": ["US", "CA", "International"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LeadFlow Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "InvoiceIQ Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Workflow Automation"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "200"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is this different from Zapier or Make?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zapier and Make require you to build and maintain automations yourself. We design, build, monitor, and optimize custom automation workflows for you—with dedicated support and guaranteed ROI."
      }
    }
  ]
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
      "name": "Services",
      "item": "https://quantumleapai.abacusai.app/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Intelligent Automations",
      "item": "https://quantumleapai.abacusai.app/intelligent-automation"
    }
  ]
}

// ========================================
// COMPONENT: Countdown Timer
// ========================================
const CountdownTimer = ({ elementId, hoursRemaining }: { elementId: string; hoursRemaining: number }) => {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const endTime = new Date().getTime() + (hoursRemaining * 60 * 60 * 1000)
    
    const update = () => {
      const now = new Date().getTime()
      const distance = endTime - now
      
      if (distance < 0) {
        setTimeLeft("Contact us for next availability")
        return
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      
      setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes`)
    }
    
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [hoursRemaining])

  return <span id={elementId}>{timeLeft}</span>
}

// ========================================
// COMPONENT: ROI Calculator (Simplified - Full version will be separate component)
// ========================================
const ROICalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(100)
  const [hoursPerWeek, setHoursPerWeek] = useState(20)
  const [taskType, setTaskType] = useState('general')
  const [results, setResults] = useState<any>(null)

  const calculateWaste = () => {
    const weeklyManualCost = hourlyRate * hoursPerWeek
    const annualManualCost = weeklyManualCost * 52
    const weeksWasted = (hoursPerWeek * 52) / 40

    let monthlyAutomationCost
    if (hoursPerWeek <= 10) {
      monthlyAutomationCost = 399
    } else if (hoursPerWeek <= 20) {
      monthlyAutomationCost = 799
    } else if (hoursPerWeek <= 30) {
      monthlyAutomationCost = 1299
    } else {
      monthlyAutomationCost = 1799
    }

    const annualAutomationCost = monthlyAutomationCost * 12
    const annualSavings = annualManualCost - annualAutomationCost
    const roi = ((annualSavings / annualAutomationCost) * 100).toFixed(0)

    setResults({
      annualCost: annualManualCost,
      weeksWasted: weeksWasted.toFixed(1),
      automationCost: annualAutomationCost,
      savings: annualSavings,
      roi: roi
    })
  }

  return (
    <GlowCard className="p-8" showFlame={true}>
      <h3 className="text-2xl font-bold mb-6 text-[color:var(--fg)]">💸 Time Waste Calculator</h3>
      <p className="text-[color:var(--muted)] mb-6">See exactly how much your manual processes are costing you</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--fg)]">
            What's your hourly rate? (or what you could charge)
          </label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 100)}
            className="w-full px-4 py-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--fg)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
            min="0"
            step="10"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--fg)]">
            Hours per week spent on repetitive tasks: {hoursPerWeek}
          </label>
          <input
            type="range"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
            min="1"
            max="40"
            step="1"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-[color:var(--fg)]">
            What types of tasks?
          </label>
          <select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--fg)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          >
            <option value="general">General administrative tasks</option>
            <option value="data-entry">Data entry & updates</option>
            <option value="email">Email management</option>
            <option value="invoicing">Invoicing & payment tracking</option>
            <option value="scheduling">Scheduling & calendar management</option>
            <option value="reporting">Report generation</option>
            <option value="lead-management">Lead capture & follow-up</option>
          </select>
        </div>

        <button
          onClick={calculateWaste}
          className="w-full btn-primary py-4 text-lg font-semibold"
          style={{ backgroundColor: '#2563EB', color: 'white' }}
        >
          Calculate My Hidden Costs
        </button>

        {results && (
          <div className="mt-8 space-y-4 p-6 bg-[color:var(--card)] rounded-xl border border-[color:var(--border)]">
            <div>
              <div className="text-sm text-[color:var(--muted)] mb-1">Annual Cost of Manual Work:</div>
              <div className="text-3xl font-bold text-red-500">${results.annualCost.toLocaleString()}</div>
              <div className="text-xs text-[color:var(--muted)] mt-1">This is what you're spending per year on tasks a computer should handle</div>
            </div>
            <div>
              <div className="text-sm text-[color:var(--muted)] mb-1">Full Work Weeks Wasted Per Year:</div>
              <div className="text-3xl font-bold text-red-500">{results.weeksWasted}</div>
              <div className="text-xs text-[color:var(--muted)] mt-1">Equivalent full 40-hour work weeks spent on busywork</div>
            </div>
            <div>
              <div className="text-sm text-[color:var(--muted)] mb-1">Automation Cost (Annual):</div>
              <div className="text-3xl font-bold text-green-500">${results.automationCost.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-[color:var(--muted)] mb-1">Your Annual Savings:</div>
              <div className="text-3xl font-bold text-green-500">${results.savings.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-[color:var(--muted)] mb-1">ROI:</div>
              <div className="text-3xl font-bold text-green-500">{results.roi}%</div>
            </div>
            <Link
              href="#assessment"
              className="block mt-6 btn-primary text-center py-3"
              style={{ backgroundColor: '#16a34a', color: 'white' }}
            >
              Get My Free Automation Assessment →
            </Link>
          </div>
        )}
      </div>
    </GlowCard>
  )
}

export default function IntelligentAutomationPage() {
  // Smooth scroll to anchors
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const href = anchor.getAttribute('href') || ''
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          history.pushState(null, '', href)
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
      <Header />
      
      <main id="main-content">
        {/* ========================================
            PHASE 2: HERO SECTION - COMPLETE OVERHAUL
            ======================================== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg)] via-[color:var(--bg)]/95 to-[color:var(--bg)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Section Label */}
              <span className="inline-block text-xs uppercase tracking-wider text-[color:var(--muted)] mb-6">
                INTELLIGENT AUTOMATIONS
              </span>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                Stop Wasting Hours on Repetitive Tasks—Let AI Handle It
              </h1>

              {/* Subheadline */}
              <p className="max-w-4xl mx-auto mb-12 text-lg sm:text-xl text-[color:var(--muted)] leading-relaxed">
                From invoicing to customer follow-ups, we build AI automations that save you time, eliminate costly errors, and let you focus on growth.
              </p>

              {/* Opening Body Copy */}
              <div className="max-w-4xl mx-auto space-y-6 mb-12 text-lg text-[color:var(--muted)] leading-relaxed text-left">
                <p>Your time should drive growth—not busywork.</p>
                <p>We build custom automation workflows that connect your CRM, email, finance tools, and operations software—that handles the repetitive work automatically. 24/7. Zero errors. Zero management.</p>
                <p>You focus on strategy, sales, and scaling. Everything else runs itself.</p>
                <p className="font-semibold text-[color:var(--fg)]">You started a business to build something meaningful, not to spend your days buried in invoices, emails, and data entry. This "busywork" isn't just annoying; it's a silent killer of growth. Every hour you spend on a task a computer could do is an hour you're not spending with customers, innovating, or leading your team.</p>
                <p>We identify your most time-consuming manual processes and build a seamless AI automation engine to run them for you.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Invoice & Payment Automation:</strong> Generate, send, and follow up on invoices automatically. Get paid 40% faster.</li>
                  <li><strong>Customer Onboarding:</strong> Automatically send welcome emails, create accounts, and schedule check-ins.</li>
                  <li><strong>Lead Follow-Up:</strong> Instantly respond to new leads 24/7 and nurture them with automated sequences.</li>
                </ul>
              </div>

              {/* Hero Video Placeholder */}
              <div className="mb-12 max-w-4xl mx-auto">
                <GlowCard className="p-0 overflow-hidden" showFlame={true}>
                  <div className="relative aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      <p className="text-[color:var(--muted)]">Hero Video Placeholder</p>
                      <p className="text-sm text-[color:var(--muted)] mt-2">16-second automation transformation visualization</p>
                    </div>
                  </div>
                </GlowCard>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="#calculator"
                  className="btn-primary inline-flex items-center justify-center h-14 px-8 text-lg"
                  style={{ backgroundColor: '#2563EB', color: 'white' }}
                >
                  Calculate How Much Time I'm Wasting →
                </Link>
                <Link
                  href="#automation-suite"
                  className="btn-secondary inline-flex items-center justify-center h-14 px-8 text-lg border-2"
                  style={{ borderColor: '#2563EB', color: '#2563EB', background: 'transparent' }}
                >
                  See Automation Examples
                </Link>
              </div>

              {/* Microcopy */}
              <div className="text-sm text-[color:var(--muted)] mb-12 space-y-1">
                <p>✓ Free workflow analysis (no obligation)</p>
                <p>✓ Custom-built for your business (not templates)</p>
                <p>✓ Deploy in 7-14 days</p>
                <p>✓ 60-day ROI guarantee</p>
              </div>

              {/* Trust Badge Bar */}
              <div className="mb-12">
                <p className="text-xs text-[color:var(--muted)] mb-4">Trusted by:</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                  {['Fortune 500 Companies', '200+ Businesses Automated', '60-85% Cost Reduction', '$47K Average Annual Savings'].map((name) => (
                    <div key={name} className="text-lg font-semibold text-[color:var(--muted)]">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgency Element */}
              <GlowCard className="p-8 max-w-3xl mx-auto border-2" showFlame={true} style={{ borderColor: '#2563EB' }}>
                <div className="text-left">
                  <h3 className="text-blue-500 text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    ⚠️ THE TIME THEFT YOU DON'T SEE:
                  </h3>
                  <div className="space-y-4 text-[color:var(--muted)]">
                    <p>If you're spending 20 hours/week on repetitive tasks:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>→ 20 hours × 52 weeks = 1,040 hours per year</li>
                      <li>→ 1,040 hours ÷ 40 hours/week = 26 FULL WORK WEEKS</li>
                    </ul>
                    <p>You're spending half your year on busywork that a computer should handle.</p>
                    <p className="font-semibold text-[color:var(--fg)]">What could you accomplish with 26 extra weeks?</p>
                  </div>
                  <GlowCard className="mt-6 p-4 bg-white/5" showFlame={true}>
                    <p className="text-blue-500 font-semibold mb-2">🔥 AUTOMATION AVAILABILITY:</p>
                    <p>Custom automation builds require dedicated engineering time.</p>
                    <p>Current wait time: <strong>2-3 weeks</strong></p>
                    <p>Next available build slot: <CountdownTimer elementId="availability-countdown" hoursRemaining={192} /></p>
                    <p className="text-blue-500 mt-2">Only 4 automation projects remaining this quarter</p>
                  </GlowCard>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 11: ROI CALCULATOR TOOL
            ======================================== */}
        <section id="calculator" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Calculate How Much Time You're Wasting
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                See exactly how much your manual processes are costing you—and how much you'll save with automation.
              </p>
            </div>
            <ROICalculator />
          </div>
        </section>

        {/* ========================================
            PHASE 3: THE HIDDEN COST OF MANUAL WORK
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                THE BRUTAL MATH YOU'VE BEEN IGNORING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                You're Not "Saving Money" by Doing It Manually. You're Bleeding Cash You Can't See.
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Most entrepreneurs think automation is expensive. They compare the cost of automation to "$0" (doing it manually).
              </p>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto mt-4">
                But manual work isn't free. It's invisible expensive.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                Let me show you the real numbers.
              </p>
            </div>

            <div className="space-y-8">
              <GlowCard className="p-8" showFlame={true}>
                <h3 className="text-2xl font-bold mb-6 text-red-500">THE "$0" LIE:</h3>
                <p className="mb-4">You tell yourself: "I'll just do this manually. It's free."</p>
                <p className="mb-6 font-semibold">Here's what "free" actually costs you:</p>
                
                <div className="bg-[#1F2937] p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-4">SCENARIO: PROCESSING 50 LEADS PER WEEK MANUALLY</h4>
                  <div className="space-y-3 text-sm">
                    <p><strong>Manual Process:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>→ Copy lead data from form to CRM: 3 minutes per lead</li>
                      <li>→ Send welcome email: 2 minutes per lead</li>
                      <li>→ Schedule follow-up reminder: 1 minute per lead</li>
                      <li>→ Update sales pipeline: 2 minutes per lead</li>
                      <li>→ Create task for sales team: 2 minutes per lead</li>
                    </ul>
                    <p className="mt-4"><strong>Total time per lead:</strong> 10 minutes</p>
                    <p><strong>Total leads per week:</strong> 50</p>
                    <p><strong>Total time per week:</strong> 500 minutes = 8.3 hours</p>
                    <p className="mt-4"><strong>Annual time investment:</strong> 432 hours (nearly 11 work weeks)</p>
                    <p className="mt-4">
                      <strong>If your time is worth $100/hour:</strong> $43,200 in annual labor cost<br/>
                      <strong>If your time is worth $200/hour:</strong> $86,400 in annual labor cost
                    </p>
                    <p className="mt-4 text-green-500">
                      <strong>Automation cost:</strong> $299/month = $3,588/year<br/>
                      <strong>Automation time:</strong> 0 hours (runs automatically)
                    </p>
                    <p className="mt-4">
                      <strong>Annual savings at $100/hour rate:</strong> $39,612<br/>
                      <strong>Annual savings at $200/hour rate:</strong> $82,812
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-red-500 text-lg">You're not "saving money" by doing it manually. You're spending $40K-$80K you can't see.</p>
              </GlowCard>

              <GlowCard className="p-8" showFlame={true}>
                <h3 className="text-2xl font-bold mb-6">THE FIVE COSTS OF MANUAL WORK:</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: 'COST #1: Your Actual Time',
                      content: 'This one\'s obvious. But entrepreneurs consistently undervalue their own time. You charge clients $200/hour for your expertise. But you spend 15 hours/week doing $15/hour tasks. 15 hours × $200/hour = $3,000 in weekly opportunity cost. $3,000 × 52 weeks = $156,000 per year. That\'s $156,000 in revenue you didn\'t generate because you were copying data into spreadsheets.'
                    },
                    {
                      title: 'COST #2: Human Errors',
                      content: 'Manual work means human errors. And errors cost money. Real examples from our clients: Invoice sent to wrong client: $8,500 payment lost. Follow-up email never sent: $15,000 deal died. Data entered in wrong field: 3 hours to fix, project delayed. Forgot to update CRM: Sales team called same lead 4 times (embarrassing). Missed deadline because manual reminder failed: Client left ($50K annual contract). Conservative estimate: 5% error rate on manual tasks. Cost per error: $500-$5,000 in lost time, revenue, or reputation.'
                    },
                    {
                      title: 'COST #3: Inconsistency',
                      content: 'When humans do repetitive work, consistency suffers. Monday morning: You send detailed, thoughtful follow-ups. Friday afternoon: You send rushed, generic messages. When you\'re busy: Tasks get skipped entirely. When you\'re tired: Quality drops. Automation doesn\'t get tired. Doesn\'t get busy. Doesn\'t skip steps. Every lead gets the same quality treatment. Every time. Forever.'
                    },
                    {
                      title: 'COST #4: Scaling Limitations',
                      content: 'Manual processes can\'t scale without hiring more people. Example: You process 50 leads/week manually (8 hours of work). Marketing campaign brings 200 leads/week. Now you need 32 hours/week just to process leads. You can\'t handle it alone. You hire someone: $50K salary + $15K benefits + 4 weeks training. Total cost: $65K/year for one workflow. Automation cost for same work: $3,588/year.'
                    },
                    {
                      title: 'COST #5: Opportunity Cost (The Killer)',
                      content: 'Every hour you spend on manual tasks is an hour you\'re NOT spending on: Closing high-value deals. Developing strategic partnerships. Creating new products/services. Building relationships with key clients. Hiring and training your team. Marketing and business development. You didn\'t start a business to copy data into spreadsheets. But that\'s where your time goes. The question isn\'t: "Can I afford automation?" The question is: "Can I afford NOT to automate?"'
                    }
                  ].map((cost, idx) => (
                    <div key={idx} className="border-l-4 border-red-500 pl-4">
                      <h4 className="text-lg font-bold mb-2">{cost.title}</h4>
                      <p className="text-[color:var(--muted)]">{cost.content}</p>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Statistics Callout */}
              <GlowCard className="p-8 bg-[#1F2937] text-white" showFlame={true}>
                <h3 className="text-red-500 text-2xl font-bold mb-6 text-center">📊 THE REAL COST OF "FREE" MANUAL WORK:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">$78K-$260K</p>
                    <p className="text-sm text-[#D1D5DB]">Annual cost of manual work</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-500 mb-2">$3.6K-$7.2K</p>
                    <p className="text-sm text-[#D1D5DB]">Automation cost per year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-500 mb-2">$70K-$252K</p>
                    <p className="text-sm text-[#D1D5DB]">Annual savings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-500 mb-2">2-4 weeks</p>
                    <p className="text-sm text-[#D1D5DB]">ROI Timeline</p>
                  </div>
                </div>
                <p className="text-center font-semibold text-lg">You're not saving money doing it manually. You're spending money invisibly.</p>
                <p className="text-center mt-4">The only question: How much longer can you afford to bleed cash you can't see?</p>
              </GlowCard>

              <div className="text-center">
                <Link
                  href="#calculator"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#2563EB', color: 'white' }}
                >
                  Calculate My Hidden Costs (Free Assessment) →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 4: DIY AUTOMATION VS. DONE-FOR-YOU SECTION
            ======================================== */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                THE ZAPIER TRAP (WHY DIY AUTOMATION FAILS)
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                "I'll Just Use Zapier" Works Great—Until It Doesn't. Here's Why DIY Automation Fails 80% of the Time.
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Zapier, Make, and other DIY tools are powerful. But they require something most entrepreneurs don't have: time, technical knowledge, and constant maintenance.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                Here's the honest comparison nobody else will give you.
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto mb-12">
              <GlowCard className="p-0 overflow-hidden" showFlame={true}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1F2937] text-white">
                        <th className="px-4 py-4 text-left border-r border-[color:var(--border)]">The Critical Question</th>
                        <th className="px-4 py-4 text-left border-r border-[color:var(--border)]">Zapier/Make (DIY)</th>
                        <th className="px-4 py-4 text-left">QuantumLeap Automation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { q: 'Who builds it?', diy: 'You do (requires 10-40 hours to learn and build)', custom: 'We design and build for you (zero learning curve)' },
                        { q: 'Technical skill required?', diy: 'Moderate to advanced (need to understand APIs, logic, data mapping)', custom: 'None—you describe what you need, we build it' },
                        { q: 'Custom logic & workflows', diy: 'Limited by templates and your technical ability', custom: 'Fully custom—we build exactly what your business needs' },
                        { q: 'Deployment time', diy: 'Weeks to months (depending on complexity and your availability)', custom: '7-14 days (done-for-you, professionally built)' },
                        { q: '24/7 monitoring', diy: '❌ You monitor and fix issues yourself', custom: '✅ Proactive monitoring—we fix before you notice' },
                        { q: 'When something breaks', diy: 'You troubleshoot (hope you remember how you built it)', custom: 'We fix it—avg <2 hour response time' },
                        { q: 'Expert support', diy: 'Community forums and generic help docs', custom: 'Dedicated success manager who knows your business' },
                        { q: 'Security & compliance', diy: 'Your responsibility to configure correctly', custom: 'Enterprise-grade security (NASA-level protocols)' },
                        { q: 'Scaling & optimization', diy: 'Manual rebuild required as business grows', custom: 'Modular design—automations scale with you' },
                        { q: 'Monthly ROI reports', diy: '❌ No reporting', custom: '✅ Detailed time savings and cost reduction tracking' },
                        { q: 'Best for', diy: 'Tech-savvy teams with 40+ hours to invest', custom: 'Busy entrepreneurs who need results, not projects' },
                        { q: 'Typical monthly cost', diy: '$20-$200 (tools) + your time (20-40 hours)', custom: '$299-$799 (everything included)' },
                        { q: 'Setup cost', diy: '"Free" (just your time: 40 hours × $200/hour = $8,000)', custom: 'Included in service—we handle everything' }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-[color:var(--card)]' : 'bg-[color:var(--bg)]'}>
                          <td className="px-4 py-4 font-semibold border-r border-[color:var(--border)]">{row.q}</td>
                          <td className="px-4 py-4 text-sm text-[color:var(--muted)] border-r border-[color:var(--border)]">{row.diy}</td>
                          <td className="px-4 py-4 text-sm bg-green-500/10">{row.custom}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlowCard>
            </div>

            <GlowCard className="max-w-3xl mx-auto p-8 border-2 border-blue-500" showFlame={true}>
              <h3 className="text-blue-500 text-xl font-bold mb-4">💡 THE HONEST QUESTION:</h3>
              <div className="space-y-4 text-[color:var(--muted)]">
                <p>If you had 40 hours to invest in your business, would you spend it:</p>
                <p><strong>A)</strong> Learning Zapier, building automations, troubleshooting errors, maintaining workflows</p>
                <p><strong>B)</strong> Closing deals, developing strategy, hiring great people, growing revenue</p>
                <p className="font-semibold text-[color:var(--fg)]">DIY automation costs $20/month in tools + $8,000 in your time = $8,020 total cost</p>
                <p className="font-semibold text-[color:var(--fg)]">Done-for-you automation costs $299-$799/month = $3,588-$9,588/year total cost (everything included)</p>
                <p className="font-semibold text-blue-500">One lets you spend 40 hours doing $15/hour work. One lets you spend 40 hours doing $500/hour work.</p>
                <p className="font-semibold text-[color:var(--fg)]">Which investment actually makes sense?</p>
              </div>
              <div className="text-center mt-6">
                <Link
                  href="#assessment"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#2563EB', color: 'white' }}
                >
                  Let Experts Build It—I'll Focus on Revenue →
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            PHASE 5: THE AUTOMATION SUITE - COMPLETE REWRITE
            ======================================== */}
        <section id="automation-suite" className="py-20 bg-[color:var(--card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                YOUR CUSTOM AUTOMATION TOOLKIT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                The Eight Automation Workflows That Save 20+ Hours Per Week (Built Specifically for Your Business)
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                These aren't off-the-shelf templates. Every automation is custom-built to connect YOUR specific tools, match YOUR workflows, and solve YOUR bottlenecks.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                Here's what we typically build for clients (starting points—fully customizable):
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  icon: '🎯',
                  name: 'LeadFlow',
                  headline: 'Capture Leads from Everywhere—Route Them Instantly to the Right Person',
                  problem: 'Leads come from everywhere: website forms, social media, referrals, events, email inquiries. Right now, you\'re manually: Checking each source multiple times per day, Copying lead data into your CRM, Assigning leads to sales team, Sending welcome emails, Creating follow-up tasks. If you forget to check one source: Lead dies. Deal lost.',
                  automates: [
                    'Captures leads from website, Facebook, LinkedIn, Google Ads, referral forms (every source)',
                    'Automatically enriches data (pulls company info, social profiles, contact details)',
                    'Routes to correct team member based on lead source, location, or product interest',
                    'Sends personalized welcome email immediately',
                    'Creates follow-up tasks in CRM with reminders',
                    'Alerts you via Slack/SMS when high-value leads arrive',
                    'Tracks response time and conversion rates automatically'
                  ],
                  result: 'Masoud Nasserie, Real Estate Broker: BEFORE: Missing leads that came in after 5 PM, losing deals to faster competitors. AFTER: LeadFlow captures and responds 24/7—34% revenue increase in 3 months. TIME SAVED: 12 hours/week no longer manually processing leads.',
                  investment: 'Starting at $299/month',
                  roi: '2-4 weeks'
                },
                {
                  icon: '💰',
                  name: 'InvoiceIQ',
                  headline: 'Generate Invoices Automatically—Chase Payments Without Lifting a Finger',
                  problem: 'Creating invoices manually is soul-crushing: Project completes, you create invoice (15 minutes), Send invoice to client (2 minutes), Wait for payment (hoping they remember), Send reminder 1 week later (5 minutes), Send "gentle" reminder 2 weeks later (5 minutes), Send "urgent" reminder 3 weeks later (10 minutes), Call client because payment is now 30 days late (20 minutes). Per invoice time investment: 57 minutes. If you do 20 invoices/month: 19 hours per month just chasing money you\'re already owed',
                  automates: [
                    'Generates invoices automatically when project status = "Complete"',
                    'Pulls correct line items, pricing, client details from CRM',
                    'Sends invoice via email with payment link',
                    'Sends polite reminder 7 days before due date',
                    'Sends second reminder on due date',
                    'Sends escalating reminders at 7, 14, and 21 days overdue',
                    'Notifies you only when invoice is paid or hits 30 days overdue',
                    'Updates accounting software automatically when payment received',
                    'Generates cash flow reports every Monday morning'
                  ],
                  result: 'Peter Fernandes, AAA Construction Services: BEFORE: 7 days per month creating invoices and chasing payments. AFTER: InvoiceIQ automated entire billing workflow. TIME SAVED: 12 hours/week, 62% faster payment collection, +$45K cash flow improvement.',
                  investment: 'Starting at $499/month',
                  roi: '1-2 weeks (first time invoices get paid faster)'
                },
                {
                  icon: '✉️',
                  name: 'MailPilot',
                  headline: 'Read, Prioritize, and Respond to Emails While You Sleep',
                  problem: 'You spend 2-3 hours per day managing email: Reading messages, Deciding what\'s urgent vs. noise, Responding to common questions (same answers every time), Filing emails into folders, Flagging follow-ups, Searching for buried conversations. 2.5 hours/day × 5 days = 12.5 hours per week on email.',
                  automates: [
                    'Reads every incoming email and categorizes by priority (urgent, important, can wait, spam)',
                    'Auto-responds to common questions using your pre-approved templates',
                    'Extracts action items and creates tasks in your project management tool',
                    'Schedules meetings automatically when clients request availability',
                    'Files emails into correct folders based on content',
                    'Summarizes long email threads into bullet points',
                    'Alerts you ONLY to emails requiring human judgment',
                    'Drafts responses to complex emails for your review and approval'
                  ],
                  result: 'Tiffany Duncan, Director, Talent Leap AI: BEFORE: 15 hours/week buried in email, missing important messages. AFTER: MailPilot handles routine emails automatically. TIME SAVED: 10 hours/week, zero missed client messages.',
                  investment: 'Starting at $399/month',
                  roi: 'Week 1 (immediately noticeable)'
                },
                {
                  icon: '🔗',
                  name: 'OpsSync',
                  headline: 'Connect Every Tool—Stop Updating the Same Information in Five Different Places',
                  problem: 'Your business runs on 10+ tools: CRM, accounting, project management, email, calendar, Slack, Google Sheets. None of them talk to each other. So you manually update the same information everywhere: New client signed: Update CRM, update accounting, update project tool, update team via Slack. Project complete: Update PM tool, create invoice, update client in CRM, notify team. Payment received: Update accounting, update CRM, send thank-you email, trigger next phase. Per client/project cycle: 30-45 minutes of manual updates across tools',
                  automates: [
                    'Connects CRM + Accounting + Project Management + Email + Slack + Google Workspace',
                    'One update in any tool = automatic updates everywhere else',
                    'Client data syncs in real-time across all platforms',
                    'Project status changes trigger automatic workflows',
                    'Financial data flows between invoicing and accounting automatically',
                    'Team notifications happen automatically based on triggers',
                    'Reports pull real-time data from all sources into single dashboard'
                  ],
                  result: 'Gurpreet Sandhu, Real Estate Broker: BEFORE: 18 hours/week manually updating listings across MLS, CRM, website, and advertising platforms. AFTER: OpsSync syncs everything in real-time. TIME SAVED: 18 hours/week, 97% reduction in data errors, ~$61K annual savings.',
                  investment: 'Starting at $499/month',
                  roi: '2-3 weeks'
                },
                {
                  icon: '💬',
                  name: 'ClientPulse',
                  headline: 'Keep Clients Happy Automatically—Before They Think About Leaving',
                  problem: 'You lose clients because you don\'t stay in touch consistently: Client completes project—you forget to follow up, 6 months pass—client doesn\'t hear from you, Client needs service again—hires your competitor instead. You meant to stay in touch. You were just too busy.',
                  automates: [
                    'Sends automated check-ins at strategic intervals (30, 60, 90 days post-project)',
                    'Triggers satisfaction surveys after major milestones',
                    'Monitors client health scores (engagement, payment speed, communication frequency)',
                    'Alerts you when client shows signs of churn risk',
                    'Sends birthday/anniversary messages automatically',
                    'Triggers retention campaigns when clients go quiet',
                    'Automates referral requests after successful projects',
                    'Creates upsell opportunities based on client behavior'
                  ],
                  result: 'Marketing Agency Client: BEFORE: 23% annual client churn (losing clients to neglect). AFTER: ClientPulse keeps engagement consistent. RESULT: Churn reduced to 8%, referrals increased 34%.',
                  investment: 'Starting at $299/month',
                  roi: '3-6 months (retention compound effect)'
                },
                {
                  icon: '🌉',
                  name: 'DataBridge',
                  headline: 'Sync Data in Real-Time—Stop Exporting CSVs and Manually Importing Files',
                  problem: 'Your data lives in silos: Sales data in CRM, Financial data in QuickBooks, Operations data in spreadsheets, Marketing data in ad platforms. Getting complete business picture requires: Export CSV from Tool A, Manually clean data, Import into Tool B, Repeat for 5+ tools, Data is already outdated by the time you\'re done',
                  automates: [
                    'Real-time data sync between all business tools',
                    'Automatic data transformation (formats data correctly for each tool)',
                    'Scheduled data transfers (nightly, weekly, or on-demand)',
                    'Error handling and validation (catches problems before they spread)',
                    'Historical data preservation (never lose information during transfers)',
                    'Unified reporting dashboard (all data in one view)'
                  ],
                  result: 'E-commerce Business: BEFORE: 8 hours/week manually exporting, cleaning, importing data. AFTER: DataBridge syncs everything automatically. TIME SAVED: 8 hours/week, zero data errors, real-time visibility.',
                  investment: 'Starting at $399/month',
                  roi: '2-4 weeks'
                },
                {
                  icon: '📋',
                  name: 'FormFlow',
                  headline: 'Process Forms and Documents Automatically—Stop Copy-Pasting from PDFs',
                  problem: 'Your business receives forms, applications, contracts, invoices: Client submits PDF application, You manually read it, Copy data into your system field by field, File PDF in correct folder, Trigger next workflow step manually. Per form time investment: 15-30 minutes',
                  automates: [
                    'Extracts data from PDFs, images, and scanned documents (OCR technology)',
                    'Populates your systems automatically with extracted data',
                    'Routes documents to correct approver based on content',
                    'Files documents in correct folders automatically',
                    'Triggers next workflow steps based on form type',
                    'Sends notifications when action required',
                    'Generates reports from form data automatically'
                  ],
                  result: 'Insurance Agency: BEFORE: Processing 50 applications/week manually (25 hours). AFTER: FormFlow extracts and processes automatically. TIME SAVED: 22 hours/week, 94% faster application processing.',
                  investment: 'Starting at $399/month',
                  roi: '2-3 weeks'
                },
                {
                  icon: '📄',
                  name: 'SmartDocs',
                  headline: 'Generate Reports, Contracts, and Documents Automatically—Stop Creating the Same Files Over and Over',
                  problem: 'You create the same documents repeatedly with minor variations: Client proposals (same structure, different client names), Monthly reports (same format, updated numbers), Contracts (same terms, different details), Invoices (same items, different clients), Status updates (same template, current progress). Per document creation: 20-45 minutes of copying, pasting, updating',
                  automates: [
                    'Generates documents automatically from templates',
                    'Pulls data from your CRM, accounting, project tools',
                    'Populates all fields automatically (names, dates, numbers, terms)',
                    'Formats documents professionally (branded, consistent)',
                    'Sends for e-signature automatically when required',
                    'Files completed documents in correct folders',
                    'Sends to clients via email with tracking',
                    'Notifies you when documents are viewed/signed'
                  ],
                  result: 'Consulting Firm: BEFORE: 6 hours/week creating proposals and reports manually. AFTER: SmartDocs generates everything automatically. TIME SAVED: 5.5 hours/week, 100% brand consistency.',
                  investment: 'Starting at $299/month',
                  roi: '2-4 weeks'
                }
              ].map((auto, idx) => (
                <GlowCard key={idx} className="p-8" showFlame={true}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl">{auto.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{auto.name}</h3>
                      <h4 className="text-xl font-semibold mb-4">{auto.headline}</h4>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold mb-2 text-red-500">The Problem You're Solving:</h5>
                    <p className="text-[color:var(--muted)]">{auto.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-2 text-green-500">What {auto.name} Automates:</h5>
                    <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)] ml-4">
                      {auto.automates.map((item, i) => (
                        <li key={i}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>

                  <GlowCard className="p-4 bg-green-500/10 border-l-4 border-green-500 mb-4" showFlame={true}>
                    <h5 className="font-semibold mb-2">Real Result:</h5>
                    <p className="text-sm text-[color:var(--muted)]">{auto.result}</p>
                  </GlowCard>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[color:var(--muted)]">Typical Investment: <strong className="text-[color:var(--fg)]">{auto.investment}</strong></p>
                      <p className="text-sm text-[color:var(--muted)]">Typical ROI Timeline: <strong className="text-green-500">{auto.roi}</strong></p>
                    </div>
                    <Link
                      href="#assessment"
                      className="btn-primary inline-flex items-center"
                      style={{ backgroundColor: '#2563EB', color: 'white' }}
                    >
                      Automate My {auto.name} →
                    </Link>
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Automation Summary Callout */}
            <GlowCard className="mt-12 p-8 border-2 border-blue-500" showFlame={true}>
              <h3 className="text-blue-500 text-2xl font-bold mb-6 text-center">🎯 THE COMPLETE AUTOMATION SUITE:</h3>
              <p className="text-center mb-6 text-[color:var(--muted)]">Pick individual automations or combine them for maximum impact:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlowCard className="p-6" showFlame={true}>
                  <h4 className="font-bold mb-2">STARTER PACKAGE (Most Popular):</h4>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>→ LeadFlow + InvoiceIQ + MailPilot</li>
                  </ul>
                  <p className="font-semibold mb-1">Investment: $1,097/month</p>
                  <p className="text-sm text-[color:var(--muted)] mb-2">Time Saved: 15-20 hours/week</p>
                  <p className="text-sm text-green-500">ROI Timeline: 3-4 weeks</p>
                </GlowCard>
                <GlowCard className="p-6" showFlame={true}>
                  <h4 className="font-bold mb-2">GROWTH PACKAGE:</h4>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>→ All Starter + OpsSync + ClientPulse</li>
                  </ul>
                  <p className="font-semibold mb-1">Investment: $1,795/month</p>
                  <p className="text-sm text-[color:var(--muted)] mb-2">Time Saved: 25-30 hours/week</p>
                  <p className="text-sm text-green-500">ROI Timeline: 4-6 weeks</p>
                </GlowCard>
                <GlowCard className="p-6" showFlame={true}>
                  <h4 className="font-bold mb-2">ENTERPRISE PACKAGE:</h4>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>→ All 8 Automations + Custom Workflows</li>
                  </ul>
                  <p className="font-semibold mb-1">Investment: Custom pricing</p>
                  <p className="text-sm text-[color:var(--muted)] mb-2">Time Saved: 35+ hours/week</p>
                  <p className="text-sm text-green-500">ROI Timeline: 6-8 weeks</p>
                </GlowCard>
              </div>
              <p className="text-center mt-6 text-[color:var(--muted)]">Every automation is custom-built for YOUR tools, YOUR workflows, YOUR business.</p>
              <p className="text-center font-semibold">Not templates. Not one-size-fits-all. Custom engineering.</p>
              <div className="text-center mt-6">
                <Link
                  href="#assessment"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#2563EB', color: 'white' }}
                >
                  Build My Custom Automation Stack →
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            PHASE 6: TESTIMONIALS SECTION - ENHANCED
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                REAL ENTREPRENEURS • REAL TIME SAVED • REAL REVENUE GROWTH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                "I Got My Life Back. And Revenue Went Up 34%."
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                These aren't theoretical time savings. These are real business owners who automated repetitive work—and used the reclaimed time to actually grow their businesses.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                Every one of them said the same thing: "I wish I had done this years ago."
              </p>
            </div>

            {/* Featured Testimonial - Peter Fernandes */}
            <GlowCard className="p-8 md:p-12 mb-8" showFlame={true}>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-24 h-24 text-white" />
                </div>
                <div>
                  <div className="mb-4">
                    <p className="text-xl font-bold mb-1">💬 Peter Fernandes</p>
                    <p className="text-[color:var(--muted)] text-sm">Owner, AAA Construction Services</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 text-[color:var(--muted)] leading-relaxed">
                    <p>"Before QuantumLeap, I was working 70-hour weeks and drowning in administrative work that had nothing to do with construction.</p>
                    <p>Every single day: 90 minutes creating invoices and chasing payments, 2 hours updating project status across three different tools, 45 minutes responding to the same client questions via email, 1 hour manually reconciling expenses in QuickBooks.</p>
                    <p className="font-semibold text-[color:var(--fg)]">I was spending 4-5 hours daily on busywork. My actual job—running construction projects—was happening in whatever time was left over.</p>
                    <p>Revenue was stuck at $750K. Not because we couldn't handle more work. Because I couldn't handle more administration.</p>
                    <p>QuantumLeap deployed three automations: InvoiceIQ, OpsSync, and MailPilot.</p>
                    <p className="text-xl font-bold text-green-500">The results: TIME SAVED: 25 hours/week (I have weekends now), REVENUE GROWTH: Went from $750K to $1.3M in 18 months (73% increase), CASH FLOW: 62% faster payment collection, ERRORS: Found $15K in accounting errors the AI caught that we missed.</p>
                    <p className="font-semibold text-[color:var(--fg)]">But here's the real impact: I work ON my business now instead of IN it. I'm bidding bigger projects. Building client relationships. Training my team. Strategic planning.</p>
                    <p>My wife said: 'I finally have my husband back.' That's worth more than any revenue number.</p>
                    <p>The automation paid for itself in the first month. Everything after that is pure profit and reclaimed life."</p>
                  </div>
                </div>
              </div>

              <GlowCard className="p-6 bg-green-500/10 border-l-4 border-green-500" showFlame={true}>
                <h4 className="text-green-500 font-bold mb-4">📊 PETER'S RESULTS:</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Hours/Week Reclaimed</p>
                    <p className="text-2xl font-bold text-green-500">25</p>
                  </div>
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Revenue Growth</p>
                    <p className="text-2xl font-bold text-green-500">73%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Faster Payments</p>
                    <p className="text-2xl font-bold text-green-500">62%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Errors Caught</p>
                    <p className="text-2xl font-bold text-green-500">$15K</p>
                  </div>
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Annual Savings</p>
                    <p className="text-2xl font-bold text-green-500">$47K</p>
                  </div>
                </div>
                <p className="text-xs text-[color:var(--muted)] mt-4 text-right">— Peter Fernandes, Owner, AAA Construction Services ★★★★★</p>
              </GlowCard>

              <div className="text-center mt-8">
                <Link
                  href="#assessment"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#2563EB', color: 'white' }}
                >
                  Get My Time Back Like Peter Did
                </Link>
              </div>
            </GlowCard>

            {/* Additional Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Tiffany Duncan',
                  company: 'Talent Leap AI',
                  title: 'Director',
                  quote: '"We went from reactive chaos to proactive growth—without adding headcount."',
                  results: ['15 hours/week saved', '0% missed leads (down from 12%)', '2-minute response time (down from 4 hours)', '34% revenue increase in 90 days']
                },
                {
                  name: 'Gurpreet Sandhu',
                  company: 'Real Estate Vision',
                  title: 'Broker',
                  quote: '"I got my weekends back. And my team stopped making costly mistakes."',
                  results: ['18 hours/week reclaimed', '97% reduction in data errors', '~$61K annual cost savings', '23 additional deals closed']
                }
              ].map((testimonial, idx) => (
                <GlowCard key={idx} className="p-6" showFlame={true}>
                  <div className="mb-4">
                    <p className="text-lg font-bold mb-1">💬 {testimonial.name}</p>
                    <p className="text-sm text-[color:var(--muted)]">{testimonial.title}, {testimonial.company}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[color:var(--muted)] mb-4 italic">"{testimonial.quote}"</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold mb-2">Results:</p>
                    {testimonial.results.map((result, i) => (
                      <p key={i} className="text-sm text-green-500">• {result}</p>
                    ))}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 7: 60-DAY ROI GUARANTEE - EXPANDED
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                ZERO-RISK GUARANTEE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our 60-Day "Time-Back & ROI" Guarantee—You Get Results or We Keep Working Until You Do (Free)
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                If you don't save at least 10 hours per week OR see measurable ROI within 60 days, we'll continue optimizing your automations at no additional cost until you do.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                That's not a refund. That's us working for free until you get the results we promised.
              </p>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto mt-4">
                Why can we offer this guarantee? Because 93% of clients see measurable results in the first 30 days.
              </p>
            </div>

            <GlowCard className="p-8 border-2 border-green-500" showFlame={true}>
              <h3 className="text-green-500 text-xl font-bold mb-4">🛡️ THE PROMISE IN WRITING:</h3>
              <div className="space-y-4 text-[color:var(--muted)]">
                <p>Deploy your custom automation workflows. Track results for 60 days.</p>
                <p className="font-semibold">If you're not saving 10+ hours/week OR seeing measurable ROI:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>→ We continue optimizing at no additional cost</li>
                  <li>→ We add new automations as needed</li>
                  <li>→ We refine existing workflows</li>
                  <li>→ We work until you get the results we promised</li>
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="font-semibold mb-1">Your Investment:</p>
                    <p className="text-sm">$299-$799/month (varies by package)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Your Protection:</p>
                    <p className="text-sm">Guaranteed results or free ongoing optimization</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Your Risk:</p>
                    <p className="text-sm">Zero (you only pay for automation that works)</p>
                  </div>
                </div>
                <p className="font-semibold text-center mt-6">We don't get paid for promises. We get paid for performance.</p>
              </div>
              <div className="text-center mt-6">
                <Link
                  href="#assessment"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#16a34a', color: 'white' }}
                >
                  Start My Risk-Free Automation →
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            PHASE 8: STRATEGIC FAQ SECTION - COMPLETE REWRITE
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                EVERY QUESTION ANSWERED HONESTLY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                You Have Questions About Automation. We Have Answers That Don't Require a Computer Science Degree.
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Automation sounds complicated. It's not—when someone else builds it for you.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                Here are the honest answers to every question we get asked—including the uncomfortable ones other automation companies avoid.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'I\'m barely keeping up as it is—how do I find time to implement this?',
                  a: 'You don\'t. That\'s the point. Here\'s the actual implementation timeline: YOUR TIME INVESTMENT: Week 1: Strategy Call (60 minutes) - We analyze your workflows, identify what to automate first, you approve the plan. Week 2: You do nothing - We build your automations, we test everything, we configure all integrations. Week 3: Approval Call (30 minutes) - We show you what we built, you test it briefly, you approve deployment. Week 4: You do nothing - We deploy to production, we monitor for issues, we fix anything that needs adjusting. Total time investment from you: 90 minutes. Everything else? We handle it.',
                  cta: 'Invest 90 Minutes to Save 20 Hours/Week →'
                },
                {
                  q: 'What if this is just another "shiny object" that doesn\'t work for my industry?',
                  a: 'Fair concern. We\'ve deployed automations across: Construction, Real estate, Professional services, Healthcare, Legal, Accounting, E-commerce, SaaS, Manufacturing, Restaurants, Retail, Nonprofits. What they all have in common: They all have repetitive workflows that follow patterns. If your business has workflows that repeat, they can be automated. Your industry knowledge is unique. Your repetitive tasks aren\'t.',
                  cta: 'See Automation Examples in My Industry →'
                },
                {
                  q: 'I\'ve been burned by tech promises before. How is this different?',
                  a: 'DIFFERENCE #1: We Do the Work (Not You) - Zero learning curve. Zero maintenance burden. Zero technical skill required. DIFFERENCE #2: Guaranteed Results (Not Promises) - 60-day ROI guarantee in writing. Save 10+ hours/week or we keep optimizing for free. DIFFERENCE #3: Done-For-You (Not Do-It-Yourself) - We build it, we deploy it, we monitor it, we optimize it, you just use it. DIFFERENCE #4: Human Support (Not Community Forums) - Dedicated success manager who knows your business. 24/7 monitoring catches issues before they impact you.',
                  cta: 'Try It Risk-Free for 60 Days →'
                },
                {
                  q: 'Will AI replace my team or help them?',
                  a: 'Automation doesn\'t replace people. It replaces the soul-crushing busywork that makes people want to quit. BEFORE AUTOMATION: Your team spends time on data entry, status updates, follow-up emails, report generation, invoice processing, scheduling. Employee satisfaction: Low (feeling like robots, not valued for skills). AFTER AUTOMATION: Automation handles all busywork. Your team focuses on client relationships, problem-solving, strategic work, creative projects, high-value activities. Employee satisfaction: High (doing work that matters, using actual skills).',
                  cta: 'Upgrade My Team\'s Work →'
                },
                {
                  q: 'Can I really trust a machine with sensitive client data?',
                  a: 'This is actually backwards. Machines are MORE secure than humans with sensitive data. HUMAN SECURITY RISKS: Writes passwords on sticky notes, uses same password everywhere, clicks phishing emails, accidentally emails wrong client, leaves laptop unlocked. AUTOMATION SECURITY: Encrypted data transmission (256-bit SSL), access controls (role-based permissions), audit trails (every action logged), no password reuse, no phishing risk, no accidental disclosure, secure authentication (OAuth, API keys), automatic security updates. NASA-RECOGNIZED SECURITY PROTOCOLS: Our automation framework uses the same security standards trusted by NASA, Fortune 500 financial institutions, healthcare providers (HIPAA compliant), government agencies.',
                  cta: 'Upgrade to Military-Grade Security →'
                },
                {
                  q: 'How much does this actually cost?',
                  a: 'PRICING TIERS: STARTER PACKAGE: $299-$599/month (1-2 core automations, 8-12 hours/week saved). GROWTH PACKAGE: $599-$999/month (3-5 core automations, 15-20 hours/week saved). SCALE PACKAGE: $999-$1,799/month (6+ automations, 25-35 hours/week saved). ENTERPRISE PACKAGE: Custom pricing (unlimited automations, 40+ hours/week saved). THE REAL COST COMPARISON: Let\'s say you choose the Growth Package: $799/month. Time saved: 20 hours/week. Annual time savings: 1,040 hours (26 full work weeks). Your time value: $100/hour (conservative). Annual value of reclaimed time: $104,000. Your actual ROI: 985%. You spend: $9,588. You gain: $104,000 in reclaimed time value.',
                  cta: 'Calculate My Actual ROI →'
                }
              ].map((faq, idx) => (
                <GlowCard key={idx} className="p-8" showFlame={true}>
                  <h3 className="text-blue-500 text-xl font-bold mb-4">{faq.q}</h3>
                  <div className="text-[color:var(--muted)] leading-relaxed mb-6">
                    <p>{faq.a}</p>
                  </div>
                  <Link
                    href="#assessment"
                    className="btn-primary inline-flex items-center"
                    style={{ backgroundColor: '#2563EB', color: 'white' }}
                  >
                    {faq.cta}
                  </Link>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 9: STRATEGIC BLOG INTEGRATION
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                REAL AUTOMATIONS • REAL TIME SAVED • REAL LESSONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Learn From Businesses Who Automated Before Burning Out
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                These aren't generic "automation tips." These are real stories from real entrepreneurs who automated repetitive work—and used the reclaimed time to actually scale their businesses profitably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'From 4 Hours Daily in Email Hell to 30 Minutes of Strategic Communication: How MailPilot Transformed a Founder\'s Workday',
                  excerpt: 'Marcus was drowning in email. 200+ messages per day. 4 hours every day reading, categorizing, responding, filing. Most were routine questions with identical answers. We deployed MailPilot with custom response templates and intelligent routing. Marcus went from 200 emails requiring responses to 12 emails requiring decisions. Time spent on email: From 4 hours/day to 30 minutes/day. Time reclaimed: 17.5 hours/week.',
                  readTime: '9 min read',
                  tag: 'CASE STUDY'
                },
                {
                  title: 'The $127K Cash Flow Problem Solved by 15 Minutes of Automation Setup (InvoiceIQ Case Study)',
                  excerpt: 'Sarah\'s consulting firm had a cash flow crisis. Not because clients weren\'t paying. Because they were paying slowly. Average payment time: 47 days. Outstanding invoices: $127,000. Sarah\'s time chasing payments: 6 hours/week. We deployed InvoiceIQ with automatic payment reminders and escalation protocols. Results in first 90 days: Average payment time: 47 days → 19 days (60% faster), Outstanding invoices: $127K → $31K (76% reduction), Cash flow improvement: $96,000 collected.',
                  readTime: '10 min read',
                  tag: 'TRUE STORY'
                },
                {
                  title: 'How LeadFlow Captured 34% More Revenue Without Changing the Marketing Strategy (Just the Follow-Up)',
                  excerpt: 'David\'s agency had a lead problem. Not too few leads. Too many leads getting lost. Leads came from website forms, LinkedIn messages, referral emails, networking events, social media inquiries. Five different sources. No centralized system. No consistent follow-up. We deployed LeadFlow with intelligent routing and automatic enrichment. Results in first 90 days: Lead response time: 4 hours → 2 minutes (99% faster), Lead leakage: 18% → 0%, Revenue: +34% from faster, more consistent lead nurturing.',
                  readTime: '11 min read',
                  tag: 'WARNING'
                }
              ].map((blog, idx) => (
                <GlowCard key={idx} className="p-0 overflow-hidden" showFlame={true}>
                  <div className="h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center relative">
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold">
                      {blog.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 leading-tight">{blog.title}</h3>
                    <p className="text-sm text-[color:var(--muted)] mb-4 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[color:var(--muted)]">{blog.readTime}</span>
                      <Link href={`/blog/automation-case-study-${idx + 1}`} className="btn-primary text-sm px-4 py-2" style={{ backgroundColor: '#2563EB', color: 'white' }}>
                        Read the Full Story →
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog/automation-case-studies" className="btn-secondary inline-flex items-center border-2" style={{ borderColor: '#2563EB', color: '#2563EB', background: 'transparent' }}>
                Browse All Automation Case Studies →
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 10: FINAL CTA SECTION - COMPLETE REWRITE
            ======================================== */}
        <section id="assessment" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                THE ONLY DECISION THAT MATTERS NOW
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Reclaim 20+ Hours Per Week Starting in 14 Days—Or Keep Doing It Manually Forever
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-[color:var(--muted)]">
                <p>Right now, you're at a decision point.</p>
                <p>You can keep spending 20+ hours per week on repetitive tasks that don't require your expertise—and hope you find time to grow your business "someday."</p>
                <p>Or you can automate the busywork in 14 days—and use the reclaimed time to actually scale profitably.</p>
                <p className="font-semibold">Most entrepreneurs wait until they're drowning to automate. Smart entrepreneurs automate before they hit the wall.</p>
                <p className="text-2xl font-bold text-blue-500">Which one are you?</p>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              {[
                {
                  step: 1,
                  title: 'Free Workflow Analysis Call (60 Minutes)',
                  what: 'We analyze your current workflows to identify what\'s stealing your time—and what can be automated immediately for maximum ROI.',
                  get: [
                    '→ Workflow audit (we map where your time actually goes)',
                    '→ Automation opportunity analysis (what to automate first)',
                    '→ Time savings projection (hours you\'ll reclaim per week)',
                    '→ Custom automation recommendations (specific to your business)',
                    '→ Honest assessment: Is automation right for you right now?'
                  ],
                  time: '60 minutes on video call'
                },
                {
                  step: 2,
                  title: 'Custom Automation Proposal (Delivered in 48 Hours)',
                  what: 'We create a detailed automation plan showing exactly what we\'ll build, how it will work, what tools we\'ll integrate, and what it will cost.',
                  get: [
                    '→ Custom automation architecture (visual workflow diagrams)',
                    '→ Integration specifications (which tools connect to what)',
                    '→ Time savings projections (specific tasks, specific hours)',
                    '→ Implementation timeline (when automation goes live)',
                    '→ Transparent pricing (no hidden fees, no surprises)',
                    '→ 60-day ROI guarantee (in writing)'
                  ],
                  time: '30 minutes to review proposal'
                },
                {
                  step: 3,
                  title: 'Automation Build & Deployment (7-14 Days)',
                  what: 'We design, build, test, and deploy your custom automation workflows. You approve at key milestones. We handle everything technical.',
                  get: [
                    '→ Custom-built automation workflows (designed for YOUR specific tools and processes)',
                    '→ Complete testing (we break it so you don\'t have to)',
                    '→ Deployment to production (goes live when you\'re ready)',
                    '→ Team training (quick walkthrough of how it works)',
                    '→ 30-day white-glove support (we monitor closely and optimize)',
                    '→ Ongoing monitoring and maintenance (24/7 forever)'
                  ],
                  time: '2-3 approval calls (30 minutes each)'
                }
              ].map((stepData) => (
                <GlowCard key={stepData.step} className="p-8 border-l-4 border-blue-500" showFlame={true}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {stepData.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{stepData.title}</h3>
                      <p className="text-[color:var(--muted)] mb-4">{stepData.what}</p>
                      <div className="space-y-2">
                        <p className="font-semibold mb-2">What You Get:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-[color:var(--muted)] ml-4">
                          {stepData.get.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm text-[color:var(--muted)] mt-4">Your Time Investment: {stepData.time}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Trust Indicators */}
            <GlowCard className="p-8 mb-8" showFlame={true}>
              <h3 className="text-xl font-bold mb-6 text-center">Trust Indicators</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: '✓', text: 'Find 3 vulnerabilities or it\'s free' },
                  { icon: '⏱️', text: 'Results in 7-10 days (initial findings)' },
                  { icon: '👤', text: 'Human-led investigation (not automated scans)' },
                  { icon: '🛡️', text: '200+ businesses protected successfully' },
                  { icon: '🏛️', text: 'NASA-recognized security methodology' },
                  { icon: '🎖️', text: 'Former intelligence analysts on team' },
                  { icon: '🤝', text: '30-day post-audit support included' },
                  { icon: '💯', text: 'Honest assessment even if we can\'t help' }
                ].map((indicator, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-2xl mb-2">{indicator.icon}</p>
                    <p className="text-sm text-[color:var(--muted)]">{indicator.text}</p>
                  </div>
                ))}
              </div>
            </GlowCard>

            {/* Urgency Element */}
            <GlowCard className="p-8 border-2 border-blue-500 mb-8" showFlame={true}>
              <h3 className="text-blue-500 text-xl font-bold mb-4 text-center">⚠️ THE COST OF WAITING:</h3>
              <div className="space-y-4 text-center text-[color:var(--muted)]">
                <p>If you're spending 20 hours/week on manual tasks and your time is worth $100/hour:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-red-500">$2,000</p>
                    <p className="text-sm">Cost this week</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">$8,000</p>
                    <p className="text-sm">Cost this month</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">$24,000</p>
                    <p className="text-sm">Cost this quarter</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">$104,000</p>
                    <p className="text-sm">Cost this year</p>
                  </div>
                </div>
                <p className="font-semibold">Every week you delay is another $2,000 you'll never get back.</p>
                <GlowCard className="mt-6 p-4 bg-[#1F2937] text-white" showFlame={true}>
                  <p className="font-semibold mb-2 text-yellow-500">🔥 AUTOMATION AVAILABILITY:</p>
                  <p className="mb-2">Custom automation builds require dedicated engineering time.</p>
                  <p className="mb-4">Current wait time: <strong>2-3 weeks</strong></p>
                  <div className="bg-blue-500/20 p-3 rounded border-l-4 border-blue-500">
                    <p className="mb-1">Next available build slot: <CountdownTimer elementId="final-countdown" hoursRemaining={192} /></p>
                    <p className="text-blue-300 font-semibold">Only 3 automation projects remaining this quarter.</p>
                  </div>
                </GlowCard>
              </div>
            </GlowCard>

            {/* Primary CTA */}
            <div className="text-center">
              <Link
                href="#calculator"
                className="btn-primary inline-flex items-center text-xl px-12 py-6 font-bold"
                style={{ backgroundColor: '#2563EB', color: 'white' }}
              >
                Calculate How Much Time I'm Wasting (Free Assessment) →
              </Link>
            </div>
            <div className="text-center mt-4">
              <Link
                href="#automation-suite"
                className="btn-secondary inline-flex items-center border-2"
                style={{ borderColor: '#2563EB', color: '#2563EB', background: 'transparent' }}
              >
                See Automation Pricing & Packages
              </Link>
            </div>
            <div className="text-center mt-6 text-sm text-[color:var(--muted)] space-y-1">
              <p>✓ No commitment required • No credit card needed • No sales pressure</p>
              <p>✓ Just honest analysis of where your time goes and what can be automated</p>
              <p>✓ If we can't help you, we'll tell you immediately and suggest alternatives</p>
              <p className="mt-4 font-semibold text-[color:var(--fg)]">Trusted by 200+ businesses who chose automation over burnout</p>
            </div>
          </div>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </main>

      <Footer />
    </div>
  )
}
