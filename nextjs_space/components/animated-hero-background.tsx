
"use client";

import React from 'react';

const AnimatedHeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full animate-hero-flow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient definitions for premium look */}
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Flowing data streams - animated paths */}
        <g className="animate-flow-1">
          <path
            d="M-100 200 Q 400 150, 800 300 T 2000 400"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M-100 400 Q 500 350, 900 500 T 2000 600"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
        </g>

        <g className="animate-flow-2">
          <path
            d="M-100 600 Q 300 550, 700 700 T 2000 800"
            stroke="url(#lineGradient1)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M-100 800 Q 600 750, 1000 900 T 2000 1000"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
        </g>

        {/* Connected nodes network */}
        <g className="animate-pulse-nodes">
          <circle cx="200" cy="250" r="4" fill="url(#nodeGradient)" />
          <circle cx="500" cy="200" r="3" fill="url(#nodeGradient)" />
          <circle cx="800" cy="350" r="5" fill="url(#nodeGradient)" />
          <circle cx="1100" cy="300" r="4" fill="url(#nodeGradient)" />
          <circle cx="1400" cy="400" r="3" fill="url(#nodeGradient)" />
          <circle cx="1700" cy="350" r="4" fill="url(#nodeGradient)" />
        </g>

        <g className="animate-pulse-nodes-delayed">
          <circle cx="300" cy="450" r="3" fill="url(#nodeGradient)" />
          <circle cx="600" cy="500" r="4" fill="url(#nodeGradient)" />
          <circle cx="900" cy="550" r="3" fill="url(#nodeGradient)" />
          <circle cx="1200" cy="600" r="5" fill="url(#nodeGradient)" />
          <circle cx="1500" cy="650" r="3" fill="url(#nodeGradient)" />
        </g>

        {/* Connecting lines between nodes */}
        <g className="animate-fade-lines" opacity="0.2">
          <line x1="200" y1="250" x2="500" y2="200" stroke="#fbbf24" strokeWidth="1" />
          <line x1="500" y1="200" x2="800" y2="350" stroke="#fbbf24" strokeWidth="1" />
          <line x1="800" y1="350" x2="1100" y2="300" stroke="#f97316" strokeWidth="1" />
          <line x1="1100" y1="300" x2="1400" y2="400" stroke="#f97316" strokeWidth="1" />
          <line x1="300" y1="450" x2="600" y2="500" stroke="#fbbf24" strokeWidth="1" />
          <line x1="600" y1="500" x2="900" y2="550" stroke="#f97316" strokeWidth="1" />
        </g>

        {/* Floating particles */}
        <g className="animate-float-particles">
          <circle cx="150" cy="150" r="2" fill="#fbbf24" opacity="0.4" />
          <circle cx="450" cy="100" r="1.5" fill="#f97316" opacity="0.3" />
          <circle cx="750" cy="180" r="2" fill="#fbbf24" opacity="0.5" />
          <circle cx="1050" cy="120" r="1.5" fill="#f97316" opacity="0.3" />
          <circle cx="1350" cy="200" r="2" fill="#fbbf24" opacity="0.4" />
          <circle cx="1650" cy="150" r="1.5" fill="#f97316" opacity="0.3" />
        </g>
      </svg>

      <style jsx>{`
        @keyframes heroFlow {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(30px) translateY(-20px); }
        }

        @keyframes flow1 {
          0%, 100% { transform: translateX(0); opacity: 0.4; }
          50% { transform: translateX(50px); opacity: 0.6; }
        }

        @keyframes flow2 {
          0%, 100% { transform: translateX(0); opacity: 0.3; }
          50% { transform: translateX(-50px); opacity: 0.5; }
        }

        @keyframes pulseNodes {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes fadeLines {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        @keyframes floatParticles {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }

        .animate-hero-flow {
          animation: heroFlow 20s ease-in-out infinite;
        }

        .animate-flow-1 {
          animation: flow1 15s ease-in-out infinite;
        }

        .animate-flow-2 {
          animation: flow2 18s ease-in-out infinite;
        }

        .animate-pulse-nodes {
          animation: pulseNodes 4s ease-in-out infinite;
        }

        .animate-pulse-nodes-delayed {
          animation: pulseNodes 4s ease-in-out infinite 2s;
        }

        .animate-fade-lines {
          animation: fadeLines 6s ease-in-out infinite;
        }

        .animate-float-particles {
          animation: floatParticles 12s ease-in-out infinite;
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-hero-flow,
          .animate-flow-1,
          .animate-flow-2,
          .animate-pulse-nodes,
          .animate-pulse-nodes-delayed,
          .animate-fade-lines,
          .animate-float-particles {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeroBackground;
