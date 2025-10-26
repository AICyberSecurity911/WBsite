
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react'

export function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const costBreakdown = [
    { item: 'Base Salary', amount: '$52,000' },
    { item: 'Payroll Taxes (15.3%)', amount: '$7,956' },
    { item: 'Benefits & Insurance', amount: '$8,840' },
    { item: 'Recruiting Costs', amount: '$6,500' },
    { item: 'Training Time (40 hours)', amount: '$8,250' },
    { item: 'Management Overhead', amount: '$15,600' },
    { item: 'Lost Revenue (mistakes)', amount: '$12,000' },
    { item: 'Replacement Cost (turnover)', amount: '$7,812' },
  ]

  const totalCost = costBreakdown.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace(/[$,]/g, ''))
  }, 0)

  return (
    <section ref={ref} className="section-padding bg-red-50 dark:bg-red-950/10">
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
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 dark:bg-red-900 dark:text-red-100"
            >
              <AlertTriangle className="h-4 w-4" />
              The Hidden Reality
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            >
              The Real Cost Nobody Talks About: 
              <span className="block text-red-700 dark:text-red-400 font-extrabold">Why That "$50K Employee" Just Bankrupted Your Q4</span>
            </motion.h2>
          </div>

          {/* Story Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-pink-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Jennifer's Story</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Restaurant Owner, Austin TX</p>
              </div>
            </div>
            <blockquote className="text-gray-800 dark:text-gray-200">
              <p className="mb-4">
                "I hired Sarah as my bookkeeper for '$50K' thinking I was getting a great deal. Three months later, 
                I discovered $23,000 in uncategorized expenses, missed tax deadlines, and she quit via text message 
                during our busiest season."
              </p>
              <p className="font-medium">
                "By the time I calculated recruitment, training, mistakes, and replacement costs, that '$50K employee' 
                actually cost me <span className="text-red-700 font-bold dark:text-red-400">$118,958</span>."
              </p>
            </blockquote>
          </motion.div>

          {/* Cost Breakdown Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
              The "$50,000 Salary" Lie
            </h3>
            
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 px-6 py-4 text-white">
                <h4 className="text-lg font-semibold">TRUE Cost Breakdown</h4>
                <p className="text-sm opacity-90">What that "affordable" employee actually costs</p>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {costBreakdown.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="text-gray-800 dark:text-gray-300">{item.item}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{item.amount}</span>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="bg-red-50 px-6 py-6 dark:bg-red-950/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-red-900 dark:text-red-100">TOTAL ACTUAL COST</span>
                      <p className="text-sm text-red-700 dark:text-red-300">Per employee, per year</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-red-600">${totalCost.toLocaleString()}</span>
                      <p className="text-sm text-red-700 dark:text-red-300">138% more than expected</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Timeline of Problems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mb-8 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                icon: Clock,
                title: 'Week 1-4',
                problem: 'Training & Onboarding',
                description: 'Reduced productivity while learning systems and processes'
              },
              {
                icon: TrendingDown,
                title: 'Month 2-6',
                problem: 'Mistakes & Corrections',
                description: 'Errors in critical business operations causing revenue loss'
              },
              {
                icon: DollarSign,
                title: 'Month 6+',
                problem: 'Turnover & Replacement',
                description: 'Average employee stays 18 months, restart entire process'
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                    <item.icon className="h-5 w-5 text-red-700 dark:text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-red-700 dark:text-red-400">{item.title}</div>
                    <div className="font-bold text-gray-900 dark:text-white">{item.problem}</div>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Breaking Point */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2 }}
            className="rounded-2xl bg-gradient-to-r from-gray-900 to-black p-8 text-white"
          >
            <h3 className="mb-4 text-2xl font-bold">The Breaking Point</h3>
            <p className="mb-6 text-lg opacity-90">
              You started a business to create freedom and wealth. Instead, you're spending 60% of your time 
              managing people, fixing their mistakes, and dealing with HR drama.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">73%</div>
                <div className="text-sm opacity-75">of small business owners work weekends</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">$12K</div>
                <div className="text-sm opacity-75">average cost of a bad hire</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">18 mo</div>
                <div className="text-sm opacity-75">average employee tenure</div>
              </div>
            </div>
          </motion.div>

          {/* Transition to Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mt-12 text-center"
          >
            <p className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              What if there was a better way?
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Imagine employees who never quit, never make mistakes, and cost 87% less...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
