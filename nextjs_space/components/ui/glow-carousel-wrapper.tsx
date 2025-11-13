import React from "react";
import { FlameBorder } from "./flame-border";
import { cn } from "@/lib/utils";

/**
 * Glow Carousel Wrapper Component
 * Wraps carousel containers with glow and flame border
 */
interface GlowCarouselWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  showFlame?: boolean;
  children: React.ReactNode;
}

export const GlowCarouselWrapper = React.forwardRef<HTMLDivElement, GlowCarouselWrapperProps>(
  ({ className, showFlame = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glow-card relative rounded-[24px] overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="relative z-20">
          {children}
        </div>
        {showFlame && <FlameBorder />}
      </div>
    );
  }
);

GlowCarouselWrapper.displayName = "GlowCarouselWrapper";

export default GlowCarouselWrapper;

