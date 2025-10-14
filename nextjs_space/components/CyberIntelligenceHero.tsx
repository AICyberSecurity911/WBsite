
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroCTA } from "./hero-cta";

const CyberIntelligenceHero: React.FC = () => {
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-red-950 text-white py-24 text-center overflow-hidden min-h-[600px]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated state indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm transition-all duration-500 ${
          showBefore 
            ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
        }`}>
          {showBefore ? '⚠️ Vulnerable State' : '✓ Protected State'}
        </div>
      </div>

      {/* Main animation container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Enterprise Cyber Intelligence
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Predict Threats Before They Strike
          </p>
        </div>

        {/* Visual transformation animation */}
        <div className="relative h-72 mb-12">
          <AnimatePresence mode="wait">
            {showBefore ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full max-w-3xl">
                  {/* Network of vulnerable nodes */}
                  <div className="grid grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative"
                      >
                        <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-500/30 flex items-center justify-center">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                              className="text-2xl"
                            >
                              ⚠️
                            </motion.span>
                          </div>
                          <p className="text-xs text-red-300 font-medium">
                            {['Unpatched System', 'Dark Web Leak', 'Open Port', 'Weak Auth', '3rd Party Risk', 'Legacy Code'][i - 1]}
                          </p>
                        </div>
                        {/* Warning pulses */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Problem text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-red-300 font-semibold"
                  >
                    82% of breaches start inside trusted systems
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full max-w-3xl">
                  {/* Protected network */}
                  <div className="grid grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative"
                      >
                        <div className="bg-emerald-500/20 border-2 border-emerald-500 rounded-lg p-6 backdrop-blur-sm">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/30 flex items-center justify-center">
                            <motion.span
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                              className="text-2xl"
                            >
                              ✓
                            </motion.span>
                          </div>
                          <p className="text-xs text-emerald-300 font-medium">
                            {['Patched', 'Monitored', 'Secured', 'MFA Enabled', 'Validated', 'Modernized'][i - 1]}
                          </p>
                        </div>
                        {/* Success glow */}
                        <motion.div
                          className="absolute inset-0 bg-emerald-500/10 rounded-lg blur-xl"
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Protective shield overlay */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="text-[400px] text-emerald-500 leading-none">🛡️</div>
                  </motion.div>
                  
                  {/* Solution text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-emerald-300 font-semibold"
                  >
                    73% attack surface reduction within 90 days
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <HeroCTA
            primaryLabel="Book Security Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download Cyber Intelligence Blueprint"
            secondaryHref="/download-cyber-blueprint"
          />
        </motion.div>

        {/* Subtext */}
        <p className="mt-6 text-sm text-gray-400">
          Offensive-grade intelligence and zero-trust defense built for the speed of modern enterprise
        </p>
      </div>
    </section>
  );
};

export default CyberIntelligenceHero;
