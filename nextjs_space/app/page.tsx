
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SplitHeroSection } from '@/components/sections/split-hero-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { ValuePropositionSection } from '@/components/sections/value-proposition-section'
import { FounderStorySection } from '@/components/sections/founder-story-section'
import AdvisoryBoardSection from '@/components/sections/advisory-board-section'

export const metadata = {
  title: 'AI Business Transformation | Reclaim Your Time & Secure Your Growth | QuantumLeap AI',
  description: 'Stop working 70-hour weeks or losing millions to preventable risks. Get Fortune 500 AI power and NASA-recognized security for your business. Free assessment in 3 minutes.',
  keywords: 'AI business automation, small business AI solutions, enterprise AI transformation, cybersecurity for businesses, business process automation, AI workforce solutions',
  openGraph: {
    title: 'AI Business Transformation | Reclaim Your Time & Secure Your Growth | QuantumLeap AI',
    description: 'Stop working 70-hour weeks or losing millions to preventable risks. Get Fortune 500 AI power and NASA-recognized security for your business. Free assessment in 3 minutes.',
    images: ['/og-image.png'],
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main>
        <SplitHeroSection />
        <TrustBarSection />
        <ValuePropositionSection />
        <FounderStorySection />
        <AdvisoryBoardSection />
      </main>
      <Footer />
    </div>
  )
}
