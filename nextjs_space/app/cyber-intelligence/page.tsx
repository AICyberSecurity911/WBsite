'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useState, useEffect } from 'react'
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  Server, 
  Fingerprint, 
  ShieldCheck, 
  FileSearch,
  Users,
  DollarSign,
  Building2,
  CreditCard,
  Database,
  Mail,
  CheckCircle2,
  TrendingUp,
  Target,
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2,
  X
} from 'lucide-react'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import Link from 'next/link'

export default function CyberIntelligencePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [breachEmail, setBreachEmail] = useState('')
  const [breachResult, setBreachResult] = useState<any>(null)
  const [breachLoading, setBreachLoading] = useState(false)
  const [breachError, setBreachError] = useState('')
  const [checksRemaining, setChecksRemaining] = useState(4)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [exitIntentEmail, setExitIntentEmail] = useState('')
  const [exitIntentSubmitted, setExitIntentSubmitted] = useState(false)

  const testimonials = [
    {
      name: 'Harper Kingsley',
      title: 'VP, Adroit Infosystems',
      quote: 'We thought we were fine. QuantumLeap found vulnerabilities in our client dashboard that could have exposed private data.',
      result: 'Avoided a $250K breach and months of damage control.'
    },
    {
      name: 'Lydia V. Penrose',
      title: 'Co-Founder, Code Vibe Studio',
      quote: 'They discovered old admin credentials still active—publicly visible on a repo.',
      result: 'Prevented a silent leak and protected client trust.'
    },
    {
      name: 'Tiffany Duncan',
      title: 'Director, Talent Leap AI',
      quote: 'Routine IT scans said "all clear." QuantumLeap\'s analysts found a vendor breach tied to our CRM.',
      result: 'Fixed in 48 hours and kept our clients secure.'
    }
  ]

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
      const response = await fetch(`https://api.xposedornot.com/v1/check-email/${encodeURIComponent(breachEmail)}`)
      
      if (response.status === 404) {
        setBreachResult({ exposed: false })
      } else if (response.ok) {
        const data = await response.json()
        setBreachResult({ exposed: true, data })
      } else {
        throw new Error('Failed to check email')
      }
      
      setChecksRemaining(prev => prev - 1)
    } catch (error) {
      setBreachError('Unable to check email. Please try again.')
    } finally {
      setBreachLoading(false)
    }
  }

  const handleExitIntentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Submit to API
    try {
      await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: exitIntentEmail, source: 'cyber-intelligence-exit-intent' })
      })
      setExitIntentSubmitted(true)
    } catch (error) {
      console.error('Failed to submit:', error)
    }
  }

  // Exit-intent detection
  useEffect(() => {
    let hasShown = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !exitIntentSubmitted) {
        setShowExitIntent(true)
        hasShown = true
      }
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercentage >= 80 && !hasShown && !exitIntentSubmitted) {
        setShowExitIntent(true)
        hasShown = true
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [exitIntentSubmitted])

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://cdn.abacus.ai/images/3cf00997-5373-4003-91de-cf75fe3d2b51.png"
              alt="Cyber threat landscape showing attack vectors"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-700 dark:text-red-300" />
                <span className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                  Critical Risk Alert
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                One Exposed Password<br />
                <span className="text-red-500">Can End Your Business</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                Hackers don't wait—they hold companies hostage, deface sites, and demand ransoms. 
                If you don't test for real risks today, it's not a question of <em>if</em> you'll be hit—it's <em>when</em>. 
                Are you ready?
              </p>

              {/* Trust Bar */}
              <div className="mb-12 max-w-4xl mx-auto">
                <p className="text-sm text-muted-foreground mb-4">
                  Built by engineers with <strong>Fortune 500, MIT & Caltech</strong> experience • <strong>250+ years</strong> combined expertise • Human-led ethical hacking customized for your business
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/consultation" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition shadow-lg shadow-red-500/20"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Audit My Business Now →
                </a>
                <a 
                  href="#breach-checker" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-red-500 text-red-500 hover:bg-red-500/10 rounded-lg transition"
                >
                  Check If My Email Was Breached →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Small Businesses Are <span className="text-red-500">Easy Targets</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed">
                You don't get hacked because you're big. You get hacked because you're <strong>unguarded</strong>.
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Reused or leaked passwords open the door</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Outdated plugins and forgotten admin accounts become attack paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Attackers deface sites with derogatory content and ransom your data (demands often <strong>$80,000+</strong>)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Once inside, they encrypt files, hijack email, and silence you until you pay</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl">
                <p className="text-xl font-semibold text-center">
                  <strong>Bottom line:</strong> If you don't actively test your defenses, criminals will test them for you.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/consultation" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition shadow-lg shadow-red-500/20"
              >
                Run My Security Audit →
              </a>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                We Think Like an <span className="text-blue-500">Attacker</span>—So You Don't Have To
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We don't use plug-and-play checklists. Every audit is custom-built to map how criminals would breach <em>your</em> specific tech stack, team behaviors, and vendor connections.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="max-w-5xl mx-auto mb-16 overflow-x-auto">
              <div className="bg-card border border-muted-foreground/20 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Threat Layer</th>
                      <th className="px-6 py-4 text-left font-semibold">"IT Checklist"</th>
                      <th className="px-6 py-4 text-left font-semibold bg-blue-500/10">QuantumLeap Custom Audit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted-foreground/20">
                    <tr>
                      <td className="px-6 py-4 font-medium">Password Safety</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Flags weak passwords</td>
                      <td className="px-6 py-4 text-sm bg-blue-500/5"><strong>Confirms breach exposure</strong> & reuse risk across dark web</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Vulnerabilities</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Static scan</td>
                      <td className="px-6 py-4 text-sm bg-blue-500/5"><strong>Full penetration simulation</strong> (safe & controlled) tailored to your environment</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Dark Web</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Ignored</td>
                      <td className="px-6 py-4 text-sm bg-blue-500/5"><strong>Exposure & credential intelligence</strong> (XON + analyst validation)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Human Error</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Not tested</td>
                      <td className="px-6 py-4 text-sm bg-blue-500/5"><strong>Phishing & social engineering</strong> simulations specific to your team</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Remediation</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Generic PDF</td>
                      <td className="px-6 py-4 text-sm bg-blue-500/5"><strong>Action roadmap</strong> prioritized for your stack & team capacity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* What's Included */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'External & internal penetration testing (customized to your systems)',
                  'Dark-web exposure & credential intelligence (XposedOrNot + human analyst validation)',
                  'Cloud & email configuration audits (unique to your infrastructure)',
                  'Controlled phishing & human-engineering tests (designed for your team)',
                  'Vendor & API access risk assessment (based on your actual integrations)',
                  'Prioritized remediation plan (30/60/90-day actions tailored to your resources)'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card border border-blue-500/20 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/consultation" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition shadow-lg shadow-blue-500/20"
              >
                See My Full Risk Map →
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Real Protection, <span className="text-blue-500">Real Results</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="bg-card border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <p className="font-semibold text-lg">
                      <strong>Result:</strong> {testimonials[currentTestimonial].result}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentTestimonial].title}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="p-2 rounded-lg border border-blue-500/20 hover:bg-blue-500/10 transition"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                      className="p-2 rounded-lg border border-blue-500/20 hover:bg-blue-500/10 transition"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentTestimonial ? 'bg-blue-500 w-8' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Email Breach Checker Tool */}
        <section id="breach-checker" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Check If Your Email Has Been <span className="text-red-500">Exposed</span> in a Data Breach
              </h2>
              <p className="text-lg text-muted-foreground">
                We securely query XposedOrNot's breach database. Instant results. No storage.
              </p>
            </div>

            <div className="bg-card border-2 border-blue-500/30 rounded-2xl p-8">
              <form onSubmit={handleBreachCheck} className="mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    value={breachEmail}
                    onChange={(e) => setBreachEmail(e.target.value)}
                    placeholder="Enter any email address..."
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={breachLoading || checksRemaining <= 0}
                    className="px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-muted disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                  >
                    {breachLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Checking...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Check Now
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-2">
                  Checks remaining: {checksRemaining}/4
                </p>
              </form>

              {breachError && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg mb-6">
                  <p className="text-red-500">{breachError}</p>
                </div>
              )}

              {breachResult && (
                <div className={`p-6 rounded-lg border-2 ${
                  breachResult.exposed 
                    ? 'bg-red-500/10 border-red-500/30' 
                    : 'bg-green-500/10 border-green-500/30'
                }`}>
                  {breachResult.exposed ? (
                    <div>
                      <h3 className="text-xl font-bold text-red-500 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6" />
                        ⚠️ Email Found in Data Breaches
                      </h3>
                      <p className="mb-4">
                        This email was exposed in {breachResult.data?.breaches_details?.length || 'multiple'} known data breaches.
                      </p>
                      {breachResult.data?.breaches_details && (
                        <div className="space-y-2 mb-4">
                          {breachResult.data.breaches_details.slice(0, 3).map((breach: any, index: number) => (
                            <div key={index} className="text-sm p-2 bg-background/50 rounded">
                              <strong>{breach.breach}</strong> - {breach.domain}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-6 pt-6 border-t border-red-500/30">
                        <p className="font-semibold mb-4">Found a breach? Get a full security audit →</p>
                        <a 
                          href="/consultation"
                          className="inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
                        >
                          Schedule My Security Audit
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold text-green-500 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6" />
                        ✓ No Breaches Found
                      </h3>
                      <p className="mb-4">
                        This email wasn't found in our breach database. But that doesn't mean you're fully secure.
                      </p>
                      <div className="mt-6 pt-6 border-t border-green-500/30">
                        <p className="font-semibold mb-4">Want to check your full security posture?</p>
                        <a 
                          href="/consultation"
                          className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                        >
                          Get a Comprehensive Audit
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 text-sm text-muted-foreground text-center">
                <Lock className="w-4 h-4 inline mr-1" />
                Privacy protected • No storage without consent • Rate-limit friendly
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-blue-500">'Find 3 or It's Free'</span> Guarantee
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              If our first audit doesn't uncover at least <strong>three</strong> critical vulnerabilities or exposure points, you don't pay.
            </p>
            <p className="text-lg mb-8">
              We've never had to honor this guarantee—because every business has blind spots criminals are already mapping.
            </p>
            <p className="text-xl font-semibold mb-8">
              Because confidence shouldn't be a risk.
            </p>
            <a 
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition shadow-lg shadow-blue-500/20"
            >
              Start Risk-Free →
            </a>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Trusted by Organizations That Value Security
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our team has served in strategic roles within these organizations. We bring enterprise-grade rigor to small businesses—customized, not templated.
              </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {[
                { name: 'IBM', src: '/company-logos/ibm.png' },
                { name: 'Deloitte', src: '/company-logos/deloitte.png' },
                { name: 'BMO', src: '/company-logos/bmo.png' },
                { name: 'CIBC', src: '/company-logos/cibc.png' },
                { name: 'GE', src: '/company-logos/ge.png' },
                { name: 'Scotiabank', src: '/company-logos/scotiabank.png' },
                { name: 'NASA', src: '/company-logos/nasa.png' },
                { name: 'Allianz', src: '/company-logos/allianz.png' },
                { name: 'HSBC', src: '/company-logos/hsbc.png' },
                { name: 'Husky', src: '/company-logos/husky.png' },
                { name: 'RIM', src: '/company-logos/rim.png' },
                { name: 'ING', src: '/company-logos/ing.png' },
                { name: 'CIIS', src: '/company-logos/ciis.png' },
                { name: 'UCOL', src: '/company-logos/ucol.png' }
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="relative w-20 h-20">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with CTAs */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What Our Clients Ask <span className="text-blue-500">Before Starting</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Why would hackers target my small business?',
                  answer: (
                    <div className="space-y-4">
                      <p>Because you're easier to breach and more likely to pay quickly. Criminals automate scans and go after weak doors. One leaked password can cascade into total system access.</p>
                      <p className="font-semibold">Your size isn't protection—it's the reason you're targeted.</p>
                      <a 
                        href="#breach-checker"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition mt-4"
                      >
                        <Lock className="w-4 h-4" />
                        Find Out How Exposed You Are →
                      </a>
                    </div>
                  )
                },
                {
                  question: 'Will a penetration test disrupt our systems?',
                  answer: (
                    <div className="space-y-4">
                      <p>No—our tests are safe, controlled, and non-destructive. We simulate attacks in isolated environments and coordinate every step with your team.</p>
                      <p className="font-semibold">You'll see exactly what criminals see, without the damage.</p>
                      <a 
                        href="/consultation"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition mt-4"
                      >
                        <Shield className="w-4 h-4" />
                        Book a Non-Disruptive Audit →
                      </a>
                    </div>
                  )
                },
                {
                  question: 'How is this different from our IT company\'s security scan?',
                  answer: (
                    <div className="space-y-4">
                      <p>Most IT scans check for outdated software and open ports. We simulate full attack chains: how a criminal would chain small vulnerabilities into complete system access, test your team's response to phishing, and analyze dark-web credential exposure.</p>
                      <p className="font-semibold">We don't just scan—we think like the attacker who's planning your breach right now.</p>
                      <a 
                        href="#solution"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition mt-4"
                      >
                        <FileSearch className="w-4 h-4" />
                        Compare: Scan vs. Custom Pen Test →
                      </a>
                    </div>
                  )
                },
                {
                  question: 'How soon will I get results?',
                  answer: (
                    <div className="space-y-4">
                      <p>Preliminary findings within 72 hours. Full report with prioritized remediation plan in 7–10 days.</p>
                      <p className="font-semibold">Every report is custom-built—no templates, no generic PDFs.</p>
                      <a 
                        href="/consultation"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition mt-4"
                      >
                        <FileSearch className="w-4 h-4" />
                        Request a Sample Report →
                      </a>
                    </div>
                  )
                },
                {
                  question: 'Is this affordable for a small business?',
                  answer: (
                    <div className="space-y-4">
                      <p>Our audits cost a fraction of a typical ransom or recovery. One prevented breach pays for years of proactive security.</p>
                      <p className="font-semibold">Think of it as insurance—except we also fix the vulnerabilities before they're exploited.</p>
                      <a 
                        href="/consultation"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition mt-4"
                      >
                        <DollarSign className="w-4 h-4" />
                        See Custom Pricing for Your Business →
                      </a>
                    </div>
                  )
                },
                {
                  question: 'What if you don\'t find anything?',
                  answer: (
                    <div className="space-y-4">
                      <p>If our first audit doesn't uncover at least <strong>three</strong> critical vulnerabilities or exposure points, you don't pay.</p>
                      <p className="font-semibold">We've never had to honor this guarantee—because every business has blind spots.</p>
                      <a 
                        href="/consultation"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition mt-4"
                      >
                        <Target className="w-4 h-4" />
                        Start Your Risk-Free Assessment →
                      </a>
                    </div>
                  )
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-muted-foreground/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-red-500/10 via-blue-500/10 to-red-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Don't Wait for the Ransom Note
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every day without proper security is a day criminals are mapping your vulnerabilities. 
              Check an email. See the truth. Then secure what you've built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#breach-checker"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition shadow-lg shadow-red-500/20"
              >
                <Lock className="w-5 h-5 mr-2" />
                Check Any Email for Breaches →
              </a>
              <a 
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition"
              >
                <Shield className="w-5 h-5 mr-2" />
                Schedule My Security Audit →
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free breach check • Risk-free guarantee • Same-day response
            </p>
          </div>
        </section>

        {/* Exit-Intent Popup */}
        {showExitIntent && !exitIntentSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative bg-card border-2 border-blue-500 rounded-2xl p-8 max-w-lg mx-4 animate-in zoom-in duration-300">
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-3xl font-bold mb-4">
                Before You Go—Get Our <span className="text-blue-500">Free Guide</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                <em>"The 5 Invisible Red Flags Standard IT Checks Never Catch"</em>
              </p>

              {exitIntentSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Check Your Inbox!</h4>
                  <p className="text-muted-foreground">
                    We've sent the guide to your email. It should arrive within 5 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleExitIntentSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={exitIntentEmail}
                    onChange={(e) => setExitIntentEmail(e.target.value)}
                    placeholder="Your email address..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                  >
                    Send It to My Inbox →
                  </button>
                  <p className="text-sm text-muted-foreground text-center">
                    <Lock className="w-3 h-3 inline mr-1" />
                    No spam. Unsubscribe anytime. Your email is never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
