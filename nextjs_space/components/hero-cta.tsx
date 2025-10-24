
"use client";

import React from 'react';
import Link from 'next/link';

interface HeroCTAProps {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Primary CTA - Solid, bold, attention-grabbing */}
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-lg shadow-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
      >
        {primaryLabel}
      </Link>
      
      {/* Secondary CTA - Outline, subtle, less prominent */}
      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/40 text-white font-medium text-lg rounded-lg hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
};
