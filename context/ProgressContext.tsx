'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ProgressState {
  completed: string[];
  updatedAt: string;
}

interface NotesState {
  notes: Record<string, string>;
  updatedAt?: string;
}

const PROGRESS_KEY = 'quantum-roadmap-progress';
const EMAIL_KEY = 'quantum-roadmap-email';
const NOTES_KEY = 'quantum-roadmap-notes';

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

function loadNotes(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    if (!raw) return {};
    const parsed: NotesState = JSON.parse(raw);
    return parsed.notes ?? {};
  } catch {
    return {};
  }
}

function saveNotes(notes: Record<string, string>) {
  const state: NotesState = {
    notes,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(NOTES_KEY, JSON.stringify(state));
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

export type MilestoneType = 'first_completion' | 'phase_complete' | 'half' | 'all';

interface ProgressContextValue {
  isCompleted: (nodeId: string) => boolean;
  toggleTopic: (nodeId: string) => void;
  completedCount: number;
  userEmail: string | null;
  hasEmail: boolean;
  saveEmail: (email: string) => void;
  resetProgress: () => void;
  getNote: (nodeId: string) => string;
  setNote: (nodeId: string, text: string) => void;
}

const ProgressContext = createContext<ProgressContextValue>({
  isCompleted: () => false,
  toggleTopic: () => {},
  completedCount: 0,
  userEmail: null,
  hasEmail: false,
  saveEmail: () => {},
  resetProgress: () => {},
  getNote: () => '',
  setNote: () => {},
});

interface ProgressProviderProps {
  children: ReactNode;
  totalTopics?: number;
  phaseTopicIds?: string[][];
  onMilestone?: (type: MilestoneType) => void;
}

export function ProgressProvider({ children, totalTopics = 0, phaseTopicIds = [], onMilestone }: ProgressProviderProps) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [notes, setNotesState] = useState<Record<string, string>>({});
  const [hydrated, setHydrated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    setCompleted(loadProgress());
    setNotesState(loadNotes());
    setUserEmail(loadEmail());
    setHydrated(true);
  }, []);

  const isCompleted = useCallback(
    (nodeId: string) => hydrated && completed.has(nodeId),
    [completed, hydrated],
  );

  const toggleTopic = useCallback(
    (nodeId: string) => {
      setCompleted(prev => {
        const next = new Set(prev);
        if (next.has(nodeId)) {
          next.delete(nodeId);
        } else {
          next.add(nodeId);
        }
        saveProgress(next);

        const prevCount = prev.size;
        const nextCount = next.size;
        if (prevCount === 0 && nextCount >= 1) onMilestone?.('first_completion');
        if (totalTopics > 0 && prevCount < totalTopics && nextCount >= totalTopics) onMilestone?.('all');
        if (totalTopics > 0 && prevCount / totalTopics < 0.5 && nextCount / totalTopics >= 0.5) onMilestone?.('half');
        phaseTopicIds.forEach((ids) => {
          if (ids.length === 0) return;
          const prevPhase = ids.filter((id) => prev.has(id)).length;
          const nextPhase = ids.filter((id) => next.has(id)).length;
          if (nextPhase === ids.length && prevPhase < ids.length) onMilestone?.('phase_complete');
        });

        return next;
      });
    },
    [totalTopics, phaseTopicIds, onMilestone],
  );

  const saveEmail = useCallback((email: string) => {
    setUserEmail(email);
    localStorage.setItem(EMAIL_KEY, email);
    submitEmailToNetlify(email);
  }, []);

  const resetProgress = useCallback(() => {
    setCompleted(new Set());
    localStorage.removeItem(PROGRESS_KEY);
  }, []);

  const getNote = useCallback(
    (nodeId: string) => (hydrated ? notes[nodeId] ?? '' : ''),
    [notes, hydrated],
  );

  const setNote = useCallback((nodeId: string, text: string) => {
    setNotesState((prev) => {
      const next = { ...prev };
      if (text.trim() === '') {
        delete next[nodeId];
      } else {
        next[nodeId] = text;
      }
      saveNotes(next);
      return next;
    });
  }, []);

  const hasEmail = hydrated && !!userEmail;

  return (
    <ProgressContext.Provider
      value={{
        isCompleted,
        toggleTopic,
        completedCount: completed.size,
        userEmail,
        hasEmail,
        saveEmail,
        resetProgress,
        getNote,
        setNote,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
