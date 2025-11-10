import { CoralReefHero } from '@/components/sections/coral-reef-hero'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { CoralReefFeatures } from '@/components/sections/coral-reef-features'
import { ValuePropositionSection } from '@/components/sections/value-proposition-section'
import { HomeTestimonialsCarousel } from '@/components/sections/home-testimonials-carousel'
import { FounderStorySection } from '@/components/sections/founder-story-section'
import { FAQSection } from '@/components/sections/faq-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuantumLeap AI | Scale Your Business Without the Chaos',
  description: 'AI employees, intelligent automation, and NASA-grade security for businesses of all sizes. Get Fortune 500 capabilities at startup prices.',
  openGraph: {
    title: 'QuantumLeap AI | Scale Your Business Without the Chaos',
    description: 'AI employees, intelligent automation, and NASA-grade security for businesses of all sizes.',
    images: ['/og-image.png'],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-qgd-bg">
      <CoralReefHero />
      <TrustBarSection />
      <CoralReefFeatures />
      <ValuePropositionSection />
      <HomeTestimonialsCarousel />
      <FounderStorySection />
      <FAQSection />
    </main>
  )
}
