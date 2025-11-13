import React from "react";
import { FlameBorder } from "./flame-border";
import { cn } from "@/lib/utils";

/**
 * Quantum Gradient Dark Card Component
 * Matches QuantumThemePreview.tsx Card implementation exactly
 * 
 * Features:
 * - Gradient overlay on hover
 * - Flame border animation
 * - Proper shadow and border styling
 * - Uses CSS variables for theming
 */
interface QGDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  desc?: string;
  icon?: React.ReactNode;
  showFlame?: boolean;
}

export const QGDCard = React.forwardRef<HTMLDivElement, QGDCardProps>(
  ({ className, title, desc, icon, showFlame = true, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative group", className)} {...props}>
        {/* Gradient Overlay - appears on hover */}
        <div
          className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(255,255,255,0.15), transparent 40%), radial-gradient(ellipse at bottom right, var(--glow), transparent 40%)",
          }}
        />
        
        {/* Card Content */}
        <div
          className="relative h-full rounded-2xl border border-[var(--border)] p-5 shadow-[0_10px_30px_-10px_var(--shadow)] transition duration-300 hover:shadow-[0_20px_40px_-10px_var(--shadow)]"
          style={{ background: "var(--cardbg)", borderRadius: 12 }}
        >
          {title && (
            <div className="mb-3 flex items-center gap-3 text-[var(--primary)]">
              {icon || (
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3v18M3 12h18" />
                </svg>
              )}
              <h3 className="text-lg font-semibold text-[var(--fg)]">{title}</h3>
            </div>
          )}
          {desc && (
            <p className="text-sm leading-relaxed text-[var(--muted)]">{desc}</p>
          )}
          {children}
        </div>
        
        {/* Flame Border */}
        {showFlame && <FlameBorder />}
      </div>
    );
  }
);

QGDCard.displayName = "QGDCard";

export default QGDCard;

