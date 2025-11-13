import React from "react";
import { FlameBorder } from "./flame-border";
import { cn } from "@/lib/utils";

/**
 * Professional GlowCard Component
 * Award-Winning Design - Quantum Gradient (Dark)
 * 
 * Features:
 * - 24px border radius (matches flame)
 * - Always-on glow layer (dual radial gradients)
 * - Lavender border option
 * - Flame border animation
 * - Professional spacing and typography
 */
interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  desc?: string;
  icon?: React.ReactNode;
  showFlame?: boolean;
  variant?: "default" | "lavender";
  children?: React.ReactNode;
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  (
    {
      className,
      title,
      desc,
      icon,
      showFlame = true,
      variant = "default",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glow-card group relative overflow-hidden",
          variant === "lavender" && "glow-card-lavender",
          className
        )}
        {...props}
      >
        <div className="relative z-20">
          {title && (
            <div className="mb-4 flex items-center gap-3 p-6 pb-0">
              {icon && (
                <div className="text-[color:var(--primary)]">{icon}</div>
              )}
              <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                {title}
              </h3>
            </div>
          )}
          {desc && !children && (
            <p className="text-sm leading-relaxed text-[color:var(--muted)] p-6 pt-0">
              {desc}
            </p>
          )}
          {children && (
            <div className={cn(
              !title && !desc ? "p-6" : "p-6"
            )}>
              {children}
            </div>
          )}
        </div>
        
        {/* Flame Border */}
        {showFlame && <FlameBorder />}
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";

export default GlowCard;

