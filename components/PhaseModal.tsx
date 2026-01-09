'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { Phase } from '@/data/roadmap';

interface PhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: Phase | null;
}

export default function PhaseModal({ isOpen, onClose, phase }: PhaseModalProps) {
  if (!phase) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden glass-strong rounded-2xl p-4 sm:p-6 text-left align-middle shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-white text-xs font-bold glass-pill px-2 py-1 rounded-lg">
                        Phase {phase.phaseId}
                      </span>
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="text-xl sm:text-2xl font-bold text-white pr-8"
                    >
                      {phase.title}
                    </Dialog.Title>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-white/60 hover:text-white transition-colors flex-shrink-0"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      What is this phase about?
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">
                      What you&apos;ll learn in this phase:
                    </h4>
                    <div className="space-y-3">
                      {phase.categories.map((category) => (
                        <div key={category.categoryId} className="border-l-2 border-purple-400/40 pl-4">
                          <h5 className="font-medium text-white mb-2">
                            {category.categoryTitle}
                          </h5>
                          <ul className="space-y-1">
                            {category.topics.map((topic) => (
                              <li key={topic.nodeId} className="text-sm text-white/70 flex items-start">
                                <span className="text-purple-300 mr-2">•</span>
                                <span>{topic.nodeTitle}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="px-6 py-2 glass-pill text-white hover:bg-white/15 transition-all font-medium rounded-lg shadow-[0_4px_16px_0_rgba(255,255,255,0.2)] hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.3)]"
                    onClick={onClose}
                  >
                    Continue learning
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
