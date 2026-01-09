'use client';

import { motion } from 'framer-motion';
import { Category, Node } from '@/data/roadmap';
import TopicItem from './TopicItem';

interface CategoryCardProps {
  category: Category;
  onTopicClick: (node: Node) => void;
  index: number;
}

export default function CategoryCard({ category, onTopicClick, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="relative"
    >
      <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 min-w-[240px] max-w-[320px]">
        {/* Dark Header */}
        <div className="bg-gray-800 px-4 py-3 border-b-2 border-gray-700">
          <h3 className="font-bold text-white text-base text-center">
            {category.categoryTitle}
          </h3>
        </div>
        
        {/* Topics List */}
        <div className="p-3 space-y-2">
          {category.topics.map((topic, topicIndex) => (
            <TopicItem
              key={topic.nodeId}
              topic={topic}
              onClick={() => onTopicClick(topic)}
              index={topicIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
