'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Mail, Download, CheckCircle2 } from 'lucide-react';

type Variant = 'pdf-download' | 'mark-completed';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
  variant?: Variant;
  zClass?: string;
}

const COPY: Record<Variant, { title: string; description: string; button: string }> = {
  'pdf-download': {
    title: 'Download Roadmap PDF',
    description: 'Enter your email to download the Quantum Computing Roadmap 2026 as a PDF.',
    button: 'Download PDF',
  },
  'mark-completed': {
    title: 'Track Your Progress',
    description: 'Enter your email to start tracking your learning progress across sessions.',
    button: 'Continue',
  },
};

export default function EmailModal({
  isOpen,
  onClose,
  onSuccess,
  variant = 'pdf-download',
  zClass = 'z-50',
}: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const copy = COPY[variant];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmed = email.trim();
    if (!trimmed) {
      setErrorMsg('Please enter a valid email.');
      return;
    }

    setStatus('submitting');
    onSuccess(trimmed);
    setStatus('idle');
    setEmail('');
  };

  const ButtonIcon = variant === 'pdf-download' ? Download : CheckCircle2;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={`relative ${zClass}`} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden glass-strong rounded-2xl p-6 text-left align-middle shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all">
                <div className="flex items-start justify-between mb-4">
                  <Dialog.Title as="h3" className="text-xl font-bold text-white">
                    {copy.title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <p className="text-white/70 text-sm mb-6">
                  {copy.description}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-400 text-xs">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all font-medium text-sm shadow-[0_2px_8px_0_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ButtonIcon size={16} />
                    <span>{status === 'submitting' ? 'Processing...' : copy.button}</span>
                  </button>
                </form>

                <p className="text-white/40 text-xs mt-4 text-center">
                  We will not spam you.
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
