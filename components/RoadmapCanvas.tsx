'use client';

import { forwardRef } from 'react';
import { Phase, Node } from '@/data/roadmap';
import PhaseSection from './PhaseSection';

interface RoadmapCanvasProps {
  phases: Phase[];
  onNodeClick: (node: Node) => void;
  onPhaseClick?: (phase: Phase) => void;
}

const RoadmapCanvas = forwardRef<HTMLDivElement, RoadmapCanvasProps>(
  ({ phases, onNodeClick, onPhaseClick }, ref) => {
    return (
      <div ref={ref} className="min-h-screen roadmap-background py-6 sm:py-8 lg:py-12 relative">
        {phases.map((phase, index) => (
          <PhaseSection
            key={phase.phaseId}
            phase={phase}
            onNodeClick={onNodeClick}
            onPhaseClick={onPhaseClick}
            phaseIndex={index}
          />
        ))}
      </div>
    );
  }
);

RoadmapCanvas.displayName = 'RoadmapCanvas';

export default RoadmapCanvas;

