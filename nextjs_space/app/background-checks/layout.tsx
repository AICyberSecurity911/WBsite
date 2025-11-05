import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beyond Background Checks | Uncover Hidden Risks Before Hiring | QuantumLeap AI',
  description: 'Standard background checks miss the truth. QuantumLeap\'s intelligence-grade investigations reveal hidden behavior, fake identities, and risks lurking beneath the surface—before they destroy your business.',
  keywords: [
    'background check alternatives',
    'deep background investigation',
    'hire verification service',
    'employee vetting service',
    'pre-employment investigation',
    'hidden identity detection',
    'behavioral background check',
    'intelligence investigation',
    'fraud prevention hiring',
    'risk assessment before hiring'
  ],
  openGraph: {
    title: 'Beyond Background Checks | Uncover Hidden Risks Before Hiring',
    description: 'Intelligence-grade investigations that reveal what standard checks miss—hidden behavior, fake identities, and risks that could destroy your business.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Background Checks | Uncover Hidden Risks Before Hiring',
    description: 'Standard background checks only catch criminals who got caught. We reveal who they really are.',
  },
}

export default function BackgroundChecksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
