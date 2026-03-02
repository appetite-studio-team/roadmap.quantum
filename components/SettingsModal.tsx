'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { resetProgress } = useProgress();
  const [step, setStep] = useState<'main' | 'confirm'>('main');

  const handleResetClick = () => setStep('confirm');

  const handleConfirmReset = () => {
    resetProgress();
    setStep('main');
    onClose();
  };

  const handleCancelConfirm = () => setStep('main');

  const handleClose = () => {
    setStep('main');
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
                    Settings
                  </Dialog.Title>
                  <button
                    onClick={handleClose}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>

                {step === 'main' ? (
                  <>
                    <p className="text-white/70 text-sm mb-4">
                      Reset your learning progress. Your email and notes will not be changed.
                    </p>
                    <button
                      type="button"
                      onClick={handleResetClick}
                      className="w-full px-4 py-3 rounded-lg border border-red-500/40 bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-all font-medium text-sm"
                    >
                      Reset progress
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-white/70 text-sm mb-4">Are you sure? All completed topics will be cleared.</p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleCancelConfirm}
                        className="flex-1 px-4 py-3 rounded-lg glass-pill text-white/80 hover:bg-white/10 transition-all font-medium text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleConfirmReset}
                        className="flex-1 px-4 py-3 rounded-lg border border-red-500/40 bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-all font-medium text-sm"
                      >
                        Confirm
                      </button>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
