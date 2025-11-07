
'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { 
  UserCheck, 
  MessageSquare, 
  Calculator, 
  TrendingUp, 
  BarChart, 
  Target,
  Layers,
  ArrowRight,
  Check,
  ChevronDown,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface AIEmployee {
  id: string
  title: string
  name: string
  badge: string
  badgeColor: string
  tagline: string
  customBuiltFor: string
  realResults: string[]
  technicalDetails: string[]
  customizationOptions: string[]
  pricing: string
  icon: any
  color: string
}

const aiEmployees: AIEmployee[] = [
  {
    id: 'ava',
    name: 'AVA',
    title: 'AI Virtual Administrator',
    badge: 'Most Requested',
    badgeColor: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
    tagline: 'Handles emails, scheduling, expense approvals, and reporting—reclaim 40+ hours/month',
    customBuiltFor: 'Construction company owner drowning in admin work—missing family dinners to approve expenses',
    realResults: [
      '40+ hours/month reclaimed',
      '$15K billing errors recovered',
      '73% revenue growth',
      'First vacation in 7 years'
    ],
    technicalDetails: [
      'Gmail/Outlook integration with smart prioritization',
      'Automated expense approval workflows (rules-based)',
      'Calendar management with conflict detection',
      'Weekly executive summary reports (auto-generated)'
    ],
    customizationOptions: [
      'Your specific email patterns and client communication style',
      'Your approval hierarchies and spending limits',
      'Your meeting preferences and scheduling constraints',
      'Your reporting needs and KPI dashboards'
    ],
    pricing: '$399/month',
    icon: UserCheck,
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 'ace',
    name: 'ACE',
    title: 'AI Customer Engagement',
    badge: '24/7 Revenue Generator',
    badgeColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    tagline: 'Responds to leads instantly (even at 3 AM), qualifies prospects, books appointments—never miss a sale',
    customBuiltFor: 'Real estate broker losing 30% of leads because they came in after business hours',
    realResults: [
      '34% revenue increase in 3 months',
      'Zero missed leads (90-sec response time)',
      'Automated lead qualification',
      'Wakes up to booked appointments'
    ],
    technicalDetails: [
      'CRM integration (HubSpot/Salesforce/custom)',
      'Natural language processing for lead qualification',
      'Multi-channel engagement (email, SMS, web chat)',
      'Smart scheduling based on urgency and calendar availability',
      'Follow-up sequences customized to lead temperature'
    ],
    customizationOptions: [
      'Your industry-specific qualification criteria',
      'Your brand voice and communication style',
      'Your booking preferences and availability windows',
      'Your CRM and tech stack integration'
    ],
    pricing: '$399/month',
    icon: MessageSquare,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'bookie',
    name: 'BOOKIE',
    title: 'AI Bookkeeper',
    badge: 'Fastest ROI',
    badgeColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    tagline: 'Syncs with QuickBooks/Xero, categorizes transactions, reconciles accounts—99.2% accuracy, books closed by the 3rd',
    customBuiltFor: 'E-commerce founder spending 18 hours/month on bookkeeping with errors every quarter',
    realResults: [
      '$50K+ annual savings vs. hiring',
      '99.2% accuracy (vs. ~94% manual)',
      'Books closed by 3rd (was 12 days)',
      '18 hours/week freed for growth'
    ],
    technicalDetails: [
      'QuickBooks/Xero API integration',
      'Machine learning categorization (learns from patterns)',
      'Anomaly detection (flags duplicates, unusual amounts)',
      'Bank reconciliation automation',
      'Month-end close checklist with smart validation'
    ],
    customizationOptions: [
      'Your chart of accounts and categorization rules',
      'Your bank accounts and payment processors',
      'Your reconciliation requirements and approval workflows',
      'Your reporting format and frequency'
    ],
    pricing: '$499/month',
    icon: Calculator,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'finn',
    name: 'FINN',
    title: 'AI Financial Analyst',
    badge: 'Strategic Advantage',
    badgeColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    tagline: 'Monitors cash flow in real-time, forecasts burn rate, models scenarios—alerts you to risks before they become crises',
    customBuiltFor: "Consulting firm that didn't realize 40% of clients were unprofitable until tax season",
    realResults: [
      'Identified $127K in unprofitable work',
      'Real-time cash visibility (no surprises)',
      '6-month runway forecasting (±3% accuracy)',
      'Confident financial decisions'
    ],
    technicalDetails: [
      'Multi-source data aggregation (QuickBooks, bank feeds, contracts)',
      'Profitability analysis by client/project/service line',
      'Cash flow forecasting with scenario modeling',
      'Automated alerts for covenant violations or low runway',
      'Executive dashboard with drag-and-drop customization'
    ],
    customizationOptions: [
      'Your revenue model and cost structure',
      'Your client contracts and billing cycles',
      'Your financial KPIs and reporting needs',
      'Your risk thresholds and alert preferences'
    ],
    pricing: '$499/month',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'mark',
    name: 'MARK',
    title: 'AI Marketing Manager',
    badge: 'Consistent Growth Engine',
    badgeColor: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    tagline: 'Plans campaigns, schedules content, tracks analytics, optimizes spend—marketing happens consistently, not in bursts',
    customBuiltFor: 'SaaS startup whose "strategy" was founder posting on LinkedIn when they remembered',
    realResults: [
      'Consistent content (3x/week vs. sporadic)',
      '41% increase in qualified leads (90 days)',
      'Marketing attribution clarity',
      '15 hours/week saved'
    ],
    technicalDetails: [
      'Content calendar with AI-assisted writing (brand voice)',
      'Multi-channel scheduling (LinkedIn, email, blog, ads)',
      'Analytics aggregation (GA, LinkedIn, Meta, email platforms)',
      'A/B testing automation',
      'ROI dashboards by channel and campaign'
    ],
    customizationOptions: [
      'Your target audience and messaging strategy',
      'Your content types and distribution channels',
      'Your brand guidelines and approval workflows',
      'Your attribution model and success metrics'
    ],
    pricing: '$499/month',
    icon: BarChart,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'sal',
    name: 'SAL',
    title: 'AI Sales Development Rep',
    badge: 'Pipeline Multiplier',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    tagline: 'Qualifies inbound leads, researches prospects, personalizes outreach, books meetings—your closers focus on closing',
    customBuiltFor: 'B2B services company where founder was both salesperson and delivery team—leads fell through cracks',
    realResults: [
      'Pipeline increased 3x in 60 days',
      'Consistent 7-touch follow-up (zero manual)',
      'Only qualified prospects reach calendar',
      'Close rate jumped 18% → 31%'
    ],
    technicalDetails: [
      'Lead scoring based on custom criteria (size, budget, engagement)',
      'Automated research (LinkedIn, company data, recent news)',
      'Personalized email sequences (uses prospect data + templates)',
      'CRM hygiene (auto-updates fields, tags, status)',
      'Meeting scheduling with qualification gates'
    ],
    customizationOptions: [
      'Your ideal customer profile and qualification criteria',
      'Your sales process and handoff points',
      'Your outreach templates and brand voice',
      'Your CRM and sales tool stack'
    ],
    pricing: '$499/month',
    icon: Target,
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'aria',
    name: 'ARIA',
    title: 'AI Project Manager',
    badge: 'Delivery Excellence',
    badgeColor: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
    tagline: 'Plans projects, assigns tasks, tracks progress, manages dependencies—deliveries on-time and on-budget',
    customBuiltFor: 'Digital agency where projects consistently ran 30% over budget due to tracking gaps',
    realResults: [
      'Project delivery time reduced 22%',
      'Budget overruns eliminated (30% over → 2% under)',
      'Team utilization visibility',
      'Client satisfaction scores up 18%'
    ],
    technicalDetails: [
      'Project planning with dependency mapping',
      'Resource allocation and utilization tracking',
      'Automated task assignment based on skills and availability',
      'Bottleneck detection and escalation alerts',
      'Client status updates (auto-generated, customizable frequency)'
    ],
    customizationOptions: [
      'Your project types and delivery methodology (Agile, Waterfall, hybrid)',
      'Your team structure and capacity',
      'Your client communication preferences',
      'Your project management tools and workflows'
    ],
    pricing: '$499/month',
    icon: Layers,
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function AIEmployeesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [expandedCards, setExpandedCards] = useState<{ [key: string]: { tech: boolean; custom: boolean } }>({})

  const toggleSection = (employeeId: string, section: 'tech' | 'custom') => {
    setExpandedCards(prev => ({
      ...prev,
      [employeeId]: {
        ...(prev[employeeId] || { tech: false, custom: false }),
        [section]: !prev[employeeId]?.[section]
      }
    }))
  }

  return (
    <section id="ai-employees" ref={ref} className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Meet Your AI Workforce—Custom-Built Digital Employees That Never Sleep
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Each AI employee below was custom-engineered by MIT & Caltech graduates for real businesses with real challenges. <strong>These aren't products—they're examples of what we build from scratch for you.</strong>
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiEmployees.map((employee, index) => (
            <motion.div
              key={employee.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all group"
            >
              {/* Badge */}
              <div className={`inline-block ${employee.badgeColor} text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                {employee.badge}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${employee.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <employee.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {employee.name} — {employee.title}
              </h3>

              {/* Tagline */}
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {employee.tagline}
              </p>

              {/* Divider */}
              <div className="border-t border-slate-200 dark:border-slate-700 my-4"></div>

              {/* Custom-Built For */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  Custom-Built For
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {employee.customBuiltFor}
                </p>
              </div>

              {/* Real Result */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  Real Result
                </div>
                <ul className="space-y-2 text-sm">
                  {employee.realResults.map((result, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expandable Technical Details */}
              <details className="mb-4 group/details">
                <summary className="cursor-pointer text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-2">
                  What We Built (Technical)
                  <ChevronDown className="w-4 h-4 group-open/details:rotate-180 transition-transform" />
                </summary>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {employee.technicalDetails.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </details>

              {/* Expandable Customization Options */}
              <details className="mb-6 group/details">
                <summary className="cursor-pointer text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-2">
                  This Could Be Customized For You
                  <ChevronDown className="w-4 h-4 group-open/details:rotate-180 transition-transform" />
                </summary>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {employee.customizationOptions.map((option, i) => (
                    <li key={i}>• {option}</li>
                  ))}
                </ul>
              </details>

              {/* Pricing */}
              <div className="flex items-baseline space-x-2 mb-4">
                <DollarSign className="w-5 h-5 text-slate-500" />
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{employee.pricing.replace('$', '')}</span>
                <span className="text-slate-500 dark:text-slate-400">monthly</span>
              </div>

              {/* CTA */}
              <Link 
                href="#calculator" 
                className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition-all group-hover:shadow-lg"
              >
                See How {employee.name} Would Work for Me →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-lg text-slate-900 dark:text-slate-200 font-medium">
            Want to see what a custom AI workforce would look like for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link href="#calculator">
                Take the Free Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-slate-300 dark:border-slate-600">
              <Link href="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
