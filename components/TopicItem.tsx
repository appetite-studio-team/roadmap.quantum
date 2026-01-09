'use client';

import { motion } from 'framer-motion';
import { Node } from '@/data/roadmap';

interface TopicItemProps {
  topic: Node;
  onClick: () => void;
  index: number;
}

export default function TopicItem({ topic, onClick, index }: TopicItemProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.2 }}
      onClick={onClick}
      className="w-full glass-pill rounded-xl px-3 py-2 text-left glass-hover cursor-pointer shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]"
    >
      <span className="font-semibold text-white text-sm">
        {topic.nodeTitle}
      </span>
    </motion.button>
  );
}
