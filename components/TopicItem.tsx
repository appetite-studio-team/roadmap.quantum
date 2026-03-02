'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Node } from '@/data/roadmap';
import { useProgress } from '@/context/ProgressContext';

interface TopicItemProps {
  topic: Node;
  onClick: () => void;
  index: number;
}

export default function TopicItem({ topic, onClick, index }: TopicItemProps) {
  const { isCompleted } = useProgress();
  const completed = isCompleted(topic.nodeId);

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.2 }}
      onClick={onClick}
      className={`w-full rounded-xl px-3 py-2 text-left cursor-pointer shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] flex items-center justify-between gap-2 ${
        completed
          ? 'glass-pill border border-green-500/30 bg-green-500/10'
          : 'glass-pill glass-hover'
      }`}
    >
      <span className={`font-semibold text-sm ${completed ? 'text-green-300' : 'text-white'}`}>
        {topic.nodeTitle}
      </span>
      {completed && (
        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
          <Check size={12} className="text-green-400" />
        </span>
      )}
    </motion.button>
  );
}
