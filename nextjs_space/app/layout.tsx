import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuantumLeap AI | Enterprise AI & Cyber Intelligence Solutions',
  description: 'QuantumLeap AI helps enterprises convert complexity into momentum through AI Workforce, Automation, Cyber Intelligence, and Executive-grade Due Diligence.',
  keywords: 'AI automation, enterprise transformation, cyber intelligence, process automation, AI workforce, background checks',
  authors: [{ name: 'QuantumLeap AI' }],
  openGraph: {
    title: 'QuantumLeap AI | Enterprise AI Solutions',
    description: 'Transform your enterprise with AI-powered automation and intelligence',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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