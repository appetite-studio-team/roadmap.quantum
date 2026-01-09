'use client';

import { useState } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoadmapCanvas from '@/components/RoadmapCanvas';
import FAQ from '@/components/FAQ';
import Modal from '@/components/Modal';
import PhaseModal from '@/components/PhaseModal';
import { roadmapData } from '@/data/roadmap';
import { Node, Phase } from '@/data/roadmap';

export default function Home() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const [isPhaseModalOpen, setIsPhaseModalOpen] = useState(false);

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNode(null);
  };

  const handlePhaseClick = (phase: Phase) => {
    setSelectedPhase(phase);
    setIsPhaseModalOpen(true);
  };

  const handleClosePhaseModal = () => {
    setIsPhaseModalOpen(false);
    setSelectedPhase(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Quantum Computing Roadmap 2026",
    "description": "A comprehensive, structured learning roadmap for quantum computing from beginner to advanced level. Covers foundations, quantum mechanics, algorithms, programming, hardware, applications, and career paths.",
    "educationalLevel": "Beginner to Advanced",
    "courseCode": "QC-ROADMAP-2026",
    "about": {
      "@type": "Thing",
      "name": "Quantum Computing"
    },
    "teaches": [
      "Quantum Computing Fundamentals",
      "Quantum Algorithms",
      "Quantum Programming",
      "Qubits and Quantum Mechanics",
      "Qiskit and Cirq",
      "Quantum Hardware",
      "Quantum Applications"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Quantum Computing Roadmap",
      "url": "https://roadmap.quantumx.com"
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": ["student", "developer", "researcher", "engineer", "beginner"]
    },
    "learningResourceType": "Interactive Roadmap",
    "isAccessibleForFree": true
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1">
        <RoadmapCanvas
          phases={roadmapData}
          onNodeClick={handleNodeClick}
          onPhaseClick={handlePhaseClick}
        />
        <FAQ />
      </main>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        node={selectedNode}
      />
      <PhaseModal
        isOpen={isPhaseModalOpen}
        onClose={handleClosePhaseModal}
        phase={selectedPhase}
      />
    </div>
  );
}

