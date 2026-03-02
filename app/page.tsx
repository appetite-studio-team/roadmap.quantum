'use client';

import { useState, useCallback } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoadmapCanvas from '@/components/RoadmapCanvas';
import FAQ from '@/components/FAQ';
import Modal from '@/components/Modal';
import PhaseModal from '@/components/PhaseModal';
import EmailModal from '@/components/EmailModal';
import { ProgressProvider, useProgress } from '@/context/ProgressContext';
import { roadmapData } from '@/data/roadmap';
import { Node, Phase } from '@/data/roadmap';

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://roadmap.quantumx.com/#website",
      "url": "https://roadmap.quantumx.com",
      "name": "Quantum Computing Roadmap",
      "description": "A comprehensive, structured learning roadmap for quantum computing from beginner to advanced.",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://roadmap.quantumx.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://roadmap.quantumx.com/#organization",
      "name": "Quantum Computing Roadmap",
      "url": "https://roadmap.quantumx.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://roadmap.quantumx.com/images/logo.png",
      },
      "sameAs": [
        "https://www.linkedin.com/company/quantumx",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://roadmap.quantumx.com/#webpage",
      "url": "https://roadmap.quantumx.com",
      "name": "Quantum Computing Roadmap 2026 | Learn Quantum Computing from Beginner to Advanced",
      "isPartOf": { "@id": "https://roadmap.quantumx.com/#website" },
      "about": { "@id": "https://roadmap.quantumx.com/#course" },
      "description": "Master quantum computing with our free interactive roadmap. 9 structured phases from foundations to career paths.",
      "inLanguage": "en-US",
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-03",
    },
    {
      "@type": "Course",
      "@id": "https://roadmap.quantumx.com/#course",
      "name": "Quantum Computing Roadmap 2026",
      "description": "A comprehensive, structured learning roadmap for quantum computing from beginner to advanced level. Covers foundations, quantum mechanics, algorithms, programming, hardware, applications, and career paths.",
      "educationalLevel": "Beginner to Advanced",
      "courseCode": "QC-ROADMAP-2026",
      "numberOfCredits": 0,
      "about": { "@type": "Thing", "name": "Quantum Computing" },
      "teaches": [
        "Quantum Computing Fundamentals",
        "Quantum Algorithms",
        "Quantum Programming",
        "Qubits and Quantum Mechanics",
        "Qiskit and Cirq",
        "Quantum Hardware",
        "Quantum Applications",
      ],
      "provider": { "@id": "https://roadmap.quantumx.com/#organization" },
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student", "developer", "researcher", "engineer", "beginner"],
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "Self-paced",
      },
      "learningResourceType": "Interactive Roadmap",
      "isAccessibleForFree": true,
    },
    {
      "@type": "ItemList",
      "name": "Quantum Computing Learning Phases",
      "description": "9 structured learning phases from beginner to advanced quantum computing.",
      "numberOfItems": 9,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Foundations", "description": "Build the mathematical and conceptual foundation needed to understand quantum computing." },
        { "@type": "ListItem", "position": 2, "name": "Quantum Mechanics for Computing", "description": "Core quantum mechanical principles that directly apply to quantum computing." },
        { "@type": "ListItem", "position": 3, "name": "Quantum Computing Models", "description": "Different computational models and paradigms for quantum computing." },
        { "@type": "ListItem", "position": 4, "name": "Quantum Algorithms", "description": "Fundamental quantum algorithms that demonstrate quantum advantage." },
        { "@type": "ListItem", "position": 5, "name": "Quantum Programming", "description": "Practical tools and frameworks for writing quantum programs." },
        { "@type": "ListItem", "position": 6, "name": "Hardware & Systems", "description": "Physical implementations and engineering challenges of quantum computers." },
        { "@type": "ListItem", "position": 7, "name": "Applications", "description": "Real-world applications where quantum computing provides advantages." },
        { "@type": "ListItem", "position": 8, "name": "Advanced & Research", "description": "Cutting-edge research topics and advanced concepts in quantum computing." },
        { "@type": "ListItem", "position": 9, "name": "Career & Research Path", "description": "Guidance for pursuing a career or research path in quantum computing." },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://roadmap.quantumx.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is quantum computing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Quantum computing is a revolutionary computing paradigm that leverages quantum mechanical phenomena like superposition and entanglement to process information. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously, enabling exponential computational power for certain problems." },
        },
        {
          "@type": "Question",
          "name": "How long does it take to learn quantum computing?",
          "acceptedAnswer": { "@type": "Answer", "text": "The time to learn quantum computing varies based on your background. For someone with a strong foundation in mathematics and programming, the basics can be grasped in 3-6 months. However, mastering advanced concepts and becoming proficient may take 1-2 years of dedicated study. The roadmap is designed to guide you from beginner to advanced levels systematically." },
        },
        {
          "@type": "Question",
          "name": "Do I need a physics background to learn quantum computing?",
          "acceptedAnswer": { "@type": "Answer", "text": "While a physics background is helpful, it's not strictly necessary. A solid foundation in linear algebra, probability, and complex numbers is more important. Many successful quantum computing practitioners come from computer science, mathematics, or engineering backgrounds. The roadmap includes foundational mathematical concepts to help you build the necessary knowledge." },
        },
        {
          "@type": "Question",
          "name": "What programming languages are used in quantum computing?",
          "acceptedAnswer": { "@type": "Answer", "text": "The most popular quantum programming frameworks are Qiskit (Python-based, IBM), Cirq (Python-based, Google), and Q# (Microsoft). Python is the most common language due to its extensive quantum computing libraries. The roadmap covers Qiskit and Cirq in detail, which are excellent starting points for beginners." },
        },
        {
          "@type": "Question",
          "name": "Can I run quantum programs on my computer?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! You can use quantum simulators on your local machine to run and test quantum programs. IBM Qiskit, Google Cirq, and other frameworks provide simulators that can run on standard computers. For actual quantum hardware, you can access cloud-based quantum computers from providers like IBM Quantum, Google Quantum AI, and Amazon Braket." },
        },
        {
          "@type": "Question",
          "name": "What are the career opportunities in quantum computing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Quantum computing offers diverse career paths including quantum algorithm developer, quantum software engineer, quantum hardware engineer, quantum researcher, and quantum consultant. Major tech companies (IBM, Google, Microsoft, Amazon), startups (IonQ, Rigetti), and research institutions are actively hiring. The roadmap includes a dedicated phase on career paths and opportunities." },
        },
        {
          "@type": "Question",
          "name": "Is quantum computing ready for practical applications?",
          "acceptedAnswer": { "@type": "Answer", "text": "We are currently in the NISQ (Noisy Intermediate-Scale Quantum) era, where quantum computers have limited qubits and are prone to errors. While practical applications are emerging in areas like optimization, chemistry simulation, and machine learning, we're still years away from fault-tolerant quantum computing. However, the field is advancing rapidly, and early adopters are finding value in current systems." },
        },
        {
          "@type": "Question",
          "name": "What mathematics do I need for quantum computing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Essential mathematics includes linear algebra (vectors, matrices, eigenvalues), complex numbers, probability theory, and basic calculus. Understanding tensor products, unitary operations, and the Bloch sphere representation is also important. The roadmap's Foundation phase covers all necessary mathematical prerequisites." },
        },
        {
          "@type": "Question",
          "name": "How is quantum computing different from classical computing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Classical computers process information using bits that are either 0 or 1. Quantum computers use qubits that can be in superposition (both 0 and 1 simultaneously) and can be entangled with other qubits. This allows quantum computers to explore multiple solutions simultaneously, providing exponential speedup for certain algorithms like Shor's algorithm for factoring and Grover's algorithm for search." },
        },
        {
          "@type": "Question",
          "name": "Should I learn everything on this roadmap?",
          "acceptedAnswer": { "@type": "Answer", "text": "The roadmap is comprehensive and designed to take you from beginner to advanced. You don't need to master every single topic, but understanding the foundational phases (1-3) is essential. As you progress, you can specialize based on your interests—whether that's algorithms, hardware, applications, or research. Use the roadmap as a guide and adapt it to your learning goals." },
        },
      ],
    },
  ],
};

const structuredDataJson = JSON.stringify(structuredData);

function HomeContent() {
  const { hasEmail, saveEmail } = useProgress();
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const [isPhaseModalOpen, setIsPhaseModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

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

  const triggerPDFDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/pdf/Quantum-Computing-Roadmap-2026.pdf';
    link.download = 'Quantum-Computing-Roadmap-2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleDownloadPDF = () => {
    if (hasEmail) {
      triggerPDFDownload();
    } else {
      setIsEmailModalOpen(true);
    }
  };

  const handlePDFEmailSuccess = (email: string) => {
    saveEmail(email);
    setIsEmailModalOpen(false);
    triggerPDFDownload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
      <Header onDownloadPDF={handleDownloadPDF} />
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
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onSuccess={handlePDFEmailSuccess}
        variant="pdf-download"
      />
    </div>
  );
}

export default function Home() {
  return (
    <ProgressProvider>
      <HomeContent />
    </ProgressProvider>
  );
}
