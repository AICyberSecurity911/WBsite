
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Workforce for Small Business',
  description: 'Build your AI-powered team and scale your business without scaling headcount',
}

export default function SMBAIWorkforcePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-smb-teal-50 to-smb-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-smb-teal/10 border border-smb-teal/20 mb-6">
              <Sparkles className="w-4 h-4 text-smb-teal" />
              <span className="text-sm font-medium text-smb-teal-700 dark:text-smb-teal-300">
                For Small Business Owners
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-smb-teal via-smb-blue to-smb-orange bg-clip-text text-transparent">
                SMB AI Workforce
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Coming Soon
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Build your AI-powered team and scale your business without scaling headcount. 
              Enterprise-grade AI automation designed for small business budgets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-smb-teal hover:bg-smb-teal-600 text-white shadow-lg shadow-smb-teal/30 group"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-smb-blue text-smb-blue hover:bg-smb-blue hover:text-white"
              >
                Watch Demo
              </Button>
            </div>

            {/* Color Showcase Grid */}
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-smb-teal to-smb-teal-600 shadow-lg" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-smb-blue to-smb-blue-600 shadow-lg" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-smb-orange to-smb-orange-600 shadow-lg" />
            </div>

            {/* Color Labels */}
            <div className="mt-4 flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-smb-teal" />
                Teal
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-smb-blue" />
                Blue
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-smb-orange" />
                Orange
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-smb-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-smb-blue/10 rounded-full blur-3xl" />
      </section>

      {/* Feature Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-smb-teal">SMB Color Scheme</span> Preview
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Teal Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-t-4 border-smb-teal">
              <div className="w-12 h-12 bg-smb-teal rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-smb-teal mb-2">Primary Teal</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Main brand color for SMB version
              </p>
            </div>

            {/* Blue Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-t-4 border-smb-blue">
              <div className="w-12 h-12 bg-smb-blue rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-smb-blue mb-2">Accent Blue</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trust and reliability
              </p>
            </div>

            {/* Orange Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-t-4 border-smb-orange">
              <div className="w-12 h-12 bg-smb-orange rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-smb-orange mb-2">Accent Orange</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Energy and action
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
