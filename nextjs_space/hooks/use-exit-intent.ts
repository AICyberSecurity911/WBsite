
'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseExitIntentOptions {
  enabled?: boolean
  exitIntentEnabled?: boolean
  scrollDepthEnabled?: boolean
  idleEnabled?: boolean
  scrollDepthPercentage?: number
  idleTimeSeconds?: number
  cookieExpiryDays?: number
}

const COOKIE_NAME = 'lead_magnet_shown'

export function useExitIntent({
  enabled = true,
  exitIntentEnabled = true,
  scrollDepthEnabled = true,
  idleEnabled = true,
  scrollDepthPercentage = 70,
  idleTimeSeconds = 45,
  cookieExpiryDays = 7,
}: UseExitIntentOptions = {}) {
  const [shouldShow, setShouldShow] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  // Check if user has already seen the modal
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`))
    
    if (cookie) {
      setHasBeenShown(true)
    }
  }, [])

  const triggerModal = useCallback(() => {
    if (!enabled || hasBeenShown) return
    
    setShouldShow(true)
    setHasBeenShown(true)
    
    // Set cookie to prevent showing again
    const expires = new Date()
    expires.setDate(expires.getDate() + cookieExpiryDays)
    document.cookie = `${COOKIE_NAME}=true; expires=${expires.toUTCString()}; path=/`
  }, [enabled, hasBeenShown, cookieExpiryDays])

  // Exit Intent Detection
  useEffect(() => {
    if (!enabled || !exitIntentEnabled || hasBeenShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving from the top of the viewport
      if (e.clientY <= 0) {
        triggerModal()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [enabled, exitIntentEnabled, hasBeenShown, triggerModal])

  // Scroll Depth Detection
  useEffect(() => {
    if (!enabled || !scrollDepthEnabled || hasBeenShown) return

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const scrollPercentage = (scrolled / scrollHeight) * 100

      if (scrollPercentage >= scrollDepthPercentage) {
        triggerModal()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enabled, scrollDepthEnabled, hasBeenShown, scrollDepthPercentage, triggerModal])

  // Idle Detection
  useEffect(() => {
    if (!enabled || !idleEnabled || hasBeenShown) return

    let idleTimer: NodeJS.Timeout

    const resetTimer = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        triggerModal()
      }, idleTimeSeconds * 1000)
    }

    // Events that indicate user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']

    events.forEach(event => {
      document.addEventListener(event, resetTimer)
    })

    // Start the timer
    resetTimer()

    return () => {
      clearTimeout(idleTimer)
      events.forEach(event => {
        document.removeEventListener(event, resetTimer)
      })
    }
  }, [enabled, idleEnabled, hasBeenShown, idleTimeSeconds, triggerModal])

  const closeModal = useCallback(() => {
    setShouldShow(false)
  }, [])

  const resetModal = useCallback(() => {
    // Clear the cookie and reset state (useful for testing)
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
    setHasBeenShown(false)
    setShouldShow(false)
  }, [])

  return {
    shouldShow,
    closeModal,
    resetModal,
    hasBeenShown,
  }
}
