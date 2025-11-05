import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beyond Background Checks | Intelligence-Grade Investigations | QuantumLeap AI',
  description: 'One bad hire can destroy everything you built. Beyond Background Checks reveals who they really are—hidden behavior, red flags, and risks beneath the surface. Get your risk report.',
  keywords: 'background checks, intelligence investigations, deep background checks, hiring verification, pre-employment screening, candidate screening, SMB hiring',
  openGraph: {
    title: 'Beyond Background Checks | Reveal Hidden Risks Before Hiring',
    description: 'Standard checks only catch criminals who got caught. We reveal who they really are. Get your confidential risk report.',
    type: 'website',
    url: 'https://quantumleap-io-55l56u.abacusai.app/background-checks',
    images: [
      {
        url: 'https://quantumleap-io-55l56u.abacusai.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuantumLeap AI - Beyond Background Checks',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Background Checks | Reveal Hidden Risks',
    description: 'Standard checks miss what matters. Get your risk report.',
    images: ['https://quantumleap-io-55l56u.abacusai.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://quantumleap-io-55l56u.abacusai.app/background-checks',
  }
}

export default function BackgroundChecksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
