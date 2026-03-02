'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Linkedin, Download, Settings, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import { roadmapData } from '@/data/roadmap';
import SettingsModal from '@/components/SettingsModal';

const SHARE_TEXT = "I'm learning quantum computing with the Quantum Computing Roadmap 2026";

interface HeaderProps {
  onDownloadPDF?: () => void;
}

const TOTAL_TOPICS = roadmapData.reduce(
  (sum, phase) => sum + phase.categories.reduce((s, c) => s + c.topics.length, 0),
  0,
);

function getTotalHours() {
  let h = 0;
  roadmapData.forEach((p) =>
    p.categories.forEach((c) => c.topics.forEach((t) => (h += t.estimatedHours ?? 1))),
  );
  return h;
}

const TOTAL_HOURS = getTotalHours();

export default function Header({ onDownloadPDF }: HeaderProps) {
  const { completedCount, isCompleted } = useProgress();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shareOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) setShareOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [shareOpen]);

  const percent = useMemo(() => Math.round((completedCount / TOTAL_TOPICS) * 100), [completedCount]);
  const completedHours = useMemo(() => {
    let h = 0;
    roadmapData.forEach((p) =>
      p.categories.forEach((c) =>
        c.topics.forEach((t) => {
          if (isCompleted(t.nodeId)) h += t.estimatedHours ?? 1;
        }),
      ),
    );
    return h;
  }, [isCompleted, completedCount]);
  const remainingHours = TOTAL_HOURS - completedHours;

  return (
    <>
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

            {/* Center: Title + Progress */}
            <div className="flex-1 flex flex-col items-center justify-center px-2">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white text-center">
                <span className="hidden sm:inline">Quantum Computing Roadmap 2026</span>
                <span className="sm:hidden">QC Roadmap 2026</span>
              </h1>
            {completedCount > 0 && (
              <div className="flex flex-col items-center gap-0.5 mt-0.5 w-full max-w-[220px] sm:max-w-xs">
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-green-400 transition-all duration-500 ease-out"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-white/50 font-medium tabular-nums whitespace-nowrap">
                    {completedCount}/{TOTAL_TOPICS}
                  </span>
                </div>
                <span className="text-[10px] text-white/40 tabular-nums">
                  {remainingHours > 0 ? `${remainingHours} h left` : 'Done'}
                </span>
              </div>
            )}
            </div>

            {/* Right: Download, Settings, Social */}
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
              <div className="relative" ref={shareRef}>
                <button
                  onClick={() => setShareOpen((o) => !o)}
                  className="text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                  aria-label="Share"
                  aria-expanded={shareOpen}
                >
                  <Share2 size={18} className="sm:w-5 sm:h-5" />
                </button>
                {shareOpen && (
                  <div className="absolute right-0 top-full mt-1 py-1 w-44 rounded-lg glass-strong border border-white/20 shadow-lg z-50">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://roadmap.quantumx.com')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors"
                      onClick={() => setShareOpen(false)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/twitter.png"
                        alt=""
                        className="w-4 h-4 object-contain brightness-0 invert"
                      />
                      Share on X
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://roadmap.quantumx.com')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors"
                      onClick={() => setShareOpen(false)}
                    >
                      <Linkedin size={16} />
                      Share on LinkedIn
                    </a>
                  </div>
                )}
              </div>
              <button
                onClick={() => setSettingsOpen(true)}
                className="text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Settings"
              >
                <Settings size={18} className="sm:w-5 sm:h-5" />
              </button>
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
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}

