'use client';

import { Linkedin, Download } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  onDownloadPDF?: () => void;
}

export default function Header({ onDownloadPDF }: HeaderProps) {
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
          
          {/* Right: Download Button and Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {onDownloadPDF && (
              <button
                onClick={onDownloadPDF}
                className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all font-medium text-xs sm:text-sm shadow-[0_2px_8px_0_rgba(255,255,255,0.3)]"
                aria-label="Download PDF"
              >
                <Download size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            )}
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

