
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroCTA } from "./hero-cta";

const TransformationHero: React.FC = () => {
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-950 text-white py-24 text-center overflow-hidden min-h-[600px]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* State indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm transition-all duration-500 ${
          showBefore 
            ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
        }`}>
          {showBefore ? '⚡ Fragmented' : '⚡ Unified'}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Enterprise Transformation
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Strategy That Moves, Systems That Deliver
          </p>
        </div>

        {/* Visual transformation animation */}
        <div className="relative h-80 mb-12">
          <AnimatePresence mode="wait">
            {showBefore ? (
              <motion.div
                key="before"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full max-w-4xl">
                  {/* Chaotic scattered elements */}
                  <div className="relative h-64">
                    {[
                      { label: 'IT', x: '10%', y: '20%', delay: 0 },
                      { label: 'Finance', x: '70%', y: '15%', delay: 0.1 },
                      { label: 'HR', x: '25%', y: '60%', delay: 0.2 },
                      { label: 'Sales', x: '80%', y: '70%', delay: 0.3 },
                      { label: 'Ops', x: '45%', y: '35%', delay: 0.4 },
                      { label: 'Marketing', x: '15%', y: '80%', delay: 0.5 },
                    ].map((dept, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{ left: dept.x, top: dept.y }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          rotate: [0, -5, 5, -5, 0],
                          x: [0, 10, -10, 5, 0],
                        }}
                        transition={{ 
                          delay: dept.delay,
                          rotate: { repeat: Infinity, duration: 3 },
                          x: { repeat: Infinity, duration: 2.5 }
                        }}
                      >
                        <div className="relative">
                          <div className="bg-orange-500/20 border-2 border-orange-400 rounded-lg px-4 py-3 backdrop-blur-sm whitespace-nowrap">
                            <p className="text-sm font-semibold text-orange-300">{dept.label}</p>
                          </div>
                          {/* Disconnected signals */}
                          <motion.div
                            className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          />
                        </div>
                      </motion.div>
                    ))}

                    {/* Broken connection lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
                      <motion.line
                        x1="15%" y1="25%" x2="30%" y2="65%"
                        stroke="#f97316"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.line
                        x1="75%" y1="20%" x2="50%" y2="40%"
                        stroke="#f97316"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </svg>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-orange-300 font-semibold"
                  >
                    70% of transformations fail due to misalignment
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full max-w-4xl">
                  {/* Unified circular arrangement */}
                  <div className="relative h-64 flex items-center justify-center">
                    {/* Central hub */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute z-10"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                        <p className="text-lg font-bold">AI Engine</p>
                      </div>
                      {/* Pulsing rings */}
                      {[1, 2, 3].map((ring) => (
                        <motion.div
                          key={ring}
                          className="absolute inset-0 border-2 border-blue-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: ring * 0.4 }}
                        />
                      ))}
                    </motion.div>

                    {/* Departments arranged in circle */}
                    {[
                      { label: 'IT', angle: 0 },
                      { label: 'Finance', angle: 60 },
                      { label: 'HR', angle: 120 },
                      { label: 'Sales', angle: 180 },
                      { label: 'Ops', angle: 240 },
                      { label: 'Marketing', angle: 300 },
                    ].map((dept, i) => {
                      const radius = 140;
                      const x = Math.cos((dept.angle * Math.PI) / 180) * radius;
                      const y = Math.sin((dept.angle * Math.PI) / 180) * radius;
                      
                      return (
                        <motion.div
                          key={i}
                          className="absolute"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        >
                          <div className="bg-blue-500/20 border-2 border-blue-400 rounded-lg px-3 py-2 backdrop-blur-sm">
                            <p className="text-sm font-semibold text-blue-300">{dept.label}</p>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Connected lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                        const startRadius = 64;
                        const endRadius = 140;
                        const x1 = 50 + Math.cos((angle * Math.PI) / 180) * startRadius / 4;
                        const y1 = 50 + Math.sin((angle * Math.PI) / 180) * startRadius / 4;
                        const x2 = 50 + Math.cos((angle * Math.PI) / 180) * endRadius / 4;
                        const y2 = 50 + Math.sin((angle * Math.PI) / 180) * endRadius / 4;
                        
                        return (
                          <motion.line
                            key={i}
                            x1={`${x1}%`}
                            y1={`${y1}%`}
                            x2={`${x2}%`}
                            y2={`${y2}%`}
                            stroke="#60a5fa"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                          />
                        );
                      })}
                    </svg>

                    {/* Data flow particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: [0, Math.cos((i * 60 * Math.PI) / 180) * 140],
                          y: [0, Math.sin((i * 60 * Math.PI) / 180) * 140],
                          scale: [1, 0],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 text-blue-300 font-semibold"
                  >
                    +22% ROI uplift in 9 months with unified transformation
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
            primaryLabel="Book Transformation Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download Transformation Playbook"
            secondaryHref="/download-transformation-playbook"
          />
        </motion.div>

        <p className="mt-6 text-sm text-gray-400">
          Align technology, people, and capital into one momentum engine
        </p>
      </div>
    </section>
  );
};

export default TransformationHero;
