
'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/smb/theme-context'
import { ThemeToggle } from '@/components/smb/theme-toggle'
import { HeroSection } from '@/components/smb/hero-section'
import { ScrollProgress } from '@/components/smb/scroll-progress'
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
  Calculator
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

// Testimonials Data
const testimonials = [
  {
    name: "Harper L. Kingsley",
    title: "Founder",
    company: "Adroit",
    initials: "HK",
    before: "Working 65-hour weeks, drowning in admin tasks. My family barely saw me. Growth was stalled because I couldn't focus on strategy.",
    after: "QuantumLeap AI cut my admin time in half. I have my weekends back, and revenue is up 28%. My team actually enjoys coming to work now because we're not constantly firefighting.",
    gradient: "from-accent-cyan to-accent-teal"
  },
  {
    name: "Lydia V. Penrose",
    title: "CTO",
    company: "Code Vibe Studio",
    initials: "LP",
    before: "We thought we were too small for a cyberattack. No security plan, no backups, just hoping for the best.",
    after: "QuantumLeap found 19 vulnerabilities we fixed immediately. That peace of mind is priceless. Now I sleep at night knowing our clients' data is actually protected.",
    gradient: "from-accent-purple to-accent-pink"
  },
  {
    name: "Tiffany Duncan",
    title: "CEO",
    company: "Talent Leap AI",
    initials: "TD",
    before: "I nearly hired someone with a hidden history of fraud that a standard background check missed completely. My gut said something was off, but the paperwork looked clean.",
    after: "QuantumLeap flagged it instantly and saved us from a disaster. They found court records under a different name, social media posts bragging about scams—stuff no regular check would catch. Worth every penny.",
    gradient: "from-primary-accent to-accent-coral"
  },
  {
    name: "Marcus Chen",
    title: "Operations Director",
    company: "Swift Logistics",
    initials: "MC",
    before: "Manual data entry was eating 15 hours of my week. We were making costly errors and missing shipment deadlines.",
    after: "Their automation handles everything now. Zero errors, instant updates, and I finally have time to focus on growing the business instead of putting out fires.",
    gradient: "from-accent-gold to-accent-lime"
  },
  {
    name: "Sarah Mitchell",
    title: "Founder",
    company: "Bloom Marketing",
    initials: "SM",
    before: "Juggling 8 clients manually meant I was working nights and weekends. Couldn't take on more business without hiring expensive staff.",
    after: "With QuantumLeap's AI workforce, I've doubled my client capacity without hiring anyone. My profit margins went from 20% to 45% in 4 months.",
    gradient: "from-accent-teal to-accent-cyan"
  },
  {
    name: "James Rodriguez",
    title: "Owner",
    company: "Rodriguez Construction",
    initials: "JR",
    before: "Losing track of projects, missed invoices, constant communication breakdowns with my crew. It was chaos.",
    after: "Everything's centralized and automated now. My crew knows what to do, invoices go out on time, and I can actually take a vacation without everything falling apart.",
    gradient: "from-accent-purple to-accent-gold"
  }
]

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { theme } = useTheme()

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

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
          className={`
            rounded-2xl p-8 md:p-12 border
            ${theme === 'dark'
              ? 'bg-gradient-to-br from-secondary-bg to-primary-bg border-accent-cyan/30'
              : 'bg-white border-gray-300'
            }
            shadow-2xl
          `}
        >
          {/* Top Section: Initials + Name + Title */}
          <div className="flex flex-col items-center text-center mb-8">
            {/* Initials Badge */}
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg`}>
              {currentTestimonial.initials}
            </div>
            
            {/* Name */}
            <h4 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#111111]'}`}>
              {currentTestimonial.name}
            </h4>
            
            {/* Title | Company */}
            <p className={`text-lg ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#14b8a6]'}`}>
              {currentTestimonial.title} | {currentTestimonial.company}
            </p>
          </div>

          {/* Stars Rating */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent-gold fill-accent-gold" />
            ))}
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
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-200 text-red-700'}`}>
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
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${theme === 'dark' ? 'bg-accent-lime/20 text-accent-lime' : 'bg-green-200 text-green-700'}`}>
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
    </div>
  )
}

// ROI Calculator Component
function ROICalculator() {
  const { theme } = useTheme()
  const [hoursPerWeek, setHoursPerWeek] = useState(20)
  const [hourlyRate, setHourlyRate] = useState(50)
  const [teamSize, setTeamSize] = useState(1)

  const weeklyTimeSaved = hoursPerWeek * 0.7 // 70% time savings
  const weeklyCostSavings = weeklyTimeSaved * hourlyRate * teamSize
  const yearlyCostSavings = weeklyCostSavings * 52

  return (
    <div className="space-y-8">
      {/* Input Fields */}
      <div className="space-y-6">
        <div>
          <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#111111]'}`}>
            Hours spent on admin per week
          </label>
          <input
            type="range"
            min="5"
            max="60"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#ff5440]"
          />
          <div className={`text-right mt-1 text-2xl font-bold ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#ff5440]'}`}>
            {hoursPerWeek} hours
          </div>
        </div>

        <div>
          <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#111111]'}`}>
            Your hourly rate ($)
          </label>
          <input
            type="range"
            min="25"
            max="200"
            step="5"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#ff5440]"
          />
          <div className={`text-right mt-1 text-2xl font-bold ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#ff5440]'}`}>
            ${hourlyRate}/hr
          </div>
        </div>

        <div>
          <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#111111]'}`}>
            Team size
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#ff5440]"
          />
          <div className={`text-right mt-1 text-2xl font-bold ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#ff5440]'}`}>
            {teamSize} {teamSize === 1 ? 'person' : 'people'}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className={`border-t-2 pt-8 ${theme === 'dark' ? 'border-accent-cyan/30' : 'border-[#14b8a6]/30'}`}>
        <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#008080]'}`}>
          Your Potential Savings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-accent-cyan/10 border border-accent-cyan/30' : 'bg-[#14b8a6]/10 border border-[#14b8a6]/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              <Clock className={`w-5 h-5 ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#14b8a6]'}`} />
              <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-[#111111]'}`}>
                Time Saved/Week
              </p>
            </div>
            <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-accent-cyan' : 'text-[#ff5440]'}`}>
              {weeklyTimeSaved.toFixed(1)} hrs
            </p>
          </div>

          <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-primary-accent/10 border border-primary-accent/30' : 'bg-[#ff5440]/10 border border-[#ff5440]/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className={`w-5 h-5 ${theme === 'dark' ? 'text-primary-accent' : 'text-[#ff5440]'}`} />
              <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-[#111111]'}`}>
                Money Saved/Week
              </p>
            </div>
            <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-primary-accent' : 'text-[#ff5440]'}`}>
              ${weeklyCostSavings.toLocaleString()}
            </p>
          </div>

          <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-accent-lime/10 border border-accent-lime/30' : 'bg-green-100 border border-green-300'}`}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className={`w-5 h-5 ${theme === 'dark' ? 'text-accent-lime' : 'text-green-600'}`} />
              <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-[#111111]'}`}>
                Money Saved/Year
              </p>
            </div>
            <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-accent-lime' : 'text-green-600'}`}>
              ${yearlyCostSavings.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link 
          href="/consultation"
          className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg
            ${theme === 'dark'
              ? 'bg-gradient-to-r from-primary-accent to-accent-coral text-white hover:shadow-primary-accent/50'
              : 'bg-gradient-to-r from-[#ff5440] to-[#ff6b6b] text-white hover:shadow-lg'
            }`}
        >
          <Calculator className="w-6 h-6" />
          Start Saving Now
        </Link>
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
              : 'bg-white border-gray-300 hover:border-[#14b8a6]'
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
              : 'bg-white border-gray-300 hover:border-[#14b8a6] hover:shadow-lg'
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
      
      <div className="min-h-screen transition-colors duration-300 dark:bg-[#0A0E27] bg-[#f3f3f3]">
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
                    Your Complete Small Business Toolkit
                  </h2>
                  <p className="text-lg dark:text-gray-300 text-[#111111] max-w-2xl mx-auto">
                    Everything you need to run your business like the big players—without the enterprise price tag.
                  </p>
                </motion.div>

                {/* Services Grid - ALL CARDS UNIFORM */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Card 1: AI Workforce */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/ai-workforce" className="block group h-full">
                      <div className="relative dark:bg-gradient-to-br dark:from-accent-cyan/10 dark:to-accent-teal/10 bg-white border dark:border-accent-cyan/30 border-gray-300 rounded-2xl p-8 hover:border-accent-cyan dark:hover:border-accent-cyan transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent-cyan/20 hover:shadow-lg h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-cyan/20 rounded-xl flex-shrink-0">
                            <Users className="w-8 h-8 text-accent-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-2 group-hover:text-accent-cyan transition-colors">
                              AI Workforce
                            </h3>
                            <p className="dark:text-gray-300 text-[#111111] text-lg font-semibold">
                              Your on-demand team of experts.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="dark:text-gray-400 text-[#111111] leading-relaxed">
                          Need a marketing manager? Data analyst? Customer service team? Get AI employees who work 24/7, never call in sick, and cost less than hiring one intern.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 2: Intelligent Automation */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/intelligent-automation" className="block group h-full">
                      <div className="relative dark:bg-gradient-to-br dark:from-accent-cyan/10 dark:to-accent-teal/10 bg-white border dark:border-accent-cyan/30 border-gray-300 rounded-2xl p-8 hover:border-accent-cyan dark:hover:border-accent-cyan transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent-cyan/20 hover:shadow-lg h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-cyan/20 rounded-xl flex-shrink-0">
                            <Zap className="w-8 h-8 text-accent-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-2 group-hover:text-accent-cyan transition-colors">
                              Intelligent Automation
                            </h3>
                            <p className="dark:text-gray-300 text-[#111111] text-lg font-semibold">
                              Save hours every week, automatically.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="dark:text-gray-400 text-[#111111] leading-relaxed">
                          Stop copying data between systems, chasing invoices, and sending the same emails over and over. Let automation handle the boring stuff while you focus on growth.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 3: Beyond Background Checks */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/background-checks" className="block group h-full">
                      <div className="relative dark:bg-gradient-to-br dark:from-accent-cyan/10 dark:to-accent-teal/10 bg-white border dark:border-accent-cyan/30 border-gray-300 rounded-2xl p-8 hover:border-accent-cyan dark:hover:border-accent-cyan transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent-cyan/20 hover:shadow-lg h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-cyan/20 rounded-xl flex-shrink-0">
                            <Shield className="w-8 h-8 text-accent-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-2 group-hover:text-accent-cyan transition-colors">
                              Beyond Background Checks™
                            </h3>
                            <p className="dark:text-gray-300 text-[#111111] text-lg font-semibold">
                              Avoid disastrous hires with deep vetting.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="dark:text-gray-400 text-[#111111] leading-relaxed">
                          Standard background checks miss the red flags that cost you everything. Find out what they're hiding before they join your team—not after they destroy it.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 4: Cyber Intelligence */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/cyber-intelligence" className="block group h-full">
                      <div className="relative dark:bg-gradient-to-br dark:from-accent-cyan/10 dark:to-accent-teal/10 bg-white border dark:border-accent-cyan/30 border-gray-300 rounded-2xl p-8 hover:border-accent-cyan dark:hover:border-accent-cyan transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent-cyan/20 hover:shadow-lg h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-cyan/20 rounded-xl flex-shrink-0">
                            <Award className="w-8 h-8 text-accent-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-2 group-hover:text-accent-cyan transition-colors">
                              Cyber Intelligence
                            </h3>
                            <p className="dark:text-gray-300 text-[#111111] text-lg font-semibold">
                              NASA-trusted protection at a small business price.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="dark:text-gray-400 text-[#111111] leading-relaxed">
                          Think you're too small for hackers? Think again. Get the same intelligence protection trusted by NASA and Fortune 500s—before a cyberattack wipes you out.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Card 5: Business Transformation */}
                  <motion.div variants={fadeInUp} className="md:col-span-2">
                    <Link href="/business-transformation" className="block group h-full">
                      <div className="relative dark:bg-gradient-to-br dark:from-accent-cyan/10 dark:to-accent-teal/10 bg-white border dark:border-accent-cyan/30 border-gray-300 rounded-2xl p-8 hover:border-accent-cyan dark:hover:border-accent-cyan transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent-cyan/20 hover:shadow-lg h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-accent-cyan/20 rounded-xl flex-shrink-0">
                            <TrendingUp className="w-8 h-8 text-accent-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold dark:text-white text-[#008080] mb-2 group-hover:text-accent-cyan transition-colors">
                              Business Transformation
                            </h3>
                            <p className="dark:text-gray-300 text-[#111111] text-lg font-semibold">
                              The roadmap to scale your business without the chaos.
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="dark:text-gray-400 text-[#111111] leading-relaxed">
                          Struggling to grow without burning out? Get a proven, step-by-step plan to scale profitably—without working more hours or hiring a massive team.
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
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
                    Join 200+ Business Owners Who Escaped the 70-Hour Work Week
                  </h2>
                  <p className="text-lg dark:text-gray-300 text-[#111111] max-w-2xl mx-auto">
                    Real entrepreneurs. Real results. Real freedom.
                  </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <TestimonialsCarousel />
              </motion.div>
            </div>
          </section>

          {/* ROI Calculator Section */}
          <section className="py-20 md:py-32 dark:bg-gradient-to-b dark:from-primary-bg/10 dark:to-secondary-bg bg-gradient-to-b from-[#e5e7eb] to-[#f3f3f3]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-[#008080] mb-4">
                    Calculate Your Time Savings
                  </h2>
                  <p className="text-lg dark:text-gray-300 text-[#111111]">
                    See how much time and money you could save with AI automation
                  </p>
                </div>

                <div className="dark:bg-gradient-to-br dark:from-secondary-bg dark:to-primary-bg bg-white border dark:border-accent-cyan/30 border-gray-300 rounded-2xl p-8 md:p-12 shadow-2xl">
                  <ROICalculator />
                </div>
              </div>
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
                  <div className="dark:bg-secondary-bg/80 bg-white border dark:border-accent-cyan/30 border-gray-300 rounded-xl p-6 shadow-lg">
                    <CheckCircle className="w-8 h-8 dark:text-accent-lime text-green-600 mx-auto mb-3" />
                    <p className="dark:text-white text-[#111111] font-semibold mb-1">Fast Setup</p>
                    <p className="dark:text-gray-400 text-[#111111] text-sm">Live in 48 hours</p>
                  </div>
                  <div className="dark:bg-secondary-bg/80 bg-white border dark:border-accent-purple/30 border-gray-300 rounded-xl p-6 shadow-lg">
                    <Target className="w-8 h-8 dark:text-accent-purple text-[#14b8a6] mx-auto mb-3" />
                    <p className="dark:text-white text-[#111111] font-semibold mb-1">Zero Risk</p>
                    <p className="dark:text-gray-400 text-[#111111] text-sm">30-day guarantee</p>
                  </div>
                  <div className="dark:bg-secondary-bg/80 bg-white border dark:border-primary-accent/30 border-gray-300 rounded-xl p-6 shadow-lg">
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
