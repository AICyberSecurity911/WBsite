
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const dynamic = 'force-dynamic'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://quantumleap.io'),
  title: {
    default: 'QuantumLeap AI - Fire Your Biggest Headache, Hire Your Most Reliable Employee',
    template: '%s | QuantumLeap AI'
  },
  description: 'Deploy battle-tested AI employees trained on 10,000+ hours. Zero interviews. Zero drama. Immediate relief. 87% cost savings, 99.2% accuracy rate.',
  keywords: [
    'AI workforce solutions',
    'AI employees for small business', 
    'automated business operations',
    'AI for hiring',
    'virtual AI assistant',
    'business automation services',
    'AI bookkeeper',
    'AI sales representative'
  ],
  authors: [{ name: 'QuantumLeap AI' }],
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: 'QuantumLeap AI - Fire Your Biggest Headache, Hire Your Most Reliable Employee',
    description: 'Deploy battle-tested AI employees trained on 10,000+ hours. Zero interviews. Zero drama. Immediate relief. 87% cost savings, 99.2% accuracy rate.',
    siteName: 'QuantumLeap AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuantumLeap AI - AI Workforce Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumLeap AI - AI Workforce Solutions',
    description: 'Deploy battle-tested AI employees with 87% cost savings and 99.2% accuracy rate.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
