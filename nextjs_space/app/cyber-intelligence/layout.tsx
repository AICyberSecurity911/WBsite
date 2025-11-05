import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cyber Intelligence & Penetration Testing | Prevent Breaches Before They Happen | QuantumLeap AI',
  description: 'Your business is already vulnerable. Our intelligence-grade cyber audits find and fix threats before criminals exploit them. Free email breach check included. Get your security report.',
  keywords: 'cyber intelligence, penetration testing, cybersecurity audit, threat intelligence, security testing, SMB cybersecurity, breach prevention, security assessment',
  openGraph: {
    title: 'Cyber Intelligence | Find & Fix Threats Before Criminals Do',
    description: 'Intelligence-grade cyber audits that prevent breaches. Free email breach check. Get your security report.',
    type: 'website',
    url: 'https://quantumleap-io-55l56u.abacusai.app/cyber-intelligence',
    images: [
      {
        url: 'https://quantumleap-io-55l56u.abacusai.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuantumLeap AI - Cyber Intelligence & Penetration Testing',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Intelligence | Prevent Breaches Before They Happen',
    description: 'Intelligence-grade cyber audits. Free email breach check.',
    images: ['https://quantumleap-io-55l56u.abacusai.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://quantumleap-io-55l56u.abacusai.app/cyber-intelligence',
  }
}

export default function CyberIntelligenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
