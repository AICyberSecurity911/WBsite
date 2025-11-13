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
  Lock,
  Zap,
  Settings,
  Brain,
  BarChart3,
  Rocket,
  X
} from 'lucide-react'
import Link from 'next/link'
import { ProfitPotentialCalculator } from '@/components/calculator/profit-potential-calculator'
import { BusinessTransformationExitIntent } from '@/components/business-transformation-exit-intent'

// ========================================
// PHASE 15: SEO & META DATA
// ========================================
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Transformation",
  "provider": {
    "@type": "Organization",
    "name": "QuantumLeap AI"
  },
  "description": "Custom business transformation for entrepreneurs doing $500K-$10M revenue. 90-180 day implementation with measurable ROI guarantee.",
  "offers": {
    "@type": "Offer",
    "priceRange": "$50000-$150000",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "65"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does business transformation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Business transformation typically costs $50,000-$150,000 for a 90-180 day full implementation. The average client saves $369,000 annually, resulting in a 6-12 month payback period. Custom pricing is based on revenue size, operational complexity, and transformation scope."
      }
    },
    {
      "@type": "Question",
      "name": "How long does business transformation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Business transformation takes 90-180 days for full implementation. Most clients see measurable ROI within the first 60 days, with complete system handoff and team training completed by month 6. The timeline includes profit forensics (3 weeks), system architecture (4-8 weeks), implementation (8-16 weeks), and optimization (8-26 weeks)."
      }
    },
    {
      "@type": "Question",
      "name": "What is business transformation for small business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Business transformation for small business is the process of converting chaos-driven operations into self-running systems. It involves embedding consultants with your team to rebuild workflows, deploy AI employees, eliminate bottlenecks, and create decision frameworks—so the business runs profitably without the founder being involved in daily operations."
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
      "name": "Business Transformation",
      "item": "https://quantumleapai.abacusai.app/business-transformation"
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

export default function BusinessTransformationPage() {
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
            HERO SECTION - COMPLETE OVERHAUL
            ======================================== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg)] via-[color:var(--bg)]/95 to-[color:var(--bg)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Credibility Bar */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4">
                  Fortune 500 Systems | MIT & Caltech Engineers | $170M+ Delivered Across 65+ Transformations | Zero Templates—100% Custom
                </p>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                You Built a Business. It Built a Prison.
              </h1>

              {/* Subheadline */}
              <p className="max-w-4xl mx-auto mb-12 text-lg sm:text-xl text-[color:var(--muted)] leading-relaxed">
                You work 70-hour weeks. Your business can't run without you. Your team waits for every decision. This isn't growth—it's chaos with a revenue number. We turn entrepreneurs into CEOs and businesses into self-running profit machines.
              </p>

              {/* Hero Video Placeholder */}
              <div className="mb-12 max-w-4xl mx-auto">
                <GlowCard className="p-0 overflow-hidden" showFlame={true}>
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                      <p className="text-[color:var(--muted)]">Hero Video Placeholder</p>
                      <p className="text-sm text-[color:var(--muted)] mt-2">16-second transformation visualization</p>
                    </div>
                  </div>
                </GlowCard>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <GlowCard className="p-4 text-center" showFlame={true}>
                  <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[color:var(--fg)]">40+ Hours</p>
                  <p className="text-sm text-[color:var(--muted)]">Reclaimed Monthly</p>
                </GlowCard>
                <GlowCard className="p-4 text-center" showFlame={true}>
                  <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[color:var(--fg)]">$369K</p>
                  <p className="text-sm text-[color:var(--muted)]">Average Annual Savings</p>
                </GlowCard>
                <GlowCard className="p-4 text-center" showFlame={true}>
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[color:var(--fg)]">34%</p>
                  <p className="text-sm text-[color:var(--muted)]">Average Revenue Increase</p>
                </GlowCard>
                <GlowCard className="p-4 text-center" showFlame={true}>
                  <Settings className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[color:var(--fg)]">90-180 Days</p>
                  <p className="text-sm text-[color:var(--muted)]">Full Implementation</p>
                </GlowCard>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="#calculator"
                  className="btn-primary inline-flex items-center justify-center h-14 px-8 text-lg"
                  style={{ backgroundColor: '#16a34a', color: 'white' }}
                >
                  See My Profit Potential
                </Link>
                <Link
                  href="/consultation"
                  className="btn-secondary inline-flex items-center justify-center h-14 px-8 text-lg border-2"
                  style={{ borderColor: '#16a34a', color: '#16a34a', background: 'transparent' }}
                >
                  Schedule Strategy Call
                </Link>
              </div>

              {/* Microcopy */}
              <div className="text-sm text-[color:var(--muted)] mb-12 space-y-1">
                <p>✓ Free 30-minute strategy call</p>
                <p>✓ Custom transformation roadmap</p>
                <p>✓ 90-day measurable results guarantee</p>
                <p>✓ Only 5 clients per quarter</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 1: THE PROBLEM - $3M REVENUE TRAP
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                The $3M Revenue Trap: Why 'Success' Feels Like Drowning
              </h2>
            </div>

            <GlowCard className="p-8 mb-8" showFlame={true}>
              <h3 className="text-2xl font-bold mb-6 text-red-500">Opening Hook:</h3>
              <div className="space-y-4 text-[color:var(--muted)] leading-relaxed">
                <p>Let me guess your morning: Slack at 6 AM. Approve an expense. Answer a question your manager should handle. Fire drill by 9 AM. Client call at 10. 'Quick question' interruptions until lunch. Afternoon: more approvals, more fires, more questions. Dinner with your phone face-up. Emails at 11 PM. Weekend? You're 'catching up.'</p>
                <p className="font-semibold text-[color:var(--fg)]">Sound familiar? You're not alone. And you're not failing.</p>
                <p className="font-semibold text-red-500 text-lg">Your business is.</p>
              </div>
            </GlowCard>

            <GlowCard className="p-8 mb-8" showFlame={true}>
              <h3 className="text-2xl font-bold mb-6">You Didn't Build a Business. You Built a Job That Pays Worse and Demands More.</h3>
              <div className="space-y-4 text-[color:var(--muted)] leading-relaxed">
                <p>Here's what nobody tells you about growth:</p>
                <p className="font-semibold text-[color:var(--fg)]">Revenue going up doesn't mean freedom going up. Most entrepreneurs hit a wall between $500K-$3M where everything breaks:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You hired good people—but they can't make decisions without you</li>
                  <li>You're working harder than ever—but profit margins keep shrinking</li>
                  <li>You implemented 'systems'—but they're held together with duct tape and hope</li>
                  <li>You're the bottleneck for everything—and deep down, you know it</li>
                </ul>
                <p className="font-semibold text-red-500 text-lg">The truth? Growth without systems creates chaos disguised as progress.</p>
              </div>
            </GlowCard>

            {/* The Four Hidden Costs */}
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-bold mb-6">The Four Hidden Costs of 'Winging It'</h3>
              {[
                {
                  title: 'COST #1: Decision Fatigue',
                  content: 'You approve expenses at 11 PM. You\'re in every Slack channel. You micromanage because no one else has clear authority. Your brain is fried by 2 PM, but you\'ve got 6 more hours of \'being available.\''
                },
                {
                  title: 'COST #2: The Profit Leak Spiral',
                  content: '$8K/month on tools your team barely uses. 15-20% lost to inefficient workflows. \'Necessary\' expenses a Fortune 500 would cut in 10 minutes. You know money is leaking—you just don\'t have time to find where.'
                },
                {
                  title: 'COST #3: Team Exodus',
                  content: 'Your best people leave. Not because of pay—because of chaos. They\'re tired of \'figuring it out as we go.\' They want clarity, structure, and leadership. Instead, they get firefighting and confusion.'
                },
                {
                  title: 'COST #4: Founder Burnout (The Real Cost)',
                  content: 'You haven\'t taken a real vacation in 2 years. Family dinner? Phone is face-up. Your partner asks, \'When does it get easier?\' You don\'t have an answer. Because it won\'t—not without systems.'
                }
              ].map((cost, idx) => (
                <GlowCard key={idx} className="p-6 border-l-4 border-red-500" showFlame={true}>
                  <h4 className="text-lg font-bold mb-2">{cost.title}</h4>
                  <p className="text-[color:var(--muted)]">{cost.content}</p>
                </GlowCard>
              ))}
            </div>

            <GlowCard className="p-8 border-2 border-blue-500" showFlame={true}>
              <p className="text-lg text-[color:var(--muted)] mb-4">Most consultants will tell you to 'work smarter, not harder.'</p>
              <p className="text-xl font-bold text-[color:var(--fg)]">We'll show you how to stop working in your business entirely.</p>
              <div className="text-center mt-6">
                <Link
                  href="/consultation"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#16a34a', color: 'white' }}
                >
                  Show Me How This Works
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            SECTION 2: SOCIAL PROOF #1
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Real Entrepreneurs Who Escaped the Trap
              </h2>
            </div>

            {/* Featured Testimonial - Peter Fernandes */}
            <GlowCard className="p-8 md:p-12" showFlame={true}>
              <div className="mb-6">
                <p className="text-xl font-bold mb-1">💬 Peter Fernandes, Owner, AAA Construction Services</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              
              <GlowCard className="p-6 bg-green-500/10 border-l-4 border-green-500 mb-6" showFlame={true}>
                <p className="text-lg italic text-[color:var(--fg)] font-semibold">
                  "After 7 years of building my business, I finally took a vacation with my family—without checking email once. That's what real systems do."
                </p>
              </GlowCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2 text-red-500">Before:</h4>
                  <ul className="text-sm text-[color:var(--muted)] space-y-1 list-disc list-inside ml-4">
                    <li>70-hour weeks, constantly behind</li>
                    <li>Invoice errors every month</li>
                    <li>Couldn't delegate anything</li>
                    <li>Growth stalled at $750K</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-500">After:</h4>
                  <ul className="text-sm text-[color:var(--muted)] space-y-1 list-disc list-inside ml-4">
                    <li>Revenue hit $1.3M</li>
                    <li>Recovered $15K in overcharges</li>
                    <li>Reclaimed 40+ hours/month</li>
                    <li>Finally work ON the business instead of IN it</li>
                    <li>Weekends are actually weekends now</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What Changed:</h4>
                <p className="text-sm text-[color:var(--muted)]">Automated bookkeeping with AI, clear decision frameworks for team, real-time financial dashboards, workflow automation across operations.</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            SECTION 3: OUR METHODOLOGY - PROFIT FORENSICS METHOD
            ======================================== */}
        <section id="methodology" className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                The 'Profit Forensics' Method: How We Rebuild Your Business From the Inside Out
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Most consultants hand you a 60-page strategy deck, collect their check, and vanish. You're left with a binder full of 'recommendations' and zero idea how to implement them.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                We're different.
              </p>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto mt-4">
                We embed with your team for 90-180 days. We don't observe—we operate. We map every workflow, audit every expense, and rebuild your business into a self-running profit machine.
              </p>
              <p className="text-lg font-semibold text-[color:var(--fg)] max-w-3xl mx-auto mt-4">
                This isn't consulting. This is systems engineering for entrepreneurs.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: 'PHASE 1: Profit Forensics (Weeks 1-3)',
                  subhead: 'We Find Where Your Money and Time Are Bleeding',
                  what: [
                    'Audit which team members are profit centers (and which are cost sinks)',
                    'Identify which clients are actually profitable (spoiler: it\'s not who you think)',
                    'Analyze which tools and expenses are ROI-positive vs. "nice to have"',
                    'Map where decisions bottleneck and why you\'re the blocker'
                  ],
                  deliverable: 'Complete profit map + prioritized leak list ranked by financial impact',
                  example: 'Example: One client was spending $47K/year on software subscriptions. After our audit, we cut $31K in redundant tools without losing a single capability.'
                },
                {
                  phase: 'PHASE 2: System Architecture (Weeks 4-8)',
                  subhead: 'We Design the Operating System Your Business Needs to Scale',
                  what: [
                    'Decision Frameworks: Who approves what, when, and why (so you\'re not the bottleneck)',
                    'Workflow Automation: Eliminate 30-40% of manual tasks that waste your team\'s time',
                    'Financial Controls: Real-time visibility into cash flow, margins, and burn rate',
                    'Team Structure: Clear roles, KPIs, and accountability rhythms (no more "that\'s not my job")'
                  ],
                  deliverable: 'Your custom operating manual—the rulebook your business runs on',
                  example: 'This isn\'t a template. We don\'t copy-paste systems from other companies. Every framework is built for YOUR industry, YOUR team, and YOUR growth stage.'
                },
                {
                  phase: 'PHASE 3: Build + Deploy (Weeks 9-16)',
                  subhead: 'We Don\'t Hand You a Plan and Leave. We Build It With Your Team.',
                  what: [
                    'Deploy AI employees for repetitive work humans shouldn\'t be doing',
                    'Build real-time dashboards that show profit (not just revenue)',
                    'Train your team on new systems (we don\'t just tell them—we train them)',
                    'Run pilot workflows and iterate based on what actually works',
                    'Integrate intelligent automations across your entire tech stack',
                    'Verify partners and key hires with thorough background intelligence',
                    'Implement cyber intelligence protocols to protect what you\'ve built'
                  ],
                  deliverable: 'Fully operational systems with your team trained and confident',
                  example: 'One real estate brokerage was losing hot leads after 5 PM. We deployed an AI assistant for lead qualification and scheduling. Result: 34% revenue increase in 90 days, zero missed leads, automated client nurture system.'
                },
                {
                  phase: 'PHASE 4: Optimization + Handoff (Weeks 17-26)',
                  subhead: 'We Refine, Measure, and Ensure Your Systems Last',
                  what: [
                    'Weekly performance reviews against baseline metrics',
                    'Adjust workflows based on real data (not assumptions)',
                    'Lock in Standard Operating Procedures (SOPs) for sustainability',
                    'Train internal champions to maintain systems after we exit',
                    'Provide 90-day post-engagement support for questions'
                  ],
                  deliverable: 'Self-sustaining operations that run without us (or you)',
                  example: 'When we\'re done, your business doesn\'t need us anymore. That\'s the point.'
                }
              ].map((phase, idx) => (
                <GlowCard key={idx} className="p-8 border-l-4 border-green-500" showFlame={true}>
                  <h3 className="text-green-500 text-xl font-bold mb-4">{phase.phase}</h3>
                  <h4 className="font-semibold mb-4">{phase.subhead}</h4>
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">What We Do:</h5>
                    <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)] ml-4">
                      {phase.what.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Deliverable:</h5>
                    <p className="text-[color:var(--muted)]">{phase.deliverable}</p>
                  </div>
                  <GlowCard className="p-4 bg-green-500/10" showFlame={true}>
                    <p className="text-sm text-[color:var(--muted)]">{phase.example}</p>
                  </GlowCard>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 4: COMPARISON TABLE
            ======================================== */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Consultants vs. Engineers: What's the Difference?
              </h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto mb-12">
              <GlowCard className="p-0 overflow-hidden" showFlame={true}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1F2937] text-white">
                        <th className="px-4 py-4 text-left border-r border-[color:var(--border)]">What You Get</th>
                        <th className="px-4 py-4 text-left border-r border-[color:var(--border)]">Traditional Business Consultant</th>
                        <th className="px-4 py-4 text-left">QuantumLeap Transformation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { q: 'Deliverable', consultant: '60-page strategy deck with recommendations', custom: 'Working systems embedded in your operations' },
                        { q: 'Approach', consultant: 'Generic frameworks from MBA textbooks', custom: 'Custom-built for your specific industry and growth stage' },
                        { q: 'Timeline', consultant: '4-6 weeks, then they exit', custom: '90-180 days, embedded with your team until systems work' },
                        { q: 'Focus', consultant: 'Revenue growth strategies', custom: 'Profit growth + founder freedom from operations' },
                        { q: 'Implementation', consultant: '"Here\'s what you should do" (you figure out how)', custom: '"We\'ll build it with your team" (hands-on implementation)' },
                        { q: 'Post-Engagement', consultant: 'Maybe a 30-day check-in call', custom: '90 days of ongoing support + system optimization' },
                        { q: 'Team Involvement', consultant: 'Interviews and workshops', custom: 'We work alongside your team daily' },
                        { q: 'Technology Integration', consultant: 'Not their job', custom: 'AI employees, intelligent automation, cyber protection, background intelligence—fully integrated' },
                        { q: 'Success Metric', consultant: 'Did they deliver the report?', custom: 'Is your business running profitably without you?' },
                        { q: 'Best For', consultant: 'Companies that need strategy advice', custom: 'Entrepreneurs drowning in operations who need execution' }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-[color:var(--card)]' : 'bg-[color:var(--bg)]'}>
                          <td className="px-4 py-4 font-semibold border-r border-[color:var(--border)]">{row.q}</td>
                          <td className="px-4 py-4 text-sm text-[color:var(--muted)] border-r border-[color:var(--border)]">{row.consultant}</td>
                          <td className="px-4 py-4 text-sm bg-green-500/10">{row.custom}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlowCard>
            </div>

            <GlowCard className="max-w-3xl mx-auto p-8 border-2 border-green-500" showFlame={true}>
              <p className="text-lg text-[color:var(--muted)] text-center">
                We're not consultants who show up in suits, take notes, and leave. We're engineers who roll up our sleeves, embed with your team, and build the systems that set you free.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            SECTION 5: SOCIAL PROOF #2
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Three Entrepreneurs. Three Transformations. One Method.
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  name: 'Masoud Nasserie',
                  company: 'Blueprint Realty Inc.',
                  title: 'Real Estate Broker',
                  quote: '"I wake up to booked appointments instead of chaos. That\'s what real systems do."',
                  before: ['Growing fast but drowning in operational chaos', 'Team burning out from manual follow-ups', 'Lost leads after 5 PM', 'No sales system', 'Revenue plateaued'],
                  after: ['34% revenue increase in 3 months', 'Zero missed leads (even at 9 PM on Sundays)', 'Automated client nurture workflows', 'Team stress significantly reduced'],
                  changed: 'AI-powered lead response system operating 24/7, automated sales workflow with CRM integration, intelligent follow-up sequences, appointment scheduling without human intervention'
                },
                {
                  name: 'Sukant Trivedi',
                  company: 'Trivedi Overseas Group',
                  title: 'President',
                  quote: '"I was spending $391,000 worth of my time on tasks that cost $21,492/year to automate. The ROI paid for itself in 6 weeks. Everything after that is pure profit."',
                  before: ['Operational overload across 7 departments', 'Team asking permission for everything', 'No real-time cash flow visibility', 'High-cost manual processes eating profits'],
                  after: ['$369K+ in annual savings', 'Systemized operations across all departments', 'Team empowered to make decisions independently', 'Real-time financial dashboard', 'Scalable systems in place'],
                  changed: 'Decision authority matrix eliminating bottlenecks, workflow automation across 7 departments, real-time financial visibility tools, clear KPIs and accountability structure'
                },
                {
                  name: 'Elias T. Montrose',
                  company: 'Growth Beyond Limits',
                  quote: '"Before QuantumLeap, I was working 70-hour weeks and still behind on everything. Now our entire operation runs automatically. I actually have weekends again. Revenue grew 45% because I\'m finally working ON the business instead of IN it."',
                  before: ['Endless 70-hour weeks', 'Constantly behind', 'Hiring happening reactively', 'Drowning in day-to-day operations', 'Couldn\'t focus on strategy'],
                  after: ['Operations fully automated', 'Hiring happens systematically without founder involvement', '45% revenue growth', 'Weekends completely free', 'Strategic focus restored'],
                  changed: 'AI workforce handling operational tasks, automated hiring and onboarding systems, intelligent workflows managing daily operations, founder freed for strategic decisions only'
                }
              ].map((testimonial, idx) => (
                <GlowCard key={idx} className="p-8" showFlame={true}>
                  <div className="mb-6">
                    <p className="text-xl font-bold mb-1">💬 {testimonial.name}</p>
                    {testimonial.title && <p className="text-sm text-[color:var(--muted)]">{testimonial.title}, {testimonial.company}</p>}
                    {!testimonial.title && <p className="text-sm text-[color:var(--muted)]">{testimonial.company}</p>}
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  
                  <GlowCard className="p-6 bg-green-500/10 border-l-4 border-green-500 mb-6" showFlame={true}>
                    <p className="text-lg italic text-[color:var(--fg)] font-semibold">"{testimonial.quote}"</p>
                  </GlowCard>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-500">Before:</h4>
                      <ul className="text-sm text-[color:var(--muted)] space-y-1 list-disc list-inside ml-4">
                        {testimonial.before.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-500">After:</h4>
                      <ul className="text-sm text-[color:var(--muted)] space-y-1 list-disc list-inside ml-4">
                        {testimonial.after.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">What Changed:</h4>
                    <p className="text-sm text-[color:var(--muted)]">{testimonial.changed}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 6: RISK-FREE GUARANTEE
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                The 'Measurable Freedom' Guarantee: We Don't Get Paid for Promises
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Here's our promise, in plain English:
              </p>
            </div>

            <GlowCard className="p-8 border-2 border-green-500" showFlame={true}>
              <div className="space-y-6 text-[color:var(--muted)]">
                <p className="text-lg">Within the first 90 days, you'll see <strong className="text-[color:var(--fg)]">measurable improvement</strong> in one of three areas:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong className="text-[color:var(--fg)]">Profit margins</strong> (more money hitting your bank account)</li>
                  <li><strong className="text-[color:var(--fg)]">Reclaimed time</strong> (hours back in your week)</li>
                  <li><strong className="text-[color:var(--fg)]">Operational efficiency</strong> (things running without you)</li>
                </ol>
                <p className="font-semibold text-[color:var(--fg)] text-lg">If you don't see measurable improvement in at least one of these areas, we keep working at no additional cost until you do.</p>
              </div>

              <div className="mt-8 p-6 bg-green-500/10 rounded-lg">
                <h4 className="font-semibold mb-4">Why We Can Make This Guarantee:</h4>
                <p className="text-sm text-[color:var(--muted)] mb-4">We're not consultants who deliver a report and disappear. We're engineers who build systems that last.</p>
                <p className="text-sm text-[color:var(--muted)] mb-4">If your business isn't running more profitably and more predictably by the end of our engagement, <strong className="text-[color:var(--fg)]">we failed—not you.</strong> And we don't get paid for failure.</p>
                <p className="text-sm font-semibold text-[color:var(--fg)]">Track Record:</p>
                <p className="text-sm text-[color:var(--muted)]">In 8 years and 65+ transformations, we've never had to extend an engagement at our cost.</p>
                <p className="text-sm text-[color:var(--muted)]">Not because we're lucky—because we only take on clients we <strong className="text-[color:var(--fg)]">know</strong> we can transform.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">93%</p>
                  <p className="text-xs text-[color:var(--muted)]">see ROI in 60 days</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">47 days</p>
                  <p className="text-xs text-[color:var(--muted)]">avg time to first result</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">$369K+</p>
                  <p className="text-xs text-[color:var(--muted)]">avg annual savings</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">97%</p>
                  <p className="text-xs text-[color:var(--muted)]">client success rate</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/consultation"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#16a34a', color: 'white' }}
                >
                  See If You Qualify
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            SECTION 7: WHO THIS IS FOR
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Is This For You? (The Honest Truth)
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Business transformation isn't for everyone. Here's who this is—and isn't—for.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlowCard className="p-8 border-2 border-green-500" showFlame={true}>
                <h3 className="text-2xl font-bold mb-6 text-green-500">✅ This IS For You If:</h3>
                <ul className="space-y-3 text-[color:var(--muted)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>You're doing $500K-$10M in annual revenue (the growth stage where systems matter most)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>You're working 60+ hour weeks but know you shouldn't be</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Your team constantly asks you for decisions you shouldn't be making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>You've tried "process improvement" before and it didn't stick</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>You're ready to invest in building a business that runs without you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>You want to grow profitably, not just grow revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>You're willing to change how your business operates (this requires commitment)</span>
                  </li>
                </ul>
              </GlowCard>

              <GlowCard className="p-8 border-2 border-red-500" showFlame={true}>
                <h3 className="text-2xl font-bold mb-6 text-red-500">❌ This ISN'T For You If:</h3>
                <ul className="space-y-3 text-[color:var(--muted)]">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>You're under $500K in revenue (focus on sales first, systems second)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>You like being involved in every decision (we eliminate you as the bottleneck)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>You want quick fixes and magic bullets (real transformation takes 90-180 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>You're not willing to invest in proper systems (this isn't cheap—but neither is chaos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>You prefer templates and DIY approaches (we build custom, not copy-paste)</span>
                  </li>
                </ul>
              </GlowCard>
            </div>

            <GlowCard className="mt-8 p-8" showFlame={true}>
              <p className="text-lg text-[color:var(--muted)] text-center mb-6">
                If you're serious about building a business that serves your life instead of consuming it, let's talk. If you're looking for surface-level advice, we're not the right fit.
              </p>
              <div className="text-center">
                <Link
                  href="/consultation"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#16a34a', color: 'white' }}
                >
                  Book a Free 30-Minute Strategy Call
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            SECTION 8: HOW IT WORKS (Process Visualization)
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                From First Call to Freedom: Your 180-Day Roadmap
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  week: 'WEEK 0: Strategy Call (30 minutes)',
                  items: ['We assess if we\'re a fit', 'You share your biggest bottlenecks', 'We outline potential approach']
                },
                {
                  week: 'WEEKS 1-3: Profit Forensics',
                  items: ['We embed with your team', 'Map all workflows and expenses', 'Identify profit leaks and bottlenecks']
                },
                {
                  week: 'WEEKS 4-8: System Architecture',
                  items: ['Design custom operating system', 'Build decision frameworks', 'Create workflow automation plans']
                },
                {
                  week: 'WEEKS 9-16: Build + Deploy',
                  items: ['Implement AI employees', 'Deploy intelligent automation', 'Train your team on new systems', 'Integrate cyber intelligence', 'Run pilot workflows']
                },
                {
                  week: 'WEEKS 17-26: Optimization + Handoff',
                  items: ['Refine based on real data', 'Lock in SOPs', 'Train internal champions', 'Provide 90-day post-support']
                }
              ].map((phase, idx) => (
                <GlowCard key={idx} className="p-6 border-l-4 border-green-500" showFlame={true}>
                  <h3 className="text-lg font-bold mb-3">{phase.week}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[color:var(--muted)] ml-4">
                    {phase.items.map((item, i) => (
                      <li key={i}>→ {item}</li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>

            <GlowCard className="mt-8 p-8 border-2 border-green-500 text-center" showFlame={true}>
              <p className="text-2xl font-bold text-green-500">RESULT: Your Business. Running Without You.</p>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            SECTION 14: PROFIT LEAK CALCULATOR
            ======================================== */}
        <section id="calculator" className="py-20 bg-[color:var(--card)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What's Your 'Winging It' Actually Costing You?
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Most entrepreneurs underestimate their operational costs by 140%. Find out what you're really losing.
              </p>
            </div>
            <ProfitPotentialCalculator />
          </div>
        </section>

        {/* ========================================
            SECTION 9: INVESTMENT & AVAILABILITY
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Investment & Current Availability
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlowCard className="p-8" showFlame={true}>
                <h3 className="text-2xl font-bold mb-6">The Investment</h3>
                <p className="text-[color:var(--muted)] mb-4">Business transformation is custom-priced based on three factors:</p>
                <ol className="list-decimal list-inside space-y-2 text-[color:var(--muted)] ml-4 mb-6">
                  <li>Your current revenue and team size</li>
                  <li>Complexity of your operations</li>
                  <li>Scope of transformation needed</li>
                </ol>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Typical Investment Range:</p>
                    <p className="text-2xl font-bold text-green-500">$50,000 - $150,000</p>
                    <p className="text-sm text-[color:var(--muted)]">for full 90-180 day transformation</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Average ROI:</p>
                    <p className="text-xl font-bold text-green-500">$369,000+</p>
                    <p className="text-sm text-[color:var(--muted)]">in annual savings (based on 65+ completed transformations)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Payback Period:</p>
                    <p className="text-xl font-bold text-green-500">6-12 months</p>
                    <p className="text-sm text-[color:var(--muted)]">Most clients break even within this timeframe</p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard className="p-8 border-2 border-red-500" showFlame={true}>
                <h3 className="text-2xl font-bold mb-6 text-red-500">⚠️ Current Availability</h3>
                <div className="space-y-4 text-[color:var(--muted)]">
                  <p className="font-semibold text-[color:var(--fg)]">Limited Availability:</p>
                  <p>We only accept 5 new transformation clients per quarter to ensure quality and dedicated focus.</p>
                  <div className="p-4 bg-red-500/10 rounded-lg">
                    <p className="font-semibold mb-2">Current Wait Time:</p>
                    <p className="text-xl font-bold text-red-500">3-4 weeks</p>
                    <p className="text-sm">for initial strategy call</p>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-lg">
                    <p className="font-semibold mb-2">Next Available Start Date:</p>
                    <p className="text-xl font-bold text-red-500"><CountdownTimer elementId="availability-start" hoursRemaining={504} /></p>
                  </div>
                  <p className="font-semibold text-[color:var(--fg)]">If you're serious about transformation, book your strategy call now to reserve your spot.</p>
                </div>
                <div className="text-center mt-6">
                  <Link
                    href="/consultation"
                    className="btn-primary inline-flex items-center"
                    style={{ backgroundColor: '#dc2626', color: 'white' }}
                  >
                    Reserve My Strategy Call
                  </Link>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 10: STRATEGIC FAQ (Complete Rewrite)
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Questions Entrepreneurs Actually Ask (And the Honest Answers)
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'How is this different from hiring a business consultant or coach?',
                  a: 'Consultants give you recommendations in a binder. Coaches give you accountability calls and motivational advice. We embed with your team and build the systems ourselves. We don\'t hand you a strategy deck and leave—we stay for 90-180 days implementing alongside your team. We write the SOPs, deploy the AI employees, build the dashboards, train your people, and don\'t leave until your business runs without you. Think of it this way: Consultants tell you what car to buy. We\'re the engineers who rebuild your engine, teach you to drive it, and make sure it doesn\'t break down.',
                  cta: 'See Exactly How We Work'
                },
                {
                  q: 'Do I need to be at a certain revenue level for this to work?',
                  a: 'Yes. This is designed for businesses doing $500K-$10M in annual revenue. Here\'s why: Under $500K: You need to focus on sales and product-market fit first. Systems come second. $500K-$3M: This is the danger zone—big enough that chaos is breaking you, but not big enough to afford enterprise solutions. This is exactly who we serve. $3M-$10M: You\'re at the stage where lack of systems will cap your growth permanently. We help you break through. Over $10M: You likely need enterprise-level transformation with larger teams. Bottom line: If you\'re in the $500K-$10M range and drowning in operations, this is built for you.',
                  cta: 'Check If You Qualify'
                },
                {
                  q: 'How long does transformation actually take?',
                  a: '90-180 days for full implementation, depending on complexity. Here\'s the typical timeline: 30 days: Profit forensics complete, you see where money and time are leaking. 60 days: Core systems designed and pilot workflows running. 90 days: Most clients hit measurable ROI (our guarantee kicks in here). 120-180 days: Full implementation complete, team trained, systems self-sustaining. After that? Your business runs without us (and without you being the bottleneck). Most consultants are gone in 4-6 weeks. We stay until it works.',
                  cta: 'See the Full 180-Day Roadmap'
                },
                {
                  q: 'Will I need to hire new people or replace my current team?',
                  a: 'No. We optimize your existing team and add AI where it makes sense. Here\'s how: We identify which tasks should be done by humans (strategy, client relationships, complex decisions). We identify which tasks should be automated or handled by AI (data entry, reporting, scheduling, follow-ups). We empower your current team with clear decision authority so they stop waiting for you. We deploy AI employees for the repetitive work that was burning out your best people. Result: Your team becomes more productive, less stressed, and more valuable—because they\'re finally doing work that matters.',
                  cta: 'See Our AI Workforce'
                },
                {
                  q: 'I\'ve tried "process improvement" before and it didn\'t stick. Why would this be different?',
                  a: 'Because most process improvement fails for one simple reason: templates don\'t work. Here\'s what usually happens: Someone hands you a "proven framework" from another industry. You try to force-fit it into your business. It doesn\'t account for your specific team, tools, or customer base. Your team resists because it feels foreign. Within 3 months, everyone\'s back to the old way. Our approach is different: We don\'t use templates. We engineer systems custom-built for your business. Every decision framework, workflow, and automation is designed specifically for YOUR: Industry and regulations, Team structure and skill levels, Existing tools and tech stack, Customer base and service model, Growth stage and goals. We build it with your team, not for your team. That\'s why it sticks.',
                  cta: 'See How We Build Custom Systems'
                },
                {
                  q: 'How much does business transformation cost?',
                  a: '$50,000-$150,000 for full 90-180 day transformation (custom-priced based on scope). Here\'s how to think about it: What you\'re spending now (per year): Your time on operations: $150,000-$300,000 (based on opportunity cost). Inefficient workflows: $50,000-$100,000 (profit leaks). Team management overhead: $30,000-$80,000 (time spent managing chaos). Total annual cost of no systems: $230,000-$480,000. What you\'ll save after transformation: Average client saves $369,000+ annually. Average payback period: 6-12 months. After that? Pure profit and reclaimed time. The real question isn\'t "Can I afford this?" It\'s "Can I afford another year of chaos?"',
                  cta: 'Calculate Your Current Cost of Chaos'
                },
                {
                  q: 'What happens after the 90-180 days?',
                  a: 'Your team runs the systems independently. Here\'s what you get: Complete operating manual (your business\'s "rulebook"). All SOPs documented and locked in. Internal champions trained to maintain systems. 90 days of post-engagement support for questions. Optional ongoing optimization (most clients don\'t need it). The goal: When we leave, your business doesn\'t need us anymore. That\'s not a bug—that\'s the entire point. We build systems that last, not dependency relationships.',
                  cta: 'See Our Full Guarantee'
                },
                {
                  q: 'Can you really guarantee results?',
                  a: 'Yes. If you don\'t see measurable improvement in profit, time, or efficiency within 90 days, we keep working at no additional cost. Why we can make this guarantee: 97% client success rate. 65+ completed transformations. Average $369K annual savings. We\'ve never had to extend at our cost (because we only take clients we know we can transform). Here\'s what \'measurable\' means: Profit margins increase (documented in financials). Time reclaimed (tracked via time audits). Efficiency improvement (tracked via workflow metrics). We don\'t deal in vague promises. We deliver measurable results or we keep working for free.',
                  cta: 'Read Our Full Guarantee'
                },
                {
                  q: 'What if my industry is "different" or "complex"?',
                  a: 'Good. We specialize in complex, regulated, and "difficult" industries. Our team has transformed: Healthcare practices (HIPAA compliance). Financial services (regulatory requirements). Legal firms (confidentiality protocols). Construction companies (project-based chaos). Real estate brokerages (commission structures). Manufacturing operations (supply chain complexity). Professional services (billable hour models). The more complex your industry, the more value we create—because that\'s where the biggest operational inefficiencies hide. If you think your business is "too unique" for systems, that\'s exactly why you need custom engineering instead of templates.',
                  cta: 'See Transformations in Your Industry'
                },
                {
                  q: 'I\'m worried about the time commitment. I\'m already drowning—how do I find time for this?',
                  a: 'You don\'t. That\'s the point. Here\'s the actual time required from you: Week 1: 60-minute strategy call. Weeks 2-4: 2-3 hours per week (interviews and workflow mapping). Weeks 5-26: 30-60 minutes per week (check-ins and decisions). Total founder time investment: ~30-40 hours over 6 months. Compare that to: Current weekly operations time: 40-60 hours. Time you\'ll reclaim after transformation: 20-40 hours per week. Net result: You get 1,000+ hours back per year. The transformation happens around your schedule, not instead of it. We embed with your team and do the heavy lifting.',
                  cta: 'See the Exact Time Commitment'
                }
              ].map((faq, idx) => (
                <GlowCard key={idx} className="p-8" showFlame={true}>
                  <h3 className="text-green-500 text-xl font-bold mb-4">{faq.q}</h3>
                  <div className="text-[color:var(--muted)] leading-relaxed mb-6">
                    <p>{faq.a}</p>
                  </div>
                  <Link
                    href="#methodology"
                    className="btn-primary inline-flex items-center"
                    style={{ backgroundColor: '#16a34a', color: 'white' }}
                  >
                    {faq.cta} →
                  </Link>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 11: STRATEGIC BLOG RECOMMENDATION
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Recommended Reading
              </h2>
            </div>

            <GlowCard className="p-8" showFlame={true}>
              <h3 className="text-2xl font-bold mb-4">The $391,000 Mistake: Why Your 'Affordable' Employee Actually Costs 138% More Than You Think</h3>
              <div className="space-y-4 text-[color:var(--muted)] mb-6">
                <p className="font-semibold text-[color:var(--fg)]">Introduction Hook:</p>
                <p>"Sukant Trivedi thought he was being smart. He was handling his own bookkeeping, project management, and operations oversight—saving the cost of hiring expensive managers. What he didn't realize: he was spending $391,000 worth of his own time on tasks that would cost $21,492/year to automate. That's a 1,720% markup he was paying himself without knowing it."</p>
                <p className="font-semibold text-[color:var(--fg)] mt-4">Key Points:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Point #1: The Hidden Cost Formula (The Math Entrepreneurs Ignore)</li>
                  <li>Point #2: The Three Traps That Keep You Stuck</li>
                  <li>Point #3: The Decision Framework (How to Know What to Delegate)</li>
                </ul>
                <p className="mt-4">After Sukant completed our Profit Forensics audit, we showed him the breakdown. He was spending 30 hours a month on bookkeeping and financial reporting—tasks our AI bookkeeper handles at 99.2% accuracy for $499/month. Another 25 hours on project updates and team coordination—tasks our AI project manager automated completely. The total? $391,000 worth of his time doing $21,492 worth of work.</p>
                <p className="font-semibold text-[color:var(--fg)]">Six weeks after implementing the systems, he had his weekends back. Six months later, his company had saved $369,000 annually and revenue had grown 34% because he was finally working ON the business instead of IN it.</p>
              </div>
              <Link
                href="#calculator"
                className="btn-primary inline-flex items-center"
                style={{ backgroundColor: '#16a34a', color: 'white' }}
              >
                Take Our 60-Second Profit Leak Assessment →
              </Link>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            SECTION 12: FINAL CTA SECTION
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                One Final Question: How Much Longer Can You Afford to Wait?
              </h2>
            </div>

            <GlowCard className="p-8" showFlame={true}>
              <div className="space-y-6 text-[color:var(--muted)] leading-relaxed">
                <p>You started reading this page for a reason.</p>
                <p>Maybe it's the 70-hour weeks that never end. Maybe it's the feeling of being trapped in a business you built. Maybe it's watching your profit margins shrink while revenue grows. Maybe it's knowing your best people are burning out and you can't stop it.</p>
                <p className="font-semibold text-[color:var(--fg)]">Whatever brought you here—that problem isn't going away on its own.</p>
                <p className="font-semibold text-red-500">Every day you wait is another day of:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Unnecessary costs bleeding your profits</li>
                  <li>Your time wasted on tasks that don't require you</li>
                  <li>Systems held together with duct tape and hope</li>
                  <li>Your business depending on you for everything</li>
                </ul>
                <p className="font-semibold text-[color:var(--fg)] text-lg">65 entrepreneurs have already made the decision.</p>
                <p>Their businesses now run without them. They have their weekends back. They're working ON their business, not IN it.</p>
                <p className="text-2xl font-bold text-green-500">The only question left is: Are you next?</p>
              </div>

              <div className="mt-8 space-y-4">
                <Link
                  href="/consultation"
                  className="btn-primary w-full inline-flex items-center justify-center text-xl px-12 py-6 font-bold"
                  style={{ backgroundColor: '#16a34a', color: 'white' }}
                >
                  Book My Free 30-Minute Strategy Call
                </Link>
                <Link
                  href="#calculator"
                  className="btn-secondary w-full inline-flex items-center justify-center border-2"
                  style={{ borderColor: '#16a34a', color: '#16a34a', background: 'transparent' }}
                >
                  Not Ready Yet? Get the Free Profit Leak Assessment
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-[color:var(--border)]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-[color:var(--muted)]">No-Risk Strategy Call</p>
                  </div>
                  <div>
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-[color:var(--muted)]">Custom Transformation Plan</p>
                  </div>
                  <div>
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-[color:var(--muted)]">90-Day Measurable Results Guarantee</p>
                  </div>
                  <div>
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-[color:var(--muted)]">Only 5 Clients Per Quarter</p>
                  </div>
                </div>
              </div>
            </GlowCard>
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
      <BusinessTransformationExitIntent />
    </div>
  )
}
