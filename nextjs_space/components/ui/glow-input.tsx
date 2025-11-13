import React from "react";
import { FlameBorder } from "./flame-border";
import { cn } from "@/lib/utils";

/**
 * Glow Input Component
 * Input field with glow and flame border
 */
interface GlowInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showFlame?: boolean;
  label?: string;
}

export const GlowInput = React.forwardRef<HTMLInputElement, GlowInputProps>(
  ({ className, showFlame = true, label, ...props }, ref) => {
    return (
      <div className="card-field relative">
        {label && (
          <label className="block text-sm font-medium text-[color:var(--fg)] mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-transparent text-[color:var(--fg)] outline-none border-none",
            className
          )}
          {...props}
        />
        {showFlame && <FlameBorder />}
      </div>
    );
  }
);

GlowInput.displayName = "GlowInput";

export default GlowInput;

