
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cyber Intelligence | Fort Knox Security for Main Street Business',
  description: 'NASA-recognized cybersecurity expertise protecting small businesses. Stop breaches before they happen with elite security that doesn\'t require a fortune.',
}

export default function CyberIntelligencePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden gradient-bg flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                  NASA-Recognized Expertise
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Fort Knox Security<br />
                <span className="text-blue-500">For Main Street Business</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                60% of small businesses close within 6 months of a cyberattack. Our team has been recognized 
                by NASA for uncovering critical vulnerabilities. Now we protect businesses like yours with 
                enterprise-grade security at small business prices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#calculator" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
                >
                  Assess Your Security Risk
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Cybersecurity Solutions</h2>
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
