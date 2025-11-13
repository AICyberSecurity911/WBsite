
'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  category?: string
  cta: {
    text: string
    href: string
  }
}

const faqData: FAQItem[] = [
  {
    question: "I'm barely keeping up as it is—how do I find time to implement this?",
    answer: "That's exactly why we handle everything. You spend 60 minutes on a strategy call, then we deploy and integrate your first AI employee while you get back to running your business. Most clients see their AI employee working within 3-5 days—no learning curve, no project management from you.",
    category: "Time & Implementation",
    cta: {
      text: "Try savings calculator",
      href: "#calculator"
    }
  },
  {
    question: "How does setup work?",
    answer: "There's no coding. Just 4 simple steps—we do them for you.",
    category: "Setup Process",
    cta: {
      text: "Get started now",
      href: "/consultation"
    }
  },
  {
    question: "What if this is just another 'shiny object' that doesn't work for my industry?",
    answer: "We've deployed AI employees in restaurants, law firms, construction companies, medical practices, and accounting firms. The work changes, but every business has repetitive tasks bleeding time and money. Our assessment identifies your specific automation opportunities—no generic solutions.",
    category: "Industry Fit",
    cta: {
      text: "Book a free consult",
      href: "/consultation"
    }
  },
  {
    question: "I've been burned by tech promises before. How is this different?",
    answer: "Fair question. Unlike software you have to learn and maintain, AI employees do the actual work—like hiring someone who never quits and costs 85% less. Plus, our 30-day performance guarantee means you risk nothing. If you're not seeing real time savings, your plan is free until you do.",
    category: "Trust & Risk",
    cta: {
      text: "Try savings calculator",
      href: "#calculator"
    }
  },
  {
    question: "Will AI replace my team or help them?",
    answer: "AI handles the busywork, so your team has more time for clients and sales.",
    category: "Team Dynamics",
    cta: {
      text: "Book a free consult",
      href: "/consultation"
    }
  },
  {
    question: "My team is already resistant to change. Won't this cause chaos?",
    answer: "AI employees don't replace your team—they eliminate the soul-crushing busywork your team hates anyway. Most clients report their staff is thrilled to dump data entry, appointment scheduling, and invoice tracking. We handle change management and training so this feels like relief, not disruption.",
    category: "Team Dynamics",
    cta: {
      text: "Book a free consult",
      href: "/consultation"
    }
  },
  {
    question: "Can I really trust a machine with sensitive client data and finances?",
    answer: "Our AI employees use NASA-recognized security protocols—the same standards protecting national security data. They're more secure than human employees who might access files on unsecured devices or accidentally forward sensitive emails. Plus, every action is logged and auditable.",
    category: "Security & Trust",
    cta: {
      text: "Book a free consult",
      href: "/consultation"
    }
  },
  {
    question: "What happens when something breaks or the AI doesn't understand a task?",
    answer: "AI employees flag anything they're uncertain about before proceeding, so you stay in control. Plus, you have 24/7 support from our team—we monitor performance and jump in immediately if issues arise. Our accuracy rates run 99.2%, but when edge cases happen, we fix them fast and free.",
    category: "Reliability",
    cta: {
      text: "Try savings calculator",
      href: "#calculator"
    }
  },
  {
    question: "How fast can I see results?",
    answer: "Most business owners save 15–30 hours every week, starting in the first month.",
    category: "Results & Timeline",
    cta: {
      text: "Try savings calculator",
      href: "#calculator"
    }
  },
  {
    question: "I can barely afford payroll now. How is this not just another expense?",
    answer: "This isn't an expense—it's eliminating one. A $50K employee actually costs $118K after taxes, benefits, and turnover. An AI employee doing the same work costs under $15K/year and never calls in sick, quits, or makes expensive mistakes. Most clients recoup their investment in 6-8 weeks.",
    category: "Cost & ROI",
    cta: {
      text: "Try savings calculator",
      href: "#calculator"
    }
  },
  {
    question: "How much does it cost?",
    answer: "Starting at just $499/month—up to 85% less than hiring staff.",
    category: "Pricing",
    cta: {
      text: "Try savings calculator",
      href: "#calculator"
    }
  },
  {
    question: "What if I hire an AI employee and then realize I don't need it?",
    answer: "That's what the 30-day performance guarantee is for. If your AI employee isn't saving you time and money within 30 days, your plan is free until it does. No gotchas, no fine print. We only win when you win.",
    category: "Guarantee & Commitment",
    cta: {
      text: "Book a free consult",
      href: "/consultation"
    }
  },
  {
    question: "Do I have to commit to multiple AI employees or can I start small?",
    answer: "Start with one. We recommend beginning with your biggest time drain—usually admin, scheduling, or bookkeeping. Once you see the results (typically within 30 days), you can add more AI employees as needed. No long-term contracts, no pressure.",
    category: "Getting Started",
    cta: {
      text: "Try savings calculator",
      href: "#calculator"
    }
  },
  {
    question: "I don't have an IT person. Will I need to hire one to manage this?",
    answer: "Absolutely not. You interact with AI employees through email, Slack, or a simple dashboard—no technical skills required. We handle all setup, integration, maintenance, and updates. If you can send an email, you can manage an AI employee.",
    category: "Technical Complexity",
    cta: {
      text: "Book a free consult",
      href: "/consultation"
    }
  }
]

export function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" ref={ref} className="section-padding bg-[#07070b]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-900 dark:bg-teal-900 dark:text-teal-300"
            >
              <HelpCircle className="h-4 w-4" />
              Your Questions, Honestly Answered
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-3xl font-bold text-[#f6f7ff] sm:text-4xl"
            >
              "I'm Skeptical. Here's Why You Should Be Too."
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#f6f7ff]"
            >
              Real concerns from business owners like you—and the honest answers you deserve
            </motion.p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.7, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-gray-800"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left transition-colors hover:bg-[#0c0c12]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#f6f7ff]">
                      {item.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.includes(index) ? 'auto' : 0,
                    opacity: openItems.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 px-6 py-5 dark:border-gray-700">
                    <p className="mb-4 text-[#b8b6c9]">
                      {item.answer}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="mt-4">
                      <Button 
                        asChild 
                        className="btn-primary"
                      >
                        <Link href={item.cta.href}>
                          {item.cta.text}
                        </Link>
                      </Button>
                    </div>
                    
                    {item.category && (
                      <div className="mt-4">
                        <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                          {item.category}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 text-center"
          >
            <p className="mb-6 text-lg text-[#b8b6c9]">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild className="btn-primary">
                <Link href="/consultation">
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button asChild className="btn-secondary">
                <a href="mailto:support@quantumleap.io">
                  Contact Support
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
