'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, AlertTriangle, Search, FileCheck, Users, TrendingUp, CheckCircle2, XCircle } from 'lucide-react'
import { useState } from 'react'

export default function BackgroundChecksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
                Stop Hiring Mistakes<br />
                <span className="text-red-500">Before They Cost You $118,958</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
                Traditional background checks miss 73% of red flags. We go beyond criminal records to uncover 
                the hidden risks that destroy businesses: fraud, workplace violence, theft, and toxic behavior.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <a 
                  href="/consultation" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition transform hover:scale-105"
                >
                  Get Your Risk Assessment
                </a>
                <a 
                  href="#how-it-works" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-red-500 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                >
                  How It Works
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                {[
                  { value: '73%', label: 'Red Flags Missed by Standard Checks' },
                  { value: '$118K', label: 'Average Cost of a Bad Hire' },
                  { value: '15 Days', label: 'To Complete Comprehensive Assessment' }
                ].map((stat, idx) => (
                  <Card key={idx} className="border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Traditional Background Checks <span className="text-red-500">Fail You</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A clean criminal record doesn't mean a safe hire. Here's what standard checks miss:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <AlertTriangle className="w-12 h-12" />,
                  title: 'Financial Fraud Patterns',
                  description: 'Unreported bankruptcies, suspicious business closures, and financial misconduct that predict theft risk.',
                  risk: '41% of employee theft goes undetected'
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: 'Toxic Behavior History',
                  description: 'Workplace complaints, harassment patterns, and interpersonal conflicts that destroy team morale.',
                  risk: 'Costs $12,800 per toxic employee annually'
                },
                {
                  icon: <Search className="w-12 h-12" />,
                  title: 'Resume Fabrication',
                  description: 'Fake credentials, inflated experience, and falsified employment history that 34% of applicants use.',
                  risk: '34% of resumes contain lies'
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: 'Undisclosed Conflicts',
                  description: 'Competitor connections, non-compete violations, and IP theft risks standard checks never catch.',
                  risk: 'IP theft costs $300B annually'
                },
                {
                  icon: <XCircle className="w-12 h-12" />,
                  title: 'Social Media Red Flags',
                  description: 'Discriminatory posts, violent content, and reputation risks hiding in their digital footprint.',
                  risk: '70% have compromising social content'
                },
                {
                  icon: <FileCheck className="w-12 h-12" />,
                  title: 'License Verification',
                  description: 'Expired certifications, revoked licenses, and professional sanctions that put you at legal risk.',
                  risk: '23% have credential discrepancies'
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                  <CardContent className="p-6">
                    <div className="text-red-500 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                    <div className="text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 px-3 py-2 rounded-lg">
                      ⚠️ {item.risk}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="text-red-500">3-Layer</span> Risk Assessment Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We combine AI-powered analysis with human expertise to uncover what others miss
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Layer 1: Deep Background Investigation',
                  duration: '5-7 Days',
                  items: [
                    'Criminal records (federal, state, county)',
                    'Civil litigation history',
                    'Financial background (bankruptcies, liens, judgments)',
                    'Employment verification (dates, titles, reasons for leaving)',
                    'Education verification (degrees, institutions, dates)',
                    'Professional license verification',
                    'Motor vehicle records (if applicable)'
                  ]
                },
                {
                  step: '2',
                  title: 'Layer 2: Digital Footprint Analysis',
                  duration: '3-5 Days',
                  items: [
                    'Social media screening (public posts, photos, comments)',
                    'Online reputation analysis',
                    'Professional networking profiles',
                    'News mentions and media coverage',
                    'Domain registrations and business associations',
                    'Dark web monitoring for exposed credentials'
                  ]
                },
                {
                  step: '3',
                  title: 'Layer 3: Risk Assessment & Reference Intelligence',
                  duration: '3-5 Days',
                  items: [
                    'Behavioral pattern analysis using AI',
                    'Deep reference interviews (not just confirmations)',
                    'Peer reputation assessment',
                    'Cultural fit evaluation',
                    'Red flag correlation across all data sources',
                    'Predictive risk scoring',
                    'Detailed written report with recommendations'
                  ]
                }
              ].map((layer, idx) => (
                <div key={idx} className="relative">
                  <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50/30 dark:from-gray-900 dark:to-red-950/10">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center text-3xl font-bold">
                            {layer.step}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{layer.title}</h3>
                            <span className="text-sm font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/50 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-block">
                              {layer.duration}
                            </span>
                          </div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {layer.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 dark:text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Complete Assessment: 10-15 Business Days</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Rush processing available for urgent hires (5-7 days) at additional cost
                  </p>
                  <Button 
                    asChild
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
                  >
                    <a href="/consultation">Start Your Risk Assessment</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
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

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Investment That <span className="text-red-500">Pays For Itself</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Compare $2,500 for comprehensive screening vs. $118,958 average cost of a bad hire
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Essential',
                  price: '$1,200',
                  description: 'For entry-level and junior positions',
                  features: [
                    'Layer 1: Deep Background Investigation',
                    'Criminal records (all jurisdictions)',
                    'Employment & education verification',
                    'Basic reference checks',
                    'Standard report',
                    '10-12 business day turnaround'
                  ],
                  cta: 'Get Started',
                  popular: false
                },
                {
                  name: 'Comprehensive',
                  price: '$2,500',
                  description: 'For mid-level and senior hires',
                  features: [
                    'All Essential features',
                    'Layer 2: Digital Footprint Analysis',
                    'Social media screening',
                    'Online reputation analysis',
                    'Deep reference interviews',
                    'Detailed risk assessment report',
                    '10-15 business day turnaround'
                  ],
                  cta: 'Most Popular',
                  popular: true
                },
                {
                  name: 'Executive',
                  price: '$5,000',
                  description: 'For executive and C-suite positions',
                  features: [
                    'All Comprehensive features',
                    'Layer 3: Advanced Risk Intelligence',
                    'Behavioral pattern analysis',
                    'Competitive intelligence check',
                    'Media and litigation search',
                    'Executive consultation',
                    'Priority 7-10 day turnaround',
                    '90-day monitoring included'
                  ],
                  cta: 'Premium Protection',
                  popular: false
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
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{tier.name}</h3>
                    <div className="text-4xl font-bold text-red-500 mb-2">{tier.price}</div>
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

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Volume Discounts:</strong> Screen 10+ candidates annually and save 15-25%
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Frequently Asked <span className="text-red-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How is this different from standard background checks?',
                  a: 'Standard checks only look at criminal records and basic employment verification. We go three layers deep: comprehensive background investigation, digital footprint analysis, and behavioral risk assessment. We uncover the 73% of red flags that traditional checks miss—financial fraud patterns, toxic behavior history, resume fabrication, and social media risks.'
                },
                {
                  q: 'Is this legal and FCRA compliant?',
                  a: 'Absolutely. We are fully compliant with the Fair Credit Reporting Act (FCRA), Equal Employment Opportunity Commission (EEOC) guidelines, and all state and federal laws. Every report includes legal compliance documentation, and we provide guidance on how to use findings in hiring decisions legally.'
                },
                {
                  q: 'How long does the process take?',
                  a: 'Our standard turnaround is 10-15 business days for a comprehensive assessment. We offer rush processing (5-7 days) for urgent hires at an additional cost. The Essential package takes 10-12 days, while Executive screening with priority service can be completed in 7-10 days.'
                },
                {
                  q: 'What if the candidate refuses consent?',
                  a: 'Candidates must provide written consent for background screening under FCRA. If a candidate refuses, that\'s often a red flag itself. We provide legally compliant consent forms and guidance on handling refusals. However, you cannot proceed with our screening without proper authorization.'
                },
                {
                  q: 'Can I customize what you check?',
                  a: 'Yes! While our three-layer packages cover the most critical areas, we can customize screening based on your specific needs, industry requirements, and position sensitivity. We also offer add-ons like drug testing coordination, international background checks, and continuous monitoring.'
                },
                {
                  q: 'What if negative information is found?',
                  a: 'We provide context and risk assessment for all findings. Not all negative information disqualifies a candidate—it depends on relevance, recency, and severity. We include a 30-minute consultation to help you interpret findings and make an informed decision. We also guide you through FCRA\'s adverse action process if needed.'
                },
                {
                  q: 'Do you offer ongoing monitoring after hire?',
                  a: 'Yes! Our Executive package includes 90 days of monitoring. We also offer continuous monitoring subscriptions that alert you to criminal charges, financial issues, or other concerning developments for current employees in sensitive positions.'
                },
                {
                  q: 'What\'s your accuracy guarantee?',
                  a: 'We guarantee 100% accuracy on all factual data (criminal records, employment dates, education verification). If we miss something that a standard background check would have caught, we refund your full fee. Our AI-powered analysis and human verification process ensures the highest accuracy in the industry.'
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
                      <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </p>
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
              Don't Let a Bad Hire Cost You $118,958
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Invest $2,500 today to avoid a six-figure disaster tomorrow
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
      </main>

      <Footer />
    </div>
  )
}
