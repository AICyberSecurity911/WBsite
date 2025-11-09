
'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/smb/theme-context'
import { ThemeToggle } from '@/components/smb/theme-toggle'
import { HeroSection } from '@/components/smb/hero-section'
import { ScrollProgress } from '@/components/smb/scroll-progress'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  Award,
  Clock,
  Target,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  BookOpen,
  DollarSign,
  Lock as LockIcon,
  Clipboard,
  BarChart3,
  Rocket
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from '@/components/smb/theme-context'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Testimonials Data - 6 SPECIFIC TESTIMONIALS FROM REQUIREMENTS
const testimonials = [
  {
    name: "Peter Fernandes",
    title: "Owner",
    company: "AAA Construction Services",
    quote: "The AI bookkeeper caught a $15,000 accounting error our human bookkeeper missed three times. It paid for itself in the first month.",
    before: "70-hour weeks, constantly behind, growth stalled at $750K.",
    after: "Revenue hit $1.3M, work ON the business now, weekends off.",
    gradient: "from-accent-cyan to-accent-teal"
  },
  {
    name: "Harper L. Kingsley",
    title: "VP",
    company: "Adroit",
    quote: "Our AI assistant handles 80% of routine inquiries, freeing our human staff to focus on complex customer needs. Response times went from hours to seconds.",
    before: "Working 65-hour weeks, drowning in admin. My family barely saw me.",
    after: "Admin time cut in half. Revenue up 28%. I have my weekends back.",
    gradient: "from-accent-purple to-accent-pink"
  },
  {
    name: "Lydia V. Penrose",
    title: "Co-Founder",
    company: "Code Vibe Studio",
    quote: "We thought we were too small to be attacked. QuantumLeap found 19 vulnerabilities we fixed immediately. Three months later, we blocked a ransomware attack that would've cost us $500K.",
    before: "No security plan, no backups, just hoping for the best.",
    after: "Sleep at night knowing our data is actually protected. Avoided a $500K disaster.",
    gradient: "from-primary-accent to-accent-coral"
  },
  {
    name: "Gaurav Arora",
    title: "CEO",
    company: "Rudraksh Marketing",
    quote: "Our AI marketing manager handles social media scheduling, campaign tracking, and client reporting. What used to take my team 25 hours now runs automatically—and clients actually get reports faster.",
    before: "Junior staff burned out doing repetitive tasks, client reports always late, couldn't take on more accounts.",
    after: "Team focuses on strategy instead of busywork, reports delivered same-day, took on 4 new clients without hiring.",
    gradient: "from-accent-gold to-accent-lime"
  },
  {
    name: "Tiffany Duncan",
    title: "Director",
    company: "Talent Leap AI",
    quote: "Standard background check was clean. QuantumLeap's investigation revealed the candidate was tied to criminal groups and active on the Dark Web. We dodged a bullet that would've cost us major client relationships.",
    before: "Nearly hired someone with hidden fraud history that standard checks missed.",
    after: "Saved us from a $200K+ disaster. Found court records under a different name.",
    gradient: "from-accent-teal to-accent-cyan"
  },
  {
    name: "Dr. Mann",
    title: "Owner",
    company: "Sterling Dentistry",
    quote: "The AI assistant handles appointment scheduling, insurance verification, and patient follow-ups 24/7. We're booking patients at 9 PM on Sundays—times we used to lose business.",
    before: "Missing calls after hours, losing patients to competitors who answered first, front desk always behind.",
    after: "Never miss a patient call, booking rate up 34%, front desk finally has time for in-office patients.",
    gradient: "from-accent-purple to-accent-gold"
  }
]

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-rotation effect
  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        nextTestimonial()
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isHovered, currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            rounded-2xl p-8 md:p-12 border
            ${theme === 'dark'
              ? 'bg-gradient-to-br from-secondary-bg to-primary-bg border-accent-cyan/30'
              : 'bg-[#f3f3f3] border-gray-400'
            }
            shadow-2xl
          `}
        >
          {/* Top Section: Name + Title (NO INITIALS) */}
          <div className="flex flex-col items-center text-center mb-8">
            {/* Full Name - Prominent */}
            <h4 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#111111]'}`}>
              {currentTestimonial.name}
            </h4>
            
            {/* Title | Company - Smaller, Colored */}
            <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#14b8a6]'}`}>
              {currentTestimonial.title} | {currentTestimonial.company}
            </p>
          </div>

          {/* Stars Rating */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent-gold fill-accent-gold" />
            ))}
          </div>

          {/* Quote Section - Prominent */}
          <div className="mb-8">
            <blockquote className={`text-xl md:text-2xl font-semibold italic text-center leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-[#111111]'}`}>
              "{currentTestimonial.quote}"
            </blockquote>
          </div>

          {/* Before/After Sections */}
          <div className="space-y-6">
            {/* BEFORE */}
            <div className={`
              rounded-xl p-6 border
              ${theme === 'dark'
                ? 'bg-red-500/10 border-red-500/30'
                : 'bg-red-50 border-red-300'
              }
            `}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-[#ffcd38] text-[#111111]'}`}>
                  BEFORE
                </span>
              </div>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-[#111111]'}`}>
                {currentTestimonial.before}
              </p>
            </div>

            {/* AFTER */}
            <div className={`
              rounded-xl p-6 border
              ${theme === 'dark'
                ? 'bg-accent-lime/10 border-accent-lime/30'
                : 'bg-green-50 border-green-300'
              }
            `}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-accent-lime/20 text-accent-lime' : 'bg-[#ffcd38] text-[#111111]'}`}>
                  AFTER
                </span>
              </div>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-[#111111]'}`}>
                {currentTestimonial.after}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 hover:scale-110
          ${theme === 'dark'
            ? 'bg-accent-cyan/20 hover:bg-accent-cyan/40 text-accent-cyan border border-accent-cyan/50'
            : 'bg-[#14b8a6]/20 hover:bg-[#14b8a6]/40 text-[#14b8a6] border border-[#14b8a6]/50'
          }
        `}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextTestimonial}
        className={`
          absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 hover:scale-110
          ${theme === 'dark'
            ? 'bg-accent-cyan/20 hover:bg-accent-cyan/40 text-accent-cyan border border-accent-cyan/50'
            : 'bg-[#14b8a6]/20 hover:bg-[#14b8a6]/40 text-[#14b8a6] border border-[#14b8a6]/50'
          }
        `}
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentIndex
                ? theme === 'dark'
                  ? 'bg-accent-cyan w-8'
                  : 'bg-[#14b8a6] w-8'
                : theme === 'dark'
                  ? 'bg-gray-600 hover:bg-gray-500'
                  : 'bg-gray-400 hover:bg-gray-500'
              }
            `}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={togglePlayPause}
          className={`
            px-6 py-3 rounded-full flex items-center gap-2 font-semibold
            transition-all duration-300 hover:scale-105
            ${theme === 'dark'
              ? 'bg-accent-cyan/20 hover:bg-accent-cyan/30 text-accent-cyan border border-accent-cyan/50'
              : 'bg-[#14b8a6]/20 hover:bg-[#14b8a6]/30 text-[#14b8a6] border border-[#14b8a6]/50'
            }
          `}
          aria-label={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
        >
          {isPlaying ? (
            <>
              <span className="text-lg">⏸️</span>
              <span className="text-sm">Pause</span>
            </>
          ) : (
            <>
              <span className="text-lg">▶️</span>
              <span className="text-sm">Play</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

// FAQ Section Component
function FAQSection() {
  const { theme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How quickly can I see results?",
      answer: "Most clients save 10+ hours in the first week. Full automation setup is complete within 48 hours, and you'll start seeing measurable ROI within 30 days."
    },
    {
      question: "Do I need technical skills?",
      answer: "Absolutely not. We handle all the technical setup. If you can use email, you can use QuantumLeap AI. Our team does the heavy lifting."
    },
    {
      question: "What if it doesn't work for my business?",
      answer: "We offer a 30-day money-back guarantee, no questions asked. If you're not saving time and money, you get a full refund."
    },
    {
      question: "How is this different from hiring a VA?",
      answer: "AI employees work 24/7 without breaks, never call in sick, require zero training, and cost 90% less. Plus, they're consistent and never make emotional decisions."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use NASA-recognized security protocols, SOC 2 compliance, and 256-bit encryption. Your data is more secure with us than on your own servers."
    },
    {
      question: "Can I start small and scale up?",
      answer: "Absolutely. Start with one workflow automation, see the results, then expand. You're in complete control of how fast you grow."
    }
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border rounded-xl overflow-hidden transition-all duration-300
            ${theme === 'dark'
              ? 'bg-gradient-to-br from-secondary-bg to-primary-bg border-accent-cyan/30 hover:border-accent-cyan'
              : 'bg-[#f3f3f3] border-gray-400 hover:border-[#14b8a6]'
            }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
          >
            <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#008080]'}`}>
              {faq.question}
            </h3>
            <ChevronDown
              className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              } ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#14b8a6]'}`}
            />
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`px-6 pb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-[#111111]'}`}>
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

// Blog Section Component
function BlogSection() {
  const { theme } = useTheme()

  const blogPosts = [
    {
      title: "5 Signs You're Ready to Automate Your Business",
      excerpt: "Are you working 60+ hour weeks? Missing family time? Here's how to know when it's time to let AI handle the grunt work.",
      link: "/blog/signs-ready-to-automate"
    },
    {
      title: "The Hidden Cost of Bad Hires (And How to Avoid Them)",
      excerpt: "One bad hire can cost you 6 months of revenue. Learn what background checks miss and how to protect your business.",
      link: "/blog/hidden-cost-bad-hires"
    },
    {
      title: "Small Business Cybersecurity: You're Not Too Small to Be a Target",
      excerpt: "43% of cyberattacks target small businesses. Here's why hackers love SMBs and how to protect yourself without breaking the bank.",
      link: "/blog/smb-cybersecurity"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <Link key={index} href={post.link} className="group">
          <div className={`h-full border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
            ${theme === 'dark'
              ? 'bg-gradient-to-br from-secondary-bg to-primary-bg border-accent-cyan/30 hover:border-accent-cyan hover:shadow-accent-cyan/20'
              : 'bg-[#f3f3f3] border-gray-400 hover:border-[#14b8a6] hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className={`w-8 h-8 ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#14b8a6]'}`} />
              <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#14b8a6]'}`}>
                ARTICLE
              </span>
            </div>
            
            <h3 className={`text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors
              ${theme === 'dark' ? 'text-white' : 'text-[#008080]'}`}
            >
              {post.title}
            </h3>
            
            <p className={`leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-[#111111]'}`}>
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-2 text-sm font-semibold text-accent-cyan group-hover:gap-3 transition-all">
              Read More
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function SMBLandingPage() {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Schema markup for SEO/AEO/AGO
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Small Business AI Solutions - QuantumLeap AI",
    "description": "Stop doing everything yourself. Get Fortune 500-level AI workforce and intelligence protection at prices that make sense for your business. Join 200+ owners who escaped the 70-hour work week.",
    "url": "https://quantumleapai.abacusai.app/smb",
    "provider": {
      "@type": "Organization",
      "name": "QuantumLeap AI",
      "url": "https://quantumleapai.abacusai.app"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Workforce for Small Business",
        "description": "Your on-demand team of AI experts to handle tasks automatically",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Intelligent Automation for SMBs",
        "description": "Save hours every week with custom business automations",
        "priceCurrency": "USD"
      }
    ]
  }

  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      <ScrollProgress />
      
      {/* Hide Header's built-in toggle on SMB page */}
      <style jsx global>{`
        .smb-page header button[aria-label="Toggle theme"] {
          display: none !important;
        }
      `}</style>
      
      <div className="smb-page min-h-screen transition-colors duration-300 dark:bg-[#0A0E27] bg-[#f3f3f3]">
        {/* Header with Theme Toggle */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#f3f3f3]/80 dark:bg-[#0A0E27]/80 border-b border-gray-300 dark:border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Header />
              <ThemeToggle />
            </div>
          </div>
        </header>
        
        <main>
          {/* Hero Section - NEW DESIGN */}
          <HeroSection />

          {/* Services Preview Section */}
          <section 
            ref={servicesRef}
            className="py-20 md:py-32 dark:bg-gradient-to-b dark:from-secondary-bg dark:via-primary-bg/10 dark:to-secondary-bg bg-gradient-to-b from-[#e5e7eb] to-[#f3f3f3]"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-[#008080] mb-4">
                    5 Ways AI Automation Helps Small Businesses Stop Drowning in Busywork
                  </h2>
                  <p className="text-lg dark:text-gray-300 text-[#111111] max-w-2xl mx-auto">
                    Pick what's bleeding the most time and money. Start there. Add more as you grow.
                  </p>
                </motion.div>

                {/* Services Grid - ALL CARDS UNIFORM WITH COLORED BACKGROUNDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Card 1: AI Workforce - Deep Purple */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/ai-workforce" className="block group h-full">
                      <div className="relative bg-gradient-to-br from-[#6366f1] to-[#4f46e5] hover:from-[#7c7ff6] hover:to-[#6366f1] border border-[#6366f1]/50 hover:border-[#8b8ff8] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/30 h-full flex flex-col">
                        {/* Icon with proper spacing */}
                        <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title with proper spacing */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                          Stop Doing Everything Yourself with AI Employees
                        </h3>
                        
                        {/* Description with proper spacing */}
                        <p className="text-white/90 leading-relaxed mb-4">
                          Your AI team handles bookkeeping, lead follow-up, scheduling, and customer service—24/7. No hiring. No training. No drama. Just reliable help that costs 87% less than one employee.
                        </p>
                        
                        {/* Key Benefits */}
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>24/7 availability (never miss a lead)</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>99.2% accuracy rate</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>87% cost savings vs. human employees</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Deploys in 48 hours</span>
                          </li>
                        </ul>
                        
                        <div className="mt-auto pt-4 flex items-center gap-2 text-white font-semibold">
                          <span>Learn More About AI Workforce</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 2: Intelligent Automation - Teal */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/intelligent-automation" className="block group h-full">
                      <div className="relative bg-gradient-to-br from-[#14b8a6] to-[#0d9488] hover:from-[#2dd4bf] hover:to-[#14b8a6] border border-[#14b8a6]/50 hover:border-[#2dd4bf] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#14b8a6]/30 h-full flex flex-col">
                        {/* Icon with proper spacing */}
                        <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title with proper spacing */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                          Eliminate Repetitive Tasks That Waste 20+ Hours Weekly
                        </h3>
                        
                        {/* Description with proper spacing */}
                        <p className="text-white/90 leading-relaxed mb-4">
                          Stop copying data between spreadsheets. Stop chasing invoices. Stop sending the same emails 50 times. Automation handles it while you sleep. Average savings: 20+ hours per week.
                        </p>
                        
                        {/* Key Benefits */}
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Connects all your business tools</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Eliminates manual data entry</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Automates invoice follow-ups</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Saves 20+ hours weekly</span>
                          </li>
                        </ul>
                        
                        <div className="mt-auto pt-4 flex items-center gap-2 text-white font-semibold">
                          <span>Learn More About Business Automation</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 3: Beyond Background Checks - Blue */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/background-checks" className="block group h-full">
                      <div className="relative bg-gradient-to-br from-[#3b82f6] to-[#2563eb] hover:from-[#60a5fa] hover:to-[#3b82f6] border border-[#3b82f6]/50 hover:border-[#60a5fa] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/30 h-full flex flex-col">
                        {/* Icon with proper spacing */}
                        <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title with proper spacing */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                          Avoid Hiring Mistakes That Cost $200K+ in Damage
                        </h3>
                        
                        {/* Description with proper spacing */}
                        <p className="text-white/90 leading-relaxed mb-4">
                          Standard background checks only catch criminals who got caught. We find the liars, fraudsters, and problem employees BEFORE they cost you $200K in damage. One check can save your business.
                        </p>
                        
                        {/* Key Benefits */}
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Finds hidden criminal records</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Detects fake credentials</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Uncovers dark web activity</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Prevents disastrous hires</span>
                          </li>
                        </ul>
                        
                        <div className="mt-auto pt-4 flex items-center gap-2 text-white font-semibold">
                          <span>Learn More About Deep Background Checks</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 4: Cyber Intelligence - Indigo */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/cyber-intelligence" className="block group h-full">
                      <div className="relative bg-gradient-to-br from-[#4f46e5] to-[#4338ca] hover:from-[#6366f1] hover:to-[#4f46e5] border border-[#4f46e5]/50 hover:border-[#6366f1] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#4f46e5]/30 h-full flex flex-col">
                        {/* Icon with proper spacing */}
                        <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                          <LockIcon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title with proper spacing */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                          Protect Your Small Business Before Hackers Hold It Hostage
                        </h3>
                        
                        {/* Description with proper spacing */}
                        <p className="text-white/90 leading-relaxed mb-4">
                          Hackers target small businesses because you're unguarded. One breach = $80K+ ransom, lost clients, destroyed reputation. We find and fix vulnerabilities before criminals exploit them.
                        </p>
                        
                        {/* Key Benefits */}
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>NASA-recognized security protocols</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Finds vulnerabilities before hackers do</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Prevents $80K+ ransomware attacks</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Custom security for your business</span>
                          </li>
                        </ul>
                        
                        <div className="mt-auto pt-4 flex items-center gap-2 text-white font-semibold">
                          <span>Learn More About Cybersecurity</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 5: Business Transformation - Green */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/business-transformation" className="block group h-full">
                      <div className="relative bg-gradient-to-br from-[#10b981] to-[#059669] hover:from-[#34d399] hover:to-[#10b981] border border-[#10b981]/50 hover:border-[#34d399] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#10b981]/30 h-full flex flex-col">
                        {/* Icon with proper spacing */}
                        <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title with proper spacing */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                          Build Systems That Let Your Business Run Without You
                        </h3>
                        
                        {/* Description with proper spacing */}
                        <p className="text-white/90 leading-relaxed mb-4">
                          Revenue growing but you're still the bottleneck? We build the systems, workflows, and automations that let you scale profitably—without working more hours or micromanaging everything.
                        </p>
                        
                        {/* Key Benefits */}
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Custom operational systems</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Eliminate decision bottlenecks</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>Scale without working more</span>
                          </li>
                          <li className="flex items-start gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                            <span>90-180 day transformation</span>
                          </li>
                        </ul>
                        
                        <div className="mt-auto pt-4 flex items-center gap-2 text-white font-semibold">
                          <span>Learn More About Business Transformation</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Trust Bar Section */}
          <TrustBarSection />

          {/* How It Works Section */}
          <section className="py-20 md:py-32 dark:bg-gradient-to-b dark:from-primary-bg/10 dark:to-secondary-bg bg-gradient-to-b from-[#e5e7eb] to-[#f3f3f3]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-[#008080] mb-4">
                    How Small Businesses Automate in 3 Simple Steps
                  </h2>
                  <p className="text-xl dark:text-gray-300 text-[#111111] mb-2">
                    (From Overwhelmed to Automated in 14 Days)
                  </p>
                  <p className="text-lg dark:text-gray-400 text-[#111111] max-w-3xl mx-auto mt-4">
                    Getting started with business automation doesn't require technical skills or weeks of implementation. Our proven 3-step process has helped over 200 small businesses reclaim 25+ hours per week. Here's exactly how it works:
                  </p>
                </div>

                {/* 3 Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Step 1 */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`p-6 rounded-2xl ${
                        useTheme().theme === 'dark' 
                          ? 'bg-accent-cyan/10 border border-accent-cyan/30' 
                          : 'bg-[#14b8a6]/10 border border-[#14b8a6]/30'
                      }`}>
                        <Clipboard className={`w-12 h-12 ${
                          useTheme().theme === 'dark' ? 'text-accent-cyan' : 'text-[#14b8a6]'
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-4">
                        Step 1: Free Business Automation Assessment
                      </h3>
                      <p className="text-sm dark:text-gray-400 text-gray-600 mb-4">
                        (15 Minutes)
                      </p>
                      <p className="text-base dark:text-gray-300 text-[#111111] leading-relaxed mb-6">
                        We analyze where you're losing the most time and money in your business operations. Zero pressure. Zero sales pitch. Just honest insights into what's actually costing you hours every week.
                      </p>
                    </div>

                    {/* What Happens Box */}
                    <div className={`p-6 rounded-xl ${
                      useTheme().theme === 'dark'
                        ? 'bg-secondary-bg/50 border border-accent-cyan/20'
                        : 'bg-white border border-gray-300'
                    }`}>
                      <h4 className="text-sm font-bold dark:text-accent-cyan text-[#14b8a6] mb-3">
                        What happens:
                      </h4>
                      <ul className="space-y-2 text-sm dark:text-gray-400 text-[#111111]">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-cyan text-[#14b8a6]" />
                          <span>Video call with automation specialist</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-cyan text-[#14b8a6]" />
                          <span>We map your current workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-cyan text-[#14b8a6]" />
                          <span>Identify top 3 time-drains</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-cyan text-[#14b8a6]" />
                          <span>Show potential time savings</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`p-6 rounded-2xl ${
                        useTheme().theme === 'dark' 
                          ? 'bg-primary-accent/10 border border-primary-accent/30' 
                          : 'bg-[#ff5440]/10 border border-[#ff5440]/30'
                      }`}>
                        <BarChart3 className={`w-12 h-12 ${
                          useTheme().theme === 'dark' ? 'text-primary-accent' : 'text-[#ff5440]'
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-4">
                        Step 2: Custom Automation Blueprint
                      </h3>
                      <p className="text-sm dark:text-gray-400 text-gray-600 mb-4">
                        (Delivered in 48 Hours)
                      </p>
                      <p className="text-base dark:text-gray-300 text-[#111111] leading-relaxed mb-6">
                        We create a detailed plan showing exactly what to automate first for maximum ROI. You see the timeline, the cost, and the expected time savings before you approve anything.
                      </p>
                    </div>

                    {/* What You Get Box */}
                    <div className={`p-6 rounded-xl ${
                      useTheme().theme === 'dark'
                        ? 'bg-secondary-bg/50 border border-primary-accent/20'
                        : 'bg-white border border-gray-300'
                    }`}>
                      <h4 className="text-sm font-bold dark:text-primary-accent text-[#ff5440] mb-3">
                        What you get:
                      </h4>
                      <ul className="space-y-2 text-sm dark:text-gray-400 text-[#111111]">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-primary-accent text-[#ff5440]" />
                          <span>Priority automation list</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-primary-accent text-[#ff5440]" />
                          <span>Cost breakdown</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-primary-accent text-[#ff5440]" />
                          <span>Expected time savings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-primary-accent text-[#ff5440]" />
                          <span>Implementation timeline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-primary-accent text-[#ff5440]" />
                          <span>Nothing starts without your approval</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`p-6 rounded-2xl ${
                        useTheme().theme === 'dark' 
                          ? 'bg-accent-lime/10 border border-accent-lime/30' 
                          : 'bg-green-100 border border-green-300'
                      }`}>
                        <Rocket className={`w-12 h-12 ${
                          useTheme().theme === 'dark' ? 'text-accent-lime' : 'text-green-600'
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-4">
                        Step 3: Build, Test, Launch
                      </h3>
                      <p className="text-sm dark:text-gray-400 text-gray-600 mb-4">
                        (Live Within 2 Weeks)
                      </p>
                      <p className="text-base dark:text-gray-300 text-[#111111] leading-relaxed mb-6">
                        We handle all the technical work. You and your team get trained on the new systems. Most clients see time savings in the first week.
                      </p>
                    </div>

                    {/* What We Do Box */}
                    <div className={`p-6 rounded-xl ${
                      useTheme().theme === 'dark'
                        ? 'bg-secondary-bg/50 border border-accent-lime/20'
                        : 'bg-white border border-gray-300'
                    }`}>
                      <h4 className="text-sm font-bold dark:text-accent-lime text-green-600 mb-3">
                        What we do:
                      </h4>
                      <ul className="space-y-2 text-sm dark:text-gray-400 text-[#111111]">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-lime text-green-600" />
                          <span>Build automations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-lime text-green-600" />
                          <span>Test everything</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-lime text-green-600" />
                          <span>Train your team</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-lime text-green-600" />
                          <span>Monitor for 30 days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-accent-lime text-green-600" />
                          <span>Ongoing optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                  <Link 
                    href="/consultation"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      useTheme().theme === 'dark'
                        ? 'bg-gradient-to-r from-primary-accent to-accent-coral text-white hover:shadow-primary-accent/50'
                        : 'bg-gradient-to-r from-[#ff5440] to-[#ff6b6b] text-white hover:shadow-lg'
                    }`}
                  >
                    Start My Free Assessment
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Carousel Section */}
          <section 
            ref={testimonialsRef}
            className="py-20 md:py-32 dark:bg-gradient-to-b dark:from-secondary-bg dark:to-primary-bg/10 bg-gradient-to-b from-[#f3f3f3] to-[#e5e7eb]"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate={testimonialsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-[#008080] mb-4">
                    Real Small Business Owners Share How AI Automation Gave Them Their Lives Back
                  </h2>
                  <p className="text-lg dark:text-gray-300 text-[#111111] max-w-2xl mx-auto">
                    See what happens when you stop doing everything yourself. Real results from real entrepreneurs in your position.
                  </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <TestimonialsCarousel />
              </motion.div>
            </div>
          </section>


          {/* FAQ Section */}
          <section className="py-20 md:py-32 dark:bg-gradient-to-b dark:from-secondary-bg dark:to-primary-bg/10 bg-gradient-to-b from-[#f3f3f3] to-[#e5e7eb]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-[#008080] mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg dark:text-gray-300 text-[#111111]">
                    Everything you need to know before getting started
                  </p>
                </div>

                <FAQSection />
              </div>
            </div>
          </section>

          {/* Blog/Resources Section */}
          <section className="py-20 md:py-32 dark:bg-gradient-to-b dark:from-primary-bg/10 dark:to-secondary-bg bg-gradient-to-b from-[#e5e7eb] to-[#f3f3f3]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-[#008080] mb-4">
                    Latest Insights
                  </h2>
                  <p className="text-lg dark:text-gray-300 text-[#111111]">
                    Learn how to transform your business with AI and automation
                  </p>
                </div>

                <BlogSection />
              </div>
            </div>
          </section>

          {/* Urgency & Final CTA Section */}
          <section className="py-20 md:py-32 dark:bg-gradient-to-b dark:from-primary-bg/10 dark:to-secondary-bg bg-gradient-to-b from-[#f3f3f3] to-[#e5e7eb] relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-primary-accent to-accent-purple animate-gradient-shift" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div variants={fadeInUp} className="mb-8">
                  <Clock className="w-16 h-16 mx-auto dark:text-primary-accent text-[#ff5440] mb-6" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-[#008080] mb-6">
                    Ready to Get Your Time Back?
                  </h2>
                  <p className="text-xl dark:text-gray-300 text-[#111111] mb-4">
                    Stop working <span className="dark:text-primary-accent text-[#ff5440] font-bold">IN</span> your business. Start working <span className="dark:text-accent-cyan text-[#14b8a6] font-bold">ON</span> your business.
                  </p>
                  <p className="text-lg dark:text-gray-400 text-[#111111] max-w-2xl mx-auto">
                    Over 200 entrepreneurs have already taken back control. The only question is: how much longer can you afford to wait?
                  </p>
                </motion.div>

                {/* Urgency indicators */}
                <motion.div 
                  variants={fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                  <div className="dark:bg-secondary-bg/80 bg-[#f3f3f3] border dark:border-accent-cyan/30 border-gray-400 rounded-xl p-6 shadow-lg">
                    <CheckCircle className="w-8 h-8 dark:text-accent-lime text-green-600 mx-auto mb-3" />
                    <p className="dark:text-white text-[#111111] font-semibold mb-1">Fast Setup</p>
                    <p className="dark:text-gray-400 text-[#111111] text-sm">Live in 48 hours</p>
                  </div>
                  <div className="dark:bg-secondary-bg/80 bg-[#f3f3f3] border dark:border-accent-purple/30 border-gray-400 rounded-xl p-6 shadow-lg">
                    <Target className="w-8 h-8 dark:text-accent-purple text-[#14b8a6] mx-auto mb-3" />
                    <p className="dark:text-white text-[#111111] font-semibold mb-1">Zero Risk</p>
                    <p className="dark:text-gray-400 text-[#111111] text-sm">30-day guarantee</p>
                  </div>
                  <div className="dark:bg-secondary-bg/80 bg-[#f3f3f3] border dark:border-primary-accent/30 border-gray-400 rounded-xl p-6 shadow-lg">
                    <Award className="w-8 h-8 dark:text-primary-accent text-[#ff5440] mx-auto mb-3" />
                    <p className="dark:text-white text-[#111111] font-semibold mb-1">Real Results</p>
                    <p className="dark:text-gray-400 text-[#111111] text-sm">Proven ROI</p>
                  </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div variants={fadeInUp}>
                  <Link 
                    href="/consultation"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#ff5440] via-[#ff6b6b] to-[#ff5440] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-[#ff5440]/50 transition-all duration-500 transform hover:scale-105"
                  >
                    Claim My Spot
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                  <p className="dark:text-gray-400 text-[#111111] text-sm mt-4">
                    Free consultation • No obligations • Results guaranteed
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}