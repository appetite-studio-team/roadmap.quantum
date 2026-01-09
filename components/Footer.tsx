'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            Built for learners of quantum computing
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-600 text-sm">{new Date().getFullYear()}</span>
            <span className="text-gray-400">•</span>
            <Link
              href="https://quantumx.foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
            >
              QuantumX
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

