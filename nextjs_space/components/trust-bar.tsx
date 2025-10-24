
"use client";

import React, { useEffect, useRef } from "react";
import ScrollReveal from "./scroll-reveal";

const trustedLogos = [
  "IBM", "BMO", "HSBC", "CIBC", "GE", "Deloitte", "NASA", "Allianz", "Husky", "ING", "RIM", "CIIS", "UCOL",
];

// Duplicate logos for seamless infinite scroll
const infiniteLogos = [...trustedLogos, ...trustedLogos];

const TrustBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      // Reset scroll when we've scrolled through one set of logos
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section
      aria-label="Trusted by industry leaders"
      className="w-full bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-t border-orange-200 py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="fade">
          <h2 className="text-sm font-semibold tracking-wider text-gray-700 uppercase mb-10">
            The Intelligence Behind Industry Leaders
          </h2>
        </ScrollReveal>

        {/* Desktop: Auto-scrolling carousel */}
        <div className="hidden md:block relative">
          <div 
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {infiniteLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 p-8 bg-white/60 rounded-lg shadow-sm hover:shadow-md hover:scale-105 min-w-[160px]"
              >
                <span className="text-gray-700 font-bold text-xl whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amber-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none" />
        </div>

        {/* Mobile: Grid layout (swipeable by default on mobile) */}
        <div className="md:hidden grid grid-cols-2 gap-6 items-center justify-items-center">
          {trustedLogos.map((logo, index) => (
            <div
              key={logo}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 p-6 bg-white/60 rounded-lg shadow-sm w-full"
            >
              <span className="text-gray-700 font-bold text-lg">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          div[ref] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
