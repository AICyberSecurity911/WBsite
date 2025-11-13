import { useMemo } from "react";

/**
 * Quantum Gradient Dark Design Tokens
 * Matches QuantumThemePreview.tsx TOKENS exactly
 */
export const QGD_TOKENS = {
  "--bg": "#07070b",
  "--fg": "#f6f7ff",
  "--muted": "#b8b6c9",
  "--card": "#0c0c12",
  "--primary": "#5312c4",
  "--primary-contrast": "#f7f7fb",
  "--accent": "#ff7f50",
  "--ring": "#22d3ee",
  "--glow": "rgba(124,58,237,0.55)",
  "--border": "#2c2c3d",
  "--shadow": "rgba(255,127,80,0.28)",
  "--cardbg": "#0c0c12",
  "--glow-strength": "0.97",
} as const;

/**
 * React hook to get QGD tokens as inline styles
 * Useful for components that need to apply tokens directly
 */
export const useQGDTokens = () => {
  return useMemo(() => {
    const style: Record<string, string> = {};
    Object.entries(QGD_TOKENS).forEach(([k, v]) => {
      style[k] = v;
    });
    return style as React.CSSProperties;
  }, []);
};

/**
 * Get a specific token value
 */
export const getQGDToken = (key: keyof typeof QGD_TOKENS): string => {
  return QGD_TOKENS[key];
};

