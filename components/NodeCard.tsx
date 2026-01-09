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
  const bgColor = variant === 'yellow' 
    ? 'bg-yellow-50 border-yellow-200 hover:border-yellow-300' 
    : 'bg-blue-50 border-blue-200 hover:border-blue-300';
  
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
        className={`group relative ${bgColor} rounded-xl border-2 p-2 sm:p-3 md:p-4 hover:shadow-lg transition-all text-left cursor-pointer min-w-[140px] sm:min-w-[180px] max-w-[180px] sm:max-w-[220px] shadow-sm`}
      >
        <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-800 transition-colors">
          {node.nodeTitle}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
          {node.nodeDescription}
        </p>
      </button>
    </motion.div>
  );
}

