
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
      {/* Primary CTA - Premium glow effect with pulse animation */}
      <Link
        href={primaryHref}
        className="primary-cta-button inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
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

      <style jsx>{`
        .primary-cta-button {
          box-shadow: 
            0 0 20px rgba(251, 191, 36, 0.3),
            0 0 40px rgba(249, 115, 22, 0.2),
            0 10px 30px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .primary-cta-button::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 0.5rem;
          padding: 2px;
          background: linear-gradient(45deg, #fbbf24, #f97316, #fbbf24);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: ctaGlowPulse 2s ease-in-out infinite;
        }

        .primary-cta-button:hover {
          box-shadow: 
            0 0 30px rgba(251, 191, 36, 0.5),
            0 0 60px rgba(249, 115, 22, 0.3),
            0 15px 40px rgba(0, 0, 0, 0.4);
          transform: scale(1.05) translateY(-2px);
        }

        .primary-cta-button:hover::before {
          opacity: 1;
          animation: ctaGlowPulseHover 1.5s ease-in-out infinite;
        }

        @keyframes ctaGlowPulse {
          0%, 100% {
            opacity: 0.3;
            filter: blur(8px);
          }
          50% {
            opacity: 0.5;
            filter: blur(12px);
          }
        }

        @keyframes ctaGlowPulseHover {
          0%, 100% {
            opacity: 0.6;
            filter: blur(10px);
          }
          50% {
            opacity: 1;
            filter: blur(16px);
          }
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .primary-cta-button::before {
            animation: none;
          }
          
          .primary-cta-button:hover::before {
            animation: none;
          }

          .primary-cta-button,
          .primary-cta-button:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};
