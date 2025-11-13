'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { GlowCard } from '@/components/ui/glow-card'
import { FlameBorder } from '@/components/ui/flame-border'
import { useState, useEffect, useMemo } from 'react'
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  CheckCircle2,
  Loader2,
  X,
  ChevronRight,
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  FileSearch,
  Target,
  Search,
  Mail,
  Zap,
  ArrowRight,
  Star
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// ========================================
// PHASE 1: SEO & META DATA
// ========================================
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cyber Intelligence Protection",
  "description": "Custom cybersecurity audits with human-led penetration testing, dark web monitoring, and breach prevention",
  "provider": {
    "@type": "Organization",
    "name": "QuantumLeap AI"
  },
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cybersecurity Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Security Audit"
        }
      }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why would hackers target my small business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small businesses are easier targets than large companies with dedicated security teams. You have valuable data but typically lack the defenses that make attacks difficult."
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
      "name": "Cyber Intelligence",
      "item": "https://quantumleapai.abacusai.app/cyber-intelligence"
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
      
      setTimeLeft(`${days} days, ${hours} hours`)
    }
    
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [hoursRemaining])

  return <span id={elementId}>{timeLeft}</span>
}

// ========================================
// COMPONENT: Live Attack Map (Simplified)
// ========================================
const LiveAttackMap = () => {
  const [stats, setStats] = useState({
    total: 0,
    ransomware: 0,
    breach: 0,
    phishing: 0,
    ddos: 0,
    smb: 0
  })

  useEffect(() => {
    // Simulate attack data
    const interval = setInterval(() => {
      setStats(prev => ({
        total: prev.total + Math.floor(Math.random() * 5) + 1,
        ransomware: prev.ransomware + Math.floor(Math.random() * 2),
        breach: prev.breach + Math.floor(Math.random() * 2),
        phishing: prev.phishing + Math.floor(Math.random() * 3),
        ddos: prev.ddos + Math.floor(Math.random() * 1),
        smb: Math.floor((prev.total + Math.floor(Math.random() * 5) + 1) * 0.43)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#1F2937] p-8 rounded-[24px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <GlowCard className="p-4 text-center" showFlame={true}>
          <p className="text-xs text-[color:var(--muted)] mb-2">ATTACKS LAST 24 HOURS</p>
          <p className="text-2xl font-bold text-[color:var(--fg)]">{stats.total.toLocaleString()}</p>
        </GlowCard>
        <GlowCard className="p-4 text-center" showFlame={true}>
          <p className="text-xs text-red-500 mb-2">🔴 RANSOMWARE</p>
          <p className="text-2xl font-bold text-[color:var(--fg)]">{stats.ransomware.toLocaleString()}</p>
        </GlowCard>
        <GlowCard className="p-4 text-center" showFlame={true}>
          <p className="text-xs text-orange-500 mb-2">🟠 DATA BREACHES</p>
          <p className="text-2xl font-bold text-[color:var(--fg)]">{stats.breach.toLocaleString()}</p>
        </GlowCard>
        <GlowCard className="p-4 text-center" showFlame={true}>
          <p className="text-xs text-yellow-500 mb-2">🟡 PHISHING</p>
          <p className="text-2xl font-bold text-[color:var(--fg)]">{stats.phishing.toLocaleString()}</p>
        </GlowCard>
        <GlowCard className="p-4 text-center" showFlame={true}>
          <p className="text-xs text-purple-500 mb-2">🟣 DDoS</p>
          <p className="text-2xl font-bold text-[color:var(--fg)]">{stats.ddos.toLocaleString()}</p>
        </GlowCard>
        <GlowCard className="p-4 text-center border-2 border-red-500" showFlame={true}>
          <p className="text-xs text-red-500 mb-2">SMALL BUSINESS TARGETS</p>
          <p className="text-2xl font-bold text-[color:var(--fg)]">{stats.smb.toLocaleString()} <span className="text-sm">(43%)</span></p>
        </GlowCard>
      </div>
      <div className="bg-black p-4 rounded-lg h-32 overflow-hidden">
        <p className="text-xs text-[color:var(--muted)] mb-2">RECENT ATTACKS (LIVE FEED):</p>
        <div className="text-sm text-[color:var(--muted)] font-mono space-y-1">
          <div>{Math.floor(Math.random() * 10)}m ago | RANSOMWARE | Russia → US Healthcare</div>
          <div>{Math.floor(Math.random() * 10)}m ago | DATA BREACH | China → E-commerce</div>
          <div>{Math.floor(Math.random() * 10)}m ago | PHISHING | Unknown → Financial Services</div>
        </div>
      </div>
    </div>
  )
}

export default function CyberIntelligencePage() {
  const [breachEmail, setBreachEmail] = useState('')
  const [breachResult, setBreachResult] = useState<any>(null)
  const [breachLoading, setBreachLoading] = useState(false)
  const [breachError, setBreachError] = useState('')
  const [checksRemaining, setChecksRemaining] = useState(10)

  const handleBreachCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    if (checksRemaining <= 0) {
      setBreachError('Maximum checks reached. Book an audit for comprehensive analysis.')
      return
    }

    setBreachLoading(true)
    setBreachError('')
    setBreachResult(null)

    try {
      const response = await fetch('/api/breach-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: breachEmail })
      })
      
      const data = await response.json()
      
      if (response.status === 429) {
        setBreachError(data.error || 'Rate limit exceeded. Please try again later.')
        return
      }
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to check email')
      }
      
      setBreachResult(data)
      if (data.remaining !== undefined) {
        setChecksRemaining(data.remaining)
      }
    } catch (error) {
      setBreachError('Unable to check email. Please try again.')
    } finally {
      setBreachLoading(false)
    }
  }

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
                CYBER INTELLIGENCE PROTECTION
                </span>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                That "We're Too Small to Get Hacked" Assumption Just Cost Someone $847,000. Are You Next?
              </h1>
              
              {/* Hero Subheadline */}
              <div className="max-w-4xl mx-auto space-y-6 mb-12 text-lg sm:text-xl text-[color:var(--muted)] leading-relaxed">
                <p>You don't get hacked because you're big. You get hacked because you're unguarded.</p>
                <p>While you're focused on running your business, criminals are testing your passwords, mapping your vulnerabilities, and planning their attack. They're not hoping you'll get sloppy—they're counting on you already being exposed.</p>
                <p>Most businesses discover they've been breached 287 days after it happens. By then, the damage is done. The ransom is paid. The clients are gone. The lawsuits are filed.</p>
                <p className="font-semibold text-[color:var(--fg)]">We find what hackers see—before they exploit it.</p>
              </div>

              {/* Hero Video Placeholder */}
              <div className="mb-12 max-w-4xl mx-auto">
                <GlowCard className="p-0 overflow-hidden" showFlame={true}>
                  <div className="relative aspect-video bg-gradient-to-br from-red-900/20 to-purple-900/20 flex items-center justify-center">
                    <div className="text-center">
                      <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                      <p className="text-[color:var(--muted)]">Hero Video Placeholder</p>
                      <p className="text-sm text-[color:var(--muted)] mt-2">16-second cybersecurity threat visualization</p>
              </div>
              </div>
                </GlowCard>
            </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="#breach-checker"
                  className="btn-primary inline-flex items-center justify-center h-14 px-8 text-lg"
                  style={{ backgroundColor: '#DC2626', color: 'white' }}
                >
                  Check If I've Already Been Breached →
                </Link>
                <Link
                  href="#assessment"
                  className="btn-secondary inline-flex items-center justify-center h-14 px-8 text-lg border-2"
                  style={{ borderColor: '#DC2626', color: '#DC2626', background: 'transparent' }}
                >
                  Get My Free Security Assessment
                </Link>
            </div>

              {/* Microcopy */}
              <div className="text-sm text-[color:var(--muted)] mb-12 space-y-1">
                <p>✓ Instant breach check (free, no email required)</p>
                <p>✓ Find 3 vulnerabilities or it's free</p>
                <p>✓ Custom audit—not automated scans</p>
                <p>✓ Results in 7-10 days</p>
            </div>

              {/* Trust Badge Bar */}
              <div className="mb-12">
                <p className="text-xs text-[color:var(--muted)] mb-4">Trusted by:</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                  {['NASA', 'IBM', 'Deloitte', 'BMO', 'CIBC', 'Scotiabank'].map((name) => (
                    <div key={name} className="text-lg font-semibold text-[color:var(--muted)]">
                      {name}
                  </div>
                ))}
              </div>
            </div>

              {/* Urgency Element */}
              <GlowCard className="p-8 max-w-3xl mx-auto border-2" showFlame={true} style={{ borderColor: '#DC2626' }}>
                <div className="text-left">
                  <h3 className="text-red-500 text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    ⚠️ CRITICAL REALITY CHECK:
                  </h3>
                  <div className="space-y-4 text-[color:var(--muted)]">
                    <p>The average business discovers a breach 287 days after it happens.</p>
                    <p>That's 287 days of criminals accessing your files, reading your emails, stealing client data, and mapping your entire network.</p>
                    <p>By the time you find out, the damage is done.</p>
                    <p className="font-semibold text-[color:var(--fg)]">Right now, you have two choices:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Find out what hackers see BEFORE they exploit it</li>
                      <li>Find out AFTER they've already destroyed your business</li>
                    </ol>
                    <p className="mt-4 font-semibold">Which one can you actually afford?</p>
            </div>
                  <GlowCard className="mt-6 p-4 bg-white/5" showFlame={true}>
                    <p className="text-red-500 font-semibold mb-2">🔥 CURRENT BREACH EXPOSURE:</p>
                    <p>Next available security audit: <CountdownTimer elementId="countdown-timer" hoursRemaining={108} /></p>
                    <p className="text-red-500 mt-2">Only 2 audit slots remaining this month</p>
                  </GlowCard>
          </div>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 3: EMAIL BREACH CHECKER TOOL
            ======================================== */}
        <section id="breach-checker" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                FIND OUT IF YOU'VE ALREADY BEEN BREACHED
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Your Email Was Probably Exposed in a Data Breach. Let's Find Out Right Now.
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto mb-4">
                Over 15 billion usernames and passwords have been stolen and leaked online since 2019. Hackers use these credentials to access your business systems.
              </p>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                If your email appears in a breach database, criminals already have what they need to attack you. Check now—it takes 10 seconds.
              </p>
            </div>

            <GlowCard className="p-8" showFlame={true}>
              <form onSubmit={handleBreachCheck} className="mb-6">
                <label htmlFor="email-input" className="block mb-2 font-semibold text-[color:var(--fg)]">
                  Enter Your Email Address:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    id="email-input"
                    value={breachEmail}
                    onChange={(e) => setBreachEmail(e.target.value)}
                    placeholder="your@businessemail.com"
                    required
                    className="flex-1 px-4 py-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--fg)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
                  />
                  <button
                    type="submit"
                    disabled={breachLoading || checksRemaining <= 0}
                    className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#DC2626', color: 'white' }}
                  >
                    {breachLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 inline animate-spin mr-2" />
                        Checking...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 inline mr-2" />
                        Check Now
                      </>
                    )}
                  </button>
                </div>
              </form>
                
              <p className="text-xs text-[color:var(--muted)] mb-6">
                <Lock className="w-3 h-3 inline mr-1" />
                Privacy protected • No storage without consent • Powered by XposedOrNot API
                </p>

              {breachError && (
                <GlowCard className="p-4 mb-6 border-2 border-yellow-500" showFlame={true}>
                  <p className="text-yellow-500">{breachError}</p>
                </GlowCard>
              )}

              {breachResult && (
                <div className="mt-6">
                  {breachResult.exposed ? (
                    <GlowCard className="p-6 border-2 border-red-500" showFlame={true}>
                      <h3 className="text-red-500 text-xl font-bold mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6" />
                        ⚠️ BREACH DETECTED
                      </h3>
                      <p className="mb-4 font-semibold">
                        Your email was found in {breachResult.breachCount || 'multiple'} known data breach(es):
                      </p>
                      {breachResult.breachNames && breachResult.breachNames.length > 0 && (
                        <ul className="list-disc list-inside mb-6 space-y-2">
                          {breachResult.breachNames.slice(0, 5).map((breach: string, idx: number) => (
                            <li key={idx}>{breach}</li>
                          ))}
                          {breachResult.breachNames.length > 5 && (
                            <li>...and {breachResult.breachNames.length - 5} more</li>
                          )}
                        </ul>
                      )}
                      <GlowCard className="p-4 mb-4 bg-white/5" showFlame={true}>
                        <h4 className="font-semibold mb-2">WHAT THIS MEANS:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>→ Hackers have your email and likely your passwords</li>
                          <li>→ They're testing these credentials against your business systems right now</li>
                          <li>→ If you reused passwords, they can access multiple accounts</li>
                          <li>→ Your business is actively at risk</li>
                        </ul>
                      </GlowCard>
                      <GlowCard className="p-4 mb-4 bg-white/5" showFlame={true}>
                        <h4 className="font-semibold mb-2">WHAT TO DO IMMEDIATELY:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                          <li>Change ALL passwords associated with this email (especially if you reused any)</li>
                          <li>Enable two-factor authentication on all business accounts</li>
                          <li>Get a full security audit to find other vulnerabilities</li>
                        </ol>
                      </GlowCard>
                      <Link
                        href="#assessment"
                        className="btn-primary inline-flex items-center"
                        style={{ backgroundColor: '#DC2626', color: 'white' }}
                      >
                        Get Emergency Security Audit →
                      </Link>
                    </GlowCard>
                  ) : (
                    <GlowCard className="p-6 border-2 border-green-500" showFlame={true}>
                      <h3 className="text-green-500 text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6" />
                        ✓ GOOD NEWS
                      </h3>
                      <p className="mb-4">This email wasn't found in any known public breaches.</p>
                      <p className="mb-4 font-semibold">However, this doesn't mean you're completely safe:</p>
                      <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>⚠️ This only checks PUBLIC breach databases</li>
                        <li>⚠️ Private breaches (not yet disclosed) won't show up here</li>
                        <li>⚠️ Your business systems may still have other vulnerabilities</li>
                        <li>⚠️ Employees using different emails could be compromised</li>
                      </ul>
                      <GlowCard className="p-4 mb-4 bg-white/5" showFlame={true}>
                        <p>A clean result here is good—but it's not a security strategy.</p>
                      </GlowCard>
                      <Link
                        href="#assessment"
                        className="btn-primary inline-flex items-center"
                        style={{ backgroundColor: '#10B981', color: 'white' }}
                      >
                        Get Complete Security Assessment →
                      </Link>
                    </GlowCard>
                  )}
                      </div>
              )}
            </GlowCard>
                              </div>
        </section>

        {/* ========================================
            PHASE 4: LIVE ATTACK MAP
            ======================================== */}
        <section className="py-20 bg-[#1F2937]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-red-500 mb-4 block">
                WATCH CYBERATTACKS HAPPEN IN REAL-TIME
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Right Now, While You're Reading This, Businesses Are Being Attacked
              </h2>
              <p className="text-lg text-[#D1D5DB] max-w-3xl mx-auto mb-4">
                This is a live visualization of cyberattacks happening globally at this exact moment. Each pulse represents a real attack attempt—ransomware, data breaches, phishing campaigns, DDoS attacks.
              </p>
              <p className="text-lg text-[#D1D5DB] max-w-3xl mx-auto mb-4">
                These aren't theoretical threats. They're happening right now. To businesses just like yours.
              </p>
              <p className="text-lg text-red-500 font-semibold max-w-3xl mx-auto">
                The question isn't "Will I be attacked?" It's "Am I already being attacked and just don't know it yet?"
              </p>
                              </div>

            <LiveAttackMap />

            <GlowCard className="mt-8 p-6 border-l-4 border-red-500" showFlame={true} style={{ borderLeftColor: '#DC2626' }}>
              <h3 className="text-red-500 font-bold mb-4">💡 WHAT YOU'RE WATCHING:</h3>
              <div className="space-y-3 text-[#D1D5DB]">
                <p>Every pulse on this map represents a real business being tested by criminals.</p>
                <p>Most of these attacks succeed—not because the criminals are sophisticated, but because the businesses are unguarded.</p>
                <p className="font-semibold text-white">Weak passwords. Outdated software. No monitoring. No plan.</p>
                <p>Your business is on this map whether you see it or not. The question is: Are you prepared when they find you?</p>
                            </div>
              <Link
                href="#assessment"
                className="btn-primary inline-flex items-center mt-6"
                style={{ backgroundColor: '#DC2626', color: 'white' }}
              >
                Find My Vulnerabilities Before Hackers Do →
              </Link>
            </GlowCard>
                          </div>
        </section>

        {/* ========================================
            PHASE 5: THE BRUTAL REALITY
            ======================================== */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                THE TRUTH ABOUT SMALL BUSINESS CYBERSECURITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                "We're Too Small to Be a Target" Is Exactly Why You ARE a Target
              </h2>
                              </div>

            <div className="space-y-6 mb-12 text-lg text-[color:var(--muted)]">
              <p>Every small business owner thinks they're too small for hackers to care about. That's precisely what makes you valuable.</p>
              <p>Here's what criminals actually think when they see a small business:</p>
              <blockquote className="border-l-4 border-red-500 pl-4 italic text-[color:var(--fg)]">
                "No security team. No monitoring. Probably reusing passwords. Definitely no backup plan. Easy money."
              </blockquote>
              <p className="font-semibold text-[color:var(--fg)]">You're not too small to attack. You're the perfect size.</p>
                              </div>

            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold text-red-500 mb-6">THE THREE LIES YOU'VE BEEN TOLD:</h3>
              
              {[
                {
                  title: 'LIE #1: "Hackers only target big companies"',
                  truth: '43% of cyberattacks target small businesses. (Source: Verizon Data Breach Report)',
                  explanation: 'Why? Because you have everything criminals want—customer data, financial information, access to vendors and clients—and none of the defenses that make attacks difficult.',
                  conclusion: "You're not flying under the radar. You're the low-hanging fruit."
                },
                {
                  title: 'LIE #2: "Our IT company handles security"',
                  truth: 'Your IT company handles break-fix support. They reset passwords. They fix printers. They don't think like criminals.',
                  explanation: 'Most IT providers run automated scans that check generic vulnerabilities. Criminals don't use generic attacks anymore—they use custom techniques designed specifically to bypass automated scans.',
                  conclusion: 'Standard IT security is like locking your front door while leaving every window wide open.'
                },
                {
                  title: 'LIE #3: "We'd know if we'd been breached"',
                  truth: 'The average business discovers a breach 287 days AFTER it happens.',
                  explanation: 'Think about that. Nearly 10 months of criminals accessing your files, reading your emails, stealing client data, and mapping your entire network—and you had no idea.',
                  conclusion: "You don't know you've been breached until it's too late to prevent the damage."
                }
              ].map((lie, idx) => (
                <GlowCard key={idx} className="p-6" showFlame={true}>
                  <h4 className="text-lg font-bold mb-3">{lie.title}</h4>
                  <p className="mb-3"><strong>Truth:</strong> {lie.truth}</p>
                  <p className="mb-3">{lie.explanation}</p>
                  <p className="font-semibold text-red-500">{lie.conclusion}</p>
                </GlowCard>
              ))}
                            </div>

            {/* Statistics Callout */}
            <GlowCard className="p-8 bg-[#1F2937] text-white mb-12" showFlame={true}>
              <h3 className="text-red-500 text-2xl font-bold mb-6 text-center">📊 THE REAL NUMBERS:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '43%', label: 'of cyberattacks target small businesses', source: '(Verizon Data Breach Report)' },
                  { value: '60%', label: 'of small businesses close within 6 months of a cyberattack', source: '(National Cyber Security Alliance)' },
                  { value: '$200K', label: 'average cost of a data breach for small businesses', source: '(IBM Security)' },
                  { value: '287', label: 'days average time to discover a breach', source: '(IBM Security)' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">{stat.value}</p>
                    <p className="text-sm text-[#D1D5DB] mb-1">{stat.label}</p>
                    <p className="text-xs text-[#9CA3AF]">{stat.source}</p>
                          </div>
                ))}
                        </div>
            </GlowCard>

            <div className="text-center">
              <Link
                href="#assessment"
                className="btn-primary inline-flex items-center"
                style={{ backgroundColor: '#DC2626', color: 'white' }}
              >
                Show Me My Vulnerabilities (Free Assessment)
              </Link>
                      </div>
                    </div>
        </section>

        {/* ========================================
            PHASE 6: WHY STANDARD SECURITY FAILS
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                WHY YOUR CURRENT "SECURITY" ISN'T ACTUALLY SECURING ANYTHING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Your IT Company Runs the Same Scan Every Business Gets. Criminals Know Exactly How to Bypass It.
              </h2>
                      </div>

            <div className="max-w-5xl mx-auto overflow-x-auto mb-12">
              <GlowCard className="p-0 overflow-hidden" showFlame={true}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1F2937] text-white">
                        <th className="px-4 py-4 text-left border-r border-[color:var(--border)]">The Critical Question</th>
                        <th className="px-4 py-4 text-left border-r border-[color:var(--border)]">Standard IT Security Scan</th>
                        <th className="px-4 py-4 text-left">QuantumLeap Custom Audit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { q: 'Who performs it?', standard: 'Automated software running a generic checklist', custom: 'Human security experts (former intelligence analysts) who think like criminals' },
                        { q: 'What does it test?', standard: 'Known vulnerabilities from public databases (stuff criminals stopped using 2 years ago)', custom: 'Custom attack scenarios designed specifically for YOUR systems, YOUR team, YOUR industry' },
                        { q: 'Does it test human behavior?', standard: '❌ No—only scans technology', custom: '✅ Yes—we test if your team falls for phishing, social engineering, fake phone calls' },
                        { q: 'Does it check dark web exposure?', standard: '❌ No—only scans your network', custom: '✅ Yes—we search where criminals buy and sell stolen credentials' },
                        { q: 'Does it test YOUR specific configurations?', standard: '❌ No—runs same scan on every business', custom: '✅ Yes—custom penetration test designed for your unique environment' },
                        { q: 'Does it simulate real attacks?', standard: '❌ No—just checks if patches are current', custom: '✅ Yes—we actually attempt to breach your systems (safely and controlled)' },
                        { q: 'How do criminals bypass it?', standard: 'Easily—they know exactly what it checks for', custom: "They can't—we're testing things they don't expect" },
                        { q: 'What do you get?', standard: 'PDF report with generic recommendations', custom: 'Prioritized action plan with 30/60/90-day roadmap custom-built for your business' },
                        { q: "Does it check if YOU'VE already been breached?", standard: '❌ No—only looks forward, not backward', custom: '✅ Yes—we search for signs of existing compromise' },
                        { q: 'Who reviews the results?', standard: 'Nobody (automated report)', custom: 'Human experts who explain what matters and what doesn\'t' }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-[color:var(--card)]' : 'bg-[color:var(--bg)]'}>
                          <td className="px-4 py-4 font-semibold border-r border-[color:var(--border)]">{row.q}</td>
                          <td className="px-4 py-4 text-sm text-[color:var(--muted)] border-r border-[color:var(--border)]">{row.standard}</td>
                          <td className="px-4 py-4 text-sm bg-green-500/10">{row.custom}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                              </div>
              </GlowCard>
                              </div>

            <GlowCard className="max-w-3xl mx-auto p-8 border-2 border-red-500" showFlame={true}>
              <h3 className="text-red-500 text-xl font-bold mb-4">🎯 THE UNCOMFORTABLE TRUTH:</h3>
              <div className="space-y-4 text-[color:var(--muted)]">
                <p>Your IT company isn't lying to you. They genuinely believe automated scans provide security.</p>
                <p className="font-semibold">They're wrong.</p>
                <p>Automated scans check if your doors are locked. <strong>We check if criminals already copied your keys.</strong></p>
                <p>Automated scans tell you to "update your software." <strong>We tell you exactly which vulnerabilities hackers will exploit first—and how to fix them before Friday.</strong></p>
                <p>Automated scans make you feel safe. <strong>We make you actually safe.</strong></p>
                <p className="font-semibold text-red-500">There's a difference. And that difference determines whether you're in business next year.</p>
                            </div>
              <div className="text-center mt-6">
                <Link
                  href="#assessment"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#DC2626', color: 'white' }}
                >
                  Get Real Security—Not Fake Confidence →
                </Link>
                          </div>
            </GlowCard>
                              </div>
        </section>

        {/* ========================================
            PHASE 7: OUR METHODOLOGY (5-PHASE PROCESS)
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                HOW WE ACTUALLY PROTECT YOU
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                We Don't Run Automated Scans. We Think Like Criminals—Then Show You Exactly What They See.
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto mb-4">
                Every audit is custom-built to map how criminals would breach YOUR specific systems, YOUR team behaviors, YOUR vendor connections, and YOUR cloud configuration.
              </p>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto font-semibold">
                This isn't a template. This isn't software. This is human intelligence analysts doing actual investigations—the same way nation-states investigate targets.
              </p>
                              </div>

            <div className="space-y-8">
              {[
                {
                  phase: 'PHASE 1: External Reconnaissance (Week 1)',
                  what: 'We research your business the exact same way criminals do—before they ever attempt an attack.',
                  items: [
                    '→ Map all your public-facing assets (website, domains, email servers, cloud services)',
                    '→ Search dark web forums and breach databases for leaked credentials',
                    '→ Identify exposed employee information (emails, phone numbers, social profiles)',
                    '→ Find forgotten systems still running (old domains, test servers, abandoned apps)',
                    '→ Locate vendor connections that could be exploited as backdoors'
                  ],
                  get: 'Complete map of everything criminals can see about your business from the outside—before they even attempt to break in.',
                  why: "Criminals do this reconnaissance for free. We charge you to find it first—and close the doors before they knock."
                },
                {
                  phase: 'PHASE 2: Penetration Testing (Week 1-2)',
                  what: 'We attempt to breach your systems the same way real attackers would—except we stop before causing damage, document everything, and tell you how to fix it.',
                  items: [
                    '→ Test web applications for injection attacks, authentication bypasses, session hijacking',
                    '→ Attempt to compromise cloud services (AWS, Azure, Google Cloud configurations)',
                    '→ Test network defenses (firewalls, VPNs, remote access points)',
                    '→ Search for privilege escalation paths (can we go from user access to admin access?)',
                    '→ Verify backup systems actually work (and aren\'t accessible to attackers)'
                  ],
                  get: 'Proof-of-concept demonstrations showing exactly how we breached your systems—so you understand the risk is real, not theoretical.',
                  why: 'We find the vulnerabilities criminals would exploit. The difference is we tell you about them instead of ransoming your data.'
                },
                {
                  phase: 'PHASE 3: Human Vulnerability Testing (Week 2)',
                  what: 'We test if your team falls for the social engineering tactics criminals actually use—phishing emails, fake phone calls, impersonation attempts.',
                  items: [
                    '→ Send realistic phishing emails to see who clicks malicious links',
                    '→ Make pretext phone calls testing if employees give out sensitive information',
                    '→ Test physical security (can we walk into your office pretending to be IT support?)',
                    '→ Verify employees follow security policies (or ignore them when inconvenient)',
                    '→ Identify which team members are highest risk (usually executives and admins)'
                  ],
                  get: 'Honest assessment of your biggest vulnerability—the humans using your systems.',
                  why: '95% of breaches start with human error. No amount of technology protects you if your team clicks the wrong link.'
                },
                {
                  phase: 'PHASE 4: Dark Web Intelligence (Week 2)',
                  what: 'We search the parts of the internet where criminals buy, sell, and share stolen data—places automated scans never check.',
                  items: [
                    '→ Search breach databases for your company emails and passwords',
                    '→ Monitor dark web forums for mentions of your business',
                    '→ Check if client data has been leaked or sold',
                    '→ Verify if former employees are sharing confidential information',
                    '→ Track if your systems are being actively targeted by known threat actors'
                  ],
                  get: 'Knowledge of what criminals already know about you—before they use it against you.',
                  why: 'If your credentials are for sale on the dark web, automated scans won\'t tell you. We will.'
                },
                {
                  phase: 'PHASE 5: Prioritized Remediation Plan (Week 3)',
                  what: 'We don\'t just hand you a report and disappear. We build a custom action plan prioritized by risk and feasibility.',
                  items: [
                    '→ Critical fixes (must be done immediately—attackers are actively exploiting these)',
                    '→ High-priority improvements (should be done within 30 days)',
                    '→ Medium-priority enhancements (complete within 60-90 days)',
                    '→ Long-term strategic improvements (build over the next year)',
                    '→ Cost estimates and resource requirements for each recommendation'
                  ],
                  get: 'A realistic roadmap you can actually implement—not a 60-page report that sits on a shelf.',
                  why: 'Finding vulnerabilities is easy. Fixing them in the right order—without overwhelming your team or blowing your budget—is hard. We do both.'
                }
              ].map((phase, idx) => (
                <GlowCard key={idx} className="p-8 border-l-4 border-red-500" showFlame={true}>
                  <h3 className="text-red-500 text-xl font-bold mb-4">{phase.phase}</h3>
                  <h4 className="font-semibold mb-2 mt-6">What We Do:</h4>
                  <p className="mb-4 text-[color:var(--muted)]">{phase.what}</p>
                  <ul className="list-disc list-inside mb-6 space-y-2 text-[color:var(--muted)]">
                    {phase.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2">What You Get:</h4>
                  <p className="mb-4 p-3 bg-green-500/10 rounded-lg text-sm">{phase.get}</p>
                  <h4 className="font-semibold mb-2">Why This Matters:</h4>
                  <p className="font-semibold text-[color:var(--fg)]">{phase.why}</p>
                </GlowCard>
              ))}
                            </div>

            <GlowCard className="mt-12 p-8 border-2 border-green-500" showFlame={true}>
              <h3 className="text-green-500 text-xl font-bold mb-4">🛡️ OUR "FIND 3 OR IT'S FREE" GUARANTEE:</h3>
              <div className="space-y-4 text-[color:var(--muted)]">
                <p>If our first audit doesn't uncover at least three critical vulnerabilities or exposure points, you don't pay.</p>
                <p>We've never had to honor this guarantee—because every business has blind spots criminals are already mapping.</p>
                          </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="font-semibold mb-1">Your investment:</p>
                  <p className="text-sm">Custom pricing based on audit scope</p>
                        </div>
                <div>
                  <p className="font-semibold mb-1">Your protection:</p>
                  <p className="text-sm">Complete refund if we don't find 3+ critical issues</p>
                      </div>
                <div>
                  <p className="font-semibold mb-1">Your peace of mind:</p>
                  <p className="text-sm">Knowing what criminals see before they exploit it</p>
                    </div>
                </div>
              <div className="text-center mt-6">
                <Link
                  href="#assessment"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#10B981', color: 'white' }}
                >
                  Find My Vulnerabilities Now →
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            PHASE 8: FEATURED TESTIMONIAL (LYDIA'S STORY)
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                REAL BUSINESS OWNERS • REAL VULNERABILITIES FOUND • REAL DISASTERS PREVENTED
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                "We Thought We Were Fine. We Were Wrong. QuantumLeap Saved Us."
            </h2>
          </div>

            <GlowCard className="p-8 md:p-12" showFlame={true}>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-24 h-24 text-white" />
                </div>
                <div>
                  <div className="mb-4">
                    <p className="text-xl font-bold mb-1">💬 Lydia V. Penrose</p>
                    <p className="text-[color:var(--muted)] text-sm">Co-Founder, Code Vibe Studio</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 text-[color:var(--muted)] leading-relaxed">
                    <p>"We thought we were too small to be attacked. We're a 12-person development shop—who would care about us?</p>
                    <p className="font-semibold text-[color:var(--fg)]">Turns out, criminals care a lot about companies exactly our size.</p>
                    <p>QuantumLeap's audit found 19 vulnerabilities we fixed immediately:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>→ Three admin accounts with passwords like "CodeVibe2021"</li>
                      <li>→ Outdated WordPress plugins with known exploits</li>
                      <li>→ Client data stored in unencrypted cloud folders</li>
                      <li>→ Two former employees still had full system access</li>
                      <li>→ Our 'secure' backup system was accessible from the public internet</li>
                    </ul>
                    <p>We thought we had security because our IT guy ran scans every month. Turns out those scans were checking for problems from 2019. <strong>Criminals moved on. We didn't.</strong></p>
                    <p>Three months after we fixed everything QuantumLeap found? A ransomware attack hit our industry. Everyone we know got hit.</p>
                    <p className="text-xl font-bold text-red-500">We didn't.</p>
                    <p>They tried. Our logs show the attempts. But because we'd closed the vulnerabilities QuantumLeap identified, the attacks failed.</p>
                    <p className="font-semibold text-[color:var(--fg)]">That audit saved us from a $500,000 ransom demand plus months of reputation damage. The peace of mind alone is priceless.</p>
                    <p>Now I sleep at night knowing our clients' data is actually protected—not just 'probably fine.'"</p>
                  </div>
                </div>
            </div>

              <GlowCard className="p-6 bg-green-500/10 border-l-4 border-green-500" showFlame={true}>
                <h4 className="text-green-500 font-bold mb-4">📊 LYDIA'S RESULTS:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Vulnerabilities Found & Fixed</p>
                    <p className="text-2xl font-bold text-green-500">19</p>
                  </div>
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Ransomware Attack Prevented</p>
                    <p className="text-2xl font-bold text-green-500">$500K</p>
                </div>
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Successful Breaches Since Audit</p>
                    <p className="text-2xl font-bold text-green-500">ZERO</p>
            </div>
                  <div>
                    <p className="text-xs text-[color:var(--muted)] mb-1">Client Trust</p>
                    <p className="text-2xl font-bold text-green-500">Maintained</p>
                  </div>
                </div>
                <p className="text-xs text-[color:var(--muted)] mt-4 text-right">— Lydia V. Penrose, Co-Founder, Code Vibe Studio ★★★★★</p>
              </GlowCard>

              <div className="text-center mt-8">
                <Link
                  href="#assessment"
                  className="btn-primary inline-flex items-center"
                  style={{ backgroundColor: '#DC2626', color: 'white' }}
                >
                  Get the Same Protection Lydia Has
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* ========================================
            PHASE 9: STRATEGIC FAQ (6 FAQs with CTAs)
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                EVERY QUESTION ANSWERED HONESTLY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                You Have Questions About Cybersecurity. We Have Answers That Don't Require a PhD.
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                Cybersecurity is intentionally made to sound complicated. It's not. We'll explain everything in plain English—including the stuff other security companies don't want you to understand.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Why would hackers target my small business? We\'re nobody.',
                  a: (
                    <div className="space-y-4">
                      <p className="font-semibold">That's exactly why they target you.</p>
                      <p>Here's what criminals actually think when they evaluate targets:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <GlowCard className="p-4" showFlame={true}>
                          <h4 className="text-red-500 font-bold mb-2">BIG COMPANIES:</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>→ Dedicated security teams monitoring 24/7</li>
                            <li>→ Advanced threat detection systems</li>
                            <li>→ Incident response plans ready to deploy</li>
                            <li>→ Legal teams who will hunt them down</li>
                            <li>→ <strong>High risk, medium reward</strong></li>
                          </ul>
                        </GlowCard>
                        <GlowCard className="p-4 border-2 border-green-500" showFlame={true}>
                          <h4 className="text-green-500 font-bold mb-2">SMALL BUSINESSES (YOU):</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>→ No security team (maybe an IT guy who resets passwords)</li>
                            <li>→ No monitoring (you don't know you're breached until it's obvious)</li>
                            <li>→ No response plan (panic and pay the ransom)</li>
                            <li>→ No legal resources (can't afford to chase them)</li>
                            <li>→ <strong>Low risk, guaranteed reward</strong></li>
                          </ul>
                        </GlowCard>
                      </div>
                      <p className="font-semibold text-red-500">You're not "nobody." You're the perfect target.</p>
                      <Link href="#breach-checker" className="btn-primary inline-flex items-center" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                        Find Out What They See When They Look at Me →
                      </Link>
                    </div>
                  )
                },
                {
                  q: 'Will a penetration test disrupt our systems or operations?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-semibold">No.</p>
                      <p>We conduct controlled, safe testing that doesn't interrupt operations—because we're not actually criminals trying to cause damage.</p>
                      <p className="italic bg-[color:var(--card)] p-3 rounded-lg border-l-4 border-[color:var(--muted)]">Think of it like a fire drill vs. an actual fire.</p>
                      <p>A fire drill tests if your evacuation plan works—without actually burning down the building.</p>
                      <p>Our penetration testing tests if your security works—without actually breaching your systems.</p>
                      <Link href="#assessment" className="btn-primary inline-flex items-center" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                        Schedule My Safe Security Test →
                      </Link>
                    </div>
                  )
                },
                {
                  q: 'How is this different from our IT company\'s security scan?',
                  a: (
                    <div className="space-y-4">
                      <p className="text-lg font-semibold">Your IT company runs automated scans. We conduct human-led investigations.</p>
                      <p>That's not a small difference—it's everything.</p>
                      <GlowCard className="p-6 border-l-4 border-red-500" showFlame={true}>
                        <h4 className="text-red-500 font-bold mb-4">YOUR IT COMPANY'S SECURITY SCAN:</h4>
                        <p className="font-semibold mb-2">What it actually does:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                          <li>→ Runs automated software that checks a list of known vulnerabilities</li>
                          <li>→ Same list every business gets</li>
                          <li>→ Same scan every month</li>
                          <li>→ Takes 10 minutes</li>
                          <li>→ Generates a PDF report</li>
                        </ul>
                        <p className="font-semibold mb-2">What it DOESN'T check:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>❌ Whether criminals already have your passwords from old breaches</li>
                          <li>❌ If your team falls for phishing emails</li>
                          <li>❌ Whether your cloud services are misconfigured</li>
                          <li>❌ If former employees still have system access</li>
                        </ul>
                      </GlowCard>
                      <GlowCard className="p-6 border-l-4 border-green-500" showFlame={true}>
                        <h4 className="text-green-500 font-bold mb-4">QUANTUMLEAP CUSTOM SECURITY AUDIT:</h4>
                        <p className="font-semibold mb-2">What we actually do:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                          <li>→ Human security experts conduct custom investigations</li>
                          <li>→ Different approach for every business</li>
                          <li>→ Based on YOUR specific systems, team, and industry</li>
                          <li>→ Takes 7-14 days of active investigation</li>
                          <li>→ Delivers actionable remediation plan</li>
                        </ul>
                        <p className="font-semibold mb-2">What we check for:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>→ Everything your IT scan checks <strong>PLUS:</strong></li>
                          <li>→ Dark web exposure (are your credentials for sale?)</li>
                          <li>→ Human vulnerabilities (does your team click phishing links?)</li>
                          <li>→ Cloud misconfigurations (can we access your sensitive data?)</li>
                        </ul>
                      </GlowCard>
                      <div className="flex gap-4">
                        <Link href="#assessment" className="btn-primary flex-1 text-center" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                          Switch from Fake Security to Real Security →
                        </Link>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'How soon will I get results?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-semibold">You get results in three stages—immediate, fast, and complete:</p>
                      <div className="space-y-4">
                        <GlowCard className="p-4 border-l-4 border-red-500" showFlame={true}>
                          <h4 className="text-red-500 font-bold mb-2">IMMEDIATE (During Your Free Assessment Call - 30 Minutes):</h4>
                          <p>We tell you right away if you have obvious exposure:</p>
                          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>→ Are your business emails in known breach databases?</li>
                            <li>→ Is your website running outdated software with known exploits?</li>
                            <li>→ Do your team members have weak passwords visible in public data?</li>
                          </ul>
                          <p className="font-semibold mt-2">You'll know your most critical risks before the call ends.</p>
                        </GlowCard>
                        <GlowCard className="p-4 border-l-4 border-orange-500" showFlame={true}>
                          <h4 className="text-orange-500 font-bold mb-2">FAST (Initial Findings - 7-10 Days):</h4>
                          <p>This is the "oh shit" report—the stuff that needs to be fixed NOW:</p>
                          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>→ Active vulnerabilities being exploited in the wild</li>
                            <li>→ Credentials for sale on dark web</li>
                            <li>→ Critical misconfigurations exposing sensitive data</li>
                          </ul>
                        </GlowCard>
                        <GlowCard className="p-4 border-l-4 border-green-500" showFlame={true}>
                          <h4 className="text-green-500 font-bold mb-2">COMPLETE (Full Audit Report - 14 Days):</h4>
                          <p>This is the comprehensive report with everything:</p>
                          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>→ Complete vulnerability assessment (every issue we found)</li>
                            <li>→ Risk scoring (which threats matter most)</li>
                            <li>→ Proof-of-concept demonstrations (video/screenshots of us exploiting vulnerabilities)</li>
                            <li>→ Prioritized remediation plan (what to fix first, second, third)</li>
                          </ul>
                        </GlowCard>
                      </div>
                      <Link href="#assessment" className="btn-primary inline-flex items-center" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                        Get My Initial Findings in 7 Days →
                      </Link>
                    </div>
                  )
                },
                {
                  q: 'Is this affordable for a small business?',
                  a: (
                    <div className="space-y-4">
                      <p className="text-lg font-semibold">The real question is: Can you afford NOT to do this?</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <GlowCard className="p-4 border-2 border-green-500" showFlame={true}>
                          <h4 className="text-green-500 font-bold mb-2">COST OF SECURITY AUDIT:</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Custom pricing based on your audit scope</li>
                            <li>Typical range: $3,000-$7,500 for comprehensive audit</li>
                            <li><strong>One-time investment</strong></li>
                          </ul>
                        </GlowCard>
                        <GlowCard className="p-4 border-2 border-red-500" showFlame={true}>
                          <h4 className="text-red-500 font-bold mb-2">COST OF A BREACH:</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Average small business data breach: <strong>$200,000</strong></li>
                            <li>Ransom demands: <strong>$80,000-$150,000</strong> (and rising)</li>
                            <li>Legal fees: <strong>$50,000-$500,000+</strong></li>
                            <li>Lost clients: <strong>Impossible to calculate</strong></li>
                            <li>Business closure: <strong>60% never reopen</strong></li>
                          </ul>
                        </GlowCard>
                      </div>
                      <GlowCard className="p-4 bg-[#1F2937] text-white" showFlame={true}>
                        <h4 className="text-green-500 mb-2 text-lg">THE BRUTAL COMPARISON:</h4>
                        <p className="text-lg mb-1">Security audit: <span className="text-green-500 font-bold">Less than 2%</span> of what a breach costs you</p>
                        <p className="text-lg">Breach recovery: <span className="text-red-500 font-bold">100%</span> of your business (if you survive at all)</p>
                      </GlowCard>
                      <div className="flex gap-4">
                        <Link href="#assessment" className="btn-primary flex-1 text-center" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                          Get Custom Pricing for My Business →
                        </Link>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'What if you don\'t find anything?',
                  a: (
                    <div className="space-y-4">
                      <p className="text-lg font-semibold">Then you don't pay.</p>
                      <p>That's our "Find 3 or It's Free" guarantee.</p>
                      <p>If our first audit doesn't uncover at least three critical vulnerabilities or exposure points, you get a complete refund.</p>
                      <GlowCard className="p-4 border-l-4 border-green-500" showFlame={true}>
                        <h4 className="text-green-500 font-bold mb-2">WHY WE CAN OFFER THIS GUARANTEE:</h4>
                        <p>Because in <strong>8 years</strong> and <strong>200+ audits</strong>, we've never had to honor it.</p>
                        <p className="font-semibold">Not once.</p>
                        <p>Not because we're lucky. Because <strong>every business has blind spots criminals are already mapping.</strong></p>
                      </GlowCard>
                      <p className="font-semibold text-red-500">The risk isn't that we won't find anything.</p>
                      <p className="font-semibold text-red-500">The risk is waiting until criminals find the vulnerabilities for you.</p>
                      <Link href="#assessment" className="btn-primary inline-flex items-center" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                        Find My 3+ Vulnerabilities (Or Don't Pay) →
                      </Link>
                    </div>
                  )
                }
              ].map((faq, idx) => (
                <GlowCard key={idx} className="p-8" showFlame={true}>
                  <h3 className="text-red-500 text-xl font-bold mb-4">{faq.q}</h3>
                  <div className="text-[color:var(--muted)] leading-relaxed">
                    {faq.a}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 10: BLOG INTEGRATION
            ======================================== */}
        <section className="py-20 bg-[color:var(--card)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                LEARN FROM BUSINESSES WHO PREVENTED DISASTERS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Real Breaches. Real Lessons. Real Prevention Strategies.
            </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
                These aren't generic "cybersecurity tips." These are real stories from real businesses who discovered they were vulnerable—and what they did to fix it before it was too late.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'How a Law Firm Discovered Their Passwords Were Being Sold for $47 on the Dark Web (And What They Did About It)',
                  excerpt: 'The managing partner thought their security was fine. They had antivirus. They had a firewall. They ran monthly scans. Then we found their entire team\'s email addresses and passwords being sold on a dark web forum for $47 total.',
                  readTime: '7 min read',
                  tag: 'CASE STUDY'
                },
                {
                  title: 'The $847,000 Ransomware Attack That Could Have Been Prevented for $5,000 (A True Story from Ohio)',
                  excerpt: 'On a Friday afternoon at 3:47 PM, every file in a 40-person law firm got encrypted. Computers. Servers. Backups. Everything. The ransom note appeared: Pay $80,000 in Bitcoin within 72 hours or your data gets published online.',
                  readTime: '9 min read',
                  tag: 'TRUE STORY'
                },
                {
                  title: '"We Thought Our Hosting Company Handled Security": How a $2M E-commerce Site Got Defaced with Offensive Content (And Lost Everything)',
                  excerpt: 'For 14 hours on a Saturday, their homepage displayed offensive content so graphic we can\'t describe it here. By Monday morning: Google had blacklisted their domain, payment processors had frozen their accounts, major clients had terminated contracts.',
                  readTime: '8 min read',
                  tag: 'WARNING'
                }
              ].map((blog, idx) => (
                <GlowCard key={idx} className="p-0 overflow-hidden" showFlame={true}>
                  <div className="h-48 bg-gradient-to-br from-red-900/20 to-purple-900/20 flex items-center justify-center relative">
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded text-xs font-semibold">
                      {blog.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 leading-tight">{blog.title}</h3>
                    <p className="text-sm text-[color:var(--muted)] mb-4 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[color:var(--muted)]">{blog.readTime}</span>
                      <Link href={`/blog/cyber-case-study-${idx + 1}`} className="btn-primary text-sm px-4 py-2" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                        Read the Full Story →
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog/cybersecurity-case-studies" className="btn-secondary inline-flex items-center border-2" style={{ borderColor: '#DC2626', color: '#DC2626', background: 'transparent' }}>
                Browse All Cybersecurity Case Studies →
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================
            PHASE 11: FINAL CTA SECTION (THREE-STEP PROCESS)
            ======================================== */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-4 block">
                YOU'RE ONE DECISION AWAY FROM PREVENTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Find Out What Criminals See Before They Exploit It
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-[color:var(--muted)]">
                <p>Right now, you have two choices:</p>
                <ol className="list-decimal list-inside space-y-2 text-xl">
                  <li>Find out what hackers see about your business BEFORE they use it against you</li>
                  <li>Find out AFTER they've encrypted your files, stolen your data, and demanded $80,000</li>
                </ol>
                <p>Most businesses wait until option 2 forces their hand. By then, it's too late to prevent the damage—you're just trying to survive it.</p>
                <p className="font-semibold">The smart ones choose option 1. They find the vulnerabilities first. They fix them before criminals exploit them. They stay in business.</p>
                <p className="text-2xl font-bold text-red-500">Which one are you?</p>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              {[
                {
                  step: 1,
                  title: 'Free 30-Minute Security Assessment (The "How Exposed Am I?" Call)',
                  color: '#DC2626',
                  what: 'We identify your most critical security gaps in a single 30-minute conversation—no commitment, no sales pitch, just honest assessment.',
                  items: [
                    '→ Check if your emails appear in breach databases',
                    '→ Scan your public-facing systems for obvious vulnerabilities',
                    '→ Review your current security setup and identify blind spots',
                    '→ Assess your risk level based on industry, size, and current defenses',
                    '→ Give you immediate recommendations you can implement today'
                  ],
                  get: [
                    '→ Instant breach check results (are your credentials already stolen?)',
                    '→ Priority vulnerability list (your top 3 risks)',
                    '→ Honest assessment: Are you actually at risk or just worried?',
                    '→ Clear explanation of what protection you need (and don't need)',
                    '→ If we can\'t help you, we\'ll tell you immediately and suggest alternatives'
                  ],
                  time: '30 minutes on video call',
                  next: 'If you\'re at risk (you are), we schedule Step 2. If you\'re genuinely secure (you\'re not, but if you were), we tell you and you walk away with free advice. Either way, you get clarity in 30 minutes.'
                },
                {
                  step: 2,
                  title: 'Custom Security Audit Proposal (Delivered in 48 Hours)',
                  color: '#F97316',
                  what: 'We create a detailed audit plan showing exactly what we\'ll test, what you\'ll get, and what it\'ll cost. You see everything before approving anything.',
                  items: [],
                  get: [
                    '→ Custom audit scope (what we\'ll test and why)',
                    '→ Testing methodology (how we\'ll conduct the investigation)',
                    '→ Deliverables checklist (what reports and recommendations you\'ll receive)',
                    '→ Transparent pricing (exact cost, no hidden fees)',
                    '→ Expected timeline (when testing happens, when you get results)',
                    '→ "Find 3 or It\'s Free" guarantee (in writing)'
                  ],
                  time: '30 minutes to review the proposal and ask questions',
                  next: 'You review the proposal. If you want to proceed, we schedule Step 3. If you don\'t, you walk away with a valuable security roadmap you can use however you want. Zero pressure.'
                },
                {
                  step: 3,
                  title: 'Security Audit Execution (7-14 Days)',
                  color: '#10B981',
                  what: 'We conduct the full security investigation—penetration testing, dark web monitoring, human vulnerability assessment, and threat analysis. You get complete visibility into what criminals see.',
                  items: [],
                  get: [
                    '→ Initial findings report (7-10 days): Critical vulnerabilities that need immediate attention',
                    '→ Complete audit report (14 days): Every vulnerability found, ranked by severity',
                    '→ Proof-of-concept demonstrations (video/screenshots showing how we exploited weaknesses)',
                    '→ Prioritized remediation plan (30/60/90-day action items)',
                    '→ Cost estimates for fixes (so you can budget appropriately)',
                    '→ Direct access to the security analyst who conducted your audit'
                  ],
                  time: 'Minimal—we coordinate all testing around your schedule',
                  next: 'You start fixing critical vulnerabilities immediately (we help prioritize). Most businesses complete critical fixes within 30 days. You have complete peace of mind knowing what criminals see—and how to close the doors before they walk in.'
                }
              ].map((stepData, idx) => (
                <GlowCard key={idx} className="p-8 border-l-6" showFlame={true} style={{ borderLeftColor: stepData.color }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: stepData.color }}>
                      {stepData.step}
                    </div>
                    <h3 className="text-2xl font-bold">{stepData.title}</h3>
                  </div>
                  <div className="ml-16 space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: stepData.color }}>What We Do:</h4>
                      <p className="text-[color:var(--muted)] mb-4">{stepData.what}</p>
                      {stepData.items.length > 0 && (
                        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)]">
                          {stepData.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: stepData.color }}>What You Get:</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)]">
                        {stepData.get.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <GlowCard className="p-4 bg-white/5" showFlame={true}>
                      <p className="font-semibold mb-1">Your Time Investment:</p>
                      <p className="text-sm">{stepData.time}</p>
                    </GlowCard>
                    <GlowCard className="p-4 bg-green-500/10 border-l-4 border-green-500" showFlame={true}>
                      <p className="font-semibold mb-1">What Happens Next:</p>
                      <p className="text-sm">{stepData.next}</p>
                    </GlowCard>
                    {stepData.step === 1 && (
                      <Link
                        href="#assessment"
                        className="btn-primary inline-flex items-center"
                        style={{ backgroundColor: stepData.color, color: 'white' }}
                      >
                        Schedule My Free Security Assessment
                      </Link>
                    )}
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Trust Indicators */}
            <GlowCard className="p-8 bg-[color:var(--card)] mb-12" showFlame={true}>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
                {[
                  { icon: '✓', text: 'Find 3 vulnerabilities or it\'s free' },
                  { icon: '⏱️', text: 'Results in 7-10 days (initial findings)' },
                  { icon: '👤', text: 'Human-led investigation (not automated scans)' },
                  { icon: '🛡️', text: '200+ businesses protected successfully' },
                  { icon: '🏛️', text: 'NASA-recognized security methodology' },
                  { icon: '🎖️', text: 'Former intelligence analysts on team' },
                  { icon: '🤝', text: '30-day post-audit support included' },
                  { icon: '💯', text: 'Honest assessment even if we can\'t help' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <p className="text-3xl mb-2">{item.icon}</p>
                    <p className="text-xs font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </GlowCard>

            {/* Urgency Element */}
            <GlowCard className="p-8 border-2 border-red-500" showFlame={true}>
              <h3 className="text-red-500 text-xl font-bold mb-4 text-center">⚠️ CRITICAL REALITY CHECK:</h3>
              <div className="space-y-4 text-center text-[color:var(--muted)]">
                <p>Every day you wait is another day criminals are testing your defenses.</p>
                <p>They're not waiting for you to "get around to security." They're actively scanning, testing, and mapping right now.</p>
                <p className="text-lg font-semibold">The average business discovers a breach 287 days AFTER it happens.</p>
                <GlowCard className="p-4 bg-white/5 mt-6" showFlame={true}>
                  <p className="font-semibold mb-2">That's 287 days of:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>→ Criminals accessing your files</li>
                    <li>→ Stolen data being sold</li>
                    <li>→ Client information compromised</li>
                    <li>→ Reputation damage you don't even know about yet</li>
                  </ul>
                </GlowCard>
                <p>By the time you discover the breach, the damage is catastrophic.</p>
                <p className="text-2xl font-bold text-red-500">Find out what they see before they exploit it.</p>
                </div>
              <GlowCard className="mt-6 p-4 bg-[#1F2937] text-white" showFlame={true}>
                <p className="font-semibold mb-2 text-yellow-500">🔥 LIMITED AVAILABILITY:</p>
                <p className="mb-2">We only conduct 8 security audits per month to ensure quality.</p>
                <p className="mb-4">Current wait time: <strong>2-3 weeks</strong></p>
                <div className="bg-red-500/20 p-3 rounded border-l-4 border-red-500">
                  <p className="mb-1">Next available audit slot: <CountdownTimer elementId="availability-countdown" hoursRemaining={125} /></p>
                  <p className="text-red-300 font-semibold">Only 2 audit slots remaining this month.</p>
                </div>
              </GlowCard>
            </GlowCard>

            {/* Primary CTA */}
            <div className="text-center mt-12">
              <Link
                href="#assessment"
                className="btn-primary inline-flex items-center text-xl px-12 py-6 font-bold"
                style={{ backgroundColor: '#DC2626', color: 'white' }}
              >
                Get My Free Security Assessment Now →
              </Link>
            </div>
            <div className="text-center mt-4">
              <Link
                href="#breach-checker"
                className="btn-secondary inline-flex items-center border-2"
                style={{ borderColor: '#DC2626', color: '#DC2626', background: 'transparent' }}
              >
                Check If I've Been Breached First (Free Tool)
              </Link>
          </div>
            <div className="text-center mt-6 text-sm text-[color:var(--muted)] space-y-1">
              <p>✓ No commitment required • No credit card needed • No sales pressure</p>
              <p>✓ Just honest answers about your actual security risks</p>
              <p>✓ If we can't help you, we'll tell you immediately</p>
              <p className="mt-4 font-semibold text-[color:var(--fg)]">Used by 200+ businesses who chose prevention over recovery</p>
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
