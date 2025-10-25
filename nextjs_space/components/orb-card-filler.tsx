
"use client";

import React from 'react';
import AnimatedOrb from './animated-orb';
import { motion } from 'framer-motion';

interface OrbCardFillerProps {
  variant?: 'blue-orange' | 'grey';
  message?: string;
  size?: number;
  className?: string;
}

export default function OrbCardFiller({
  variant = 'blue-orange',
  message = "More innovations coming soon...",
  size = 240,
  className = '',
}: OrbCardFillerProps) {
  return (
    <motion.div
      className={`group relative h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200/50 hover:border-blue-300/50 transition-all duration-500 overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Orb */}
      <div className="relative z-10 mb-6">
        <AnimatedOrb
          variant={variant}
          size={size}
          animationPreset="float"
          glowIntensity="high"
          interactive={true}
        />
      </div>

      {/* Message */}
      <motion.p
        className="relative z-10 text-center text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {message}
      </motion.p>

      {/* Sparkle effect on hover */}
      <motion.div
        className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ✨
      </motion.div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-t from-blue-300/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
