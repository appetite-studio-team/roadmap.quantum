'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import type { Phase } from '@/data/roadmap';

interface SearchBarProps {
  phases: Phase[];
  onFilterChange: (query: string, phaseId: string) => void;
}

const DEBOUNCE_MS = 250;

export default function SearchBar({ phases, onFilterChange }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [phaseId, setPhaseId] = useState('');

  useEffect(() => {
    const t = setTimeout(() => {
      onFilterChange(query, phaseId);
    }, DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [query, phaseId, onFilterChange]);

  return (
    <div className="sticky top-[3.5rem] sm:top-4 z-40 flex flex-wrap items-center gap-2 p-3 sm:p-4 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="relative flex-1 min-w-[140px]">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search topics and resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm"
          aria-label="Search"
        />
      </div>
      <select
        value={phaseId}
        onChange={(e) => setPhaseId(e.target.value)}
        className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-purple-400 min-w-[100px]"
        aria-label="Filter by phase"
      >
        <option value="">All phases</option>
        {phases.map((p) => (
          <option key={p.phaseId} value={p.phaseId}>
            Phase {p.phaseId}
          </option>
        ))}
      </select>
    </div>
  );
}
