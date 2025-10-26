
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelligent Automation for Small Business | Eliminate 70% of Busywork',
  description: 'Stop wasting 21.8 hours weekly on manual tasks. We build simple automations that eliminate errors, save thousands, and let you finally focus on growing your business.',
}

export default function IntelligentAutomationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden gradient-bg flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-block bg-amber-100 dark:bg-amber-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wide">
                  Intelligent Automation
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Stop Drowning in Busywork.<br />
                <span className="text-brand-teal-500">Get 10 Hours Back</span> Every Week.
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                You're wasting <strong>21.8 hours every week</strong> on manual tasks that could be automated. 
                We build simple, affordable automations that eliminate errors, save thousands, and let you 
                finally focus on growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-teal-500 hover:bg-brand-teal-600 rounded-lg transition"
                >
                  Calculate Your Time Waste
                </a>
                <a 
                  href="#solution" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-brand-teal-500 rounded-lg hover:bg-brand-teal-50 dark:hover:bg-brand-teal-900/20 transition"
                >
                  See Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution sections will be added */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Intelligent Automation Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive automation implementation coming soon...
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
