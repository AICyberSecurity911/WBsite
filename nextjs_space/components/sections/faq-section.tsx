
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
}

const faqData: FAQItem[] = [
  {
    question: "How long does implementation take?",
    answer: "Most AI employees can be deployed within 1-7 business days, depending on complexity. Our AI Executive Assistant can start working in just 1-2 days, while more specialized roles like AI Financial Analyst may take 4-6 days for full integration with your existing systems.",
    category: "Implementation"
  },
  {
    question: "What if the AI makes a mistake?",
    answer: "Our AI employees have built-in error detection and self-correction capabilities. They maintain accuracy rates of 91.7%-99.7% depending on the role. Any errors are immediately flagged, corrected, and used to improve future performance. Plus, you have our 60-day money-back guarantee if you're not satisfied.",
    category: "Reliability"
  },
  {
    question: "Do I need technical expertise to manage AI employees?",
    answer: "Not at all. Our AI employees are designed to work just like human employees - you communicate with them through familiar interfaces like email, Slack, or our simple dashboard. No coding or technical knowledge required. We handle all the technical setup and maintenance.",
    category: "Technical"
  },
  {
    question: "What's the actual cost compared to human employees?",
    answer: "AI employees typically cost 87% less than human employees when you factor in salary, benefits, payroll taxes, training, and management overhead. A human bookkeeper costing $118,958/year in total expenses can be replaced with an AI Bookkeeper for under $15,000/year.",
    category: "Pricing"
  },
  {
    question: "Can AI employees integrate with my existing tools?",
    answer: "Yes! Our AI employees integrate with 200+ business tools including QuickBooks, Salesforce, Google Workspace, Microsoft 365, Slack, Asana, and many more. During setup, we configure all necessary integrations to match your current workflow.",
    category: "Integration"
  },
  {
    question: "What happens if I'm not satisfied?",
    answer: "We offer a 60-day money-back guarantee. If you don't see measurable ROI within 60 days, we'll refund your investment completely. Our average customer sees positive ROI within 30 days, so we're confident in our guarantee.",
    category: "Guarantee"
  },
  {
    question: "How is my data kept secure?",
    answer: "We use NASA-recognized security protocols, including 256-bit encryption, SOC 2 compliance, and zero-trust architecture. Your data never leaves secure, audited systems, and we maintain strict access controls. We're more secure than most traditional employees who might have unsecured personal devices.",
    category: "Security"
  },
  {
    question: "Can I start with just one AI employee?",
    answer: "Absolutely! Most businesses start with one AI employee in their biggest pain point area. Our assessment helps identify which AI employee will give you the highest immediate ROI. You can always add more AI employees as you see results.",
    category: "Getting Started"
  },
  {
    question: "How do AI employees handle complex or creative tasks?",
    answer: "Our AI employees excel at structured, process-driven tasks and can handle moderate complexity well. For creative or highly strategic work, they work alongside your human team, handling the routine tasks so your people can focus on high-value creative and strategic work.",
    category: "Capabilities"
  },
  {
    question: "What kind of support do you provide?",
    answer: "You get dedicated support throughout setup and ongoing operations. This includes initial configuration, training on how to work with your AI employee, ongoing optimization, and 24/7 technical support. We also provide monthly performance reviews to ensure maximum ROI.",
    category: "Support"
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
    <section id="faq" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900/50">
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
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-300"
            >
              <HelpCircle className="h-4 w-4" />
              Frequently Asked Questions
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              Everything You Need to Know
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Common questions about AI workforce automation and implementation
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
                  className="w-full px-6 py-5 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
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
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                    {item.category && (
                      <div className="mt-3">
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
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
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
