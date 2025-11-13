import React from "react";
import { FlameBorder } from "./flame-border";
import { cn } from "@/lib/utils";

/**
 * Glow Textarea Component
 * Textarea field with glow and flame border
 */
interface GlowTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showFlame?: boolean;
  label?: string;
}

export const GlowTextarea = React.forwardRef<HTMLTextAreaElement, GlowTextareaProps>(
  ({ className, showFlame = true, label, ...props }, ref) => {
    return (
      <div className="card-field relative">
        {label && (
          <label className="block text-sm font-medium text-[color:var(--fg)] mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-transparent text-[color:var(--fg)] outline-none border-none resize-none",
            className
          )}
          {...props}
        />
        {showFlame && <FlameBorder />}
      </div>
    );
  }
);

GlowTextarea.displayName = "GlowTextarea";

export default GlowTextarea;

