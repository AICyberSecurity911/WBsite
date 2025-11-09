
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CoralReefHero } from '@/components/sections/coral-reef-hero'
import { CoralReefFeatures } from '@/components/sections/coral-reef-features'

export const metadata = {
  title: 'Coral Reef Design Demo | QuantumLeap AI',
  description: 'Modern dark-mode-first design with the Coral Reef palette - showcasing React, TypeScript, and Tailwind CSS excellence.',
}

export default function CoralReefDemoPage() {
  return (
    <div className="min-h-screen bg-secondary-bg">
      <Header />
      <main className="pt-16">
        <CoralReefHero />
        <CoralReefFeatures />
        
        {/* Spacing Section */}
        <section className="py-20 bg-secondary-bg">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-6">
                Design System Showcase
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                This page demonstrates the complete Coral Reef palette implementation with modern 
                React components, TypeScript type safety, and Tailwind CSS utilities. Every element 
                is built for accessibility, performance, and visual excellence.
              </p>
              
              {/* Color Swatches */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <div className="space-y-2">
                  <div className="h-20 rounded-xl bg-primary-bg shadow-lg" />
                  <p className="text-sm font-mono text-text-secondary">primary-bg</p>
                  <p className="text-xs text-text-secondary">#004D40</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-xl bg-secondary-bg border-2 border-text-secondary/20 shadow-lg" />
                  <p className="text-sm font-mono text-text-secondary">secondary-bg</p>
                  <p className="text-xs text-text-secondary">#121212</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-xl bg-primary-accent shadow-lg" />
                  <p className="text-sm font-mono text-text-secondary">primary-accent</p>
                  <p className="text-xs text-text-secondary">#FF7F50</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-xl bg-text-secondary shadow-lg" />
                  <p className="text-sm font-mono text-text-secondary">text-secondary</p>
                  <p className="text-xs text-text-secondary">#B0BFC6</p>
                </div>
              </div>

              {/* 8-Color Accent Palette */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mt-8">
                {[
                  { name: 'Coral', color: 'accent-coral' },
                  { name: 'Cyan', color: 'accent-cyan' },
                  { name: 'Purple', color: 'accent-purple' },
                  { name: 'Gold', color: 'accent-gold' },
                  { name: 'Lime', color: 'accent-lime' },
                  { name: 'Pink', color: 'accent-pink' },
                  { name: 'Teal', color: 'accent-teal' },
                  { name: 'White', color: 'accent-white' },
                ].map((swatch) => (
                  <div key={swatch.name} className="space-y-2">
                    <div className={`h-16 rounded-lg bg-${swatch.color} shadow-lg`} />
                    <p className="text-xs text-text-secondary">{swatch.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="py-20 bg-primary-bg">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-12 text-center">
                Typography System
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-secondary mb-2">Display Font (Manrope) - Headlines</p>
                  <h1 className="text-6xl font-display font-bold text-text-primary">
                    The Quick Brown Fox
                  </h1>
                </div>
                
                <div>
                  <p className="text-sm text-text-secondary mb-2">Sans Font (Inter) - Body Text</p>
                  <p className="text-lg font-sans text-text-secondary leading-relaxed">
                    Inter provides excellent readability for body text across all screen sizes. 
                    Its balanced proportions and open apertures ensure clarity even at smaller sizes.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  <div>
                    <p className="text-4xl font-display font-bold text-text-primary">Aa</p>
                    <p className="text-xs text-text-secondary mt-1">4XL Display</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-text-primary">Aa</p>
                    <p className="text-xs text-text-secondary mt-1">3XL Display</p>
                  </div>
                  <div>
                    <p className="text-2xl font-sans text-text-primary">Aa</p>
                    <p className="text-xs text-text-secondary mt-1">2XL Sans</p>
                  </div>
                  <div>
                    <p className="text-xl font-sans text-text-primary">Aa</p>
                    <p className="text-xs text-text-secondary mt-1">XL Sans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
