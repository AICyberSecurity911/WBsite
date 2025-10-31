
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | QuantumLeap AI - Strategic Insights & Case Studies',
  description: 'Practical guides, case studies, and frameworks from businesses that have successfully deployed AI workforces',
}

const blogPosts = [
  {
    id: '1',
    title: 'The True Cost of Hiring: Why That $50K Salary Actually Costs $118K',
    excerpt: 'Most business owners drastically underestimate the real cost of traditional employees. Learn the hidden expenses that are bleeding your business dry.',
    category: 'Business Strategy',
    readTime: '8 min read',
    slug: 'true-cost-of-hiring',
    featured: true
  },
  {
    id: '2',
    title: '7 Signs Your Business Is Ready for AI Automation (And 3 Signs It\'s Not)',
    excerpt: 'Not every business is ready for AI. Discover the critical indicators that signal it\'s time to automate, and when to wait.',
    category: 'AI Strategy',
    readTime: '6 min read',
    slug: 'ready-for-ai-automation',
    featured: true
  },
  {
    id: '3',
    title: 'How to Calculate ROI on AI Employees (With Real Examples)',
    excerpt: 'Step-by-step framework for measuring the actual return on investment from AI workforce automation, with case studies from 50+ businesses.',
    category: 'Financial Planning',
    readTime: '12 min read',
    slug: 'calculate-ai-roi',
    featured: true
  },
  {
    id: '4',
    title: 'The 5 Tasks You Should Automate First (And Why)',
    excerpt: 'Start with these high-impact, low-risk tasks to build confidence and demonstrate ROI quickly.',
    category: 'Implementation',
    readTime: '5 min read',
    slug: 'tasks-to-automate-first'
  },
  {
    id: '5',
    title: 'AI vs. Outsourcing: Which Is Right for Your Business?',
    excerpt: 'A comprehensive comparison of AI employees vs. traditional outsourcing, with a decision framework.',
    category: 'Business Strategy',
    readTime: '10 min read',
    slug: 'ai-vs-outsourcing'
  },
  {
    id: '6',
    title: 'Case Study: How a Law Firm Reduced Admin Costs 73% With AI',
    excerpt: 'Inside look at a 12-attorney firm that replaced 3 administrative staff with AI employees and increased profitability by $180K.',
    category: 'Case Study',
    readTime: '7 min read',
    slug: 'law-firm-case-study'
  },
  {
    id: '7',
    title: 'Intelligent Automation 101: A Complete Guide for SMB Owners',
    excerpt: 'Everything you need to know about intelligent automation: what it is, how it works, and how to implement it in your business for maximum ROI.',
    category: 'Implementation',
    readTime: '10 min read',
    slug: 'intelligent-automation-guide',
    featured: false
  },
  {
    id: '8',
    title: 'How Intelligent Automation Saves SMBs 15+ Hours Per Week (And Thousands in Hidden Costs)',
    excerpt: 'Discover how intelligent automation eliminates repetitive tasks, prevents costly errors, and frees your team to focus on growth. Real data from 200+ businesses.',
    category: 'Automation Strategy',
    readTime: '9 min read',
    slug: 'intelligent-automation-saves-time-and-money',
    featured: true
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="gradient-bg section-padding">
          <div className="container text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-purple-300">
              <BookOpen className="h-4 w-4" />
              Strategic Insights
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              AI Workforce Insights & Case Studies
            </h1>
            
            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Practical guides, real-world case studies, and actionable frameworks to help you transform your business with AI
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="section-padding bg-white dark:bg-dark-bg">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Featured Articles
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl dark:bg-gray-800"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Image Placeholder */}
                    <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
              More Articles
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-xl bg-white transition-all hover:shadow-lg dark:bg-gray-800"
                >
                  <Link href={`/blog/${post.slug}`} className="block p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                      {post.title}
                    </h3>
                    
                    <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
                      Read Article
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-xl">
              Take the 90-second assessment and discover which AI employee will give you the fastest ROI
            </p>
            <Link
              href="/#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-teal-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Get My Free Assessment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
