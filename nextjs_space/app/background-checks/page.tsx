'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, AlertTriangle, Search, FileCheck, Users, TrendingUp, CheckCircle2, XCircle, Eye, UserX, Lock, DollarSign } from 'lucide-react'
import { useState } from 'react'
import { BackgroundChecksExitIntent } from '@/components/background-checks-exit-intent'
import { HiringRiskCalculator } from '@/components/calculator/hiring-risk-calculator'

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
      },
      {
        "@type": "Question",
        "name": "Can you investigate current employees, not just candidates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many clients use us to investigate current employees showing concerning behavior, partners or investors before signing agreements, vendors or contractors with access to systems, romantic partners (personal investigations), and board members before appointments. If someone will have access to your money, data, or reputation—you should know who they really are."
        }
      },
      {
        "@type": "Question",
        "name": "What kinds of businesses use this service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any business where trust matters: small businesses hiring first employees, finance and accounting firms handling client money, real estate brokerages where reputation is everything, construction companies, medical practices, law firms, tech startups protecting IP, and family businesses with generational legacy at stake. Personal clients include parents vetting romantic partners for their children, high-net-worth individuals protecting family wealth, and executives protecting personal reputation. If one wrong person can destroy what you've built, you're our ideal client."
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

        {/* Hiring Risk Calculator Section */}
        <section id="risk-calculator" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                  Interactive Tool
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                How Much is a Bad Hire<br />
                <span className="text-red-500">Costing Your Business?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                One bad hire can cost $200K-$4M in losses. Calculate your actual risk and see how intelligence-grade investigations protect your business.
              </p>
            </div>

            <HiringRiskCalculator />
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

        {/* Testimonials Carousel Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Real Stories from <span className="text-red-500">People We Protected</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                These aren't hypothetical scenarios—these are real investigations that prevented disaster
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Testimonial 1: Fortune 500 CEO */}
              <Card className="border-red-200 dark:border-red-800 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        F
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Fortune 500 CEO</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">(Name withheld for privacy)</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="italic text-lg">
                      "He seemed perfect for our daughter—polished, respectful, successful. We ran a standard background check; it came back clean."
                    </p>
                    <p>
                      Still, something felt off.
                    </p>
                    <p>
                      QuantumLeap dug deeper and <strong className="text-red-600 dark:text-red-400">uncovered a stolen identity linked to an international criminal network</strong>. He wasn't who he claimed to be. He had come for money, not for our daughter.
                    </p>
                    <p className="text-xl font-bold text-red-600 dark:text-red-400">
                      QuantumLeap didn't just protect our assets—they protected our family.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2: Code Vibe Studio */}
              <Card className="border-red-200 dark:border-red-800 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        LP
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Lydia V. Penrose</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Co-Founder, Code Vibe Studio</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="italic text-lg">
                      "We hired a CTO who looked like a dream candidate on paper. Within months, he nearly destroyed two client projects through incompetence and hostile behavior."
                    </p>
                    <p>
                      QuantumLeap's investigation found he'd been <strong className="text-red-600 dark:text-red-400">fired from three previous companies (under a different name)</strong> and his online presence showed a pattern of hate-filled posts and links to extremist groups.
                    </p>
                    <p>
                      None of this appeared on any standard check because he'd never been arrested. He just kept getting hired—and fired—under different identities.
                    </p>
                    <p className="text-xl font-bold text-red-600 dark:text-red-400">
                      Result: Avoided $250K in losses, saved our reputation, and prevented a toxic culture disaster.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3: Real Estate Vision */}
              <Card className="border-red-200 dark:border-red-800 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        GS
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Gurpreet Sandhu</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Broker, Real Estate Vision</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="italic text-lg">
                      "In real estate, trust is everything. I was about to sign a partnership agreement when something told me to dig deeper."
                    </p>
                    <p>
                      QuantumLeap flagged <strong className="text-red-600 dark:text-red-400">hidden legal issues abroad, fake shell companies, and financial patterns showing distress</strong>. He was planning to use my license to run schemes.
                    </p>
                    <p>
                      Standard check said "clear." QuantumLeap said "run."
                    </p>
                    <p className="text-xl font-bold text-red-600 dark:text-red-400">
                      Result: Saved $250K and 100 hours of legal hell. Worth every penny.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 4: Sarah Martinez - The Hacker Story */}
              <Card className="border-red-200 dark:border-red-800 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        SM
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Sarah Martinez</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Operations Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="italic text-lg">
                      "I hired someone who passed every standard check. Three months later, he <strong className="text-red-600 dark:text-red-400">locked down our entire network and demanded $4 million in cryptocurrency</strong> to release the data he'd encrypted himself."
                    </p>
                    <p>
                      The FBI called it "an inside job." He was a former ethical hacker who'd turned rogue—and he passed every standard background check in the book.
                    </p>
                    <p className="text-xl font-bold text-red-600 dark:text-red-400">
                      If I'd known about QuantumLeap before, I would've discovered his alias activity in underground hacking forums. That investigation would've cost $5K. My mistake cost $4 million.
                    </p>
                    <p className="font-bold">
                      The lesson? The cost of knowing is small. The cost of guessing is everything.
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
                <a href="/consultation">🛡️ I Can't Afford This Kind of Mistake → Run My Risk Assessment Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Strategic Blog Section - The Complete Hacker Story */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                  📖 Real Investigation Case Study
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The Hacker Who Passed Every Background Check—<br />
                <span className="text-red-500">And Held a Company Hostage for $4 Million</span>
              </h2>
            </div>

            <Card className="border-red-200 dark:border-red-800">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {/* The Hook */}
                  <div className="space-y-4 mb-8">
                    <p className="text-xl leading-relaxed">
                      Sarah Martinez thought she'd finally made it.
                    </p>
                    <p className="text-xl leading-relaxed">
                      After five years running her consulting business alone, she was ready to hire an operations manager. She found the perfect candidate—smart, charismatic, experienced. His background check came back clean: no criminal record, good credit, verified education.
                    </p>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400 leading-relaxed">
                      Three months after hiring him, he locked down the entire company network and demanded $4 million in cryptocurrency to release the data he'd encrypted himself.
                    </p>
                    <p className="text-xl leading-relaxed">
                      The FBI called it "an inside job." He was a former ethical hacker who'd turned rogue—and he passed every standard background check in the book.
                    </p>
                  </div>

                  {/* The Cost Breakdown */}
                  <div className="my-8 bg-red-50 dark:bg-red-950/30 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Real Numbers</h3>
                    <p className="mb-4">When Sarah added up the real numbers, this "clean hire" had cost:</p>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between border-b border-red-200 dark:border-red-800 pb-2">
                        <span>Direct Ransom Payment:</span>
                        <span className="font-bold">$0 (she refused to pay)</span>
                      </div>
                      <div className="flex justify-between border-b border-red-200 dark:border-red-800 pb-2">
                        <span>FBI Investigation Costs:</span>
                        <span className="font-bold">$47,000</span>
                      </div>
                      <div className="flex justify-between border-b border-red-200 dark:border-red-800 pb-2">
                        <span>Cybersecurity Remediation:</span>
                        <span className="font-bold">$83,000</span>
                      </div>
                      <div className="flex justify-between border-b border-red-200 dark:border-red-800 pb-2">
                        <span>Lost Business (3 months down):</span>
                        <span className="font-bold">$312,000</span>
                      </div>
                      <div className="flex justify-between border-b border-red-200 dark:border-red-800 pb-2">
                        <span>Legal Fees:</span>
                        <span className="font-bold">$76,000</span>
                      </div>
                      <div className="flex justify-between border-b border-red-200 dark:border-red-800 pb-2">
                        <span>Reputation Recovery:</span>
                        <span className="font-bold">$220,000</span>
                      </div>
                      <div className="flex justify-between border-b border-red-200 dark:border-red-800 pb-2">
                        <span>Staff Turnover (fear-based):</span>
                        <span className="font-bold">$108,000</span>
                      </div>
                      <div className="flex justify-between pt-2 text-2xl">
                        <span className="font-bold text-red-600 dark:text-red-400">Total:</span>
                        <span className="font-bold text-red-600 dark:text-red-400">$846,000</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
                      And that doesn't count the emotional toll—sleepless nights, client relationships destroyed, years of trust-building erased.
                    </p>
                  </div>

                  {/* What Went Wrong */}
                  <div className="my-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Went Wrong: The Gap Standard Checks Leave</h3>
                    
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6 mb-6">
                      <p className="font-bold text-green-700 dark:text-green-400 mb-3">Here's what standard background checks actually do:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">✓</span>
                          <span>Search criminal databases (only people who were arrested and charged)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">✓</span>
                          <span>Pull credit reports (only financial problems reported to bureaus)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">✓</span>
                          <span>Verify education (if the school responds)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400">✓</span>
                          <span>Check references (if they're real—often they're not)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-6 mb-6">
                      <p className="font-bold text-red-700 dark:text-red-400 mb-3">Here's what they DON'T do:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>Look for behavior patterns online</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>Search for multiple identities or fake names</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>Check areas of the internet where criminals operate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>Analyze communication style for red flags</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>Verify if "references" are actually friends posing as managers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>Find lawsuits that were settled (not public)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✗</span>
                          <span>Detect financial distress that doesn't show on credit reports</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Sarah's hire had no criminal record because he'd never been caught.
                    </p>
                    <p className="text-lg mb-4">
                      But if someone had looked in the right places, they would have found:
                    </p>
                    <ul className="space-y-2 text-lg list-disc list-inside ml-4">
                      <li>An alias username in underground hacking forums</li>
                      <li>Posts bragging about "getting revenge" on former employers</li>
                      <li>Patterns of accessing systems he shouldn't have touched</li>
                      <li>Conversations about exploiting company weaknesses</li>
                    </ul>
                    <p className="text-lg mt-4 font-bold text-red-600 dark:text-red-400">
                      All of this was visible—just not in the databases that standard checks search.
                    </p>
                  </div>

                  {/* The Investigation That Could Have Prevented This */}
                  <div className="my-8 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      The Investigation That Could Have Prevented This
                    </h3>
                    <p className="text-lg mb-6">
                      QuantumLeap's investigation would have taken 5–7 days and cost about $5,000.
                    </p>
                    <p className="font-bold mb-4">Here's what we would have found:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-blue-600 dark:text-blue-400">Day 1–2: Online Behavior Analysis</p>
                        <p>We would have analyzed his social media, forum posts, and online communications. His writing patterns showed aggression, vindictiveness, and detailed knowledge of hacking techniques—red flags hiding in plain sight.</p>
                      </div>
                      
                      <div>
                        <p className="font-bold text-blue-600 dark:text-blue-400">Day 3–4: Identity & Alias Detection</p>
                        <p>We would have discovered his hacker alias (different from his legal name) actively posting in underground forums about "teaching companies lessons."</p>
                      </div>
                      
                      <div>
                        <p className="font-bold text-blue-600 dark:text-blue-400">Day 5: Hidden Internet Search</p>
                        <p>We would have searched areas of the internet where criminals operate (the 96% that Google doesn't index). His alias appeared in conversations about ransomware tactics.</p>
                      </div>
                      
                      <div>
                        <p className="font-bold text-blue-600 dark:text-blue-400">Day 6–7: Intelligence Analyst Review</p>
                        <p>A former intelligence analyst would have reviewed all findings and flagged him as high-risk with behavioral indicators of revenge motivation.</p>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cost</p>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">$5,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">7 days</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Result</p>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400">Do Not Hire</p>
                      </div>
                    </div>

                    <p className="mt-6 text-xl font-bold text-center">
                      Instead, Sarah learned this lesson the $846,000 way.
                    </p>
                  </div>

                  {/* Why This Keeps Happening */}
                  <div className="my-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Why This Keeps Happening
                    </h3>
                    <p className="text-lg mb-4">
                      Most business owners don't know there's a difference between:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <p className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Database Checks</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">(what most people buy)</p>
                        <p className="mb-4">Searches only public criminal records and credit reports.</p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Takes:</strong> 10 minutes</p>
                          <p><strong>Costs:</strong> $50–200</p>
                          <p><strong>Tells you:</strong> If someone got caught</p>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-6 border-2 border-red-500">
                        <p className="font-bold text-xl mb-3 text-red-600 dark:text-red-400">Intelligence Investigations</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">(what we do)</p>
                        <p className="mb-4">Analyzes behavior, finds hidden identities, searches areas criminals use, reviewed by human experts.</p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Takes:</strong> Days</p>
                          <p><strong>Costs:</strong> Thousands</p>
                          <p><strong>Tells you:</strong> If someone is dangerous</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xl font-bold text-center my-6 text-gray-900 dark:text-white">
                      The problem? Most people think a "clean background check" means someone is safe.
                    </p>
                    <p className="text-xl text-center mb-6">
                      It doesn't. <span className="font-bold text-red-600 dark:text-red-400">It just means they haven't been arrested yet.</span>
                    </p>
                    <p className="text-lg text-center">
                      And by the time you discover the truth, the damage is done.
                    </p>
                  </div>

                  {/* The Bottom Line */}
                  <div className="my-8 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Bottom Line</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Standard background check:</p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">$50–200</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Intelligence investigation:</p>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$3,000–7,500</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Cost of one bad hire:</p>
                        <p className="text-3xl font-bold text-red-600 dark:text-red-400">$200K–$4M+</p>
                      </div>
                    </div>

                    <p className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      The question isn't "Can I afford an investigation?"
                    </p>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                      The question is "Can I afford not to?"
                    </p>
                  </div>

                  <div className="text-center mt-8">
                    <Button 
                      asChild
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
                    >
                      <a href="/consultation">🔍 See What Standard Checks Are Missing → Run Free Risk Assessment</a>
                    </Button>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      or <a href="/consultation" className="text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-300">Schedule Confidential Investigation Briefing → Speak with Intelligence Analyst</a>
                    </p>
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
                },
                {
                  q: 'Can you investigate current employees, not just candidates?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-bold">Yes. Many clients use us to investigate:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Current employees</strong> showing concerning behavior</li>
                        <li><strong>Partners or investors</strong> before signing agreements</li>
                        <li><strong>Vendors or contractors</strong> with access to systems</li>
                        <li><strong>Romantic partners</strong> (personal investigations—very common)</li>
                        <li><strong>Board members</strong> before appointments</li>
                      </ul>
                      <p className="mt-4 font-bold text-red-600 dark:text-red-400">
                        If someone will have access to your money, data, or reputation—you should know who they really are.
                      </p>
                      <p className="font-bold mt-4">Common scenarios:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4 italic">
                        <li>"My bookkeeper's behavior has changed—something feels off"</li>
                        <li>"I'm about to give this partner access to our accounts"</li>
                        <li>"My daughter is dating someone who seems too good to be true"</li>
                        <li>"I'm promoting someone to CFO—want to verify they're trustworthy"</li>
                      </ul>
                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">🕵️ Need to investigate someone already in your life? → Schedule a confidential consultation</a>
                        </Button>
                      </div>
                    </div>
                  )
                },
                {
                  q: 'What kinds of businesses use this service?',
                  a: (
                    <div className="space-y-4">
                      <p className="font-bold">Any business where trust matters:</p>
                      
                      <div className="my-4">
                        <p className="font-bold text-red-600 dark:text-red-400">Most common clients:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li><strong>Small businesses</strong> hiring first employees (can't afford mistakes)</li>
                          <li><strong>Finance and accounting firms</strong> (handling client money)</li>
                          <li><strong>Real estate brokerages</strong> (reputation is everything)</li>
                          <li><strong>Construction companies</strong> (site access and equipment)</li>
                          <li><strong>Medical practices</strong> (patient safety and HIPAA)</li>
                          <li><strong>Law firms</strong> (client confidentiality)</li>
                          <li><strong>Tech startups</strong> (protecting IP and code)</li>
                          <li><strong>Family businesses</strong> (generational legacy at stake)</li>
                        </ul>
                      </div>

                      <div className="my-4">
                        <p className="font-bold text-red-600 dark:text-red-400">Personal clients:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Parents vetting romantic partners for their children</li>
                          <li>High-net-worth individuals protecting family wealth</li>
                          <li>Executives protecting personal reputation</li>
                        </ul>
                      </div>

                      <p className="text-xl font-bold text-center my-4">
                        If one wrong person can destroy what you've built, you're our ideal client.
                      </p>

                      <div className="mt-4 text-center">
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                          <a href="/consultation">📋 See how others in your industry use this service → Read case studies</a>
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