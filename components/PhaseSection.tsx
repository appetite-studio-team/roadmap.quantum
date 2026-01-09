'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phase, Node, Category } from '@/data/roadmap';
import CategoryCard from './CategoryCard';
import PhaseCard from './PhaseCard';

interface PhaseSectionProps {
  phase: Phase;
  onNodeClick: (node: Node) => void;
  onPhaseClick?: (phase: Phase) => void;
  phaseIndex: number;
}

interface Connection {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

export default function PhaseSection({ phase, onNodeClick, onPhaseClick, phaseIndex }: PhaseSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const phaseCardRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const updateConnections = () => {
      if (!containerRef.current || !phaseCardRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const phaseRect = phaseCardRef.current.getBoundingClientRect();

      // Calculate phase card center bottom relative to container
      const phaseX = phaseRect.left + phaseRect.width / 2 - containerRect.left;
      const phaseY = phaseRect.top + phaseRect.height - containerRect.top;

      const newConnections: Connection[] = [];

      categoryRefs.current.forEach((categoryRef) => {
        if (categoryRef) {
          const categoryRect = categoryRef.getBoundingClientRect();
          
          // Calculate category card center top relative to container
          const categoryX = categoryRect.left + categoryRect.width / 2 - containerRect.left;
          const categoryY = categoryRect.top - containerRect.top;

          newConnections.push({
            fromX: phaseX,
            fromY: phaseY,
            toX: categoryX,
            toY: categoryY,
          });
        }
      });

      setConnections(newConnections);
    };

    // Delay to ensure DOM is ready and transforms are applied
    const timer = setTimeout(updateConnections, 300);
    
    // Update on resize
    window.addEventListener('resize', updateConnections);
    
    // Update when scrolling
    const handleScroll = () => {
      requestAnimationFrame(updateConnections);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateConnections);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [phase.categories.length]);

  // Split categories into two groups for left and right branches
  const midPoint = Math.ceil(phase.categories.length / 2);
  const leftCategories = phase.categories.slice(0, midPoint);
  const rightCategories = phase.categories.slice(midPoint);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-16 sm:mb-24 lg:mb-32 py-6 sm:py-8 lg:py-12"
      ref={containerRef}
    >
      {/* SVG for connection lines */}
      {connections.length > 0 && containerRef.current && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {connections.map((conn, idx) => {
            const midX = (conn.fromX + conn.toX) / 2;
            const controlY = conn.fromY + (conn.toY - conn.fromY) / 3;
            return (
              <path
                key={`conn-${idx}`}
                d={`M ${conn.fromX} ${conn.fromY} Q ${midX} ${controlY} ${conn.toX} ${conn.toY}`}
                stroke="#9ca3af"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="4,3"
                className="opacity-80"
              />
            );
          })}
        </svg>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Central Phase Card */}
        <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
          <div ref={phaseCardRef}>
            <PhaseCard 
              phase={phase} 
              index={phaseIndex}
              onPhaseClick={() => onPhaseClick?.(phase)}
            />
          </div>
        </div>

        {/* Categories arranged in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            {leftCategories.map((category, categoryIndex) => (
              <div
                key={category.categoryId}
                ref={(el) => {
                  categoryRefs.current[categoryIndex] = el;
                }}
                className="w-full flex justify-center lg:justify-start"
              >
                <CategoryCard
                  category={category}
                  onTopicClick={onNodeClick}
                  index={categoryIndex}
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            {rightCategories.map((category, categoryIndex) => {
              const actualIndex = categoryIndex + midPoint;
              return (
                <div
                  key={category.categoryId}
                  ref={(el) => {
                    categoryRefs.current[actualIndex] = el;
                  }}
                  className="w-full flex justify-center lg:justify-end"
                >
                  <CategoryCard
                    category={category}
                    onTopicClick={onNodeClick}
                    index={actualIndex}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

