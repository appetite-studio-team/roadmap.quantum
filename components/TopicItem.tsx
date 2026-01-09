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
      className="w-full bg-yellow-50 border-2 border-yellow-200 rounded-lg px-3 py-2 text-left hover:border-yellow-300 hover:shadow-md transition-all cursor-pointer"
    >
      <span className="font-semibold text-gray-900 text-sm">
        {topic.nodeTitle}
      </span>
    </motion.button>
  );
}
