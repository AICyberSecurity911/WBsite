'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, AlertTriangle, Search, FileCheck, Users, TrendingUp, CheckCircle2, XCircle, Eye, UserX, Lock, DollarSign } from 'lucide-react'
import { useState } from 'react'
import { BackgroundChecksExitIntent } from '@/components/background-checks-exit-intent'

export default function BackgroundChecksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Schema markup for SEO/AEO/AGO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Beyond Background Checks - Intelligence-Grade Investigations",
    "description": "Intelligence-grade background investigations that reveal hidden behavior, red flags, and risks that standard background checks miss. Custom investigations for SMB hiring decisions.",
    "provider": {
      "@type": "Organization",
      "name": "QuantumLeap AI",
      "url": "https://quantumleap-io-55l56u.abacusai.app"
    },
    "areaServed": "United States",
    "serviceType": "Background Investigation Services"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QuantumLeap AI",
    "url": "https://quantumleap-io-55l56u.abacusai.app",
    "logo": "https://quantumleap-io-55l56u.abacusai.app/logo.png",
    "description": "Custom AI solutions for SMBs: intelligent automation, cyber intelligence, background checks, and business transformation services."
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://quantumleap-io-55l56u.abacusai.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Background Checks",
        "item": "https://quantumleap-io-55l56u.abacusai.app/background-checks"
      }
    ]
  }

  // FAQ Schema - extracting text content from FAQ items
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the hidden internet and why does it matter for background checks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The internet is like an iceberg. The visible part (Google, social media, news sites) is only about 4% of what exists. The other 96% is hidden from regular search engines and includes private databases, leaked password databases, places where criminals buy and sell stolen information, and underground networks where people hide their real identities. If someone has a shady past, they often hide it in these areas. Standard background checks only search the 4% you can Google. We search the 96% where people hide what they don't want you to find."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a background check and what you do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard background checks are database searches that look for criminal records, credit reports, education verification, and employment verification. They take about 10 minutes and cost $50-200. Our intelligence investigations analyze online behavior and communication patterns, find all names/identities someone has used, search areas where criminals hide information, look for lawsuits and financial distress, and have human intelligence analysts review everything. We take 5-7 days with custom pricing. The difference: Standard checks tell you if someone got caught. We tell you if someone is dangerous."
        }
      },
      {
        "@type": "Question",
        "name": "Why would someone with no criminal record still be dangerous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because most problem employees never get arrested. They get fired quietly, references aren't checked thoroughly, they change jobs before anyone presses charges, or they use different names to hide their past. No criminal record doesn't mean safe to hire—it just means they haven't been arrested yet."
        }
      },
      {
        "@type": "Question",
        "name": "Is this overkill for a small business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A $50K/year hire who turns out to be a problem costs you $68K+ in salary and benefits, $45K to restart hiring, $87K in legal fees if they create HR problems, and $120K+ in reputation damage for a total of $320K+ for one bad hire. An intelligence investigation costs a fraction of that—typically less than 2% of what a bad hire costs you. Small businesses can't afford mistakes because one bad hire can destroy a small business."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an investigation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard turnaround is 7-10 business days. Expedited service for critical hires is available in 48 hours with an additional fee. We provide preliminary red flags within 72 hours if we find something urgent."
        }
      },
      {
        "@type": "Question",
        "name": "What if you don't find anything concerning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A clean investigation report means no hidden identities, no concerning online behavior, no activity in criminal areas, no undisclosed legal or financial problems, legitimate references, and an accurate resume. You get peace of mind backed by intelligence-grade due diligence when you're trusting someone with your company's money, clients, data, reputation, and team safety."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing depends on the depth of investigation needed: Basic Verification (resume accuracy, reference verification, basic online behavior scan) for lower-risk roles; Standard Investigation (identity detection, hidden internet search, financial/legal analysis) for managers and finance roles; Comprehensive Intelligence Investigation (deep behavioral analysis, international search, intelligence analyst review) for executives and high-risk roles. One bad $50K hire costs $200K-$4M in losses. Our most comprehensive investigation is less than 2% of that cost."
        }
      },
      {
        "@type": "Question",
        "name": "Is this legal? What about privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely legal. We follow strict compliance protocols and only access publicly available information and commercial databases. We don't hack, breach, or access private accounts. We comply with Fair Credit Reporting Act (FCRA) guidelines and operate under investigative journalism and due diligence laws. Candidates consent to background checks when they apply."
        }
      },
      {
        "@type": "Question",
        "name": "What red flags should I look for that mean I need an investigation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Resume red flags include unexplained employment gaps (more than 6 months), job titles that don't match company size, vague job descriptions, and inability to provide contact info for previous supervisors. Interview red flags include stories that don't add up or change between interviews, overly defensive about past jobs, blames previous employers excessively, and too eager to start. Gut feeling red flags include something feels off, too good to be true, pressure to hire quickly, and inconsistent details. The rule: If you have 2+ red flags, investigate before hiring."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer any guarantees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Find It or Free Guarantee. If our first investigation doesn't uncover at least three significant findings beyond what a standard background check would show, you don't pay. In 15 years and 2,000+ investigations, we've found disqualifying information 73% of the time."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden gradient-bg flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-block bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <span className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                  Beyond Background Checks™
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
                One Bad Hire Can Destroy<br />
                <span className="text-red-500">Everything You've Built</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
                Standard background checks only catch criminals who got caught. We reveal who they really are—their hidden behavior, red flags, and risks lurking beneath the surface.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <a 
                  href="/consultation" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition transform hover:scale-105"
                >
                  🔍 Uncover the Truth Before It Costs You Everything →
                </a>
                <a 
                  href="/consultation" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-red-500 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                >
                  📋 Get My Confidential Risk Report →
                </a>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 animate-fade-in-up animation-delay-600">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-semibold">
                  Fortune 500 Strategy | MIT & Caltech Engineering | Team That Helped Secure NASA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TLDDR Box */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-red-300 dark:border-red-700 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  What Is Beyond Background Checks?
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A deep investigation that reveals the complete picture of who someone really is—not just what shows up in public records. We analyze online behavior, uncover hidden identities, and expose risks that standard checks can't see.
                </p>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                  <p className="font-bold text-xl mb-4 text-red-600 dark:text-red-400">Real Results for SMBs:</p>
                  <ul className="space-y-3">
                    {[
                      { icon: '🛡️', text: '74% lower fraud risk within 90 days' },
                      { icon: '💰', text: '$12M in prevented losses across clients' },
                      { icon: '🎯', text: '63% fewer bad hires using behavioral intelligence' },
                      { icon: '🔍', text: '4 of 5 cases uncover hidden data exposure' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <span className="text-lg pt-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6 py-2 bg-red-50 dark:bg-red-950/30 rounded-r-lg">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    <em>Founder's Note—Paras Khurana, CEO</em>
                  </p>
                  <p className="font-bold text-lg text-gray-900 dark:text-white mb-1">Critical Insight:</p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    "One unverified connection can collapse a company. Beyond Background Checks gives you clarity before you commit—because what you don't know will hurt you."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The Dangerous Lie of a<br />
                <span className="text-red-500">"Clean" Background Check</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                Ever wonder why so many "good hires" turn bad? Here's what most business owners don't know...
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                <p>
                  You find a candidate who looks perfect.
                </p>
                
                <p className="space-y-2">
                  Resume? <strong>Impressive.</strong><br />
                  Interview? <strong>Flawless.</strong><br />
                  Standard background check? <strong className="text-red-500">"No criminal record found."</strong>
                </p>

                <p>
                  You hire them. Six months later, you're dealing with:
                </p>

                <ul className="space-y-2 text-lg">
                  <li>Harassment complaints from your team</li>
                  <li>Missing funds nobody can trace</li>
                  <li>Client relationships you can't repair</li>
                </ul>

                <p>
                  They were never charged with a crime—just quietly pushed out from previous jobs. No arrest record means they pass standard checks every time.
                </p>

                <Card className="my-8 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                  <CardContent className="p-6">
                    <p className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                      Here's what most business owners don't know:
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      Standard background checks only search criminal databases and credit reports. They don't see:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Online behavior showing bias, aggression, or dishonesty</li>
                      <li>• Fake identities used to hide past problems</li>
                      <li>• Hidden connections to fraud networks</li>
                      <li>• Lawsuits settled privately (not public record)</li>
                      <li>• Information buried in places standard searches never look</li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  One bad hire can drain $200K+ in legal fees, lost clients, and reputation damage.
                </p>

                <p className="text-xl">
                  The worst part? <strong>You won't see it coming if you rely on a database search that only shows who got caught.</strong>
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                  Here's the thing most business owners don't realize: Hiring the wrong person wastes the time you could spend on <a href="/business-transformation" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">growing your business</a>. And once they have access to your <a href="/intelligent-automation" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">automated workflows and systems</a>, a bad actor can cause exponential damage.
                </p>

                <Card className="my-8 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
                  <CardContent className="p-6">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300">
                      <strong className="not-italic">Think of it this way:</strong> Standard background checks are like checking someone's driver's license. It tells you if they got caught speeding—not if they're a good driver. We look at how they actually drive.
                    </p>
                  </CardContent>
                </Card>

                <div className="text-center py-8">
                  <Button 
                    asChild
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
                  >
                    <a href="/consultation">🔍 See What Standard Checks Are Missing About Your Candidate →</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The Only Background Check Built Like a<br />
                <span className="text-red-500">Detective Investigation—Not a Database Search</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Standard checks pull from databases anyone can access. We investigate like a private detective—following trails, connecting dots, and uncovering what's deliberately hidden.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
                <strong>Here's what we do differently.</strong> While others search public records for 10 minutes, we spend days investigating behavior, connections, and hidden identities. We don't just ask "Were they caught?" We ask <strong>"Are they dangerous?"</strong>
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4 italic">
                That's the difference.
              </p>
            </div>

            <div className="space-y-8">
              {/* Behavioral Pattern Analysis */}
              <Card className="border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="text-3xl">🔍</span> Behavioral Pattern Analysis
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We analyze how someone communicates online—their words, tone, and topics. This reveals biases, aggression patterns, and red flags that predict future problems.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      <strong className="not-italic text-blue-600 dark:text-blue-400">Translation:</strong> We read their social media, forum posts, and comments to see who they are when nobody's watching.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Hidden Identity Detection */}
              <Card className="border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="text-3xl">🎭</span> Hidden Identity Detection
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Criminals and problem employees often use fake names, altered birthdates, or multiple email addresses to hide their past. We connect these identities back to the real person.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      <strong className="not-italic text-blue-600 dark:text-blue-400">Translation:</strong> We find all their aliases and link them together—so you see their complete history, not just the clean version.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Deep Web Intelligence */}
              <Card className="border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="text-3xl">🕵️</span> Deep Web Intelligence <span className="text-base font-normal text-gray-500">(Explaining the "Hidden Internet" Simply)</span>
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Most people only search Google—but that's less than 4% of the internet. The other 96% is hidden from search engines. That's where leaked passwords, stolen data, and criminal networks operate.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We search these hidden areas to see if your candidate's information has been compromised or if they're connected to illegal activity.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                      <strong className="not-italic text-blue-600 dark:text-blue-400">Translation:</strong> We look in places where criminals share stolen information and plan illegal activity—places standard checks never see.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="text-red-600 dark:text-red-400">Why this matters:</strong> If this person will have access to your company's <a href="/cyber-intelligence" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">financial systems or sensitive data</a>, you need to know if their credentials are floating around in criminal networks. Identity theft victims create legal liability—and active criminals create catastrophic risk.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Civil & Financial Pattern Analysis */}
              <Card className="border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="text-3xl">📊</span> Civil & Financial Pattern Analysis
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We look beyond criminal records to find:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                    <li>Lawsuits filed or settled privately</li>
                    <li>Business bankruptcies or closures</li>
                    <li>Conflicts of interest with competitors</li>
                    <li>Financial distress patterns that increase theft risk</li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      <strong className="not-italic text-blue-600 dark:text-blue-400">Translation:</strong> We find legal problems that never resulted in criminal charges—but still show a pattern of trouble.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Human Verification */}
              <Card className="border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="text-3xl">✅</span> Human Verification by Intelligence Experts
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Every investigation is reviewed by former intelligence analysts and cybersecurity experts—the same professionals who helped secure NASA systems.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      <strong className="not-italic text-blue-600 dark:text-blue-400">Translation:</strong> Real humans with military and government experience review everything—not just software pulling automated reports.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button 
                asChild
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
              >
                <a href="/consultation">🧠 I Need This Level of Investigation → Schedule My Confidential Briefing</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What You Actually Get:<br />
                <span className="text-red-500">Database Search vs. Intelligence Investigation</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-red-50 dark:bg-red-950/30">
                    <th className="border border-red-200 dark:border-red-800 p-4 text-left font-bold text-gray-900 dark:text-white">Question</th>
                    <th className="border border-red-200 dark:border-red-800 p-4 text-left font-bold text-gray-900 dark:text-white">Standard Background Check</th>
                    <th className="border border-red-200 dark:border-red-800 p-4 text-left font-bold text-red-600 dark:text-red-400">QuantumLeap Intelligence Investigation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  {[
                    {
                      question: 'How long does it take?',
                      standard: '10 minutes (automated)',
                      quantum: '5–7 days (human-led investigation)'
                    },
                    {
                      question: 'What does it search?',
                      standard: 'Criminal databases, credit reports (4% of available data)',
                      quantum: 'Online behavior, hidden identities, areas where criminals operate (96% of available data)'
                    },
                    {
                      question: 'Who reviews it?',
                      standard: 'Software algorithm',
                      quantum: 'Former intelligence analysts and cybersecurity experts'
                    },
                    {
                      question: 'What does it find?',
                      standard: 'Arrests and charges (only if convicted or pending)',
                      quantum: 'Behavior patterns, hidden problems, risks beneath the surface'
                    },
                    {
                      question: "Does it catch people who've never been arrested?",
                      standard: '❌ No—they\'ll show "clean"',
                      quantum: '✅ Yes—we find problems before they result in arrests'
                    },
                    {
                      question: 'Does it find fake identities?',
                      standard: '❌ No—only searches the name provided',
                      quantum: '✅ Yes—we connect aliases and hidden names'
                    },
                    {
                      question: 'Does it analyze online behavior?',
                      standard: '❌ No—only pulls records',
                      quantum: '✅ Yes—we analyze communication patterns and red flags'
                    },
                    {
                      question: 'Does it search where criminals hide information?',
                      standard: '❌ No—only public databases',
                      quantum: '✅ Yes—we search the 96% of internet criminals use'
                    },
                    {
                      question: 'Can it find problems hidden under different names?',
                      standard: '❌ No—only searches exact name match',
                      quantum: '✅ Yes—we map all identities to the real person'
                    },
                    {
                      question: 'What does "clean" mean?',
                      standard: '"No arrest record found" (doesn\'t mean they\'re safe)',
                      quantum: '"No concerning behavior, identities, or hidden risks found" (verified safe)'
                    },
                    {
                      question: 'Typical cost',
                      standard: '$50–$200',
                      quantum: 'Custom pricing based on investigation depth'
                    },
                    {
                      question: 'Best for',
                      standard: 'Basic compliance (legal minimum)',
                      quantum: 'Actually knowing who you\'re hiring'
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-red-50/50 dark:hover:bg-red-950/10 transition-colors">
                      <td className="border border-red-200 dark:border-red-800 p-4 font-semibold">{row.question}</td>
                      <td className="border border-red-200 dark:border-red-800 p-4">{row.standard}</td>
                      <td className="border border-red-200 dark:border-red-800 p-4 bg-red-50/30 dark:bg-red-950/20">{row.quantum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <Button 
                asChild
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
              >
                <a href="/consultation">🧠 Which level of investigation do you need? → Schedule a consultation to discuss your role</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What You <span className="text-red-500">Receive</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every assessment includes a comprehensive report and ongoing support
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-red-200 dark:border-red-800 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📄 Comprehensive Report Includes:</h3>
                  <ul className="space-y-4">
                    {[
                      'Executive summary with hire/don\'t hire recommendation',
                      'Detailed findings from all three layers',
                      'Risk score (0-100) with explanation',
                      'Red flag analysis with severity ratings',
                      'Verification results for all credentials',
                      'Reference interview summaries',
                      'Recommended onboarding precautions',
                      'Legal compliance documentation'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-800 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">🛡️ Additional Support:</h3>
                  <ul className="space-y-4">
                    {[
                      '30-minute consultation to review findings',
                      'Legal review of all documentation',
                      'FCRA and EEOC compliance guarantee',
                      'Secure portal access to full report',
                      '90-day update monitoring (optional)',
                      'Customizable screening packages',
                      'Bulk pricing for multiple candidates',
                      'Priority support for urgent requests'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Pricing Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Investment Tailored to<br />
                <span className="text-red-500">Your Specific Needs</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every investigation is customized based on the role, risk level, and depth of search required. No one-size-fits-all packages—just the intelligence you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'Basic Verification',
                  description: 'For lower-risk roles',
                  features: [
                    'Resume accuracy check',
                    'Reference verification',
                    'Basic online behavior scan',
                    'Standard turnaround',
                    'Good for: Contractors, vendors, entry-level'
                  ],
                  cta: 'Get Custom Quote',
                  icon: '📋'
                },
                {
                  name: 'Standard Investigation',
                  description: 'For managers & finance roles',
                  features: [
                    'Everything in Basic, plus:',
                    'Identity and alias detection',
                    'Hidden internet search',
                    'Financial & legal pattern analysis',
                    'Good for: Anyone with system access'
                  ],
                  cta: 'Get Custom Quote',
                  icon: '🔍',
                  popular: true
                },
                {
                  name: 'Intelligence Investigation',
                  description: 'For executives & high-risk roles',
                  features: [
                    'Everything in Standard, plus:',
                    'Deep behavioral analysis',
                    'International background search',
                    'Intelligence analyst review with threat assessment',
                    'Good for: C-suite, partners, sensitive positions'
                  ],
                  cta: 'Get Custom Quote',
                  icon: '🧠'
                }
              ].map((tier, idx) => (
                <Card 
                  key={idx} 
                  className={`relative ${
                    tier.popular 
                      ? 'border-red-500 dark:border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.3)] scale-105' 
                      : 'border-red-200 dark:border-red-800'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{tier.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{tier.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg font-semibold">Custom Pricing</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{tier.description}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : 'bg-white dark:bg-gray-800 border-2 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20'
                      }`}
                    >
                      <a href="/consultation">{tier.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                  💡 The Real Cost Comparison
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Investigation Cost:
                    </p>
                    <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                      Less than 2%
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      of what a bad hire costs you
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Bad Hire Cost:
                    </p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      $200K–$4M+
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      in legal fees, losses, and reputation damage
                    </p>
                  </div>
                </div>
                <p className="text-center text-lg text-gray-700 dark:text-gray-300 mt-6 font-semibold">
                  The question isn't "Can I afford an investigation?"<br />
                  The question is <span className="text-red-600 dark:text-red-400">"Can I afford not to?"</span>
                </p>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Button 
                asChild
                className="bg-red-500 hover:bg-red-600 text-white px-10 py-6 text-lg font-semibold"
              >
                <a href="/consultation">💰 Get Your Custom Quote for This Role → Schedule Free Consultation</a>
              </Button>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                <strong>Volume Discounts Available:</strong> Screen 10+ candidates annually and save 15-25%
              </p>
            </div>
          </div>
        </section>

        {/* Trusted By Section - Organizations That Demand Excellence */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Trusted by Organizations That <span className="text-red-500">Demand Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Our team has conducted intelligence investigations and security operations for these organizations—now we bring that expertise to entrepreneurs, SMBs, and families.
              </p>
            </div>

            {/* Company Logos Carousel */}
            <div className="mb-12 overflow-hidden">
              <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-12">
                {['ibm', 'deloitte', 'bmo', 'cibc', 'ge', 'scotiabank', 'nasa', 'allianz', 'hsbc', 'husky', 'rim', 'ing', 'ciis'].map((logo) => (
                  <div key={logo} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <img 
                      src={`/company-logos/${logo}.png`} 
                      alt={logo.toUpperCase()}
                      className="h-12 lg:h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Credibility Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: '🎖️',
                  text: 'Former intelligence analysts from government agencies'
                },
                {
                  icon: '🛡️',
                  text: 'Cybersecurity experts who secured NASA systems'
                },
                {
                  icon: '⏳',
                  text: '250+ years combined experience in threat assessment'
                },
                {
                  icon: '🎓',
                  text: 'MIT & Caltech-trained engineers'
                },
                {
                  icon: '📊',
                  text: '15 years, 2,000+ investigations, 98.7% accuracy rate'
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-red-200 dark:border-red-800 text-center hover:border-red-400 dark:hover:border-red-600 transition-all">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section - "Find It or Free" */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-red-300 dark:border-red-700 shadow-[0_0_50px_rgba(239,68,68,0.25)]">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block bg-red-100 dark:bg-red-900/30 rounded-full px-6 py-3 mb-6">
                    <span className="text-lg font-bold text-red-700 dark:text-red-300 uppercase tracking-wide">
                      🛡️ Our Iron-Clad Guarantee
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    Our "Find It or Free" Guarantee—<br />
                    <span className="text-red-500">You Only Pay If We Uncover What Others Miss</span>
                  </h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    If our first investigation doesn't uncover <strong>at least three significant findings</strong> (beyond what a standard background check would show), <strong className="text-red-600 dark:text-red-400">you don't pay</strong>.
                  </p>

                  <Card className="my-8 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
                    <CardContent className="p-6">
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">
                        Why? Because 73% of the time, we find disqualifying information that standard checks miss.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        We're confident we'll find something worth knowing—or you don't pay.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Qualifying Findings Include:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Hidden identities or aliases',
                        'Concerning behavior patterns online',
                        'Undisclosed legal or financial problems',
                        'Resume fraud or fake credentials',
                        'References that aren\'t legitimate',
                        'Activity in areas where criminals operate',
                        'Conflicts of interest',
                        'Red flags standard checks never see'
                      ].map((finding, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-lg">
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Your Investment</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">$3,000–$7,500</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Varies by role & depth</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg">
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Your Protection</p>
                      <p className="text-3xl font-bold text-green-600 dark:text-green-400">Complete Refund</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">If we don't find 3+ findings</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg">
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Your Peace of Mind</p>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">Priceless</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Know before you commit</p>
                    </div>
                  </div>

                  <div className="text-center py-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white mb-6">
                    <p className="text-2xl font-bold italic">
                      "Confidence shouldn't be a gamble."
                    </p>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
                    The question isn't whether you can afford this investigation.<br />
                    <strong className="text-red-600 dark:text-red-400">It's whether you can afford to hire blindly.</strong>
                  </p>

                  <div className="text-center">
                    <Button 
                      asChild
                      className="bg-red-500 hover:bg-red-600 text-white px-10 py-6 text-lg font-semibold"
                    >
                      <a href="/consultation">🛡️ Start Your Risk-Free Investigation → Schedule Now</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Comprehensive Educational FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Frequently Asked <span className="text-red-500">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need to know about intelligence-grade background investigations
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'What is the "hidden internet" and why does it matter for background checks?',
                  a: (
                    <div className="space-y-4">
                      <p>Think of the internet like an iceberg.</p>
                      <p>The part you see (Google, social media, news sites) is only about 4% of what exists. The other 96% is hidden from regular search engines—not because it's all illegal, but because it's not indexed.</p>
                      <p>This hidden area includes:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Private databases and forums</li>
                        <li>Leaked password and identity databases</li>
                        <li>Places where criminals buy and sell stolen information</li>
                        <li>Underground networks where people hide their real identities</li>
                      </ul>
                      <p className="font-bold text-red-600 dark:text-red-400">Why this matters for hiring:</p>
                      <p>If someone has a shady past, they often hide it in these areas. Standard background checks only search the 4% you can Google. We search the 96% where people hide what they don't want you to find.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">🔍 Want to see if your candidate shows up in hidden areas? → Run the free risk assessment</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: "What's the difference between a background check and what you do?",
                  a: (
                    <div className="space-y-4">
                      <p className="font-bold">Standard background checks are database searches. They look for:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Criminal records (only people who were arrested and charged)</li>
                        <li>Credit reports (only debts reported to credit bureaus)</li>
                        <li>Education verification (if the school responds)</li>
                        <li>Employment verification (if previous employer confirms)</li>
                      </ul>
                      <p>They take about 10 minutes and cost $50–200.</p>
                      <p className="font-bold mt-4">What we do is an intelligence investigation. We:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Analyze online behavior and communication patterns</li>
                        <li>Find all names/identities someone has used</li>
                        <li>Search areas where criminals hide information</li>
                        <li>Look for lawsuits, financial distress, and conflicts of interest</li>
                        <li>Have human intelligence analysts review everything</li>
                      </ul>
                      <p>We take 5–7 days with custom pricing based on depth needed.</p>
                      <p className="font-bold text-red-600 dark:text-red-400">The difference:</p>
                      <p>Standard checks tell you if someone got caught. We tell you if someone is dangerous.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">💡 Which level of investigation do you need for this role? → Schedule a confidential consultation</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'Why would someone with "no criminal record" still be dangerous?',
                  a: (
                    <div className="space-y-4">
                      <p>Because most problem employees never get arrested.</p>
                      <p>They get fired quietly. References aren't checked thoroughly. They change jobs before anyone presses charges. They use different names to hide their past.</p>
                      <p className="font-bold text-red-600 dark:text-red-400">Here are real patterns we've seen:</p>
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold">Pattern 1: The Serial Job-Hopper</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Fired from 4 companies in 3 years</li>
                            <li>Never arrested (companies just let them go)</li>
                            <li>Changes name slightly to hide employment gaps</li>
                            <li>Standard check shows "clean"—because no criminal charges were filed</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold">Pattern 2: The Harasser</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Multiple HR complaints at previous jobs</li>
                            <li>Settled lawsuits privately (not public record)</li>
                            <li>Aggressive, vindictive online behavior</li>
                            <li>Standard check shows "clean"—because settlements are confidential</li>
                          </ul>
                        </div>
                      </div>
                      <p className="font-bold">The lesson? No criminal record ≠ Safe to hire</p>
                      <p>It just means they haven't been arrested yet.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">🛡️ See what hidden patterns exist for your candidate → Run the risk assessment</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'Is this overkill for a small business?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-bold">Let's do the math.</p>
                      <p>A $50K/year hire who turns out to be a problem costs you:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>$68K+ in salary and benefits (year 1)</li>
                        <li>$45K to restart hiring (recruiter, lost productivity)</li>
                        <li>$87K in legal fees (if they create HR problems)</li>
                        <li>$120K+ in reputation damage (lost clients, reviews)</li>
                      </ul>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">Total: $320K+ for one bad hire</p>
                      <p>An intelligence investigation costs a fraction of that—typically less than 2% of what a bad hire costs you.</p>
                      <p className="font-bold">Here's the truth: Small businesses can't afford mistakes.</p>
                      <p>You don't have a PR department, a legal team on retainer, or cash reserves to absorb a $320K loss. One bad hire can destroy a small business.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">📊 See your specific cost-benefit breakdown → Schedule a free consultation</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'How long does an investigation take?',
                  a: (
                    <div className="space-y-4">
                      <p><strong>Standard turnaround:</strong> 7–10 business days</p>
                      <p><strong>Expedited (critical hires):</strong> 48 hours (additional fee)</p>
                      <p className="font-bold">Here's the timeline:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Days 1–3:</strong> Online behavior analysis and identity mapping</li>
                        <li><strong>Days 4–5:</strong> Hidden internet search and connection analysis</li>
                        <li><strong>Days 6–7:</strong> Intelligence analyst review and report compilation</li>
                        <li><strong>Day 8–10:</strong> Delivery and consultation to explain findings</li>
                      </ul>
                      <p>We'll give you preliminary red flags within 72 hours if we find something urgent.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">📅 Need faster results for a critical hire? → Schedule an expedited investigation</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: "What if you don't find anything concerning?",
                  a: (
                    <div className="space-y-4">
                      <p>That's actually the best outcome—and it still gives you valuable information.</p>
                      <p className="font-bold">A clean investigation report means:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>✓ No hidden identities or aliases</li>
                        <li>✓ No concerning online behavior</li>
                        <li>✓ No activity in areas where criminals operate</li>
                        <li>✓ No undisclosed legal or financial problems</li>
                        <li>✓ References are legitimate</li>
                        <li>✓ Resume is accurate</li>
                      </ul>
                      <p className="font-bold text-red-600 dark:text-red-400">You get peace of mind backed by intelligence-grade due diligence.</p>
                      <p>That peace of mind is worth it when you're trusting someone with your company's money, client relationships, confidential data, your reputation, and your team's safety.</p>
                      <p>Think of it like insurance: You hope you never need it, but you're glad you have it.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">✅ Get peace of mind before your next hire → Start your investigation</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'How much does it cost?',
                  a: (
                    <div className="space-y-4">
                      <p>Pricing depends on the depth of investigation needed:</p>
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold">Basic Verification:</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Resume accuracy check, reference verification, basic online behavior scan</li>
                            <li>Good for: Lower-risk roles, vendors, contractors</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold">Standard Investigation:</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Everything in Basic, plus identity detection, hidden internet search, financial/legal analysis</li>
                            <li>Good for: Managers, finance roles, anyone with system access</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold">Comprehensive Intelligence Investigation:</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Everything in Standard, plus deep behavioral analysis, international search, intelligence analyst review</li>
                            <li>Good for: Executives, partners, high-risk roles</li>
                          </ul>
                        </div>
                      </div>
                      <p className="font-bold text-red-600 dark:text-red-400">Remember:</p>
                      <p>One bad $50K hire costs $200K–$4M in losses. Our most comprehensive investigation is less than 2% of that cost.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">💰 Get a custom quote for your situation → Schedule a free consultation</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'Is this legal? What about privacy?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-bold">Yes, completely legal—and we follow strict compliance protocols.</p>
                      <p className="font-bold text-red-600 dark:text-red-400">What we do is legal because:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>We only access publicly available information and commercial databases</li>
                        <li>We don't hack, breach, or access private accounts</li>
                        <li>We comply with Fair Credit Reporting Act (FCRA) guidelines</li>
                        <li>We operate under investigative journalism and due diligence laws</li>
                        <li>Candidates consent to background checks when they apply (standard practice)</li>
                      </ul>
                      <p className="font-bold">What's public vs. private:</p>
                      <p>✅ We CAN access: Social media posts, forum comments, court records, business filings, arrest records, online behavior, professional profiles</p>
                      <p>❌ We CANNOT access: Private messages, medical records, sealed court records, banking details (without consent), email inboxes</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">⚖️ Want to review our legal compliance documentation? → Request our compliance whitepaper</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'What red flags should I look for that mean I need an investigation?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-bold">Trust your gut—but here are specific warning signs:</p>
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-red-600 dark:text-red-400">Resume Red Flags:</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Unexplained employment gaps (more than 6 months)</li>
                            <li>Job titles that don't match company size</li>
                            <li>Vague job descriptions</li>
                            <li>Can't provide contact info for previous supervisors</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-red-600 dark:text-red-400">Interview Red Flags:</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Stories don't add up or change between interviews</li>
                            <li>Overly defensive about past jobs</li>
                            <li>Blames previous employers excessively</li>
                            <li>Too eager to start (pushing to skip standard processes)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-red-600 dark:text-red-400">Gut Feeling Red Flags:</p>
                          <ul className="list-disc list-inside ml-4">
                            <li>Something just feels "off"</li>
                            <li>Too good to be true</li>
                            <li>Pressure to hire quickly</li>
                            <li>Inconsistent details</li>
                          </ul>
                        </div>
                      </div>
                      <p className="font-bold">The rule: If you have 2+ red flags, investigate before hiring.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">🚨 Found red flags in your candidate? → Get an immediate risk assessment</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'Do you offer any guarantees?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-bold text-red-600 dark:text-red-400">Yes. Our "Find It or Free" Guarantee.</p>
                      <p>If our first investigation doesn't uncover at least three significant findings (beyond what a standard background check would show), you don't pay.</p>
                      <p className="font-bold">Qualifying findings include:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Hidden identities or aliases</li>
                        <li>Concerning online behavior patterns</li>
                        <li>Undisclosed legal or financial issues</li>
                        <li>Resume inaccuracies or credential fraud</li>
                        <li>Fake references</li>
                        <li>Activity in areas where criminals operate</li>
                        <li>Red flag behavioral patterns</li>
                      </ul>
                      <p className="font-bold">Why we offer this:</p>
                      <p>Because in 15 years and 2,000+ investigations, we've found disqualifying information 73% of the time.</p>
                      <p>Most candidates have something worth knowing—even if it's not disqualifying. Our job is to find it.</p>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">🛡️ Start risk-free → Schedule your guaranteed investigation</a>
                        </Button>
                      </div>
                    </div>
                  )
                }
              ].map((faq, idx) => (
                <Card 
                  key={idx} 
                  className="border-red-200 dark:border-red-800 cursor-pointer hover:border-red-400 dark:hover:border-red-600 transition-all"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{faq.q}</h3>
                      <div className="text-red-500 text-2xl flex-shrink-0">
                        {openFaq === idx ? '−' : '+'}
                      </div>
                    </div>
                    {openFaq === idx && (
                      <div className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-500 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Don't Let a Bad Hire Destroy Everything You've Built
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get intelligence-grade investigation before you make an offer—because what you don't know will hurt you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-white text-red-500 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <a href="/consultation">Schedule Free Consultation</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                <a href="/">Learn About Our Other Services</a>
              </Button>
            </div>
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
      <BackgroundChecksExitIntent />
    </div>
  )
}