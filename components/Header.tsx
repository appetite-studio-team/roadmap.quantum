'use client';

import { Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              src="/icon.png"
              alt="Quantum Computing Roadmap"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
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
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Twitter/X"
            >
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/quantumx-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
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

