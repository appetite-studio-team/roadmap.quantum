'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, ExternalLink, CheckCircle2, Circle, Mail } from 'lucide-react';
import { Node } from '@/data/roadmap';
import { useProgress } from '@/context/ProgressContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
}

export default function Modal({ isOpen, onClose, node }: ModalProps) {
  const { isCompleted, toggleTopic, hasEmail, saveEmail } = useProgress();
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  if (!node) return null;

  const completed = isCompleted(node.nodeId);

  const handleToggle = () => {
    if (completed || hasEmail) {
      toggleTopic(node.nodeId);
    } else {
      setShowEmailPrompt(true);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError('Please enter a valid email.');
      return;
    }
    saveEmail(trimmed);
    setShowEmailPrompt(false);
    setEmail('');
    toggleTopic(node.nodeId);
  };

  const handleClose = () => {
    setShowEmailPrompt(false);
    setEmail('');
    setEmailError('');
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden glass-strong rounded-2xl p-4 sm:p-6 text-left align-middle shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all">
                <div className="flex items-start justify-between mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl sm:text-2xl font-bold text-white pr-8"
                  >
                    {node.nodeTitle}
                  </Dialog.Title>
                  <button
                    onClick={handleClose}
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

                {showEmailPrompt ? (
                  <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white font-semibold text-sm mb-1">Track Your Progress</p>
                    <p className="text-white/60 text-xs mb-3">Enter your email to start tracking your learning progress.</p>
                    <form onSubmit={handleEmailSubmit} className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                        <input
                          type="email"
                          required
                          autoFocus
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all font-medium text-sm whitespace-nowrap"
                      >
                        Continue
                      </button>
                    </form>
                    {emailError && <p className="text-red-400 text-xs mt-2">{emailError}</p>}
                    <p className="text-white/40 text-xs mt-2">We will not spam you.</p>
                  </div>
                ) : (
                  <div className="mt-6 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleToggle}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                        completed
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'glass-pill text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                      <span>{completed ? 'Completed' : 'Mark as completed'}</span>
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
