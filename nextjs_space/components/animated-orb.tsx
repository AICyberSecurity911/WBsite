
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimatedOrbProps {
  variant?: 'blue-orange' | 'grey';
  size?: number;
  className?: string;
  animationPreset?: 'float' | 'bounce' | 'pulse' | 'spin' | 'custom';
  glowIntensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export default function AnimatedOrb({
  variant = 'blue-orange',
  size = 280,
  className = '',
  animationPreset = 'float',
  glowIntensity = 'medium',
  interactive = true,
}: AnimatedOrbProps) {
  const imageSrc = variant === 'blue-orange' 
    ? '/images/orb-blue-orange.png' 
    : '/images/orb-grey.png';

  // Animation variants based on preset
  const getAnimationVariants = () => {
    switch (animationPreset) {
      case 'float':
        return {
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.05, 1],
        };
      case 'bounce':
        return {
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        };
      case 'pulse':
        return {
          scale: [1, 1.15, 1],
          opacity: [0.8, 1, 0.8],
        };
      case 'spin':
        return {
          rotate: [0, 360],
        };
      default:
        return {
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        };
    }
  };

  const getTransition = () => {
    switch (animationPreset) {
      case 'float':
        return {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        };
      case 'bounce':
        return {
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        };
      case 'pulse':
        return {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        };
      case 'spin':
        return {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        };
      default:
        return {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        };
    }
  };

  const getGlowStyles = () => {
    const glowColors = variant === 'blue-orange'
      ? 'rgba(59, 130, 246, 0.4), rgba(249, 115, 22, 0.4)'
      : 'rgba(148, 163, 184, 0.4)';

    switch (glowIntensity) {
      case 'low':
        return {
          filter: `drop-shadow(0 0 10px ${glowColors})`,
        };
      case 'medium':
        return {
          filter: `drop-shadow(0 0 20px ${glowColors}) drop-shadow(0 0 40px ${glowColors})`,
        };
      case 'high':
        return {
          filter: `drop-shadow(0 0 30px ${glowColors}) drop-shadow(0 0 60px ${glowColors}) drop-shadow(0 0 90px ${glowColors})`,
        };
      default:
        return {
          filter: `drop-shadow(0 0 20px ${glowColors})`,
        };
    }
  };

  const hoverVariants = interactive ? {
    scale: 1.1,
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  } : {};

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
        ...getGlowStyles(),
      }}
      animate={getAnimationVariants()}
      transition={getTransition()}
      whileHover={hoverVariants}
      whileTap={interactive ? { scale: 0.95 } : {}}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={imageSrc}
          alt="QuantumLeap AI Orb Mascot"
          fill
          className="object-contain"
          priority={false}
          quality={90}
        />
      </motion.div>

      {/* Rotating ring effect */}
      {variant === 'blue-orange' && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/30"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      )}

      {/* Pulsing glow layer */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: variant === 'blue-orange'
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(249, 115, 22, 0.3), transparent)'
            : 'radial-gradient(circle, rgba(148, 163, 184, 0.3), transparent)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
