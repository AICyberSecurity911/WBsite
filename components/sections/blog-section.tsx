
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Clock, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  slug: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How I Saved $52,000 and Stopped Working Weekends',
    excerpt: 'A restaurant owner\'s journey from 70-hour weeks and constant stress to running a business that finally runs without her—and the exact steps she took to get there.',
    category: 'Success Story',
    readTime: '8 min read',
    image: '/images/blog/cost-of-hiring.jpg',
    slug: 'saved-52000-stopped-working-weekends',
    featured: true
  },
  {
    id: '2',
    title: 'AI Rescued My Family Time—Here\'s How Much It Costs (And Saves)',
    excerpt: 'An honest breakdown from a medical practice owner who was missing soccer games and family dinners—until AI employees gave him his life back.',
    category: 'Real Results',
    readTime: '6 min read',
    image: '/images/blog/ready-for-ai.jpg',
    slug: 'ai-rescued-family-time',
    featured: true
  },
  {
    id: '3',
    title: 'I Was Drowning in Busywork. Then I Hired an AI Employee for $15K.',
    excerpt: 'The complete story of how a construction company owner replaced a $118K administrative assistant with an AI employee—and what happened next.',
    category: 'Case Study',
    readTime: '10 min read',
    image: '/images/blog/calculate-roi.jpg',
    slug: 'drowning-in-busywork',
    featured: true
  },
  {
    id: '4',
    title: 'I Fired My Bookkeeper (and My Stress) in the Same Week',
    excerpt: 'A law firm owner shares how replacing her error-prone bookkeeper with AI saved $73K and eliminated months of tax deadline anxiety.',
    category: 'Transformation',
    readTime: '7 min read',
    image: '/images/blog/tasks-to-automate.jpg',
    slug: 'fired-bookkeeper-and-stress'
  },
  {
    id: '5',
    title: 'From 60-Hour Weeks to 30: My AI Workforce Journey',
    excerpt: 'An e-commerce founder\'s transparent account of deploying three AI employees, the mistakes made, the time reclaimed, and the freedom gained.',
    category: 'Journey',
    readTime: '9 min read',
    image: '/images/blog/ai-vs-outsourcing.jpg',
    slug: 'sixty-to-thirty-hour-weeks'
  },
  {
    id: '6',
    title: 'The Day I Stopped Being "Chief Everything Officer"',
    excerpt: 'A marketing agency owner reveals how AI employees freed her from administrative hell—and what she did with her first free weekend in three years.',
    category: 'Freedom Story',
    readTime: '8 min read',
    image: '/images/blog/law-firm-case-study.jpg',
    slug: 'stopped-being-chief-everything-officer'
  }
]

export function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" ref={ref} className="section-padding bg-white dark:bg-dark-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-purple-300"
            >
              <BookOpen className="h-4 w-4" />
              Real Stories, Real Results
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              From Overworked to Unstoppable
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            >
              Real business owners share their journey from burnout to breakthrough—and exactly how they did it
            </motion.p>
          </div>

          {/* Featured Posts Grid */}
          <div className="mb-12 grid gap-8 lg:grid-cols-3">
            {featuredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl dark:bg-gray-800"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {/* Placeholder gradient - replace with actual images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 opacity-80 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white opacity-50" />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                      {post.title}
                    </h3>
                    
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 font-semibold text-teal-600 dark:text-teal-400">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Additional Posts List */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="group overflow-hidden rounded-xl bg-gray-50 transition-all hover:shadow-lg dark:bg-gray-800/50"
              >
                <Link href={`/blog/${post.slug}`} className="block p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-300">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {post.title}
                  </h3>
                  
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold text-teal-700 dark:text-teal-300">
                    Read Article
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <Button asChild className="btn-secondary">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
