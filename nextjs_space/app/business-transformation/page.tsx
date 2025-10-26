
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Transformation | Scale Without the Chaos',
  description: 'Stuck at $1-5M revenue? Trapped working 70-hour weeks? We transform overwhelmed businesses into scalable, profitable machines in 12 months.',
}

export default function BusinessTransformationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden gradient-bg flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-block bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                  Business Transformation
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Scale Your Business<br />
                <span className="text-purple-500">Without the Chaos</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Stuck at $1-5M revenue? Trapped working 70-hour weeks? Your business has become a prison. 
                We transform overwhelmed businesses into scalable, profitable machines—average client sees 
                2.4x revenue growth while cutting workweeks in half.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-purple-500 hover:bg-purple-600 rounded-lg transition"
                >
                  Assess Your Business Health
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Complete Business Transformation</h2>
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
