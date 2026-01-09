'use client';

import { motion } from 'framer-motion';
import { Node } from '@/data/roadmap';

interface NodeCardProps {
  node: Node;
  onClick: () => void;
  index: number;
  variant?: 'yellow' | 'blue';
}

export default function NodeCard({ node, onClick, index, variant = 'yellow' }: NodeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="relative"
    >
      <button
        onClick={onClick}
        className="group relative glass-pill rounded-xl p-2 sm:p-3 md:p-4 glass-hover text-left cursor-pointer min-w-[140px] sm:min-w-[180px] max-w-[180px] sm:max-w-[220px] shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]"
      >
        <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-white/90 transition-colors">
          {node.nodeTitle}
        </h3>
        <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
          {node.nodeDescription}
        </p>
      </button>
    </motion.div>
  );
}

