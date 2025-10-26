
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beyond Background Checks™ | Stop Hiring Mistakes Before They Cost You',
  description: 'Bad hires cost $118,958 on average. Our comprehensive risk assessment goes beyond basic background checks to protect your business from hiring disasters.',
}

export default function BackgroundChecksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden gradient-bg flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-block bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                  Beyond Background Checks™
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Stop Hiring Mistakes<br />
                <span className="text-red-500">Before They Cost You $118,958</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Traditional background checks miss 73% of red flags. We go beyond criminal records to uncover 
                the hidden risks that destroy businesses: fraud, workplace violence, theft, and toxic behavior.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition"
                >
                  Assess Your Hiring Risk
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Risk Assessment</h2>
            <p className="text-xl text-muted-foreground">
              Full implementation coming soon...
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
