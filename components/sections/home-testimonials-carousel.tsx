
'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, ArrowUpRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Testimonial {
  quote: string
  before: string
  after: string
  author: string
  title: string
  company: string
  category: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote: "The AI bookkeeper caught a $15,000 accounting error our human bookkeeper missed three times. It paid for itself in the first month.",
    before: "70-hour weeks, constantly behind, growth stalled at $750K",
    after: "Revenue hit $1.3M, work ON the business now, weekends off",
    author: "Peter Fernandes",
    title: "Owner",
    company: "AAA Construction Services",
    category: "Automation",
    rating: 5
  },
  {
    quote: "Embedding AI into core workflows transformed patient care delivery—reduced admin by 70%, freeing clinicians for high-value tasks.",
    before: "Compliance silos delaying transformations, $20M in overhead",
    after: "Extreme productivity: 35% faster throughput, HIPAA-compliant at scale",
    author: "CIO, Healthcare Network",
    title: "(Anonymized for confidentiality)",
    company: "Healthcare Network",
    category: "Healthcare AI",
    rating: 5
  },
  {
    quote: "My AI assistant pre-qualifies leads and schedules showings around the clock. I'm no longer losing hot leads that come in after 5 PM—I focus on closing deals, not chasing paperwork.",
    before: "Growing fast but drowning in chaos. Team burning out",
    after: "Revenue up 34%, team stress way down",
    author: "Masoud Nasserie",
    title: "Real Estate Broker",
    company: "Blueprint Realty Inc.",
    category: "AI Workforce",
    rating: 5
  },
  {
    quote: "I was spending $391,000 worth of time on tasks that cost $21,492/year to automate. The only question is why I waited so long—it's transformed how we operate.",
    before: "High-cost manual processes eating into profits",
    after: "Annual savings of $369K+, scalable systems in place",
    author: "Sukant Trivedi",
    title: "President",
    company: "Trivedi Overseas Group",
    category: "Business Transformation",
    rating: 5
  },
  {
    quote: "Standard background check was clean. QuantumLeap's investigation revealed the candidate had been terminated from three previous companies for inflating sales numbers. We dodged a bullet that would have cost us major client relationships.",
    before: "Nearly hired someone with hidden fraud history standard checks missed",
    after: "Flagged instantly—saved us from a $200K+ disaster",
    author: "Tiffany Duncan",
    title: "Director",
    company: "Talent Leap AI",
    category: "Beyond Background Checks",
    rating: 5
  },
  {
    quote: "We thought we were too small to be attacked—until we weren't. QuantumLeap's audit found 19 vulnerabilities we fixed within weeks. That peace of mind is priceless.",
    before: "Assumed low risk as a small operation",
    after: "Blocked a potential $500K ransomware hit three months later",
    author: "Lydia V. Penrose",
    title: "Co-Founder",
    company: "Code Vibe Studio",
    category: "Cyber Intelligence",
    rating: 5
  },
  {
    quote: "Our automation workflows reduced manual tasks by 70%, freeing us to focus on clients and growth. What used to bury us now runs seamlessly.",
    before: "25 hours/week lost to data entry and reporting",
    after: "Reclaimed time for strategy, ops efficiency up 70%",
    author: "Sofia J. Delacroix",
    title: "Founder",
    company: "Marketing Agency",
    category: "Automation",
    rating: 5
  }
]

export function HomeTestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="relative py-20 lg:py-28 bg-secondary-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/20 rounded-full mb-4">
            <Star className="w-5 h-5 text-accent-cyan fill-accent-cyan" />
            <span className="text-sm font-semibold text-text-primary">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
            Real Results from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-teal">
              Real Business Owners
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See how businesses like yours transformed operations, reclaimed their time, and secured their growth
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev'
            }}
            effect="slide"
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-primary-bg/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-accent-cyan/20 hover:border-accent-cyan hover:shadow-accent-cyan/20 transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan/20 rounded-full mb-6">
                    <TrendingUp className="w-4 h-4 text-accent-cyan" />
                    <span className="text-xs font-semibold text-accent-cyan">{testimonial.category}</span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-2 w-12 h-12 text-accent-cyan/20" />
                    <blockquote className="relative text-xl md:text-2xl font-medium text-text-primary leading-relaxed pl-8">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Before/After */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-secondary-bg/60 rounded-xl border border-accent-teal/10">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-accent" />
                        <span className="text-sm font-bold text-text-primary uppercase tracking-wider">Before</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{testimonial.before}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-lime" />
                        <span className="text-sm font-bold text-text-primary uppercase tracking-wider">After</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{testimonial.after}</p>
                    </div>
                  </div>

                  {/* Author & Rating */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-bold text-lg text-text-primary">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-primary-bg/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-text-primary hover:bg-accent-cyan hover:text-secondary-bg hover:scale-110 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed border border-accent-cyan/30"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-primary-bg/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-text-primary hover:bg-accent-cyan hover:text-secondary-bg hover:scale-110 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed border border-accent-cyan/30"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-teal hover:from-accent-teal hover:to-accent-cyan text-secondary-bg font-semibold rounded-xl shadow-lg hover:shadow-accent-cyan/50 hover:scale-105 transition-all duration-500 group"
          >
            Get Your Free Assessment
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
          <p className="text-sm text-text-secondary mt-3">
            See your potential ROI in 3 minutes
          </p>
        </motion.div>
      </div>

      {/* Custom Swiper styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.4;
          background: #40E0D0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(64, 224, 208, 0.3);
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #40E0D0;
          transform: scale(1.4);
          box-shadow: 0 0 12px rgba(64, 224, 208, 0.6);
        }
        
        .testimonials-swiper .swiper-slide {
          height: auto;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .testimonials-swiper .swiper-slide-active {
          transform: scale(1);
        }
        
        .testimonials-swiper .swiper-slide-prev,
        .testimonials-swiper .swiper-slide-next {
          transform: scale(0.95);
          opacity: 0.5;
        }
      `}</style>
    </section>
  )
}
