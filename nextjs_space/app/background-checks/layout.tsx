import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beyond Background Checks: Find What Standard Checks Miss',
  description:
    'Standard background checks only catch criminals who got caught. We reveal hidden identities, dark web activity, and red flags lurking beneath the surface.',
}

export default function BackgroundChecksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
