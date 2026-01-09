'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phase } from '@/data/roadmap';

interface PhaseCardProps {
  phase: Phase;
  onPhaseClick?: () => void;
  index: number;
}

export default function PhaseCard({ phase, onPhaseClick, index }: PhaseCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -8; // Max 8 degrees
    const rotateYValue = ((x - centerX) / centerX) * 8; // Max 8 degrees
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

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
        <div className="flex items-center space-x-2 mb-2" style={{ transform: 'translateZ(20px)' }}>
          <span className="text-white text-xs font-bold glass-pill px-2 py-1 rounded-lg">
            Phase {phase.phaseId}
          </span>
        </div>
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
      </motion.button>
    </motion.div>
  );
}
