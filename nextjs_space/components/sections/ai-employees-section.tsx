
'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { 
  Calculator, 
  User, 
  TrendingUp, 
  MessageSquare, 
  Users, 
  Share2,
  Calendar,
  BarChart3,
  ArrowRight,
  Clock,
  Target,
  CheckCircle,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Link from 'next/link'

interface AIEmployee {
  id: string
  title: string
  tagline: string
  description: string
  icon: any
  problemSolved: string
  features: string[]
  metrics: {
    accuracy: string
    timeSaved: string
    costSavings: string
  }
  testimonial: {
    quote: string
    author: string
    company: string
  }
  deploymentTime: string
  integrations: string[]
  color: string
}

const aiEmployees: AIEmployee[] = [
  {
    id: 'bookkeeper',
    title: 'AI Bookkeeper',
    tagline: 'Never worry about financial accuracy again',
    description: 'Automates your entire accounting workflow with 99.7% accuracy',
    icon: Calculator,
    problemSolved: 'Eliminates bookkeeping errors, late tax filings, and financial blind spots',
    features: [
      'Automated transaction categorization',
      'Real-time financial reporting',
      'Tax preparation assistance',
      'Cash flow forecasting',
      'Expense tracking and approval',
      'Invoice generation and follow-ups'
    ],
    metrics: {
      accuracy: '99.7%',
      timeSaved: '15 hours/week',
      costSavings: '87%'
    },
    testimonial: {
      quote: "Our books are perfect every month now. I sleep better at night.",
      author: "Peter Fernandes",
      company: "Fernandes Construction"
    },
    deploymentTime: '3-5 business days',
    integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Wave'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'executive-assistant',
    title: 'AI Executive Assistant',
    tagline: 'Your 24/7 productivity powerhouse',
    description: 'Manages your schedule, emails, and administrative tasks flawlessly',
    icon: User,
    problemSolved: 'Eliminates scheduling conflicts, missed opportunities, and administrative overwhelm',
    features: [
      'Calendar management and scheduling',
      'Email filtering and responses',
      'Meeting preparation and notes',
      'Travel arrangement coordination',
      'Document organization',
      'Follow-up reminders'
    ],
    metrics: {
      accuracy: '98.5%',
      timeSaved: '20 hours/week',
      costSavings: '78%'
    },
    testimonial: {
      quote: "It's like having the perfect assistant who never takes a day off.",
      author: "Sofia Delacroix",
      company: "Delacroix Marketing"
    },
    deploymentTime: '1-2 business days',
    integrations: ['Google Calendar', 'Outlook', 'Slack', 'Teams'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'sales-rep',
    title: 'AI Sales Representative',
    tagline: 'Your top performer who never burns out',
    description: 'Manages leads, follows up consistently, and closes deals 24/7',
    icon: TrendingUp,
    problemSolved: 'Eliminates inconsistent follow-ups and missed sales opportunities',
    features: [
      'Lead qualification and scoring',
      'Automated follow-up sequences',
      'Meeting scheduling and prep',
      'Proposal generation',
      'Pipeline management',
      'Performance analytics'
    ],
    metrics: {
      accuracy: '96.8%',
      timeSaved: '25 hours/week',
      costSavings: '82%'
    },
    testimonial: {
      quote: "Our sales pipeline has never been more organized and productive.",
      author: "Marcus Chen",
      company: "TechFlow Solutions"
    },
    deploymentTime: '5-7 business days',
    integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoom'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'customer-service',
    title: 'AI Customer Service Rep',
    tagline: 'Always available, always helpful',
    description: 'Handles customer inquiries with empathy and accuracy',
    icon: MessageSquare,
    problemSolved: 'Eliminates long response times and inconsistent customer experiences',
    features: [
      '24/7 customer support coverage',
      'Multi-channel communication',
      'Issue escalation protocols',
      'Knowledge base management',
      'Satisfaction tracking',
      'Sentiment analysis'
    ],
    metrics: {
      accuracy: '94.3%',
      timeSaved: '30 hours/week',
      costSavings: '89%'
    },
    testimonial: {
      quote: "Customer satisfaction scores increased 40% since deployment.",
      author: "Lisa Rodriguez",
      company: "HomeComfort Services"
    },
    deploymentTime: '4-6 business days',
    integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'LiveChat'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'recruiter',
    title: 'AI Recruiter',
    tagline: 'Find perfect candidates without the headaches',
    description: 'Sources, screens, and schedules candidates automatically',
    icon: Users,
    problemSolved: 'Eliminates bad hires, lengthy processes, and recruitment costs',
    features: [
      'Candidate sourcing and matching',
      'Resume screening and ranking',
      'Interview scheduling',
      'Background check coordination',
      'Offer letter generation',
      'Onboarding automation'
    ],
    metrics: {
      accuracy: '91.7%',
      timeSaved: '18 hours/week',
      costSavings: '76%'
    },
    testimonial: {
      quote: "We've hired 5 great employees in half the time it used to take.",
      author: "David Kim",
      company: "GreenTech Manufacturing"
    },
    deploymentTime: '7-10 business days',
    integrations: ['LinkedIn', 'Indeed', 'Workday', 'BambooHR'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'social-media-manager',
    title: 'AI Social Media Manager',
    tagline: 'Consistent content, growing engagement',
    description: 'Creates, schedules, and optimizes your social media presence',
    icon: Share2,
    problemSolved: 'Eliminates inconsistent posting and poor engagement rates',
    features: [
      'Content creation and curation',
      'Multi-platform scheduling',
      'Engagement monitoring',
      'Hashtag optimization',
      'Analytics and reporting',
      'Brand voice consistency'
    ],
    metrics: {
      accuracy: '93.2%',
      timeSaved: '12 hours/week',
      costSavings: '84%'
    },
    testimonial: {
      quote: "Our social media engagement tripled in just 2 months.",
      author: "Amanda Foster",
      company: "Boutique Fashion Co."
    },
    deploymentTime: '2-3 business days',
    integrations: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 'project-manager',
    title: 'AI Project Manager',
    tagline: 'On-time delivery, every time',
    description: 'Coordinates teams, tracks progress, and ensures deadlines are met',
    icon: Calendar,
    problemSolved: 'Eliminates project delays, miscommunication, and scope creep',
    features: [
      'Project planning and scheduling',
      'Resource allocation',
      'Progress tracking and reporting',
      'Risk assessment and mitigation',
      'Team coordination',
      'Budget monitoring'
    ],
    metrics: {
      accuracy: '97.1%',
      timeSaved: '22 hours/week',
      costSavings: '79%'
    },
    testimonial: {
      quote: "Project delivery times improved by 35% with zero stress.",
      author: "Robert Johnson",
      company: "Apex Consulting"
    },
    deploymentTime: '5-7 business days',
    integrations: ['Asana', 'Monday', 'Trello', 'Jira'],
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'financial-analyst',
    title: 'AI Financial Analyst',
    tagline: 'Data-driven insights for smarter decisions',
    description: 'Analyzes financial data and provides strategic recommendations',
    icon: BarChart3,
    problemSolved: 'Eliminates gut-based decisions and financial blind spots',
    features: [
      'Financial modeling and forecasting',
      'Performance analysis',
      'Cost optimization recommendations',
      'Investment analysis',
      'Risk assessment',
      'Strategic planning support'
    ],
    metrics: {
      accuracy: '98.9%',
      timeSaved: '16 hours/week',
      costSavings: '81%'
    },
    testimonial: {
      quote: "Finally have the financial insights I need to grow strategically.",
      author: "Sarah Williams",
      company: "Williams Architecture"
    },
    deploymentTime: '4-6 business days',
    integrations: ['Excel', 'Tableau', 'Power BI', 'QuickBooks'],
    color: 'from-yellow-500 to-orange-600'
  }
]

export function AIEmployeesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedEmployee, setSelectedEmployee] = useState<AIEmployee | null>(null)

  return (
    <section id="ai-employees" ref={ref} className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0.7, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0.7, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-900 dark:bg-teal-900 dark:text-teal-100"
          >
            <Users className="h-4 w-4" />
            Meet Your AI Workforce
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0.7, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            8 AI Employees Ready to Transform Your Business
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0.7, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Each AI employee is trained on 10,000+ hours of real business operations and ready to deploy within days
          </motion.p>
        </motion.div>

        {/* AI Employee Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiEmployees.map((employee, index) => (
            <motion.div
              key={employee.id}
              initial={{ opacity: 0.7, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group card cursor-pointer"
              onClick={() => setSelectedEmployee(employee)}
            >
              {/* Icon and gradient background */}
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${employee.color} text-white`}>
                <employee.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {employee.title}
                </h3>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                  {employee.tagline}
                </p>

                {/* Metrics */}
                <div className="mb-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-teal-700 dark:text-teal-400">{employee.metrics.accuracy}</div>
                    <div className="text-gray-700 dark:text-gray-300">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-700 dark:text-emerald-400">{employee.metrics.timeSaved}</div>
                    <div className="text-gray-700 dark:text-gray-300">Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-700 dark:text-purple-400">{employee.metrics.costSavings}</div>
                    <div className="text-gray-700 dark:text-gray-300">Less Cost</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-teal-700 group-hover:text-teal-900 dark:text-teal-400 dark:group-hover:text-teal-200">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0.7, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-200 font-medium">
            Not sure which AI employee you need first?
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="#calculator">
              Take the Free Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Employee Detail Modal */}
      <Dialog open={!!selectedEmployee} onOpenChange={() => setSelectedEmployee(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEmployee && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${selectedEmployee.color} text-white`}>
                    <selectedEmployee.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedEmployee.title}</DialogTitle>
                    <p className="text-muted-foreground">{selectedEmployee.tagline}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Problem Solved */}
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Problem Solved</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedEmployee.problemSolved}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">Key Capabilities</h4>
                    <ul className="space-y-2">
                      {selectedEmployee.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-teal-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Integrations */}
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEmployee.integrations.map((integration, index) => (
                        <span 
                          key={index}
                          className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Metrics */}
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">Performance Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600">{selectedEmployee.metrics.accuracy}</div>
                        <div className="text-sm text-gray-500">Accuracy Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">{selectedEmployee.metrics.timeSaved}</div>
                        <div className="text-sm text-gray-500">Time Saved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{selectedEmployee.metrics.costSavings}</div>
                        <div className="text-sm text-gray-500">Cost Reduction</div>
                      </div>
                    </div>
                  </div>

                  {/* Deployment */}
                  <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-950">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-teal-600" />
                      <span className="font-semibold text-teal-900 dark:text-teal-100">Deployment Time</span>
                    </div>
                    <p className="text-teal-800 dark:text-teal-200">{selectedEmployee.deploymentTime}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <blockquote className="mb-3 italic text-gray-600 dark:text-gray-300">
                      "{selectedEmployee.testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900 dark:text-white">{selectedEmployee.testimonial.author}</div>
                      <div className="text-gray-500">{selectedEmployee.testimonial.company}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full btn-primary">
                    <Link href="#calculator">
                      Get Personalized Recommendation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
