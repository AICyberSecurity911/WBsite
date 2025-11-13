import React, { useMemo } from "react";

/**
 * Professional Flame Border Component
 * Quantum Gradient (Dark) - Award-Winning Design
 * 
 * Exact specifications:
 * - Flame color: #7c3aed (purple) [copper alt: #8f5a2a]
 * - Flame width: 4px
 * - Flame segment: 2/1000
 * - Speed: 28s per lap
 * - Corner radius: 24px (must match card radius)
 * - Path: rounded rectangle outside card border, no interior bleed
 */
interface FlameBorderProps {
  r?: number;        // Border radius (default: 24px)
  color?: string;    // Flame color (default: #7c3aed purple)
  seg?: number;      // Segment length (default: 2)
  width?: number;    // Stroke width in px (default: 4)
  dur?: number;      // Duration in seconds per lap (default: 28s)
}

export const FlameBorder: React.FC<FlameBorderProps> = ({
  r = 24,
  color = "#7c3aed",
  seg = 2,
  width = 4,
  dur = 28,
}) => {
  const segClamped = Math.max(1, Math.min(980, Math.floor(seg)));
  const gap = 1000 - segClamped;
  // Generate unique IDs for each instance
  const uniqueId = useMemo(() => Math.random().toString(36).substring(7), []);
  const filterId = `softGlow-${uniqueId}`;
  const maskId = `outerRingMask-${uniqueId}-${r}-${width}`;

  return (
    <svg
      className="pointer-events-none absolute z-30"
      style={{
        top: '-4px',
        left: '-4px',
        width: 'calc(100% + 8px)',
        height: 'calc(100% + 8px)',
        overflow: 'visible',
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="2"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id={maskId}>
          <rect x="0" y="0" width="100" height="100" fill="white" />
          {/* Inner rect creates the mask - flame only shows outside this */}
          <rect x="4" y="4" width="92" height="92" rx={r * 0.96} ry={r * 0.96} fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        {/* Flame path positioned to stay on the border edge */}
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx={r * 0.96}
          ry={r * 0.96}
          pathLength={1000}
          fill="none"
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: `url(#${filterId})`,
            strokeDasharray: `${segClamped} ${gap}`,
            animation: `dashTravelCSS ${dur}s linear infinite`,
          }}
        />
      </g>
    </svg>
  );
};

export default FlameBorder;
