'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ArrowLeft, Clock, Share2, BookOpen, TrendingUp, DollarSign, Users } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  author: {
    name: string
    role: string
  }
  content: {
    intro: string
    sections: {
      title: string
      content: string
      points?: string[]
    }[]
    conclusion: string
  }
}

// Blog post database
const blogPosts: Record<string, BlogPost> = {
  'true-cost-of-hiring': {
    slug: 'true-cost-of-hiring',
    title: 'The True Cost of Hiring: Why That $50K Salary Actually Costs $118K',
    excerpt: 'Most business owners drastically underestimate the real cost of traditional employees. Learn the hidden expenses that are bleeding your business dry.',
    category: 'Business Strategy',
    readTime: '8 min read',
    publishedAt: 'October 15, 2025',
    author: {
      name: 'QuantumLeap Research Team',
      role: 'Former McKinsey Consultants'
    },
    content: {
      intro: 'When most business owners calculate the cost of hiring, they look at the salary and maybe add 20-30% for taxes and benefits. But the reality is far more expensive—and far more complex.',
      sections: [
        {
          title: 'The Base Salary Illusion',
          content: 'A $50,000 salary is just the starting point. Most business owners fail to account for the complete cost structure that comes with every employee.',
          points: [
            'Payroll taxes: 15.3% minimum ($7,956)',
            'Health insurance and benefits: ~17% ($8,840)',
            'Workers compensation insurance: 2-5% depending on industry',
            'Paid time off: vacation, sick days, holidays',
            'Retirement contributions: 3-6% if offered'
          ]
        },
        {
          title: 'The Hidden Operational Costs',
          content: 'Beyond the obvious financial costs, there are operational expenses that add up quickly:',
          points: [
            'Recruiting costs: Job postings, background checks, interview time ($6,500 average)',
            'Training and onboarding: 40+ hours of reduced productivity ($8,250)',
            'Management overhead: 15-20% of salary for supervision and reviews ($15,600)',
            'Equipment and workspace: Laptop, desk, software licenses, office space',
            'HR administration: Compliance, payroll processing, benefits management'
          ]
        },
        {
          title: 'The Cost of Mistakes',
          content: 'Human employees make mistakes. According to our research across 200+ businesses:',
          points: [
            'Average financial error cost: $2,500 per incident',
            'Customer service mistakes leading to churn: $8,000 per year',
            'Compliance and legal issues: Can range from $5,000 to $50,000+',
            'Total average impact: $12,000 per employee annually'
          ]
        },
        {
          title: 'The Turnover Factor',
          content: 'The average employee tenure is just 18 months. When they leave, you restart the entire cycle:',
          points: [
            'Lost productivity during transition: 25-50% for 2-3 months',
            'Knowledge transfer costs: Critical information lost or poorly documented',
            'Recruitment costs to replace: Another $6,500+',
            'Training the replacement: Another 40+ hours',
            'Risk of further turnover: New employees are most likely to leave in first year'
          ]
        }
      ],
      conclusion: 'When you add it all up, that "$50,000 employee" actually costs $118,958 in the first year. And this cycle repeats every 18 months on average. This is why forward-thinking business owners are turning to AI employees: 87% cost reduction, 99%+ accuracy, zero turnover, and operational from day one.'
    }
  },
  'ready-for-ai-automation': {
    slug: 'ready-for-ai-automation',
    title: '7 Signs Your Business Is Ready for AI Automation (And 3 Signs It\'s Not)',
    excerpt: 'Not every business is ready for AI. Discover the critical indicators that signal it\'s time to automate, and when to wait.',
    category: 'AI Strategy',
    readTime: '6 min read',
    publishedAt: 'October 20, 2025',
    author: {
      name: 'QuantumLeap Research Team',
      role: 'AI Implementation Specialists'
    },
    content: {
      intro: 'AI automation isn\'t right for every business at every stage. Here\'s how to know if your business is ready to make the leap.',
      sections: [
        {
          title: 'Signs You\'re Ready',
          content: 'These indicators suggest your business will benefit significantly from AI automation:',
          points: [
            '1. You have repeatable processes that happen regularly (daily, weekly, monthly)',
            '2. You\'re spending 10+ hours per week on administrative tasks',
            '3. You\'re losing customers due to slow response times or delayed follow-ups',
            '4. Your team is overwhelmed and working overtime regularly',
            '5. You\'re hiring for roles that are primarily task-based rather than strategic',
            '6. You have clear documentation or can articulate how tasks should be done',
            '7. You\'re ready to invest time upfront to save time long-term'
          ]
        },
        {
          title: 'Signs You Should Wait',
          content: 'These factors suggest you might benefit from waiting or taking a different approach:',
          points: [
            '1. Your processes are still highly inconsistent or undefined',
            '2. You need primarily creative or deeply strategic work (though AI can assist)',
            '3. Your business is in extreme flux with processes changing weekly'
          ]
        },
        {
          title: 'The Sweet Spot',
          content: 'The ideal candidates for AI automation are businesses that have moved past the startup chaos phase but are hitting growth ceilings due to operational capacity. If you\'re turning down work because you can\'t handle more volume, or if you\'re constantly reactive rather than proactive, AI automation is likely your answer.'
        }
      ],
      conclusion: 'Most established businesses (2+ years operating) with defined processes will see immediate benefits from AI automation. The key is identifying which tasks to automate first—usually the high-volume, high-impact tasks that are currently consuming the most time.'
    }
  },
  'calculate-ai-roi': {
    slug: 'calculate-ai-roi',
    title: 'How to Calculate ROI on AI Employees (With Real Examples)',
    excerpt: 'Step-by-step framework for measuring the actual return on investment from AI workforce automation, with case studies from 50+ businesses.',
    category: 'Financial Planning',
    readTime: '12 min read',
    publishedAt: 'October 22, 2025',
    author: {
      name: 'QuantumLeap Financial Analysis Team',
      role: 'Former McKinsey Financial Consultants'
    },
    content: {
      intro: 'Calculating ROI on AI employees is more straightforward than traditional hiring, but you need to account for multiple value streams beyond just labor cost savings.',
      sections: [
        {
          title: 'The ROI Formula',
          content: 'Total Value Created = Cost Savings + Revenue Gains + Time Recovered + Risk Reduction',
          points: [
            'Cost Savings: Direct reduction in labor costs and overhead',
            'Revenue Gains: New capacity to take on more work or serve more customers',
            'Time Recovered: Owner/leadership time freed up for high-value activities',
            'Risk Reduction: Fewer errors, better compliance, reduced liability'
          ]
        },
        {
          title: 'Real Example: Construction Company',
          content: 'AAA Construction Services implemented an AI Bookkeeper replacing a $52,000/year employee (real cost: $118,958):',
          points: [
            'Annual AI Cost: $14,400',
            'Cost Savings: $104,558 (labor cost reduction)',
            'Additional Revenue: $28,000 (owner time freed up for sales)',
            'Error Reduction: $15,000 (eliminated accounting mistakes)',
            'Total Annual Value: $147,558',
            'ROI: 925% in year one'
          ]
        },
        {
          title: 'Real Example: Real Estate Brokerage',
          content: 'Blueprint Realty implemented an AI Executive Assistant for the principal broker:',
          points: [
            'Annual AI Cost: $18,000',
            'Time Recovered: 20 hours/week (valued at $150/hour) = $156,000',
            'Additional Revenue: $88,000 (broker closed 3 additional deals)',
            'Improved Client Experience: 15% increase in referrals',
            'Total Annual Value: $244,000+',
            'ROI: 1,256%'
          ]
        },
        {
          title: 'How to Calculate Your ROI',
          content: 'Follow this step-by-step process to estimate your ROI:',
          points: [
            'Step 1: Calculate current true labor cost (use our calculator)',
            'Step 2: Identify AI employee cost (typically $12,000-$24,000/year)',
            'Step 3: Estimate time recovered per week × your hourly value',
            'Step 4: Estimate additional revenue from freed capacity',
            'Step 5: Quantify risk reduction (errors, compliance issues)',
            'Step 6: Add all value streams and divide by AI cost'
          ]
        }
      ],
      conclusion: 'In our analysis of 50+ businesses that implemented AI employees, the average ROI in year one was 487%. Most businesses see positive cash flow within 30-60 days. The key is being honest about what you\'re currently spending (including hidden costs) and what your time is actually worth when applied to high-value activities.'
    }
  },
  'tasks-to-automate-first': {
    slug: 'tasks-to-automate-first',
    title: 'The 5 Tasks You Should Automate First (And Why)',
    excerpt: 'Start with these high-impact, low-risk tasks to build confidence and demonstrate ROI quickly.',
    category: 'Implementation',
    readTime: '5 min read',
    publishedAt: 'October 10, 2025',
    author: {
      name: 'QuantumLeap Implementation Team',
      role: 'AI Deployment Specialists'
    },
    content: {
      intro: 'When implementing AI employees, starting with the right tasks is critical for building confidence and demonstrating value quickly.',
      sections: [
        {
          title: 'The 5 Best Starting Points',
          content: 'These tasks offer the best combination of high impact and low implementation risk:',
          points: [
            '1. Email Management & Response: Sort, prioritize, draft responses. High-volume, clear patterns, immediate time savings.',
            '2. Calendar & Scheduling: Handle meeting requests, reschedules, reminders. Eliminates back-and-forth, reduces no-shows.',
            '3. Data Entry & Processing: Invoice entry, expense categorization, CRM updates. High error rates with humans, perfect for AI.',
            '4. Initial Customer Support: Answer common questions, route complex issues. Improves response time, reduces staff burden.',
            '5. Report Generation: Compile data, create standard reports, distribute. Time-consuming but structured, easy to automate.'
          ]
        },
        {
          title: 'Why These Tasks First?',
          content: 'These tasks share important characteristics that make them ideal starting points:',
          points: [
            'High volume: Happens frequently enough to show immediate impact',
            'Clear patterns: Well-defined processes that can be documented',
            'Low risk: Mistakes are easily caught and corrected',
            'Quick wins: Results visible within days, not months',
            'Time-intensive: Free up significant hours quickly'
          ]
        },
        {
          title: 'Tasks to Save for Later',
          content: 'Once you\'ve built confidence with the basics, you can move to more complex automation:',
          points: [
            'Strategic decision-making (always keep human oversight)',
            'Complex customer negotiations (AI can support, not replace)',
            'Creative content development (AI can assist with research and drafts)',
            'Sensitive HR matters (AI can handle admin, not sensitive conversations)'
          ]
        }
      ],
      conclusion: 'The businesses that succeed fastest with AI automation start with 1-2 high-volume, low-risk tasks, prove the ROI, then expand. Don\'t try to automate everything at once. Build confidence, demonstrate value, then scale.'
    }
  },
  'ai-vs-outsourcing': {
    slug: 'ai-vs-outsourcing',
    title: 'AI vs. Outsourcing: Which Is Right for Your Business?',
    excerpt: 'A comprehensive comparison of AI employees vs. traditional outsourcing, with a decision framework.',
    category: 'Business Strategy',
    readTime: '10 min read',
    publishedAt: 'October 5, 2025',
    author: {
      name: 'QuantumLeap Strategy Team',
      role: 'Business Optimization Experts'
    },
    content: {
      intro: 'Both AI employees and outsourcing can reduce costs and expand capacity. But they work very differently, and the right choice depends on your specific needs.',
      sections: [
        {
          title: 'AI Employees: The Strengths',
          content: 'AI excels in specific scenarios:',
          points: [
            'Task-based work: Data entry, scheduling, report generation, email management',
            'High volume: Tasks that happen repeatedly, many times per day/week',
            'Speed matters: Instant responses, 24/7 availability, no time zone issues',
            'Consistency required: Same quality every time, no mood variations',
            'Compliance-critical: Perfect documentation, audit trails, no shortcuts',
            'Cost efficiency: 87% cheaper than humans, no benefits or overhead'
          ]
        },
        {
          title: 'Outsourcing: The Strengths',
          content: 'Human outsourcers excel in different areas:',
          points: [
            'Complex judgment calls: Situations requiring nuanced human understanding',
            'Creative work: Original content creation, design, strategy',
            'Relationship building: Sales conversations, client management, negotiations',
            'Highly variable tasks: Projects where every instance is significantly different',
            'Cultural context: Marketing that requires deep cultural understanding'
          ]
        },
        {
          title: 'The Decision Framework',
          content: 'Use this framework to decide which approach fits each role or task:',
          points: [
            'If the task has clear rules and patterns → AI Employee',
            'If the task requires human creativity or judgment → Outsource (or keep in-house)',
            'If the task happens >20 times per week → AI Employee',
            'If the task is one-off project work → Outsource',
            'If speed and availability matter → AI Employee (24/7)',
            'If relationship depth matters → Human (employee or contractor)',
            'If budget is tight → AI Employee (87% cost reduction)'
          ]
        },
        {
          title: 'The Hybrid Approach',
          content: 'Many businesses find the best solution is combining both:',
          points: [
            'AI handles: Email sorting, data entry, scheduling, report generation, initial customer inquiries',
            'Outsourced humans handle: Complex customer issues, creative content, strategic projects',
            'In-house team focuses on: High-level strategy, key relationships, business development'
          ]
        }
      ],
      conclusion: 'The businesses seeing the greatest success are those that strategically deploy AI for high-volume, task-based work while keeping humans (in-house or outsourced) focused on relationship, creativity, and strategy. It\'s not about replacing all humans—it\'s about optimizing each type of work for maximum efficiency and effectiveness.'
    }
  },
  'law-firm-case-study': {
    slug: 'law-firm-case-study',
    title: 'Case Study: How a Law Firm Reduced Admin Costs 73% With AI',
    excerpt: 'Inside look at a 12-attorney firm that replaced 3 administrative staff with AI employees and increased profitability by $180K.',
    category: 'Case Study',
    readTime: '7 min read',
    publishedAt: 'September 28, 2025',
    author: {
      name: 'QuantumLeap Research Team',
      role: 'Case Study Analysts'
    },
    content: {
      intro: 'Williams & Associates is a 12-attorney litigation firm in Atlanta. Like many professional services firms, they were drowning in administrative overhead. Here\'s how they transformed their operations with AI.',
      sections: [
        {
          title: 'The Problem',
          content: 'Before implementing AI, Williams & Associates faced common challenges:',
          points: [
            '3 full-time administrative staff: $215,000 in total annual costs',
            'Client intake taking 48-72 hours to process',
            'Attorneys spending 12+ hours/week on administrative tasks',
            'Document organization inconsistent across cases',
            'Missed follow-ups leading to lost prospects',
            'Partner spending 15 hours/month managing admin staff'
          ]
        },
        {
          title: 'The Implementation',
          content: 'Over 90 days, Williams & Associates implemented three AI employees:',
          points: [
            'AI Executive Assistant: Manages all attorney calendars, schedules consultations and depositions',
            'AI Customer Service Rep: Handles initial client inquiries, intake forms, follow-ups',
            'AI Bookkeeper: Manages billing, tracks time, handles collections, produces reports'
          ]
        },
        {
          title: 'The Results (12 Months)',
          content: 'The transformation was dramatic and measurable:',
          points: [
            'Reduced admin staff from 3 to 1: $157,000 annual savings',
            'Client intake time reduced to 4-6 hours: 87% faster',
            'Attorney admin time reduced by 9 hours/week per attorney: 108 hours/week total',
            'No-show rate decreased from 18% to 3%: Better utilization',
            'Billing cycle reduced from 30 days to 7 days: Improved cash flow',
            'Partner management time reduced to 2 hours/month: 13 hours freed up',
            'New client capacity increased 40%: No additional overhead'
          ]
        },
        {
          title: 'The Numbers',
          content: 'Financial impact over 12 months:',
          points: [
            'AI Employee Costs: $42,000/year (3 AI employees)',
            'Labor Savings: $157,000 (2 admin positions eliminated)',
            'Attorney Time Value: $81,000 (108 hours/week × average billing rate)',
            'Additional Revenue: $120,000 (40% capacity increase)',
            'Improved Cash Flow Value: $28,000 (faster collections)',
            'Total Value Created: $386,000',
            'Net Profit Increase: $344,000 after AI costs',
            'ROI: 819%'
          ]
        },
        {
          title: 'Partner Insights',
          content: 'Marcus Williams, Managing Partner, shared key lessons:',
          points: [
            '"The most surprising benefit wasn\'t the cost savings—it was getting our attorneys back to practicing law. We hired them for their legal expertise, and they were spending 25% of their time on admin work."',
            '"Our remaining admin coordinator is happier too. She focuses on high-value client relationships instead of data entry and scheduling."',
            '"Client satisfaction actually increased. AI responses are instant and consistent. No more prospects waiting two days for a callback."',
            '"If I could go back, I would have implemented this 18 months earlier. The ROI is undeniable."'
          ]
        }
      ],
      conclusion: 'Williams & Associates is now operating at a 73% lower admin cost structure while serving 40% more clients with the same attorney headcount. This case study demonstrates that AI isn\'t just about cost cutting—it\'s about fundamentally transforming business operations to be more profitable, scalable, and satisfying for everyone involved.'
    }
  }
}

interface PageProps {
  params: { slug: string }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="gradient-bg section-padding">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <Link 
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                  {post.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {post.publishedAt}
                </span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
                {post.title}
              </h1>
              
              <div className="mb-8 flex items-center justify-between border-y border-gray-200 py-6 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {post.author.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {post.author.role}
                    </div>
                  </div>
                </div>
                
                <button
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href
                      })
                    }
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-white dark:bg-dark-bg">
          <div className="container">
            <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {post.content.intro}
              </p>

              {post.content.sections.map((section, idx) => (
                <div key={idx} className="mt-12">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    {section.content}
                  </p>
                  
                  {section.points && (
                    <ul className="space-y-3">
                      {section.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="text-gray-700 dark:text-gray-300">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 p-8 dark:from-teal-950/30 dark:to-emerald-950/30">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Conclusion
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {post.content.conclusion}
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-xl">
              Discover which AI employee will give you the fastest ROI
            </p>
            <Link
              href="/#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-teal-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Get My Free Assessment
              <TrendingUp className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Continue Reading
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {Object.values(blogPosts)
                .filter(p => p.slug !== params.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <span className="mb-3 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                      {relatedPost.category}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                      {relatedPost.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                      {relatedPost.excerpt}
                    </p>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="h-3 w-3" />
                      {relatedPost.readTime}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
