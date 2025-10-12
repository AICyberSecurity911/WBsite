
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
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-400 hover:to-orange-400 transition duration-300 transform hover:scale-105"
      >
        {primaryLabel}
      </Link>
      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
};
