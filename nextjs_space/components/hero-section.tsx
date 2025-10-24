
"use client";

import React, { useState, useEffect } from 'react';
import { HeroCTA } from './hero-cta';
import AnimatedCounter from './animated-counter';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: Array<{ value: string; label: string }>;
  bgVideo: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  stats,
  bgVideo,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video with animated overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        
        {/* Animated grid overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Content with staggered animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}
        >
          {headline}
        </h1>
        
        <p 
          className={`text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ lineHeight: '1.6' }}
        >
          {subheadline}
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <HeroCTA
            primaryLabel={primaryCta.label}
            primaryHref={primaryCta.href}
            secondaryLabel={secondaryCta.label}
            secondaryHref={secondaryCta.href}
          />
        </div>

        {/* Stats with animated counters */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats?.map?.((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-black/40 rounded-xl backdrop-blur-md border border-yellow-500/30 hover:border-yellow-500/60 hover:bg-black/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-3">
                {stat.value.includes('$') ? (
                  <>
                    $<AnimatedCounter end={170} suffix="M+" />
                  </>
                ) : stat.value.includes('+') && !stat.value.includes('NASA') ? (
                  <AnimatedCounter end={parseInt(stat.value)} suffix="+" />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
