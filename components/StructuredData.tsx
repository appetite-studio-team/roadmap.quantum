export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": "Quantum Computing Roadmap 2026",
    "description": "A comprehensive, structured learning roadmap for quantum computing from beginner to advanced level. Covers foundations, quantum mechanics, algorithms, programming, hardware, applications, and career paths.",
    "educationalLevel": "Beginner to Advanced",
    "credentialCategory": "Learning Roadmap",
    "competencyRequired": "Mathematics, Programming, Physics",
    "about": {
      "@type": "Thing",
      "name": "Quantum Computing"
    },
    "teaches": [
      "Quantum Computing",
      "Quantum Algorithms",
      "Quantum Programming",
      "Qubits",
      "Quantum Mechanics",
      "Qiskit",
      "Cirq",
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
      "educationalRole": ["student", "developer", "researcher", "engineer"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
