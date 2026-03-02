'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, X } from 'lucide-react';

export default function PWAInstall() {
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      setShowBanner(true);
    };

    const handleInstalled = () => {
      setShowBanner(false);
      deferredPrompt.current = null;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleInstalled);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleInstalled);
    };
  }, []);

  const handleInstall = async () => {
    const prompt = deferredPrompt.current;
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') setShowBanner(false);
    deferredPrompt.current = null;
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShowBanner(false);
  };

  if (!showBanner || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 p-3 rounded-xl glass-strong border border-white/20 shadow-lg flex items-center gap-3">
      <p className="text-sm text-white/90 flex-1">Add to Home Screen for quick access</p>
      <div className="flex items-center gap-2">
        <button
          onClick={handleInstall}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-lg hover:bg-white/90 text-sm font-medium"
        >
          <Download size={14} />
          Install
        </button>
        <button
          onClick={handleDismiss}
          className="text-white/60 hover:text-white p-1"
          aria-label="Dismiss"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
