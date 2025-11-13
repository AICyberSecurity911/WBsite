
'use client'

import { useExitIntent } from '@/hooks/use-exit-intent'
import { LeadMagnetModal } from './lead-magnet-modal'

export function ExitIntentProvider() {
  const { shouldShow, closeModal } = useExitIntent({
    enabled: true,
    exitIntentEnabled: true,
    scrollDepthEnabled: false,
    idleEnabled: false,
    scrollDepthPercentage: 70,
    idleTimeSeconds: 45,
    cookieExpiryDays: 7,
  })

  return (
    <LeadMagnetModal 
      isOpen={shouldShow} 
      onClose={closeModal}
    />
  )
}
