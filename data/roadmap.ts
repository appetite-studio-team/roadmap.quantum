export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'course' | 'paper' | 'tool';
}

export interface Node {
  nodeId: string;
  nodeTitle: string;
  nodeDescription: string;
  whyItMatters: string;
  whatToLearn: string;
  resources: Resource[];
}

export interface Category {
  categoryId: string;
  categoryTitle: string;
  topics: Node[];
}

export interface Phase {
  phaseId: string;
  title: string;
  description: string;
  categories: Category[];
}

export const roadmapData: Phase[] = [
  {
    phaseId: '1',
    title: 'Foundations',
    description: 'Build the mathematical and conceptual foundation needed to understand quantum computing.',
    categories: [
      {
        categoryId: '1-1',
        categoryTitle: 'Core Concepts',
        topics: [
          {
            nodeId: '1-1-1',
            nodeTitle: 'What is Quantum Computing',
            nodeDescription: 'An introduction to quantum computing as a paradigm shift from classical computing, exploring why quantum mechanics can solve certain problems more efficiently.',
            whyItMatters: 'Understanding the fundamental difference between classical and quantum computing is essential before diving into technical details.',
            whatToLearn: 'The basic principles of quantum computing, its potential applications, and why it represents a new computational paradigm.',
            resources: [
              { title: 'IBM Quantum Computing Guide', url: '#', type: 'article' },
              { title: 'Introduction to Quantum Computing', url: '#', type: 'video' },
            ],
          },
          {
            nodeId: '1-1-2',
            nodeTitle: 'Classical vs Quantum',
            nodeDescription: 'A comparative study of classical bits and quantum bits (qubits), highlighting the fundamental differences in how information is processed.',
            whyItMatters: 'This comparison helps clarify what makes quantum computing unique and powerful.',
            whatToLearn: 'The differences between classical bits (0 or 1) and qubits (superposition of 0 and 1), and how this enables new computational capabilities.',
            resources: [
              { title: 'Classical vs Quantum Computing', url: '#', type: 'article' },
            ],
          },
            ],
          },
      {
        categoryId: '1-2',
        categoryTitle: 'Mathematical Foundations',
        topics: [
          {
            nodeId: '1-2-1',
            nodeTitle: 'Linear Algebra Basics',
            nodeDescription: 'Essential linear algebra concepts including vectors, matrices, tensor products, and unitary operations that form the mathematical language of quantum computing.',
            whyItMatters: 'Quantum states and operations are represented using linear algebra, making this knowledge fundamental.',
            whatToLearn: 'Vector spaces, matrix operations, eigenvalues, eigenvectors, and how they apply to quantum mechanics.',
            resources: [
              { title: 'Linear Algebra for Quantum Computing', url: '#', type: 'course' },
              { title: 'Matrix Operations Tutorial', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '1-2-2',
            nodeTitle: 'Probability Refresher',
            nodeDescription: 'Review of probability theory, including probability distributions, conditional probability, and expectation values.',
            whyItMatters: 'Quantum measurement outcomes are probabilistic, requiring a solid understanding of probability theory.',
            whatToLearn: 'Probability distributions, Bayes theorem, and statistical concepts relevant to quantum measurement.',
            resources: [
              { title: 'Probability Theory Basics', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '1-2-3',
            nodeTitle: 'Complex Numbers',
            nodeDescription: 'Understanding complex numbers, their arithmetic, and their role in representing quantum amplitudes.',
            whyItMatters: 'Quantum amplitudes are complex numbers, making this mathematical foundation crucial.',
            whatToLearn: 'Complex number arithmetic, complex exponentials, and the geometric interpretation of complex numbers.',
            resources: [
              { title: 'Complex Numbers in Quantum Mechanics', url: '#', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '2',
    title: 'Quantum Mechanics for Computing',
    description: 'Core quantum mechanical principles that directly apply to quantum computing.',
    categories: [
      {
        categoryId: '2-1',
        categoryTitle: 'Quantum States',
        topics: [
          {
            nodeId: '2-1-1',
            nodeTitle: 'Qubits',
            nodeDescription: 'The fundamental unit of quantum information, a qubit can exist in a superposition of states, unlike classical bits.',
            whyItMatters: 'Qubits are the building blocks of all quantum algorithms and quantum computers.',
            whatToLearn: 'How qubits are represented mathematically, their physical realizations, and how they differ from classical bits.',
            resources: [
              { title: 'Understanding Qubits', url: '#', type: 'article' },
              { title: 'Qubit Visualization', url: '#', type: 'video' },
            ],
          },
          {
            nodeId: '2-1-2',
            nodeTitle: 'Superposition',
            nodeDescription: 'The quantum phenomenon where a system exists in multiple states simultaneously until measured.',
            whyItMatters: 'Superposition enables quantum parallelism, allowing quantum algorithms to process multiple possibilities simultaneously.',
            whatToLearn: 'How superposition works, how to create and manipulate superposed states, and its computational advantages.',
            resources: [
              { title: 'Quantum Superposition Explained', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '2-1-3',
            nodeTitle: 'Bloch Sphere',
            nodeDescription: 'A geometric representation of a qubit state as a point on the surface of a sphere, providing intuitive visualization.',
            whyItMatters: 'The Bloch sphere helps visualize qubit states and quantum operations geometrically.',
            whatToLearn: 'How to map qubit states to points on the Bloch sphere and visualize quantum gates as rotations.',
            resources: [
              { title: 'Bloch Sphere Visualization', url: '#', type: 'article' },
            ],
          },
            ],
          },
      {
        categoryId: '2-2',
        categoryTitle: 'Quantum Phenomena',
        topics: [
          {
            nodeId: '2-2-1',
            nodeTitle: 'Measurement',
            nodeDescription: 'The process of observing a quantum system, which collapses the superposition to a definite classical state.',
            whyItMatters: 'Measurement is how we extract information from quantum systems, but it also destroys quantum coherence.',
            whatToLearn: 'Measurement operators, the measurement postulate, and how to interpret measurement outcomes probabilistically.',
            resources: [
              { title: 'Quantum Measurement Theory', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '2-2-2',
            nodeTitle: 'Entanglement',
            nodeDescription: 'A quantum phenomenon where particles become correlated in ways that cannot be explained by classical physics.',
            whyItMatters: 'Entanglement is a key resource for quantum algorithms and quantum communication protocols.',
            whatToLearn: 'How entanglement is created, measured, and used in quantum computing applications.',
            resources: [
              { title: 'Quantum Entanglement Guide', url: '#', type: 'article' },
              { title: 'Bell States and Entanglement', url: '#', type: 'video' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '3',
    title: 'Quantum Computing Models',
    description: 'Different computational models and paradigms for quantum computing.',
    categories: [
      {
        categoryId: '3-1',
        categoryTitle: 'Gate-Based Models',
        topics: [
          {
            nodeId: '3-1-1',
            nodeTitle: 'Gate Model',
            nodeDescription: 'The most common model where quantum algorithms are built using sequences of quantum gates applied to qubits.',
            whyItMatters: 'Most quantum algorithms and programming frameworks use the gate model as their foundation.',
            whatToLearn: 'How quantum gates work, common gate sets, and how to compose gates into quantum circuits.',
            resources: [
              { title: 'Quantum Gate Model Introduction', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '3-1-2',
            nodeTitle: 'Circuit Model',
            nodeDescription: 'A visual representation of quantum algorithms as circuits with qubits flowing through gates.',
            whyItMatters: 'Circuit diagrams are the standard way to represent and understand quantum algorithms.',
            whatToLearn: 'How to read and construct quantum circuit diagrams, and how they represent quantum operations.',
            resources: [
              { title: 'Quantum Circuit Diagrams', url: '#', type: 'article' },
            ],
          },
        ],
      },
      {
        categoryId: '3-2',
        categoryTitle: 'Alternative Models',
        topics: [
          {
            nodeId: '3-2-1',
            nodeTitle: 'Adiabatic Computing',
            nodeDescription: 'A quantum computing model based on slowly evolving a quantum system to find the ground state of a problem Hamiltonian.',
            whyItMatters: 'Adiabatic quantum computing is used for optimization problems and is the basis for quantum annealing.',
            whatToLearn: 'The adiabatic theorem, how to formulate problems as Hamiltonians, and adiabatic quantum algorithms.',
            resources: [
              { title: 'Adiabatic Quantum Computing', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '3-2-2',
            nodeTitle: 'Annealing',
            nodeDescription: 'A specialized form of quantum computing focused on solving optimization problems using quantum fluctuations.',
            whyItMatters: 'Quantum annealing is commercially available and effective for certain optimization problems.',
            whatToLearn: 'How quantum annealing works, its applications, and how it differs from gate-based quantum computing.',
            resources: [
              { title: 'Quantum Annealing Explained', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '3-2-3',
            nodeTitle: 'Measurement Based Computing',
            nodeDescription: 'A model where computation proceeds through measurements on an entangled resource state.',
            whyItMatters: 'This model provides insights into the relationship between entanglement and computation.',
            whatToLearn: 'Cluster states, measurement patterns, and how to perform computation through measurement.',
            resources: [
              { title: 'Measurement-Based Quantum Computing', url: '#', type: 'paper' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '4',
    title: 'Quantum Algorithms',
    description: 'Fundamental quantum algorithms that demonstrate quantum advantage.',
    categories: [
      {
        categoryId: '4-1',
        categoryTitle: 'Core Algorithms',
        topics: [
          {
            nodeId: '4-1-1',
            nodeTitle: 'Deutsch-Jozsa',
            nodeDescription: 'A simple algorithm that demonstrates quantum parallelism by determining if a function is constant or balanced in a single query.',
            whyItMatters: 'This algorithm provides a clear example of quantum speedup and is excellent for understanding quantum parallelism.',
            whatToLearn: 'How the algorithm works, why it provides a speedup, and how to implement it on quantum hardware.',
            resources: [
              { title: 'Deutsch-Jozsa Algorithm Tutorial', url: '#', type: 'article' },
              { title: 'Implementing Deutsch-Jozsa', url: '#', type: 'video' },
            ],
          },
          {
            nodeId: '4-1-2',
            nodeTitle: "Grover's Algorithm",
            nodeDescription: 'A quantum search algorithm that finds a marked item in an unsorted database with quadratic speedup.',
            whyItMatters: 'Grover\'s algorithm demonstrates quantum advantage for search problems and is widely applicable.',
            whatToLearn: 'The algorithm structure, amplitude amplification, and how to apply it to various search problems.',
            resources: [
              { title: "Grover's Algorithm Explained", url: '#', type: 'article' },
              { title: 'Grover Search Implementation', url: '#', type: 'video' },
            ],
          },
          {
            nodeId: '4-1-3',
            nodeTitle: "Shor's Algorithm",
            nodeDescription: 'A quantum algorithm that factors large integers exponentially faster than classical algorithms, with implications for cryptography.',
            whyItMatters: 'Shor\'s algorithm demonstrates the potential threat to current cryptographic systems and showcases quantum advantage.',
            whatToLearn: 'The algorithm steps, quantum Fourier transform, period finding, and its cryptographic implications.',
            resources: [
              { title: "Shor's Algorithm Deep Dive", url: '#', type: 'article' },
              { title: 'Quantum Factoring Explained', url: '#', type: 'video' },
            ],
          },
        ],
      },
      {
        categoryId: '4-2',
        categoryTitle: 'Algorithm Techniques',
        topics: [
          {
            nodeId: '4-2-1',
            nodeTitle: 'Quantum Fourier Transform',
            nodeDescription: 'A quantum version of the discrete Fourier transform that is exponentially faster than its classical counterpart.',
            whyItMatters: 'QFT is a key component of many quantum algorithms, including Shor\'s algorithm.',
            whatToLearn: 'How QFT works, its circuit implementation, and its role in quantum algorithms.',
            resources: [
              { title: 'Quantum Fourier Transform Guide', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '4-2-2',
            nodeTitle: 'Amplitude Amplification',
            nodeDescription: 'A general technique for amplifying the probability of measuring desired states in a quantum superposition.',
            whyItMatters: 'Amplitude amplification is the core technique behind Grover\'s algorithm and many other quantum algorithms.',
            whatToLearn: 'The amplitude amplification procedure, its geometric interpretation, and how to apply it to various problems.',
            resources: [
              { title: 'Amplitude Amplification Technique', url: '#', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '5',
    title: 'Quantum Programming',
    description: 'Practical tools and frameworks for writing quantum programs.',
    categories: [
      {
        categoryId: '5-1',
        categoryTitle: 'Programming Frameworks',
        topics: [
          {
            nodeId: '5-1-1',
            nodeTitle: 'Qiskit',
            nodeDescription: 'IBM\'s open-source quantum computing framework for writing, simulating, and running quantum programs.',
            whyItMatters: 'Qiskit is one of the most popular quantum programming frameworks with extensive documentation and community support.',
            whatToLearn: 'Qiskit basics, circuit construction, quantum gates, and how to run programs on simulators and real hardware.',
            resources: [
              { title: 'Qiskit Documentation', url: '#', type: 'tool' },
              { title: 'Qiskit Tutorial Series', url: '#', type: 'course' },
            ],
          },
          {
            nodeId: '5-1-2',
            nodeTitle: 'Cirq',
            nodeDescription: 'Google\'s Python framework for creating, editing, and invoking Noisy Intermediate Scale Quantum (NISQ) circuits.',
            whyItMatters: 'Cirq is designed for near-term quantum devices and provides tools for noise modeling and optimization.',
            whatToLearn: 'Cirq basics, circuit construction, device-specific programming, and noise simulation.',
            resources: [
              { title: 'Cirq Documentation', url: '#', type: 'tool' },
              { title: 'Getting Started with Cirq', url: '#', type: 'article' },
            ],
          },
        ],
      },
      {
        categoryId: '5-2',
        categoryTitle: 'Circuit Design',
        topics: [
          {
            nodeId: '5-2-1',
            nodeTitle: 'Quantum Circuits',
            nodeDescription: 'The fundamental structure of quantum programs: sequences of gates applied to qubits to perform computation.',
            whyItMatters: 'Understanding quantum circuits is essential for programming quantum computers.',
            whatToLearn: 'How to design circuits, optimize gate sequences, and understand circuit depth and width.',
            resources: [
              { title: 'Quantum Circuit Design', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '5-2-2',
            nodeTitle: 'Noise Models',
            nodeDescription: 'Models that simulate the effects of decoherence, gate errors, and measurement errors in quantum systems.',
            whyItMatters: 'Real quantum hardware is noisy, and understanding noise is crucial for developing robust quantum algorithms.',
            whatToLearn: 'Types of quantum noise, how to model them, and techniques for noise mitigation.',
            resources: [
              { title: 'Quantum Noise Modeling', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '5-2-3',
            nodeTitle: 'Simulators vs Real Hardware',
            nodeDescription: 'The differences between running quantum programs on simulators versus actual quantum processors.',
            whyItMatters: 'Understanding these differences helps in developing and debugging quantum algorithms effectively.',
            whatToLearn: 'Simulator capabilities and limitations, hardware constraints, and when to use each.',
            resources: [
              { title: 'Quantum Simulators Guide', url: '#', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '6',
    title: 'Hardware & Systems',
    description: 'Physical implementations and engineering challenges of quantum computers.',
    categories: [
      {
        categoryId: '6-1',
        categoryTitle: 'Qubit Technologies',
        topics: [
          {
            nodeId: '6-1-1',
            nodeTitle: 'Superconducting Qubits',
            nodeDescription: 'Qubits implemented using superconducting circuits, the technology used by IBM and Google in their quantum processors.',
            whyItMatters: 'Superconducting qubits are currently the most advanced and scalable quantum computing technology.',
            whatToLearn: 'How superconducting qubits work, their advantages and challenges, and current state-of-the-art systems.',
            resources: [
              { title: 'Superconducting Qubits Explained', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '6-1-2',
            nodeTitle: 'Trapped Ions',
            nodeDescription: 'Qubits encoded in the internal states of trapped atomic ions, used by companies like IonQ.',
            whyItMatters: 'Trapped ion systems offer long coherence times and high-fidelity gates.',
            whatToLearn: 'Ion trapping techniques, gate operations, and the advantages of trapped ion quantum computers.',
            resources: [
              { title: 'Trapped Ion Quantum Computing', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '6-1-3',
            nodeTitle: 'Photonic Systems',
            nodeDescription: 'Quantum computing using photons as qubits, enabling room-temperature operation and long-distance quantum communication.',
            whyItMatters: 'Photonic quantum computing offers unique advantages for quantum networking and certain algorithms.',
            whatToLearn: 'Photon-based qubits, linear optical quantum computing, and photonic quantum processors.',
            resources: [
              { title: 'Photonic Quantum Computing', url: '#', type: 'article' },
            ],
          },
        ],
      },
      {
        categoryId: '6-2',
        categoryTitle: 'Error Management',
        topics: [
          {
            nodeId: '6-2-1',
            nodeTitle: 'Error Correction',
            nodeDescription: 'Techniques for detecting and correcting errors in quantum systems to enable fault-tolerant quantum computation.',
            whyItMatters: 'Error correction is essential for building large-scale, reliable quantum computers.',
            whatToLearn: 'Quantum error correction codes, syndrome measurement, and fault-tolerant quantum computation.',
            resources: [
              { title: 'Quantum Error Correction', url: '#', type: 'article' },
              { title: 'Surface Codes and Error Correction', url: '#', type: 'paper' },
            ],
          },
          {
            nodeId: '6-2-2',
            nodeTitle: 'Decoherence',
            nodeDescription: 'The loss of quantum coherence due to interaction with the environment, one of the main challenges in quantum computing.',
            whyItMatters: 'Understanding decoherence is crucial for designing quantum algorithms and hardware that can maintain quantum states.',
            whatToLearn: 'Causes of decoherence, coherence times, and techniques for mitigating decoherence effects.',
            resources: [
              { title: 'Quantum Decoherence Explained', url: '#', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '7',
    title: 'Applications',
    description: 'Real-world applications where quantum computing provides advantages.',
    categories: [
      {
        categoryId: '7-1',
        categoryTitle: 'Security & Optimization',
        topics: [
          {
            nodeId: '7-1-1',
            nodeTitle: 'Cryptography',
            nodeDescription: 'The impact of quantum computing on cryptography, including post-quantum cryptography and quantum key distribution.',
            whyItMatters: 'Quantum computers threaten current cryptographic systems while also enabling new secure communication methods.',
            whatToLearn: 'Quantum threats to RSA and ECC, post-quantum cryptographic algorithms, and quantum key distribution protocols.',
            resources: [
              { title: 'Quantum Cryptography Overview', url: '#', type: 'article' },
              { title: 'Post-Quantum Cryptography', url: '#', type: 'paper' },
            ],
          },
          {
            nodeId: '7-1-2',
            nodeTitle: 'Optimization',
            nodeDescription: 'Using quantum algorithms to solve optimization problems in logistics, finance, and operations research.',
            whyItMatters: 'Many real-world problems are optimization problems that could benefit from quantum speedup.',
            whatToLearn: 'Quantum optimization algorithms, variational quantum eigensolvers, and quantum approximate optimization algorithms.',
            resources: [
              { title: 'Quantum Optimization Algorithms', url: '#', type: 'article' },
            ],
          },
        ],
      },
      {
        categoryId: '7-2',
        categoryTitle: 'Scientific Applications',
        topics: [
          {
            nodeId: '7-2-1',
            nodeTitle: 'Chemistry Simulation',
            nodeDescription: 'Simulating molecular systems and chemical reactions using quantum computers, with applications in drug discovery and materials science.',
            whyItMatters: 'Quantum computers can naturally simulate quantum systems, making them ideal for chemistry simulations.',
            whatToLearn: 'Variational quantum eigensolver, quantum phase estimation for chemistry, and molecular simulation techniques.',
            resources: [
              { title: 'Quantum Chemistry Simulation', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '7-2-2',
            nodeTitle: 'Machine Learning',
            nodeDescription: 'Quantum machine learning algorithms that leverage quantum computing for pattern recognition and data analysis.',
            whyItMatters: 'Quantum machine learning could provide advantages for certain types of learning problems.',
            whatToLearn: 'Quantum neural networks, quantum support vector machines, and quantum data encoding techniques.',
            resources: [
              { title: 'Quantum Machine Learning', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '7-2-3',
            nodeTitle: 'Finance',
            nodeDescription: 'Applications of quantum computing in financial modeling, risk analysis, and portfolio optimization.',
            whyItMatters: 'The finance industry is exploring quantum computing for complex calculations and optimization problems.',
            whatToLearn: 'Quantum Monte Carlo methods, portfolio optimization, and risk analysis using quantum algorithms.',
            resources: [
              { title: 'Quantum Computing in Finance', url: '#', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '8',
    title: 'Advanced & Research',
    description: 'Cutting-edge research topics and advanced concepts in quantum computing.',
    categories: [
      {
        categoryId: '8-1',
        categoryTitle: 'Error Correction & Fault Tolerance',
        topics: [
          {
            nodeId: '8-1-1',
            nodeTitle: 'Quantum Error Correction',
            nodeDescription: 'Advanced error correction techniques including surface codes, stabilizer codes, and fault-tolerant quantum computation.',
            whyItMatters: 'Error correction is the path to building reliable, large-scale quantum computers.',
            whatToLearn: 'Surface codes, topological codes, threshold theorems, and fault-tolerant gate sets.',
            resources: [
              { title: 'Advanced Quantum Error Correction', url: '#', type: 'paper' },
            ],
          },
          {
            nodeId: '8-1-2',
            nodeTitle: 'Fault Tolerance',
            nodeDescription: 'The ability of a quantum computer to operate correctly even in the presence of errors and noise.',
            whyItMatters: 'Fault tolerance is necessary for practical quantum computing applications.',
            whatToLearn: 'Fault-tolerant quantum computation, error thresholds, and concatenated codes.',
            resources: [
              { title: 'Fault-Tolerant Quantum Computing', url: '#', type: 'paper' },
            ],
          },
        ],
      },
      {
        categoryId: '8-2',
        categoryTitle: 'Advanced Research',
        topics: [
          {
            nodeId: '8-2-1',
            nodeTitle: 'Topological Qubits',
            nodeDescription: 'Qubits based on topological properties of matter that are naturally protected from local errors.',
            whyItMatters: 'Topological qubits could provide inherent error protection, reducing the overhead of error correction.',
            whatToLearn: 'Anyons, topological phases of matter, and how they can be used for quantum computation.',
            resources: [
              { title: 'Topological Quantum Computing', url: '#', type: 'paper' },
            ],
          },
          {
            nodeId: '8-2-2',
            nodeTitle: 'Quantum Supremacy',
            nodeDescription: 'The demonstration that a quantum computer can solve a problem that classical computers cannot solve in a reasonable time.',
            whyItMatters: 'Quantum supremacy marks a milestone in demonstrating the practical advantage of quantum computers.',
            whatToLearn: 'What quantum supremacy means, how it was demonstrated, and its implications for the field.',
            resources: [
              { title: 'Quantum Supremacy Explained', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '8-2-3',
            nodeTitle: 'Current Open Problems',
            nodeDescription: 'Active research questions and unsolved problems in quantum computing that drive current research.',
            whyItMatters: 'Understanding open problems helps identify research directions and the current frontiers of the field.',
            whatToLearn: 'Major open questions in quantum algorithms, hardware, error correction, and applications.',
            resources: [
              { title: 'Open Problems in Quantum Computing', url: '#', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    phaseId: '9',
    title: 'Career & Research Path',
    description: 'Guidance for pursuing a career or research path in quantum computing.',
    categories: [
      {
        categoryId: '9-1',
        categoryTitle: 'Career Paths',
        topics: [
          {
            nodeId: '9-1-1',
            nodeTitle: 'Academic Path',
            nodeDescription: 'Pursuing quantum computing research through academic institutions, including PhD programs and postdoctoral positions.',
            whyItMatters: 'Many breakthroughs in quantum computing come from academic research institutions.',
            whatToLearn: 'How to prepare for graduate school, finding research advisors, and academic career paths in quantum computing.',
            resources: [
              { title: 'Quantum Computing PhD Programs', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '9-1-2',
            nodeTitle: 'Industry Roles',
            nodeDescription: 'Career opportunities in quantum computing at technology companies, startups, and research labs.',
            whyItMatters: 'The quantum computing industry is growing rapidly, creating diverse career opportunities.',
            whatToLearn: 'Types of industry roles, required skills, and how to transition into quantum computing careers.',
            resources: [
              { title: 'Quantum Computing Careers', url: '#', type: 'article' },
            ],
          },
        ],
      },
      {
        categoryId: '9-2',
        categoryTitle: 'Professional Development',
        topics: [
          {
            nodeId: '9-2-1',
            nodeTitle: 'Research Papers',
            nodeDescription: 'How to read, understand, and contribute to quantum computing research literature.',
            whyItMatters: 'Research papers are the primary way knowledge advances in quantum computing.',
            whatToLearn: 'How to read papers effectively, key journals and conferences, and how to write research papers.',
            resources: [
              { title: 'Reading Quantum Computing Papers', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '9-2-2',
            nodeTitle: 'Conferences',
            nodeDescription: 'Major quantum computing conferences and how to participate, present, and network.',
            whyItMatters: 'Conferences are essential for staying current with research and building professional networks.',
            whatToLearn: 'Key conferences in quantum computing, how to submit papers, and networking strategies.',
            resources: [
              { title: 'Quantum Computing Conferences', url: '#', type: 'article' },
            ],
          },
          {
            nodeId: '9-2-3',
            nodeTitle: 'Open Source Contribution',
            nodeDescription: 'Contributing to open-source quantum computing projects and building a portfolio.',
            whyItMatters: 'Open source contributions demonstrate practical skills and help build a professional reputation.',
            whatToLearn: 'Major open-source quantum projects, how to contribute, and building a portfolio of quantum computing work.',
            resources: [
              { title: 'Open Source Quantum Projects', url: '#', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
];

