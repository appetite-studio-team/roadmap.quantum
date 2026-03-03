'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Linkedin, Download, Settings, MoreVertical } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

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

            {/* Center: Title + compact progress */}
            <div className="flex-1 flex flex-col items-center justify-center px-2 min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-white text-center truncate max-w-full">
                <span className="hidden sm:inline">Quantum Computing Roadmap 2026</span>
                <span className="sm:hidden">QC Roadmap 2026</span>
              </h1>
              {completedCount > 0 && (
                <div className="flex items-center gap-2 mt-1 w-full max-w-[200px] sm:max-w-[240px]">
                  <div className="flex-1 min-w-0 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-green-400 transition-all duration-500 ease-out"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-white/50 tabular-nums shrink-0">
                    {completedCount}/{TOTAL_TOPICS}
                    {remainingHours > 0 && (
                      <span className="text-white/40 ml-0.5">· {remainingHours}h left</span>
                    )}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Download PDF + one menu (Share, Settings, Social) */}
            <div className="flex items-center gap-1 sm:gap-2">
              {onDownloadPDF && (
                <button
                  onClick={onDownloadPDF}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all font-medium text-xs sm:text-sm shadow-[0_2px_8px_0_rgba(255,255,255,0.3)]"
                  aria-label="Download PDF"
                >
                  <Download size={16} className="flex-shrink-0" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </button>
              )}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="More options"
                  aria-expanded={menuOpen}
                >
                  <MoreVertical size={20} />
                </button>
                {menuOpen && (
                  <div className="absolute right-0 top-full mt-1 py-1.5 w-52 rounded-xl glass-strong border border-white/20 shadow-lg z-50">
                    <p className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/40 font-medium">
                      Share
                    </p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://roadmap.quantumx.com')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors"
                      onClick={() => setMenuOpen(false)}
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
                      onClick={() => setMenuOpen(false)}
                    >
                      <Linkedin size={16} />
                      Share on LinkedIn
                    </a>
                    <div className="my-1 border-t border-white/10" />
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setSettingsOpen(true);
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors text-left"
                    >
                      <Settings size={16} />
                      Settings
                    </button>
                    <div className="my-1 border-t border-white/10" />
                    <p className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/40 font-medium">
                      Follow
                    </p>
                    <Link
                      href="https://x.com/_Quantum_X_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/twitter.png"
                        alt=""
                        className="w-4 h-4 object-contain brightness-0 invert"
                      />
                      X (Twitter)
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/quantumx-foundation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}

