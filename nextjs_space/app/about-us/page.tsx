

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Shield, TrendingUp, Users, Rocket, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AdvisoryBoardSection from '@/components/sections/advisory-board-section'

export const metadata: Metadata = {
  title: 'About Us - Elite Expertise for Your Competitive Advantage | QuantumLeap AI',
  description: '250+ years of combined experience from Fortune 500 companies. NASA-recognized cybersecurity team. $170M+ in business value delivered. Meet the team behind your transformation.',
  keywords: 'QuantumLeap AI team, Paras Khurana founder, NASA cybersecurity, enterprise transformation, Fortune 500 expertise',
  openGraph: {
    title: 'About Us - Elite Expertise | QuantumLeap AI',
    description: 'Meet the NASA-recognized team with 250+ years of Fortune 500 experience delivering transformation.',
    type: 'website',
  }
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-qgd-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184, 115, 51, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-qgd-accent/10 border border-qgd-border mb-6">
              <Award className="h-4 w-4 text-qgd-accent" />
              <span className="text-sm font-medium text-qgd-accent">NASA-Recognized Expertise</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-qgd-fg mb-6 leading-tight">
              The Elite Expertise Behind Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-qgd-primary via-qgd-accent to-qgd-ring">
                Competitive Advantage
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-qgd-muted leading-relaxed max-w-3xl mx-auto">
              We're not just technologists—we're seasoned business strategists, cybersecurity experts, and transformation architects. With{' '}
              <span className="font-semibold text-qgd-accent">250+ years of combined experience</span>, our team's work has been{' '}
              <span className="font-semibold text-qgd-primary">recognized by NASA</span> and trusted by{' '}
              <span className="font-semibold text-qgd-ring">Fortune 500 companies</span>.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
              <div className="bg-qgd-card backdrop-blur-sm border border-qgd-border rounded-xl p-6 hover:border-qgd-accent transition-all duration-300">
                <div className="text-3xl font-bold text-qgd-accent mb-2">250+</div>
                <div className="text-sm text-qgd-muted">Years Combined Experience</div>
              </div>
              <div className="bg-qgd-card backdrop-blur-sm border border-qgd-border rounded-xl p-6 hover:border-qgd-primary transition-all duration-300">
                <div className="text-3xl font-bold text-qgd-primary mb-2">$170M+</div>
                <div className="text-sm text-qgd-muted">Business Value Delivered</div>
              </div>
              <div className="bg-qgd-card backdrop-blur-sm border border-qgd-border rounded-xl p-6 hover:border-qgd-ring transition-all duration-300">
                <div className="text-3xl font-bold text-qgd-ring mb-2">75+</div>
                <div className="text-sm text-qgd-muted">Products Built & Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section className="py-20 md:py-28 relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-qgd-primary/5 to-transparent" />

        <div className="container relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-qgd-fg mb-4">
                From Billion-Dollar Enterprise to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-qgd-accent to-qgd-primary">
                  Your Competitive Edge
                </span>
              </h2>
            </div>

            {/* Founder Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Founder Image */}
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-qgd-border shadow-2xl">
                  <Image
                    src="/founder-paras-khurana-new.jpg"
                    alt="Paras Khurana - Founder, QuantumLeap AI"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-qgd-bg/80 via-transparent to-transparent" />
                  
                  {/* Name Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-qgd-card/90 backdrop-blur-md border border-qgd-border rounded-xl p-4">
                      <h3 className="text-xl font-bold text-qgd-fg mb-1">Paras Khurana</h3>
                      <p className="text-qgd-accent text-sm font-medium">Founder, QuantumLeap AI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Story & Credentials */}
              <div className="space-y-8">
                {/* Quote */}
                <div className="bg-qgd-card/50 backdrop-blur-sm border-l-4 border-qgd-primary rounded-r-xl p-6 md:p-8">
                  <blockquote className="text-qgd-muted text-lg leading-relaxed italic">
                    "For over 20 years, I built and secured systems for global giants like IBM and Deloitte, delivering over $170 million in business value. I saw firsthand how they used technology and deep intelligence to create an unfair advantage. I started QuantumLeap AI to change that... my mission is to deliver elite expertise that's not just powerful, but accessible and transformative for your business."
                  </blockquote>
                </div>

                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="group bg-qgd-card border border-qgd-border rounded-xl p-6 hover:border-qgd-accent hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-qgd-accent/10 rounded-lg group-hover:bg-qgd-accent/20 transition-colors">
                        <TrendingUp className="h-5 w-5 text-qgd-accent" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-qgd-accent mb-1">$170M+</div>
                        <div className="text-sm text-qgd-muted">Business Value Delivered</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group bg-qgd-card border border-qgd-border rounded-xl p-6 hover:border-qgd-primary hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-qgd-primary/10 rounded-lg group-hover:bg-qgd-primary/20 transition-colors">
                        <Rocket className="h-5 w-5 text-qgd-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-qgd-primary mb-1">75+</div>
                        <div className="text-sm text-qgd-muted">Products Built & Launched</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="group bg-qgd-card border border-qgd-border rounded-xl p-6 hover:border-qgd-ring hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-qgd-ring/10 rounded-lg group-hover:bg-qgd-ring/20 transition-colors">
                        <Users className="h-5 w-5 text-qgd-ring" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-qgd-ring mb-1">55+</div>
                        <div className="text-sm text-qgd-muted">Business Transformations Led</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="group bg-qgd-card border border-qgd-border rounded-xl p-6 hover:border-qgd-accent hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-qgd-accent/10 rounded-lg group-hover:bg-qgd-accent/20 transition-colors">
                        <Award className="h-5 w-5 text-qgd-accent" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-qgd-accent mb-1">20+</div>
                        <div className="text-sm text-qgd-muted">Years Elite Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Cybersecurity Credentials Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(184, 115, 51, 0.2) 1px, transparent 1px), linear-gradient(rgba(124, 58, 237, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              {/* NASA Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-qgd-primary/10 border border-qgd-border mb-6">
                <Shield className="h-5 w-5 text-qgd-primary" />
                <span className="text-sm font-semibold text-qgd-primary">NASA-Recognized Team</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-qgd-fg mb-6">
                The Security Team{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-qgd-primary via-qgd-accent to-qgd-ring">
                  Recognized by NASA
                </span>
              </h2>

              <p className="text-xl text-qgd-muted leading-relaxed max-w-3xl mx-auto">
                Members of our team have been formally recognized by NASA for discovering and responsibly reporting critical flaws in their high-security systems. That same level of ingenuity and attacker mindset now safeguards your business.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {/* Credential 1 */}
              <div className="group bg-qgd-card backdrop-blur-sm border border-qgd-border rounded-2xl p-8 hover:border-qgd-primary hover:shadow-2xl hover:shadow-qgd-primary/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-qgd-primary/10 rounded-xl group-hover:bg-qgd-primary/20 transition-colors">
                    <Shield className="h-7 w-7 text-qgd-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-qgd-fg mb-2">NASA Recognition</h3>
                    <p className="text-qgd-muted text-sm">Formal acknowledgment for responsible vulnerability disclosure</p>
                  </div>
                </div>
                <p className="text-qgd-muted leading-relaxed">
                  Our team identified and reported critical security vulnerabilities in NASA's high-security infrastructure, earning formal recognition for protecting national space exploration systems.
                </p>
              </div>

              {/* Credential 2 */}
              <div className="group bg-qgd-card backdrop-blur-sm border border-qgd-border rounded-2xl p-8 hover:border-qgd-accent hover:shadow-2xl hover:shadow-qgd-accent/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-qgd-accent/10 rounded-xl group-hover:bg-qgd-accent/20 transition-colors">
                    <Award className="h-7 w-7 text-qgd-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-qgd-fg mb-2">Elite Expertise</h3>
                    <p className="text-qgd-muted text-sm">Decades securing Fortune 500 enterprises</p>
                  </div>
                </div>
                <p className="text-qgd-muted leading-relaxed">
                  With experience securing systems at IBM, Deloitte, and other global giants, we bring enterprise-grade security practices to businesses of all sizes.
                </p>
              </div>

              {/* Credential 3 */}
              <div className="group bg-qgd-card backdrop-blur-sm border border-qgd-border rounded-2xl p-8 hover:border-qgd-ring hover:shadow-2xl hover:shadow-qgd-ring/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-qgd-ring/10 rounded-xl group-hover:bg-qgd-ring/20 transition-colors">
                    <CheckCircle2 className="h-7 w-7 text-qgd-ring" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-qgd-fg mb-2">Attacker Mindset</h3>
                    <p className="text-qgd-muted text-sm">Think like hackers, defend like experts</p>
                  </div>
                </div>
                <p className="text-qgd-muted leading-relaxed">
                  We don't just follow checklists. Our team thinks like sophisticated attackers to identify vulnerabilities before criminals can exploit them.
                </p>
              </div>

              {/* Credential 4 */}
              <div className="group bg-qgd-card backdrop-blur-sm border border-qgd-border rounded-2xl p-8 hover:border-qgd-primary hover:shadow-2xl hover:shadow-qgd-primary/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-qgd-primary/10 rounded-xl group-hover:bg-qgd-primary/20 transition-colors">
                    <Users className="h-7 w-7 text-qgd-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-qgd-fg mb-2">Your Advantage</h3>
                    <p className="text-qgd-muted text-sm">NASA-grade security for your business</p>
                  </div>
                </div>
                <p className="text-qgd-muted leading-relaxed">
                  The same rigorous security protocols that protect space missions now protect your customer data, intellectual property, and business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advisory Board Section */}
      <AdvisoryBoardSection />

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-qgd-primary/10 via-qgd-accent/10 to-qgd-ring/10 border border-qgd-border rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-qgd-fg mb-4">
                  Ready to Work with Elite Expertise?
                </h3>
                <p className="text-qgd-muted text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how our NASA-recognized team can transform your business with elite technology and security.
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-qgd-primary hover:bg-qgd-accent text-qgd-bg font-semibold px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
                >
                  <Link href="/consultation">
                    Book Your Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
