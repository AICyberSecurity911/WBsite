
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SplitHeroSection } from '@/components/sections/split-hero-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { FounderStorySection } from '@/components/sections/founder-story-section'

export const metadata = {
  title: 'AI Solutions for Business Growth & Enterprise Security | QuantumLeap AI',
  description: 'QuantumLeap AI delivers transformative AI solutions. We help SMBs escape the 70-hour work week and enable Enterprises to turn operational risks into a competitive edge.',
  openGraph: {
    title: 'AI Solutions for Business Growth & Enterprise Security | QuantumLeap AI',
    description: 'QuantumLeap AI delivers transformative AI solutions. We help SMBs escape the 70-hour work week and enable Enterprises to turn operational risks into a competitive edge.',
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
        <FounderStorySection />
      </main>
      <Footer />
    </div>
  )
}
