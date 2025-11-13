
'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-context'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#20C997] p-1 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={theme === 'dark'}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          x: theme === 'dark' ? 0 : 28
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-[#0A0E27]" />
        ) : (
          <Sun className="w-3 h-3 text-[#FF6B6B]" />
        )}
      </motion.div>
    </motion.button>
  )
}
