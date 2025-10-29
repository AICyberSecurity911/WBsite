
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { TLDDRSection } from '@/components/sections/tlddr-section'
import { AIEmployeesSection } from '@/components/sections/ai-employees-section'
import { CalculatorSection } from '@/components/sections/calculator-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { GuaranteeSection } from '@/components/sections/guarantee-section'
import { FAQSection } from '@/components/sections/faq-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ExitIntentProvider } from '@/components/exit-intent-provider'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustBarSection />
        <ProblemSection />
        <TLDDRSection />
        <AIEmployeesSection />
        <CalculatorSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
      <ExitIntentProvider />
    </div>
  )
}
