'use client'

import { useExitIntent } from '@/hooks/use-exit-intent'
import { LeadMagnetModal } from './lead-magnet-modal'

export function BackgroundChecksExitIntent() {
  const { shouldShow, closeModal } = useExitIntent({
    enabled: true,
    exitIntentEnabled: true,
    scrollDepthEnabled: true,
    idleEnabled: true,
    scrollDepthPercentage: 70,
    idleTimeSeconds: 45,
    cookieExpiryDays: 7,
  })

  return (
    <LeadMagnetModal 
      isOpen={shouldShow} 
      onClose={closeModal}
      title="Before You Go—Here's What You Need to Know About Background Checks"
      subtitle='Download our free guide: "The 5 Invisible Red Flags Standard Background Checks Never Catch"'
      description="This 8-page guide reveals why 'no criminal record' doesn't mean someone is safe, plus a free risk assessment tool to evaluate your next hire."
      successMessage="Check Your Inbox! 📧"
      successDescription="Your free guide and risk assessment tool are on their way to"
    />
  )
}
