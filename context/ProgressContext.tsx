'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ProgressState {
  completed: string[];
  updatedAt: string;
}

const PROGRESS_KEY = 'quantum-roadmap-progress';
const EMAIL_KEY = 'quantum-roadmap-email';

function loadProgress(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
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
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
}

function loadEmail(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(EMAIL_KEY);
  } catch {
    return null;
  }
}

function submitEmailToNetlify(email: string) {
  const body = new URLSearchParams({
    'form-name': 'pdf-download',
    email,
  }).toString();

  fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  }).catch(() => {});
}

interface ProgressContextValue {
  isCompleted: (nodeId: string) => boolean;
  toggleTopic: (nodeId: string) => void;
  completedCount: number;
  userEmail: string | null;
  hasEmail: boolean;
  saveEmail: (email: string) => void;
}

const ProgressContext = createContext<ProgressContextValue>({
  isCompleted: () => false,
  toggleTopic: () => {},
  completedCount: 0,
  userEmail: null,
  hasEmail: false,
  saveEmail: () => {},
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    setCompleted(loadProgress());
    setUserEmail(loadEmail());
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

  const saveEmail = useCallback((email: string) => {
    setUserEmail(email);
    localStorage.setItem(EMAIL_KEY, email);
    submitEmailToNetlify(email);
  }, []);

  const hasEmail = hydrated && !!userEmail;

  return (
    <ProgressContext.Provider value={{ isCompleted, toggleTopic, completedCount: completed.size, userEmail, hasEmail, saveEmail }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
