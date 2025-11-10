'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Shield, Lock, Award, Mail } from 'lucide-react'

const services = [
  { name: 'AI Workforce', href: '/ai-workforce' },
  { name: 'Intelligent Automation', href: '/intelligent-automation' },
  { name: 'Beyond Background Checks™', href: '/background-checks' },
  { name: 'Cyber Intelligence', href: '/cyber-intelligence' },
  { name: 'Business Transformation', href: '/business-transformation' },
]

const company = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Blog', href: '/blog' },
  { name: 'Consultation', href: '/consultation' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="bg-qgd-card border-t border-qgd-border">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 gap-6 pb-8 mb-8 border-b sm:grid-cols-3 border-qgd-border">
          <div className="flex flex-col items-center p-6 transition-all duration-300 rounded-xl hover:bg-qgd-primary/5 border border-transparent hover:border-qgd-ring/20">
            <Shield className="w-8 h-8 mb-3 text-qgd-accent" />
            <h3 className="text-sm font-semibold text-qgd-fg">NASA-Grade Security</h3>
            <p className="text-xs text-center text-qgd-muted mt-1">
              Enterprise-level protection
            </p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all duration-300 rounded-xl hover:bg-qgd-primary/5 border border-transparent hover:border-qgd-ring/20">
            <Lock className="w-8 h-8 mb-3 text-qgd-ring" />
            <h3 className="text-sm font-semibold text-qgd-fg">100% Confidential</h3>
            <p className="text-xs text-center text-qgd-muted mt-1">
              Your data stays private
            </p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all duration-300 rounded-xl hover:bg-qgd-primary/5 border border-transparent hover:border-qgd-ring/20">
            <Award className="w-8 h-8 mb-3 text-qgd-primary" />
            <h3 className="text-sm font-semibold text-qgd-fg">Results Guaranteed</h3>
            <p className="text-xs text-center text-qgd-muted mt-1">
              Or 100% money back
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 mb-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo.png"
                  alt="QuantumLeap AI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-qgd-fg">
                QuantumLeap <span className="text-qgd-accent">AI</span>
              </span>
            </Link>
            <p className="text-sm text-qgd-muted mb-4 max-w-xs">
              NASA-recognized cybersecurity expertise meets business transformation. 
              Scale without chaos, hire without risk.
            </p>
            <div className="flex items-center gap-2 text-sm text-qgd-muted">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@quantumleap.io" className="hover:text-qgd-ring transition-colors">
                info@quantumleap.io
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-qgd-fg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-qgd-muted hover:text-qgd-ring transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-qgd-fg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-qgd-muted hover:text-qgd-ring transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-qgd-fg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-qgd-muted hover:text-qgd-ring transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-qgd-border">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-qgd-muted">
              © {new Date().getFullYear()} QuantumLeap AI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-xs px-3 py-1 rounded-full bg-qgd-primary/10 text-qgd-primary border border-qgd-primary/20">
                MIT-Caltech Alumni
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-qgd-accent/10 text-qgd-accent border border-qgd-accent/20">
                NASA Recognition
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
