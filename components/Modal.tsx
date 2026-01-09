'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, ExternalLink } from 'lucide-react';
import { Node } from '@/data/roadmap';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
}

export default function Modal({ isOpen, onClose, node }: ModalProps) {
  if (!node) return null;

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
                  <Dialog.Title
                    as="h3"
                    className="text-xl sm:text-2xl font-bold text-white pr-8"
                  >
                    {node.nodeTitle}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-white/60 hover:text-white transition-colors flex-shrink-0"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-white/80 leading-relaxed">
                      {node.nodeDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Why this matters
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {node.whyItMatters}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      What to learn
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {node.whatToLearn}
                    </p>
                  </div>

                  {node.resources.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Learning Resources
                      </h4>
                      <div className="space-y-2">
                        {node.resources.map((resource, index) => (
                          <a
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors group"
                          >
                            <span className="text-sm">{resource.title}</span>
                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-xs text-white/50 ml-2">
                              ({resource.type})
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="px-6 py-2 glass-pill text-white hover:bg-white/15 transition-all font-medium rounded-lg shadow-[0_4px_16px_0_rgba(139,92,246,0.3)] hover:shadow-[0_4px_20px_0_rgba(139,92,246,0.4)]"
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

