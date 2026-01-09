'use client';

import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Quantum Computing Roadmap"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0 brightness-0 invert"
              loading="eager"
            />
          </div>
          
          {/* Center: Main Title - Responsive sizing */}
          <div className="flex-1 flex justify-center sm:justify-center">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white text-center px-2">
              <span className="hidden sm:inline">Quantum Computing Roadmap 2026</span>
              <span className="sm:hidden">QC Roadmap 2026</span>
            </h1>
          </div>
          
          {/* Right: Social Icons - Responsive sizing and spacing */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link
              href="https://x.com/_Quantum_X_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors flex items-center"
              aria-label="X (formerly Twitter)"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/twitter.png"
                alt="X (formerly Twitter)"
                className="w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain brightness-0 invert"
                loading="eager"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/quantumx-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

