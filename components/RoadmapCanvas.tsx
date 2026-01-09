'use client';

import { Phase, Node } from '@/data/roadmap';
import PhaseSection from './PhaseSection';

interface RoadmapCanvasProps {
  phases: Phase[];
  onNodeClick: (node: Node) => void;
  onPhaseClick?: (phase: Phase) => void;
}

export default function RoadmapCanvas({ phases, onNodeClick, onPhaseClick }: RoadmapCanvasProps) {
  return (
    <div className="min-h-screen roadmap-background py-6 sm:py-8 lg:py-12">
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

