
"use client";

import React from 'react';
import Link from 'next/link';
import { Users, Network, Search, Shield, TrendingUp } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  iconName: 'users' | 'network' | 'search' | 'shield' | 'trending-up';
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
  iconBgHover: string;
  linkColor: string;
  linkColorHover: string;
  borderGlowColor: string;
}

const iconMap = {
  'users': Users,
  'network': Network,
  'search': Search,
  'shield': Shield,
  'trending-up': TrendingUp,
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  iconName,
  gradientFrom,
  gradientTo,
  iconBg,
  iconBgHover,
  linkColor,
  linkColorHover,
  borderGlowColor,
}) => {
  const Icon = iconMap[iconName];
  return (
    <div className="service-card group h-full flex flex-col">
      <div className={`relative border border-gray-200 rounded-xl p-8 shadow-sm bg-gradient-to-br ${gradientFrom} ${gradientTo} h-full flex flex-col overflow-hidden`}>
        {/* Gradient border glow on hover */}
        <div 
          className="service-card-glow absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${borderGlowColor}20, transparent 60%)`,
            filter: 'blur(8px)',
          }}
        />
        
        {/* Icon with scale animation */}
        <div className={`relative flex items-center justify-center w-14 h-14 ${iconBg} text-white rounded-lg mb-5 transition-all duration-300 ${iconBgHover} service-card-icon`}>
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="relative font-semibold text-xl mb-4 text-gray-900 leading-tight">
          {title}
        </h3>
        
        <p className="relative text-gray-700 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <Link
          href={href}
          className={`relative inline-flex items-center ${linkColor} ${linkColorHover} font-semibold transition-all duration-300 service-card-link`}
        >
          Explore {title.split(' ').slice(0, 2).join(' ')} →
        </Link>
      </div>

      <style jsx>{`
        .service-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .service-card:hover .service-card-icon {
          transform: scale(1.1);
        }

        .service-card:hover .service-card-link {
          transform: translateX(4px);
        }

        .service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .service-card:hover::after {
          opacity: 1;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-card:hover,
          .service-card-icon,
          .service-card-link,
          .service-card-glow {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
