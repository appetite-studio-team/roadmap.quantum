'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is quantum computing?',
    answer: 'Quantum computing is a revolutionary computing paradigm that leverages quantum mechanical phenomena like superposition and entanglement to process information. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously, enabling exponential computational power for certain problems.',
  },
  {
    question: 'How long does it take to learn quantum computing?',
    answer: 'The time to learn quantum computing varies based on your background. For someone with a strong foundation in mathematics and programming, the basics can be grasped in 3-6 months. However, mastering advanced concepts and becoming proficient may take 1-2 years of dedicated study. The roadmap is designed to guide you from beginner to advanced levels systematically.',
  },
  {
    question: 'Do I need a physics background to learn quantum computing?',
    answer: 'While a physics background is helpful, it\'s not strictly necessary. A solid foundation in linear algebra, probability, and complex numbers is more important. Many successful quantum computing practitioners come from computer science, mathematics, or engineering backgrounds. The roadmap includes foundational mathematical concepts to help you build the necessary knowledge.',
  },
  {
    question: 'What programming languages are used in quantum computing?',
    answer: 'The most popular quantum programming frameworks are Qiskit (Python-based, IBM), Cirq (Python-based, Google), and Q# (Microsoft). Python is the most common language due to its extensive quantum computing libraries. The roadmap covers Qiskit and Cirq in detail, which are excellent starting points for beginners.',
  },
  {
    question: 'Can I run quantum programs on my computer?',
    answer: 'Yes! You can use quantum simulators on your local machine to run and test quantum programs. IBM Qiskit, Google Cirq, and other frameworks provide simulators that can run on standard computers. For actual quantum hardware, you can access cloud-based quantum computers from providers like IBM Quantum, Google Quantum AI, and Amazon Braket.',
  },
  {
    question: 'What are the career opportunities in quantum computing?',
    answer: 'Quantum computing offers diverse career paths including quantum algorithm developer, quantum software engineer, quantum hardware engineer, quantum researcher, and quantum consultant. Major tech companies (IBM, Google, Microsoft, Amazon), startups (IonQ, Rigetti), and research institutions are actively hiring. The roadmap includes a dedicated phase on career paths and opportunities.',
  },
  {
    question: 'Is quantum computing ready for practical applications?',
    answer: 'We are currently in the NISQ (Noisy Intermediate-Scale Quantum) era, where quantum computers have limited qubits and are prone to errors. While practical applications are emerging in areas like optimization, chemistry simulation, and machine learning, we\'re still years away from fault-tolerant quantum computing. However, the field is advancing rapidly, and early adopters are finding value in current systems.',
  },
  {
    question: 'What mathematics do I need for quantum computing?',
    answer: 'Essential mathematics includes linear algebra (vectors, matrices, eigenvalues), complex numbers, probability theory, and basic calculus. Understanding tensor products, unitary operations, and the Bloch sphere representation is also important. The roadmap\'s Foundation phase covers all necessary mathematical prerequisites.',
  },
  {
    question: 'How is quantum computing different from classical computing?',
    answer: 'Classical computers process information using bits that are either 0 or 1. Quantum computers use qubits that can be in superposition (both 0 and 1 simultaneously) and can be entangled with other qubits. This allows quantum computers to explore multiple solutions simultaneously, providing exponential speedup for certain algorithms like Shor\'s algorithm for factoring and Grover\'s algorithm for search.',
  },
  {
    question: 'Should I learn everything on this roadmap?',
    answer: 'The roadmap is comprehensive and designed to take you from beginner to advanced. You don\'t need to master every single topic, but understanding the foundational phases (1-3) is essential. As you progress, you can specialize based on your interests—whether that\'s algorithms, hardware, applications, or research. Use the roadmap as a guide and adapt it to your learning goals.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Common questions about quantum computing and this learning roadmap
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
