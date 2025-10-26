
'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  { name: 'AI Workforce', href: '/', description: 'AI employees for your business' },
  { name: 'Intelligent Automation', href: '/intelligent-automation', description: 'Eliminate busywork' },
  { name: 'Beyond Background Checks™', href: '/background-checks', description: 'Hiring risk assessment' },
  { name: 'Cyber Intelligence', href: '/cyber-intelligence', description: 'NASA-grade security' },
  { name: 'Business Transformation', href: '/business-transformation', description: 'Scale without chaos' },
]

const navigation = [
  { name: 'Services', href: '/', hasDropdown: true },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
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
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="QuantumLeap AI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            QuantumLeap <span className="ai-pulse text-orange-500">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navigation.map((item) => (
            item.hasDropdown ? (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                {servicesOpen && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-0 top-full mt-2 w-72 rounded-lg bg-white p-4 shadow-xl dark:bg-gray-900 dark:border dark:border-gray-800"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block rounded-md p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {service.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
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
            className="h-8 w-8 p-0"
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
            className="btn-primary"
          >
            <Link href="#calculator">
              Free Assessment
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-8 w-8 p-0"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
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
          <div className="absolute left-0 right-0 top-16 z-40 border-t bg-white dark:bg-gray-900 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="container space-y-1 py-4">
              {/* Services Section */}
              <div className="mb-4">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {service.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {service.description}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Other Navigation */}
              {navigation.filter(item => !item.hasDropdown).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-teal-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4">
                <Button asChild className="btn-primary w-full">
                  <Link href="#calculator" onClick={() => setMobileMenuOpen(false)}>
                    Free Assessment
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
