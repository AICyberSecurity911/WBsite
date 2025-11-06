
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
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-red-50/50 via-red-50 to-white dark:from-red-950/5 dark:via-red-950/10 dark:to-gray-950">
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
              whileHover={{ scale: 1.05 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40 px-5 py-2.5 text-sm font-semibold text-red-900 dark:text-red-100 shadow-md border border-red-200 dark:border-red-800"
            >
              <AlertTriangle className="h-4 w-4" />
              The Hidden Reality
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-3 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300"
            >
              What's Breaking You?
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-section-title text-gray-900 dark:text-white"
            >
              You're Working Harder Than Ever, But Getting Less Time Back
              <span className="block mt-3 bg-gradient-to-r from-red-700 via-red-600 to-rose-600 dark:from-red-400 dark:via-red-300 dark:to-rose-300 bg-clip-text text-transparent font-extrabold">Why That "$50K Employee" Just Bankrupted Your Q4</span>
            </motion.h2>
          </div>

          {/* Story Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 rounded-3xl bg-gradient-to-br from-white via-slate-50/50 to-gray-50 dark:from-gray-900 dark:via-slate-950/50 dark:to-gray-950 p-8 shadow-2xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-[0_0_40px_rgba(148,163,184,0.4)] dark:hover:shadow-[0_0_40px_rgba(203,213,225,0.3)] transition-all duration-500 backdrop-blur-sm"
          >
            <div className="mb-5 flex items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="h-14 w-14 rounded-full bg-gradient-to-r from-red-500 to-pink-600 shadow-lg flex items-center justify-center text-white font-bold text-xl"
              >
                J
              </motion.div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Jennifer's Story</h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Restaurant Owner, Austin TX</p>
              </div>
            </div>
            <blockquote className="text-gray-800 dark:text-gray-200 space-y-4">
              <p className="text-lg leading-relaxed">
                "I hired Sarah as my bookkeeper for '$50K' thinking I was getting a great deal. Three months later, 
                I discovered $23,000 in uncategorized expenses, missed tax deadlines, and she quit via text message 
                during our busiest season."
              </p>
              <p className="text-lg font-semibold leading-relaxed">
                "By the time I calculated recruitment, training, mistakes, and replacement costs, that '$50K employee' 
                actually cost me <span className="text-2xl text-red-800 font-extrabold dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">$118,958</span>."
              </p>
            </blockquote>
          </motion.div>

          {/* Cost Breakdown Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10"
          >
            <h3 className="mb-8 text-center text-subsection-title bg-gradient-to-r from-red-900 via-red-700 to-rose-700 dark:from-red-100 dark:via-red-300 dark:to-rose-300 bg-clip-text text-transparent">
              The "$50,000 Salary" Lie
            </h3>
            
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 px-8 py-6 text-white">
                <h4 className="text-xl font-bold mb-1">TRUE Cost Breakdown</h4>
                <p className="text-sm font-medium opacity-95">What that "affordable" employee actually costs</p>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {costBreakdown.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    whileHover={{ x: 5, backgroundColor: 'rgba(254, 242, 242, 0.5)' }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between px-8 py-5 hover:bg-red-50/50 dark:hover:bg-red-950/20 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{item.item}</span>
                    <span className="font-bold text-lg text-red-800 dark:text-red-300">{item.amount}</span>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="bg-gradient-to-r from-red-50 via-rose-50 to-red-50 dark:from-red-950/30 dark:via-rose-950/30 dark:to-red-950/30 px-8 py-8"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-extrabold bg-gradient-to-r from-red-900 to-red-700 dark:from-red-100 dark:to-red-300 bg-clip-text text-transparent">TOTAL ACTUAL COST</span>
                      <p className="text-sm text-red-800 dark:text-red-200 font-semibold mt-1">Per employee, per year</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent">${totalCost.toLocaleString()}</span>
                      <p className="text-sm text-red-800 dark:text-red-200 font-bold mt-1">138% more than expected</p>
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
            className="mb-10 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: Clock,
                title: 'Week 1-4',
                problem: 'Training & Onboarding',
                description: 'Reduced productivity while learning systems and processes',
                bgClass: 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20',
                borderClass: 'border-amber-200/50 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-700',
                shadowClass: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] dark:hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]',
                iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
                iconColor: 'text-white',
                textColor: 'text-amber-700 dark:text-amber-400'
              },
              {
                icon: TrendingDown,
                title: 'Month 2-6',
                problem: 'Mistakes & Corrections',
                description: 'Errors in critical business operations causing revenue loss',
                bgClass: 'bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20',
                borderClass: 'border-rose-200/50 dark:border-rose-800/50 hover:border-rose-300 dark:hover:border-rose-700',
                shadowClass: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] dark:hover:shadow-[0_0_30px_rgba(251,113,133,0.2)]',
                iconBg: 'bg-gradient-to-br from-rose-500 to-red-500',
                iconColor: 'text-white',
                textColor: 'text-rose-700 dark:text-rose-400'
              },
              {
                icon: DollarSign,
                title: 'Month 6+',
                problem: 'Turnover & Replacement',
                description: 'Average employee stays 18 months, restart entire process',
                bgClass: 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20',
                borderClass: 'border-red-200/50 dark:border-red-800/50 hover:border-red-300 dark:hover:border-red-700',
                shadowClass: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] dark:hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]',
                iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
                iconColor: 'text-white',
                textColor: 'text-red-700 dark:text-red-400'
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-7 shadow-lg border transition-all duration-300 ${item.bgClass} ${item.borderClass} ${item.shadowClass}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} shadow-md`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${item.textColor}`}>{item.title}</div>
                    <div className="font-bold text-lg text-gray-900 dark:text-white">{item.problem}</div>
                  </div>
                </div>
                <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Breaking Point */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 text-white shadow-2xl border border-gray-700"
          >
            <h3 className="mb-5 text-subsection-title bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">The Breaking Point</h3>
            <p className="mb-8 text-xl leading-relaxed opacity-95">
              You started a business to create freedom and wealth. Instead, you're spending 60% of your time 
              managing people, fixing their mistakes, and dealing with HR drama.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <motion.div 
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-2">73%</div>
                <div className="text-sm font-medium opacity-80">of small business owners work weekends</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-2">$12K</div>
                <div className="text-sm font-medium opacity-80">average cost of a bad hire</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-2">18 mo</div>
                <div className="text-sm font-medium opacity-80">average employee tenure</div>
              </motion.div>
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
