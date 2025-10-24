
"use client";

import React from "react";
import ScrollReveal from "./scroll-reveal";

const trustedLogos = [
  "IBM", "BMO", "HSBC", "CIBC", "GE", "Deloitte", "NASA", "Allianz", "Husky", "ING", "RIM", "CIIS", "UCOL",
];

const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Trusted by industry leaders"
      className="w-full bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-t border-orange-200 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="fade">
          <h2 className="text-sm font-semibold tracking-wider text-gray-700 uppercase mb-10">
            The Intelligence Behind Industry Leaders
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {trustedLogos?.map?.((logo, index) => (
            <ScrollReveal key={logo} direction="up" delay={index * 50}>
              <div
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 p-5 bg-white/60 rounded-lg shadow-sm hover:shadow-md hover:scale-105"
              >
                <span className="text-gray-700 font-bold text-lg">
                  {logo}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
