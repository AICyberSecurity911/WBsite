
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                <span className="text-lg font-bold text-white">Q</span>
              </div>
              <span className="text-xl font-bold">QuantumLeap AI</span>
            </div>
            
            <p className="mb-6 text-gray-300 lg:max-w-md">
              Deploy battle-tested AI employees trained on 10,000+ hours of real business operations. 
              Zero interviews. Zero drama. Immediate relief.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <a 
                  href="mailto:hello@quantumleap.io"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@quantumleap.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <a 
                  href="tel:+1-555-123-4567"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">200+</div>
                <div className="text-xs text-gray-400">Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">99.2%</div>
                <div className="text-xs text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">87%</div>
                <div className="text-xs text-gray-400">Cost Savings</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#ai-employees" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI Workforce
                </Link>
              </li>
              <li>
                <Link 
                  href="#calculator" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Free Assessment
                </Link>
              </li>
              <li>
                <Link 
                  href="#testimonials" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link 
                  href="#faq" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Stay Updated</h4>
            <p className="mb-4 text-sm text-gray-300">
              Get the latest insights on AI workforce automation
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="w-full btn-primary">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} QuantumLeap AI. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Security Badges */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>NASA-recognized security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
