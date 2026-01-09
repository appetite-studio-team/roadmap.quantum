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
        className="group relative glass rounded-2xl p-3 sm:p-4 md:p-5 glass-hover text-left cursor-pointer min-w-[160px] sm:min-w-[200px] max-w-[240px] sm:max-w-[280px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-white text-xs font-bold glass-pill px-2 py-1 rounded-lg">
            Phase {phase.phaseId}
          </span>
        </div>
        <h2 className="font-bold text-white text-base mb-1 group-hover:text-white/90 transition-colors">
          {phase.title}
        </h2>
        <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
          {phase.description}
        </p>
      </button>
    </motion.div>
  );
}
