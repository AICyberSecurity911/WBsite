import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { organizationSchema, websiteSchema } from '@/lib/schemas'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://quantumleap.ai'),
  title: {
    default: 'QuantumLeap AI | Enterprise AI & Cyber Intelligence Solutions',
    template: '%s | QuantumLeap AI'
  },
  description: 'QuantumLeap AI helps enterprises convert complexity into momentum through AI Workforce, Automation, Cyber Intelligence, and Executive-grade Due Diligence. Trusted by Fortune 500 leaders.',
  keywords: [
    'AI automation',
    'enterprise transformation',
    'cyber intelligence',
    'process automation',
    'AI workforce',
    'executive due diligence',
    'background checks',
    'enterprise AI',
    'digital transformation',
    'cybersecurity',
    'offensive security',
    'business intelligence'
  ],
  authors: [{ name: 'QuantumLeap AI', url: 'https://quantumleap.ai' }],
  creator: 'QuantumLeap AI',
  publisher: 'QuantumLeap AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumleap.ai',
    siteName: 'QuantumLeap AI',
    title: 'QuantumLeap AI | Enterprise AI & Cyber Intelligence Solutions',
    description: 'Transform your enterprise with AI-powered automation and intelligence. Trusted by Fortune 500 leaders.',
    images: [
      {
        url: 'https://quantumleap.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuantumLeap AI - Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumLeap AI | Enterprise AI Solutions',
    description: 'Transform your enterprise with AI-powered automation and intelligence',
    images: ['https://quantumleap.ai/twitter-image.png'],
    creator: '@quantumleap_ai',
    site: '@quantumleap_ai',
  },
  alternates: {
    canonical: 'https://quantumleap.ai',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}