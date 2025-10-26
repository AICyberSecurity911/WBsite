'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useState } from 'react'
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
  Search
} from 'lucide-react'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

export default function CyberIntelligencePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
              alt="Cybersecurity Shield Background"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6 animate-pulse">
                <Shield className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                  NASA-Recognized Expertise
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Fort Knox Security<br />
                <span className="text-blue-500">For Main Street Business</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                60% of small businesses close within 6 months of a cyberattack. Our team has been recognized 
                by NASA for uncovering critical vulnerabilities. Now we protect businesses like yours with 
                enterprise-grade security at small business prices.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {[
                  { number: '99.7%', label: 'Threat Prevention Rate' },
                  { number: '< 15min', label: 'Average Response Time' },
                  { number: '24/7/365', label: 'Continuous Monitoring' }
                ].map((stat, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
                    <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/consultation" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition shadow-lg shadow-blue-500/20"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Get Security Assessment
                </a>
                <a 
                  href="#pricing" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition"
                >
                  View Security Packages
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Real Cost Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The <span className="text-red-500">Real Cost</span> of a Breach
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                It's not just about stolen data. A single breach can destroy everything you've built.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-red-500/20">
                <Image
                  src="https://cdn.abacus.ai/images/f139c458-258e-4b8a-a0d9-69e33c9fa38d.png"
                  alt="Security Breach Consequences"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: DollarSign, title: 'Financial Impact', desc: 'Average cost: $200,000+ per incident. Most small businesses never recover.' },
                  { icon: Users, title: 'Customer Trust Loss', desc: '65% of breach victims lose customer confidence permanently.' },
                  { icon: Building2, title: 'Operational Shutdown', desc: 'Average downtime: 23 days. Your business stops, costs don\'t.' },
                  { icon: AlertTriangle, title: 'Legal Liability', desc: 'GDPR, CCPA, and other regulations bring massive fines and lawsuits.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-red-500/20">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes You a Target */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What Makes You a <span className="text-orange-500">Target</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hackers specifically target small businesses because they assume you lack protection.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CreditCard,
                  title: 'Payment Data',
                  desc: 'Customer credit cards, payment processor credentials, transaction histories',
                  color: 'blue'
                },
                {
                  icon: Database,
                  title: 'Customer Information',
                  desc: 'Names, addresses, emails, phone numbers - goldmine for identity theft',
                  color: 'orange'
                },
                {
                  icon: Mail,
                  title: 'Email & Credentials',
                  desc: 'Employee emails used as gateways to larger corporate networks',
                  color: 'blue'
                },
                {
                  icon: Server,
                  title: 'Server Resources',
                  desc: 'Your infrastructure hijacked for crypto mining or launching attacks',
                  color: 'orange'
                },
                {
                  icon: FileSearch,
                  title: 'Intellectual Property',
                  desc: 'Business plans, client lists, proprietary processes sold to competitors',
                  color: 'blue'
                },
                {
                  icon: Lock,
                  title: 'Ransomware Leverage',
                  desc: 'Your entire operation locked until you pay - and they often still leak your data',
                  color: 'orange'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    hoveredCard === index 
                      ? `border-${item.color}-500 shadow-lg shadow-${item.color}-500/20 -translate-y-1` 
                      : 'border-muted-foreground/20'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-4`}>
                    <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 360° Security Shield */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our 360° <span className="text-blue-500">Security Shield</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive protection that covers every angle of attack.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-blue-500/20">
                <Image
                  src="https://cdn.abacus.ai/images/822365f4-a460-40c2-acf9-1f0479c5f1da.png"
                  alt="Cyber Threat Landscape"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                {[
                  {
                    phase: 'Layer 1',
                    title: 'Perimeter Defense',
                    icon: Shield,
                    description: 'Advanced firewall configuration, intrusion detection systems, and DDoS protection that stops attacks before they reach your network.'
                  },
                  {
                    phase: 'Layer 2',
                    title: 'Internal Monitoring',
                    icon: Eye,
                    description: 'AI-powered behavioral analysis detects unusual activity inside your network. We catch threats that slip through the perimeter.'
                  },
                  {
                    phase: 'Layer 3',
                    title: 'Endpoint Protection',
                    icon: Lock,
                    description: 'Every device (computers, phones, tablets) protected with enterprise-grade antivirus, encryption, and access controls.'
                  },
                  {
                    phase: 'Layer 4',
                    title: 'Human Factor Training',
                    icon: Users,
                    description: 'Your employees are your biggest vulnerability. We provide ongoing security awareness training and simulated phishing tests.'
                  }
                ].map((layer, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border border-blue-500/20">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <layer.icon className="w-7 h-7 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-500 font-semibold mb-1">{layer.phase}</div>
                      <h3 className="text-xl font-semibold mb-2">{layer.title}</h3>
                      <p className="text-muted-foreground">{layer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What You Receive */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What You <span className="text-orange-500">Receive</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FileSearch, title: 'Complete Security Audit', desc: 'Full assessment of your current vulnerabilities' },
                { icon: ShieldCheck, title: 'Security Infrastructure Setup', desc: 'Enterprise-grade protection deployed across your systems' },
                { icon: Eye, title: '24/7 Threat Monitoring', desc: 'Real-time surveillance with AI-powered threat detection' },
                { icon: AlertTriangle, title: 'Incident Response Plan', desc: 'Step-by-step protocols for when (not if) something happens' },
                { icon: Users, title: 'Employee Security Training', desc: 'Quarterly training sessions and phishing simulations' },
                { icon: TrendingUp, title: 'Monthly Security Reports', desc: 'Detailed analytics on threats blocked and system health' }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-muted-foreground/20 hover:border-blue-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-2xl border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Ongoing Support & Adaptation</h3>
                  <p className="text-muted-foreground mb-4">
                    Cyber threats evolve daily. Unlike one-time security audits that become obsolete in months, 
                    our service continuously adapts to new threats. We update your defenses, patch vulnerabilities, 
                    and ensure you're always protected against the latest attack methods.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Automatic security updates and patches',
                      'Quarterly vulnerability assessments',
                      'Priority support hotline for security incidents',
                      'Free emergency response for critical threats'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Security <span className="text-blue-500">Investment</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Protection that costs less than one day of downtime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Essential Shield',
                  price: '$2,500',
                  period: '/month',
                  description: 'Core protection for small businesses',
                  features: [
                    'Perimeter defense & firewall',
                    'Endpoint protection (up to 10 devices)',
                    'Monthly security reports',
                    'Email & web filtering',
                    'Quarterly security training',
                    'Business hours support'
                  ],
                  highlighted: false,
                  color: 'blue'
                },
                {
                  name: 'Complete Defense',
                  price: '$5,000',
                  period: '/month',
                  description: 'Comprehensive protection with 24/7 monitoring',
                  features: [
                    'Everything in Essential Shield',
                    '24/7 threat monitoring & response',
                    'Unlimited device protection',
                    'Advanced threat detection (AI-powered)',
                    'Incident response plan & drills',
                    'Monthly phishing simulations',
                    'Priority support hotline',
                    'Compliance assistance (GDPR, CCPA)'
                  ],
                  highlighted: true,
                  color: 'orange'
                },
                {
                  name: 'Enterprise Fortress',
                  price: 'Custom',
                  period: 'pricing',
                  description: 'Maximum security for complex operations',
                  features: [
                    'Everything in Complete Defense',
                    'Dedicated security engineer',
                    'Custom security architecture',
                    'Penetration testing (quarterly)',
                    'Zero-trust network implementation',
                    'Security operations center (SOC)',
                    'Incident response team on retainer',
                    'Board-level security reporting'
                  ],
                  highlighted: false,
                  color: 'blue'
                }
              ].map((tier, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-2xl border-2 transition-all ${
                    tier.highlighted 
                      ? 'border-orange-500 shadow-xl shadow-orange-500/20 scale-105' 
                      : 'border-muted-foreground/20 hover:border-blue-500/50'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-5xl font-bold ${tier.highlighted ? 'text-orange-500' : 'text-blue-500'}`}>
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? 'text-orange-500' : 'text-blue-500'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="/consultation"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                      tier.highlighted
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              <p>All plans include: One-time setup fee waived for annual contracts • 30-day money-back guarantee • No long-term commitments</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Frequently Asked <span className="text-blue-500">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Do I really need this if I haven\'t been hacked yet?',
                  answer: 'That\'s what 60% of breached businesses thought before it happened. The average small business faces 43 cyberattacks per year - you just haven\'t noticed them yet. By the time you detect a breach, the damage is often irreversible. Prevention costs a fraction of recovery.'
                },
                {
                  question: 'Why not just use regular antivirus software?',
                  answer: 'Consumer antivirus catches about 25-30% of modern threats. Professional cybercriminals specifically design malware to bypass these basic protections. Our multi-layered approach uses AI-powered threat detection, behavioral analysis, and human expertise - not just signature-based detection that misses zero-day attacks.'
                },
                {
                  question: 'What happens during a security incident?',
                  answer: 'Within 15 minutes of threat detection, our team initiates our incident response protocol: isolating affected systems, containing the threat, forensic analysis to understand the attack vector, and systematic remediation. You receive real-time updates and a detailed post-incident report with prevention measures.'
                },
                {
                  question: 'Can you guarantee we won\'t get hacked?',
                  answer: 'No one can guarantee 100% security - anyone claiming otherwise is lying. What we guarantee: 99.7% threat prevention rate, sub-15-minute response to incidents, and if a breach occurs despite our protection, we provide emergency response at no additional cost plus work with your insurance for cyber liability claims.'
                },
                {
                  question: 'How long does implementation take?',
                  answer: 'Essential Shield: 2-3 weeks. Complete Defense: 3-4 weeks. Enterprise Fortress: 6-8 weeks. We phase the rollout to minimize disruption - you\'ll have basic protection within the first week while we build out the comprehensive security architecture.'
                },
                {
                  question: 'What\'s your team\'s actual experience?',
                  answer: 'Our security engineers average 12+ years in enterprise security, with backgrounds at organizations including NASA (where we discovered critical vulnerabilities in satellite systems), Fortune 500 financial institutions, and government cybersecurity agencies. We hold certifications including CISSP, CEH, and OSCP.'
                },
                {
                  question: 'Do you work with our existing IT provider?',
                  answer: 'Yes. We partner with your current IT team/provider - we\'re not here to replace them. We handle the specialized cybersecurity layer while they manage day-to-day IT operations. Most IT providers appreciate having security experts handle this complex, high-liability area.'
                },
                {
                  question: 'What about compliance requirements (HIPAA, PCI-DSS, etc.)?',
                  answer: 'All our plans include compliance framework support. We assess your specific regulatory requirements, implement necessary controls, maintain required documentation, and provide audit assistance. For heavily regulated industries, our Enterprise Fortress plan includes dedicated compliance management.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-muted-foreground/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Don't Wait for a Breach to<br />Take Security Seriously
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every day without proper security is a day you're vulnerable. Get your free security assessment 
              and see exactly where you're exposed - before hackers do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition shadow-lg shadow-blue-500/20"
              >
                <Shield className="w-5 h-5 mr-2" />
                Get Free Security Assessment
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition"
              >
                View Security Packages
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free 30-minute consultation • No obligation • Same-day response
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
