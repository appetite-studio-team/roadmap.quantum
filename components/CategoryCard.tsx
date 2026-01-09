'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Category, Node } from '@/data/roadmap';
import TopicItem from './TopicItem';

interface CategoryCardProps {
  category: Category;
  onTopicClick: (node: Node) => void;
  index: number;
}

export default function CategoryCard({ category, onTopicClick, index }: CategoryCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="relative"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass rounded-2xl overflow-hidden min-w-[240px] max-w-[320px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${rotateX !== 0 || rotateY !== 0 ? 1.02 : 1}, ${rotateX !== 0 || rotateY !== 0 ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Glass Header */}
        <div className="glass-strong px-4 py-3 border-b border-white/20" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="font-bold text-white text-base text-center">
            {category.categoryTitle}
          </h3>
        </div>
        
        {/* Topics List */}
        <div className="p-3 space-y-2" style={{ transform: 'translateZ(10px)' }}>
          {category.topics.map((topic, topicIndex) => (
            <TopicItem
              key={topic.nodeId}
              topic={topic}
              onClick={() => onTopicClick(topic)}
              index={topicIndex}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
