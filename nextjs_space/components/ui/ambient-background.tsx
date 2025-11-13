import React from "react";

/**
 * Ambient Background Motion Component
 * Subtle floating blobs for professional depth
 */
export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Blob A - Top Left */}
      <div
        className="absolute top-0 left-0 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{
          background: "var(--glow)",
          animation: "floaty 12s ease-in-out infinite",
        }}
      />
      
      {/* Blob B - Bottom Right */}
      <div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-15"
        style={{
          background: "rgba(255, 127, 80, 0.25)",
          animation: "floaty 14s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default AmbientBackground;

