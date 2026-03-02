'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ProgressState {
  completed: string[];
  updatedAt: string;
}

const STORAGE_KEY = 'quantum-roadmap-progress';

function loadProgress(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: ProgressState = JSON.parse(raw);
    return new Set(parsed.completed);
  } catch {
    return new Set();
  }
}

function saveProgress(completed: Set<string>) {
  const state: ProgressState = {
    completed: Array.from(completed),
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

interface ProgressContextValue {
  isCompleted: (nodeId: string) => boolean;
  toggleTopic: (nodeId: string) => void;
  completedCount: number;
}

const ProgressContext = createContext<ProgressContextValue>({
  isCompleted: () => false,
  toggleTopic: () => {},
  completedCount: 0,
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCompleted(loadProgress());
    setHydrated(true);
  }, []);

  const isCompleted = useCallback(
    (nodeId: string) => hydrated && completed.has(nodeId),
    [completed, hydrated],
  );

  const toggleTopic = useCallback((nodeId: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      saveProgress(next);
      return next;
    });
  }, []);

  return (
    <ProgressContext.Provider value={{ isCompleted, toggleTopic, completedCount: completed.size }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
