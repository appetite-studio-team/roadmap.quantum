'use client';

import { motion } from 'framer-motion';
import { Phase } from '@/data/roadmap';

interface PhaseCardProps {
  phase: Phase;
  onPhaseClick?: () => void;
  index: number;
}

export default function PhaseCard({ phase, onPhaseClick, index }: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative"
    >
      <button
        onClick={onPhaseClick}
        className="group relative bg-gray-800 rounded-xl border-2 border-gray-700 p-3 sm:p-4 md:p-5 hover:border-gray-600 hover:shadow-xl transition-all text-left cursor-pointer min-w-[160px] sm:min-w-[200px] max-w-[240px] sm:max-w-[280px] shadow-lg"
      >
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-white text-xs font-bold bg-gray-700 px-2 py-1 rounded">
            Phase {phase.phaseId}
          </span>
        </div>
        <h2 className="font-bold text-white text-base mb-1 group-hover:text-gray-100 transition-colors">
          {phase.title}
        </h2>
        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
          {phase.description}
        </p>
      </button>
    </motion.div>
  );
}
