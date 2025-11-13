
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface AnimatedButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  onClick?: () => void
  className?: string
}

export function AnimatedButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  showIcon = true,
  onClick,
  className = ''
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    
    setRipples([...ripples, { x, y, id }])
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id))
    }, 600)

    if (onClick) onClick()
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const baseClasses = `
    relative overflow-hidden font-bold rounded-xl
    transition-all duration-300 inline-flex items-center gap-2
    focus:outline-none focus:ring-3 focus:ring-[#FF6B6B] focus:ring-offset-2 focus:ring-offset-transparent
    ${sizeClasses[size]}
  `

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[#FF6B6B] to-[#20C997] 
      hover:from-[#E85D5D] hover:to-[#4DD4AC]
      text-white shadow-lg hover:shadow-xl hover:shadow-[#FF6B6B]/50
    `,
    secondary: `
      bg-transparent border-2 border-[#20C997]
      text-[#20C997] hover:bg-[#20C997] hover:text-white
      dark:text-[#20C997] dark:hover:text-white
    `
  }

  const buttonContent = (
    <>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
      {showIcon && <ArrowRight className="w-5 h-5 relative z-10" />}
    </>
  )

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Link
          href={href}
          className={combinedClasses}
          onClick={handleClick}
        >
          {buttonContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={combinedClasses}
      onClick={handleClick}
    >
      {buttonContent}
    </motion.button>
  )
}
