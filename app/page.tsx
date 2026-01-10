'use client';

import { useState, useRef } from 'react';
import Script from 'next/script';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  const roadmapRef = useRef<HTMLDivElement>(null);

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

  const handleDownloadPDF = async () => {
    if (!roadmapRef.current) return;

    try {
      // Close any open modals before capturing
      setIsModalOpen(false);
      setIsPhaseModalOpen(false);
      
      // Wait a bit for modals to close
      await new Promise(resolve => setTimeout(resolve, 300));

      // Store current scroll position
      const originalScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const originalScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      const element = roadmapRef.current;
      
      // Scroll to top
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 300));

      // Store original styles
      const originalStyles = {
        height: element.style.height,
        maxHeight: element.style.maxHeight,
        overflow: element.style.overflow,
        position: element.style.position,
      };

      // Get full content height
      const fullHeight = element.scrollHeight;
      const fullWidth = element.scrollWidth || element.offsetWidth;

      // Temporarily expand element to show all content
      element.style.height = `${fullHeight}px`;
      element.style.maxHeight = 'none';
      element.style.overflow = 'visible';
      element.style.position = 'relative';

      // Force reflow
      void element.offsetHeight;
      await new Promise(resolve => setTimeout(resolve, 500));

      // Capture the entire expanded element
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        // backgroundColor is supported at runtime but not in TypeScript types
        backgroundColor: '#000000',
      } as any);

      // Restore original styles
      element.style.height = originalStyles.height || '';
      element.style.maxHeight = originalStyles.maxHeight || '';
      element.style.overflow = originalStyles.overflow || '';
      element.style.position = originalStyles.position || '';

      const imgData = canvas.toDataURL('image/png', 1.0);

      // Restore original scroll position
      window.scrollTo(originalScrollLeft, originalScrollTop);

      // Calculate PDF dimensions
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdfWidth = imgWidth * 0.264583; // Convert px to mm
      const pdfHeight = imgHeight * 0.264583;
      
      // Use A4 width (210mm) and scale height proportionally
      const maxPdfWidth = 210; // A4 width in mm
      let finalPdfWidth = pdfWidth;
      let finalPdfHeight = pdfHeight;
      
      if (pdfWidth > maxPdfWidth) {
        const ratio = maxPdfWidth / pdfWidth;
        finalPdfWidth = maxPdfWidth;
        finalPdfHeight = pdfHeight * ratio;
      }
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: finalPdfWidth > finalPdfHeight ? 'landscape' : 'portrait',
        unit: 'mm',
        format: [finalPdfWidth, finalPdfHeight],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, finalPdfWidth, finalPdfHeight);

      pdf.save('Quantum-Computing-Roadmap-2026.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
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
      <Header onDownloadPDF={handleDownloadPDF} />
      <main className="flex-1">
        <RoadmapCanvas
          ref={roadmapRef}
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

