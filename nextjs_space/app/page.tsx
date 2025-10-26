
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { TLDDRSection } from '@/components/sections/tlddr-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { AIEmployeesSection } from '@/components/sections/ai-employees-section'
import { CalculatorSection } from '@/components/sections/calculator-section'
import { FAQSection } from '@/components/sections/faq-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <TLDDRSection />
        <ProblemSection />
        <AIEmployeesSection />
        <CalculatorSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}
