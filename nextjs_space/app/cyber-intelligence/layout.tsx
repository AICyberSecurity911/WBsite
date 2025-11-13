import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cyber Intelligence: NASA-Level Security for Small Business',
  description: 'Stop hackers before they attack. NASA-recognized cybersecurity that finds vulnerabilities standard IT scans miss. Find 3 critical risks or it\'s free.',
  keywords: 'cybersecurity for small business, penetration testing services, dark web monitoring, security audit, ransomware protection, data breach prevention, IT security assessment, cyber threat intelligence',
  openGraph: {
    title: 'Cyber Intelligence: NASA-Level Security for Small Business',
    description: 'Stop hackers before they attack. NASA-recognized cybersecurity that finds vulnerabilities standard IT scans miss.',
    type: 'website',
    url: 'https://quantumleapai.abacusai.app/cyber-intelligence',
    images: [
      {
        url: '/og-cyber-intelligence.jpg',
        width: 1200,
        height: 630,
        alt: 'Cyber Intelligence Protection Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Intelligence: NASA-Level Security for Small Business',
    description: 'Stop hackers before they attack. Find 3 critical risks or it\'s free.',
    images: ['/twitter-cyber-intelligence.jpg'],
  },
  alternates: {
    canonical: 'https://quantumleapai.abacusai.app/cyber-intelligence',
  },
  robots: 'index, follow, max-image-preview:large',
}

export default function CyberIntelligenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
