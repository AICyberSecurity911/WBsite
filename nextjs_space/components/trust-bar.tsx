
import React from "react";

const trustedLogos = [
  "IBM", "BMO", "HSBC", "CIBC", "GE", "Deloitte", "NASA", "Allianz", "Husky", "ING", "RIM", "CIIS", "UCOL",
];

const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Trusted by industry leaders"
      className="w-full bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-t border-orange-200 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold tracking-wider text-gray-700 uppercase mb-8">
          The Intelligence Behind Industry Leaders
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {trustedLogos?.map?.((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 p-4 bg-white/50 rounded-lg shadow-sm"
            >
              <span className="text-gray-600 font-bold text-lg">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
