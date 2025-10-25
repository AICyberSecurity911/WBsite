
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface OrbCardFillerProps {
  variant?: 'blue-orange' | 'grey';
  message?: string;
  size?: number;
  className?: string;
}

export default function OrbCardFiller({
  variant = 'blue-orange',
  message = "Ready to unlock your Enterprise potential?",
  size = 240,
  className = '',
}: OrbCardFillerProps) {
  const [showMessage, setShowMessage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setShowMessage(true);
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

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

      <AnimatePresence mode="wait">
        {!showMessage ? (
          /* Video Animation */
          <motion.div
            key="video"
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
          >
            {/* Solid background matching card gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50" />
            
            {/* Video with contained sizing */}
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="relative z-10 w-full h-auto max-w-[300px] object-contain mix-blend-normal"
            >
              <source src="/videos/orb-animation.mp4" type="video/mp4" />
            </video>
          </motion.div>
        ) : (
          /* Message & CTA - Full Card Fill */
          <motion.div
            key="message"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 text-center px-6 py-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Message */}
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {message}
            </motion.h3>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <Link
                href="/schedule"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Book a Call</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              {/* Sparkle decoration */}
              <motion.div
                className="absolute -top-3 -right-3 text-4xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ✨
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-blue-600" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-t from-blue-300/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
