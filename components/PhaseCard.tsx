'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phase } from '@/data/roadmap';

interface PhaseCardProps {
  phase: Phase;
  onPhaseClick?: () => void;
  index: number;
  completedInPhase: number;
  totalInPhase: number;
  completedHoursInPhase: number;
  totalHoursInPhase: number;
}

export default function PhaseCard({
  phase,
  onPhaseClick,
  index,
  completedInPhase,
  totalInPhase,
  completedHoursInPhase,
  totalHoursInPhase,
}: PhaseCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const percent = totalInPhase > 0 ? Math.round((completedInPhase / totalInPhase) * 100) : 0;
  const showRing = totalInPhase > 0;
  const size = 36;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative"
      style={{ perspective: '1000px' }}
    >
      <motion.button
        onClick={onPhaseClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative glass rounded-2xl p-3 sm:p-4 md:p-5 glass-hover text-left cursor-pointer min-w-[160px] sm:min-w-[200px] max-w-[240px] sm:max-w-[280px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${rotateX !== 0 || rotateY !== 0 ? 1.02 : 1}, ${rotateX !== 0 || rotateY !== 0 ? 1.02 : 1}, 1)`,
        }}
      >
        <div className="flex items-center justify-between mb-2" style={{ transform: 'translateZ(20px)' }}>
          <span className="text-white text-xs font-bold glass-pill px-2 py-1 rounded-lg">
            Phase {phase.phaseId}
          </span>
          {showRing && (
            <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
              <svg width={size} height={size} className="rotate-[-90deg]" aria-hidden>
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={stroke}
                />
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={r}
                  fill="none"
                  stroke={`url(#phaseRing-${phase.phaseId})`}
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white/90 tabular-nums">
                {percent}%
              </span>
            </div>
          )}
        </div>
        <svg width="0" height="0" aria-hidden>
          <defs>
            <linearGradient id={`phaseRing-${phase.phaseId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>
        </svg>
        <h2
          className="font-bold text-white text-base mb-1 group-hover:text-white/90 transition-colors"
          style={{ transform: 'translateZ(20px)' }}
        >
          {phase.title}
        </h2>
        <p
          className="text-xs text-white/70 line-clamp-2 leading-relaxed"
          style={{ transform: 'translateZ(10px)' }}
        >
          {phase.description}
        </p>
        {totalHoursInPhase > 0 && (
          <p className="text-[10px] text-white/50 mt-1 tabular-nums" style={{ transform: 'translateZ(10px)' }}>
            {totalHoursInPhase - completedHoursInPhase > 0
              ? `${totalHoursInPhase - completedHoursInPhase} h left`
              : `${totalHoursInPhase} h`}
          </p>
        )}
      </motion.button>
    </motion.div>
  );
}
