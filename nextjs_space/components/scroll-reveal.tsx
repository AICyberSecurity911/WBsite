
"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getInitialStyle = () => {
    const baseStyle = {
      opacity: 0,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    switch (direction) {
      case 'up':
        return { ...baseStyle, transform: 'translateY(30px)' };
      case 'down':
        return { ...baseStyle, transform: 'translateY(-30px)' };
      case 'left':
        return { ...baseStyle, transform: 'translateX(30px)' };
      case 'right':
        return { ...baseStyle, transform: 'translateX(-30px)' };
      case 'fade':
        return { ...baseStyle, transform: 'none' };
      default:
        return baseStyle;
    }
  };

  const getVisibleStyle = () => {
    return {
      opacity: 1,
      transform: 'translate(0, 0)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyle() : getInitialStyle()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
