import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Intelligent Automation for SMBs | Save 20+ Hours/Week & Cut Costs 60-85% | QuantumLeap AI',
  description: 'Stop losing time and profit to manual work. QuantumLeap custom intelligent automations connect your tools, eliminate repetitive tasks, and save 20+ hours/week—without hiring. Run the free ROI scan.',
  keywords: 'intelligent automation, business automation, workflow automation, SMB automation, custom automation, AI automation, process automation',
  openGraph: {
    title: 'Custom Intelligent Automation | Save 20+ Hours/Week | QuantumLeap AI',
    description: 'Stop losing time to manual work. Custom intelligent automations that save 20+ hours/week and cut costs by 60-85%. Get your free ROI scan.',
    type: 'website',
    url: 'https://quantumleap-io-55l56u.abacusai.app/intelligent-automation',
    images: [
      {
        url: 'https://quantumleap-io-55l56u.abacusai.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuantumLeap AI - Custom Intelligent Automation',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Intelligent Automation | Save 20+ Hours/Week',
    description: 'Stop losing time to manual work. Get your free ROI scan.',
    images: ['https://quantumleap-io-55l56u.abacusai.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://quantumleap-io-55l56u.abacusai.app/intelligent-automation',
  }
}

export default function IntelligentAutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
