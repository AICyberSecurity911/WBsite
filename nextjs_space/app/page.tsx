
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { TLDDRSection } from '@/components/sections/tlddr-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { AIEmployeesSection } from '@/components/sections/ai-employees-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CalculatorSection } from '@/components/sections/calculator-section'
import { BlogSection } from '@/components/sections/blog-section'
import { FAQSection } from '@/components/sections/faq-section'
import { GuaranteeSection } from '@/components/sections/guarantee-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <TrustBarSection />
        <ProblemSection />
        <AIEmployeesSection />
        <TestimonialsSection />
        <CalculatorSection />
        <BlogSection />
        <FAQSection />
        <GuaranteeSection />
      </main>

      <Footer />
    </div>
  )
}
