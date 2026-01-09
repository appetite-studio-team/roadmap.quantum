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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-gray-700 text-xs font-bold bg-gray-200 px-2 py-1">
                        Phase {phase.phaseId}
                      </span>
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="text-xl sm:text-2xl font-bold text-gray-900 pr-8"
                    >
                      {phase.title}
                    </Dialog.Title>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What is this phase about?
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What you'll learn in this phase:
                    </h4>
                    <div className="space-y-3">
                      {phase.categories.map((category) => (
                        <div key={category.categoryId} className="border-l-2 border-purple-200 pl-4">
                          <h5 className="font-medium text-gray-900 mb-2">
                            {category.categoryTitle}
                          </h5>
                          <ul className="space-y-1">
                            {category.topics.map((topic) => (
                              <li key={topic.nodeId} className="text-sm text-gray-600 flex items-start">
                                <span className="text-purple-600 mr-2">•</span>
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
                    className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium"
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
