import React from "react";

/**
 * Animated Copper Flame Border Component
 * Based on Quantum Gradient (Dark) theme specification
 */
interface FlameBorderProps {
  r?: number;        // Border radius (default: 12px)
  color?: string;    // Flame color (default: #b87333 copper)
  seg?: number;      // Segment length 1-1000 (default: 2)
  width?: number;    // Stroke width in px (default: 1)
  dur?: number;      // Duration in seconds per lap (default: 28s)
}

export const FlameBorder: React.FC<FlameBorderProps> = ({
  r = 12,
  color = "#b87333",
  seg = 2,
  width = 1,
  dur = 28,
}) => {
  const segClamped = Math.max(1, Math.min(980, Math.floor(seg)));
  const gap = 1000 - segClamped;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 mix-blend-screen h-[calc(100%+12px)] w-[calc(100%+12px)] translate-x-[-6px] translate-y-[-6px]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="1.6"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id="outerRingMask">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <rect x="6" y="6" width="88" height="88" rx={r} ry={r} fill="black" />
        </mask>
      </defs>
      <style>{`@keyframes dashTravel{from{stroke-dashoffset:0}to{stroke-dashoffset:-1000}}`}</style>
      <g mask="url(#outerRingMask)">
        <rect
          x="6"
          y="6"
          width="88"
          height="88"
          rx={r}
          ry={r}
          pathLength={1000}
          fill="none"
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "url(#softGlow) drop-shadow(0 0 10px var(--glow))",
            strokeDasharray: `${segClamped} ${gap}`,
            animation: `dashTravel ${dur}s linear infinite`,
          }}
        />
      </g>
    </svg>
  );
};

export default FlameBorder;
