
"use client";

import React from 'react';
import { HeroCTA } from './hero-cta';

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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <HeroCTA
            primaryLabel={primaryCta.label}
            primaryHref={primaryCta.href}
            secondaryLabel={secondaryCta.label}
            secondaryHref={secondaryCta.href}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats?.map?.((stat, index) => (
            <div key={index} className="text-center p-4 bg-black/30 rounded-lg backdrop-blur-sm border border-yellow-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
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
