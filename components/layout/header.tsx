
'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  { name: 'AI Workforce', href: '/ai-workforce', description: 'AI employees for your business' },
  { name: 'Intelligent Automation', href: '/intelligent-automation', description: 'Eliminate busywork' },
  { name: 'Beyond Background Checks™', href: '/background-checks', description: 'Hiring risk assessment' },
  { name: 'Cyber Intelligence', href: '/cyber-intelligence', description: 'NASA-grade security' },
  { name: 'Business Transformation', href: '/business-transformation', description: 'Scale without chaos' },
]

const navigation = [
  { name: 'Services', href: '/', hasDropdown: true },
  { name: 'About Us', href: '/about-us' },
  { name: 'Book Consultation', href: '/consultation' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="relative h-8 w-8 sm:h-9 sm:w-9">
            <Image
              src="/logo.png"
              alt="QuantumLeap AI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">
            QuantumLeap <span className="ai-pulse text-orange-500">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navigation.map((item) => (
            item.hasDropdown ? (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 whitespace-nowrap"
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {servicesOpen && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-0 top-full z-50 pt-2 w-80"
                  >
                    <div className="rounded-xl bg-white p-2 shadow-xl dark:bg-gray-900 dark:border dark:border-gray-800"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 whitespace-nowrap"
              >
                {item.name}
              </Link>
            )
          ))}
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-9 w-9 p-0 rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* CTA Button */}
          <Button 
            asChild
            size="sm"
            className="btn-primary rounded-full px-4 xl:px-5 shadow-lg hover:shadow-xl transition-shadow text-sm"
          >
            <Link href="/consultation">
              Start Free
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-9 w-9"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-16 z-40 border-t bg-white dark:bg-gray-900 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto shadow-xl">
            <div className="container space-y-1 py-6">
              {/* Services Section */}
              <div className="mb-4">
                <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Services
                </div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block rounded-lg px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {service.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Navigation */}
              <div className="space-y-1 pt-2">
                {navigation.filter(item => !item.hasDropdown).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-teal-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-teal-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
                <Button asChild className="btn-primary w-full rounded-full shadow-lg text-base py-6">
                  <Link href="#calculator" onClick={() => setMobileMenuOpen(false)}>
                    Start Free
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
