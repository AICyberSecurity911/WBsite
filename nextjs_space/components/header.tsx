// components/header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "AI Workforce", href: "/ai-workforce" },
    { name: "Process Intelligence", href: "/process-intelligence" },
    { name: "Executive Due Diligence", href: "/beyond-background-checks" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#founder" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-amber-600/20">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-quantumleap.png"
                  alt="QuantumLeap AI"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                QuantumLeap <span className="text-amber-500">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/schedule"
              className="rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-amber-700 hover:to-orange-700 transition-all"
            >
              Book Briefing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/schedule"
                className="block px-3 py-2 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-md transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Briefing
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
