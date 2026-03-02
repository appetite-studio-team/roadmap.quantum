export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'course' | 'paper' | 'tool' | 'book' | 'blog' | 'practice';
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
              { title: 'Quantum Computing for the Very Curious', url: 'https://quantum.country/qcvc', type: 'course' },
              { title: 'Michael Nielsen – Quantum Computing Explained', url: 'https://www.youtube.com/watch?v=g_IaVepNDT4', type: 'video' },
              { title: 'Quantum Computing: A Gentle Introduction — Rieffel & Polak', url: 'https://mitpress.mit.edu/9780262526678/', type: 'book' },
            ],
          },
          {
            nodeId: '1-1-2',
            nodeTitle: 'Classical vs Quantum',
            nodeDescription: 'A comparative study of classical bits and quantum bits (qubits), highlighting the fundamental differences in how information is processed.',
            whyItMatters: 'This comparison helps clarify what makes quantum computing unique and powerful.',
            whatToLearn: 'The differences between classical bits (0 or 1) and qubits (superposition of 0 and 1), and how this enables new computational capabilities.',
            resources: [
              { title: 'Quantum Computing Fundamentals (MIT xPRO)', url: 'https://learn-xpro.mit.edu/quantum-computing', type: 'course' },
              { title: 'Quantum Computation and Quantum Information (NPTEL)', url: 'https://onlinecourses.nptel.ac.in/noc26_ph02/preview', type: 'course' },
              { title: 'Kurzgesagt – Quantum vs Classical', url: 'https://www.youtube.com/watch?v=JhHMJCUmq28', type: 'video' },
              { title: 'Quantum Algorithms: An Overview — Ashley Montanaro', url: 'https://arxiv.org/abs/1511.04206', type: 'paper' },
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
              { title: 'Linear Algebra – Gilbert Strang (MIT OCW)', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'course' },
              { title: '3Blue1Brown – Essence of Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', type: 'video' },
              { title: 'Quantum Computation and Quantum Information — Nielsen & Chuang', url: 'https://www.cambridge.org/in/universitypress/subjects/physics/quantum-physics-quantum-information-and-quantum-computation/quantum-computation-and-quantum-information-10th-anniversary-edition?format=HB&isbn=9781107002173', type: 'book' },
            ],
          },
          {
            nodeId: '1-2-2',
            nodeTitle: 'Probability Refresher',
            nodeDescription: 'Review of probability theory, including probability distributions, conditional probability, and expectation values.',
            whyItMatters: 'Quantum measurement outcomes are probabilistic, requiring a solid understanding of probability theory.',
            whatToLearn: 'Probability distributions, Bayes theorem, and statistical concepts relevant to quantum measurement.',
            resources: [
              { title: 'Probability & Statistics (Khan Academy)', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'course' },
              { title: 'StatQuest', url: 'https://www.youtube.com/@statquest', type: 'video' },
              { title: 'Probability Theory: The Logic of Science — E. T. Jaynes', url: 'https://bayes.wustl.edu/etj/prob/book.pdf', type: 'book' },
            ],
          },
          {
            nodeId: '1-2-3',
            nodeTitle: 'Complex Numbers',
            nodeDescription: 'Understanding complex numbers, their arithmetic, and their role in representing quantum amplitudes.',
            whyItMatters: 'Quantum amplitudes are complex numbers, making this mathematical foundation crucial.',
            whatToLearn: 'Complex number arithmetic, complex exponentials, and the geometric interpretation of complex numbers.',
            resources: [
              { title: 'Complex Numbers (Khan Academy)', url: 'https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:complex', type: 'course' },
              { title: 'Complex Variables with Applications (MIT OCW)', url: 'https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-fall-1999/', type: 'course' },
              { title: '3Blue1Brown – Complex Numbers Visualized', url: 'https://www.youtube.com/watch?v=5PcpBw5Hbwo', type: 'video' },
              { title: 'MathTheBeautiful', url: 'https://www.youtube.com/@MathTheBeautiful', type: 'video' },
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
              { title: 'Qubits Courses and Certifications', url: 'https://www.classcentral.com/subject/qubits', type: 'course' },
              { title: 'Introduction to Quantum Computing (IBM)', url: 'https://cognitiveclass.ai/courses/introduction-to-quantum-computing', type: 'course' },
              { title: 'Introduction to Quantum Computing (Qubit by Qubit)', url: 'https://www.qubitbyqubit.org/course-info', type: 'course' },
              { title: 'What is a Qubit? – A Beginner\'s Guide', url: 'https://www.youtube.com/watch?v=90za6mazNps', type: 'video' },
              { title: 'How To Make a Quantum Bit', url: 'https://www.youtube.com/watch?v=zNzzGgr2mhk', type: 'video' },
              { title: 'Quantum Computation and Quantum Information — Nielsen & Chuang', url: 'https://www.cambridge.org/9781107002173', type: 'book' },
            ],
          },
          {
            nodeId: '2-1-2',
            nodeTitle: 'Superposition',
            nodeDescription: 'The quantum phenomenon where a system exists in multiple states simultaneously until measured.',
            whyItMatters: 'Superposition enables quantum parallelism, allowing quantum algorithms to process multiple possibilities simultaneously.',
            whatToLearn: 'How superposition works, how to create and manipulate superposed states, and its computational advantages.',
            resources: [
              { title: 'Introduction to Superposition (MIT OCW)', url: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/resources/lecture-1/', type: 'course' },
              { title: 'Kurzgesagt – Superposition', url: 'https://www.youtube.com/watch?v=JhHMJCUmq28', type: 'video' },
              { title: 'Veritasium – Quantum Superposition', url: 'https://www.youtube.com/watch?v=kTXTPe3wahc', type: 'video' },
              { title: 'Quantum States and Superposition – MIT Notes', url: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/', type: 'paper' },
            ],
          },
          {
            nodeId: '2-1-3',
            nodeTitle: 'Bloch Sphere',
            nodeDescription: 'A geometric representation of a qubit state as a point on the surface of a sphere, providing intuitive visualization.',
            whyItMatters: 'The Bloch sphere helps visualize qubit states and quantum operations geometrically.',
            whatToLearn: 'How to map qubit states to points on the Bloch sphere and visualize quantum gates as rotations.',
            resources: [
              { title: 'IBM Quantum Learning – Bloch Sphere', url: 'https://quantum.cloud.ibm.com/learning/en/courses/general-formulation-of-quantum-information/density-matrices/bloch-sphere', type: 'course' },
              { title: 'Bloch Sphere | Visualizing Qubits and Spin', url: 'https://www.youtube.com/watch?v=AYGHS9hXgyw', type: 'video' },
              { title: 'Quantum Computing: A Gentle Introduction — Rieffel & Polak', url: 'https://mitpress.mit.edu/9780262526678/quantum-computing/', type: 'book' },
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
              { title: 'IBM Quantum – Measurement', url: 'https://quantum.cloud.ibm.com/docs/en/guides/measure-qubits', type: 'course' },
              { title: 'Quantum Measurement Theory – arXiv', url: 'https://arxiv.org/abs/quant-ph/9707012', type: 'paper' },
            ],
          },
          {
            nodeId: '2-2-2',
            nodeTitle: 'Entanglement',
            nodeDescription: 'A quantum phenomenon where particles become correlated in ways that cannot be explained by classical physics.',
            whyItMatters: 'Entanglement is a key resource for quantum algorithms and quantum communication protocols.',
            whatToLearn: 'How entanglement is created, measured, and used in quantum computing applications.',
            resources: [
              { title: 'Basics of Quantum Information (IBM)', url: 'https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/entanglement-in-action/introduction', type: 'course' },
              { title: 'Quantum Entanglement & Spooky Action at a Distance', url: 'https://youtu.be/fkAAbXPEAtU?si=kTue_N6Ri1jVW6CA', type: 'video' },
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
              { title: 'IBM Quantum – Quantum Gates', url: 'https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits', type: 'course' },
              { title: 'Microsoft Learn – Quantum Gates', url: 'https://quantum.microsoft.com/en-us/insights/education/concepts/universal-gates', type: 'course' },
              { title: 'Quantum Computing for Computer Scientists — Yanofsky & Mannucci', url: 'https://github.com/Ersocaut/CNYT/blob/master/Quantum%20Computing%20for%20Computer%20Scientists%20by%20Noson%20S.%20Yanofsky%2C%20Mirco%20A.%20Mannucci%20(z-lib.org).pdf', type: 'book' },
            ],
          },
          {
            nodeId: '3-1-2',
            nodeTitle: 'Circuit Model',
            nodeDescription: 'A visual representation of quantum algorithms as circuits with qubits flowing through gates.',
            whyItMatters: 'Circuit diagrams are the standard way to represent and understand quantum algorithms.',
            whatToLearn: 'How to read and construct quantum circuit diagrams, and how they represent quantum operations.',
            resources: [
              { title: 'IBM Quantum – Quantum Circuits', url: 'https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/introduction', type: 'course' },
              { title: 'Quantum Circuits – Understanding Quantum Information & Computation', url: 'https://www.youtube.com/watch?v=30U2DTfIrOU&list=PLOFEBzvs-VvqKKMXX4vbi4EB1uaErFMSO', type: 'video' },
              { title: 'Quantum Circuits – QuTech Academy', url: 'https://youtu.be/_p7i2v21Ys8?si=hFuhWoSgWymXPjEI', type: 'video' },
              { title: 'Qiskit Textbook – Circuits', url: 'https://github.com/Qiskit/textbook/tree/main/notebooks/ch-states#', type: 'practice' },
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
              { title: 'MIT OCW – Quantum Complexity Theory', url: 'https://ocw.mit.edu/courses/6-845-quantum-complexity-theory-fall-2010/', type: 'course' },
              { title: 'Farhi et al. (2000) – Adiabatic Quantum Computation', url: 'https://arxiv.org/abs/quant-ph/0001106', type: 'paper' },
            ],
          },
          {
            nodeId: '3-2-2',
            nodeTitle: 'Annealing',
            nodeDescription: 'A specialized form of quantum computing focused on solving optimization problems using quantum fluctuations.',
            whyItMatters: 'Quantum annealing is commercially available and effective for certain optimization problems.',
            whatToLearn: 'How quantum annealing works, its applications, and how it differs from gate-based quantum computing.',
            resources: [
              { title: 'D-Wave Learning – Quantum Annealing', url: 'https://docs.dwavequantum.com/en/latest/index.html', type: 'course' },
              { title: 'What is Quantum Annealing?', url: 'https://youtu.be/zvfkXjzzYOo?si=THgfoIQhhbD_gJg4', type: 'video' },
              { title: 'D-Wave Ocean SDK', url: 'https://github.com/dwavesystems/dwave-ocean-sdk', type: 'practice' },
            ],
          },
          {
            nodeId: '3-2-3',
            nodeTitle: 'Measurement Based Computing',
            nodeDescription: 'A model where computation proceeds through measurements on an entangled resource state.',
            whyItMatters: 'This model provides insights into the relationship between entanglement and computation.',
            whatToLearn: 'Cluster states, measurement patterns, and how to perform computation through measurement.',
            resources: [
              { title: 'Measurement-Based Quantum Computing (MBQC) Lectures', url: 'https://youtube.com/playlist?list=PLk2lCLlwT7GieQLR4cYqCc4xJ7Z9Bwamu&si=pYNlQdCYEGc34rdS', type: 'video' },
              { title: 'Measurement-Based Quantum Computation (PennyLane)', url: 'https://pennylane.ai/qml/demos/tutorial_mbqc', type: 'practice' },
              { title: 'The One-Way Quantum Computer — Raussendorf, Browne & Briegel', url: 'https://arxiv.org/abs/quant-ph/0108118', type: 'paper' },
              { title: 'Measurement-Based Quantum Computation — Briegel (Lecture Notes)', url: 'https://arxiv.org/abs/0910.1116', type: 'paper' },
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
              { title: 'IBM Quantum Learning – Deutsch\u2013Jozsa', url: 'https://quantum.cloud.ibm.com/learning/en/modules/computer-science/deutsch-jozsa', type: 'course' },
              { title: 'Deutsch & Deutsch-Jozsa Algorithms Explained', url: 'https://youtu.be/QcK0GK7DUh8?si=vHZ2a6POKHwwCi1l', type: 'video' },
              { title: 'Quantum Computing Course: 3.4 Deutsch-Jozsa Algorithm', url: 'https://youtu.be/pC2XRXInHnc?si=2vnM3TbnrFdM-074', type: 'video' },
              { title: 'Deutsch & Jozsa (1992) – Rapid Solution of Problems by Quantum Computation', url: 'https://royalsocietypublishing.org/rspa/article-abstract/439/1907/553/16819/Rapid-solution-of-problems-by-quantum-computation?redirectedFrom=fulltext', type: 'paper' },
            ],
          },
          {
            nodeId: '4-1-2',
            nodeTitle: "Grover's Algorithm",
            nodeDescription: 'A quantum search algorithm that finds a marked item in an unsorted database with quadratic speedup.',
            whyItMatters: 'Grover\'s algorithm demonstrates quantum advantage for search problems and is widely applicable.',
            whatToLearn: 'The algorithm structure, amplitude amplification, and how to apply it to various search problems.',
            resources: [
              { title: 'IBM Quantum Learning – Grover\'s Algorithm', url: 'https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/grovers-algorithm', type: 'course' },
              { title: 'But What is Quantum Computing? (Grover\'s Algorithm)', url: 'https://youtu.be/RQWpF2Gb-gU?si=ymsMSac8WJeqhXKz', type: 'video' },
              { title: 'Grover (1996) – A Fast Quantum Mechanical Algorithm for Database Search', url: 'https://arxiv.org/abs/quant-ph/9605043', type: 'paper' },
            ],
          },
          {
            nodeId: '4-1-3',
            nodeTitle: "Shor's Algorithm",
            nodeDescription: 'A quantum algorithm that factors large integers exponentially faster than classical algorithms, with implications for cryptography.',
            whyItMatters: 'Shor\'s algorithm demonstrates the potential threat to current cryptographic systems and showcases quantum advantage.',
            whatToLearn: 'The algorithm steps, quantum Fourier transform, period finding, and its cryptographic implications.',
            resources: [
              { title: 'IBM Quantum Learning – Shor\'s Algorithm', url: 'https://quantum.cloud.ibm.com/learning/en/courses/fundamentals-of-quantum-algorithms/phase-estimation-and-factoring/shor-algorithm', type: 'course' },
              { title: 'How Quantum Computers Break Encryption | Shor\'s Algorithm Explained', url: 'https://youtu.be/lvTqbM5Dq4Q?si=GbpzdSbKzx5OIKIC', type: 'video' },
              { title: 'Breaking RSA – Computerphile', url: 'https://youtu.be/-ShwJqAalOk?si=1N7ZtIT3NUKb4hTt', type: 'video' },
              { title: 'Shor (1994) – Algorithms for Quantum Computation', url: 'https://arxiv.org/abs/quant-ph/9508027', type: 'paper' },
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
              { title: 'IBM Quantum Learning – Quantum Fourier Transform', url: 'https://quantum.cloud.ibm.com/learning/en/modules/computer-science/qft', type: 'course' },
              { title: 'Quantum Computing Course: 3.6 Quantum Fourier Transform', url: 'https://youtu.be/svSxHaDYHC0?si=v17lm5cRQNf8rafI', type: 'video' },
            ],
          },
          {
            nodeId: '4-2-2',
            nodeTitle: 'Amplitude Amplification',
            nodeDescription: 'A general technique for amplifying the probability of measuring desired states in a quantum superposition.',
            whyItMatters: 'Amplitude amplification is the core technique behind Grover\'s algorithm and many other quantum algorithms.',
            whatToLearn: 'The amplitude amplification procedure, its geometric interpretation, and how to apply it to various problems.',
            resources: [
              { title: 'Intro to Amplitude Amplification (PennyLane)', url: 'https://pennylane.ai/qml/demos/tutorial_intro_amplitude_amplification', type: 'course' },
              { title: 'Brassard et al. (2002) – Quantum Amplitude Amplification and Estimation', url: 'https://arxiv.org/abs/quant-ph/0005055', type: 'paper' },
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
              { title: 'IBM Quantum – Qiskit', url: 'https://www.ibm.com/quantum/qiskit', type: 'course' },
              { title: 'Qiskit Documentation (GitHub)', url: 'https://github.com/Qiskit/documentation', type: 'practice' },
              { title: 'Qiskit YouTube Channel', url: 'https://youtube.com/@qiskit?si=zoYMb-vAFE70Ci_9', type: 'video' },
              { title: 'IBM Quantum Lab', url: 'https://quantum.cloud.ibm.com/', type: 'practice' },
            ],
          },
          {
            nodeId: '5-1-2',
            nodeTitle: 'Cirq',
            nodeDescription: 'Google\'s Python framework for creating, editing, and invoking Noisy Intermediate Scale Quantum (NISQ) circuits.',
            whyItMatters: 'Cirq is designed for near-term quantum devices and provides tools for noise modeling and optimization.',
            whatToLearn: 'Cirq basics, circuit construction, device-specific programming, and noise simulation.',
            resources: [
              { title: 'Google Cirq Documentation', url: 'https://quantumai.google/cirq', type: 'course' },
              { title: 'Cirq Tutorials', url: 'https://quantumai.google/cirq/experiments', type: 'course' },
              { title: 'Google Quantum AI – YouTube', url: 'https://youtube.com/@googlequantumai?si=46_1tAAJlJv_h6CF', type: 'video' },
              { title: 'Cirq (GitHub)', url: 'https://github.com/quantumlib/Cirq', type: 'practice' },
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
              { title: 'IBM Quantum Learning – Quantum Circuits', url: 'https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/introduction', type: 'course' },
              { title: 'Quantum Circuits | Understanding Quantum Information & Computation', url: 'https://youtu.be/30U2DTfIrOU?si=zeY5FYvoL6DmEEUd', type: 'video' },
            ],
          },
          {
            nodeId: '5-2-2',
            nodeTitle: 'Noise Models',
            nodeDescription: 'Models that simulate the effects of decoherence, gate errors, and measurement errors in quantum systems.',
            whyItMatters: 'Real quantum hardware is noisy, and understanding noise is crucial for developing robust quantum algorithms.',
            whatToLearn: 'Types of quantum noise, how to model them, and techniques for noise mitigation.',
            resources: [
              { title: 'IBM Quantum Learning – Noise & Errors', url: 'https://quantum.cloud.ibm.com/docs/en/guides/noise-learning', type: 'course' },
              { title: 'Noise in Quantum Computing', url: 'https://youtu.be/AUAkoEiutOE?si=KhcqNakZTSca17Bf', type: 'video' },
              { title: 'Introduction to Quantum Noise – Qiskit Summer School 2023', url: 'https://youtu.be/3Ka11boCm1M?si=hIIh_8QUOnuqWUN3', type: 'video' },
              { title: 'Quantum Computing in the NISQ Era and Beyond', url: 'https://arxiv.org/abs/1801.00862', type: 'paper' },
            ],
          },
          {
            nodeId: '5-2-3',
            nodeTitle: 'Simulators vs Real Hardware',
            nodeDescription: 'The differences between running quantum programs on simulators versus actual quantum processors.',
            whyItMatters: 'Understanding these differences helps in developing and debugging quantum algorithms effectively.',
            whatToLearn: 'Simulator capabilities and limitations, hardware constraints, and when to use each.',
            resources: [
              { title: 'IBM Quantum – Simulators vs Hardware', url: 'https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/quantum-simulation', type: 'course' },
              { title: 'Validating Quantum Computers Using Randomized Model Circuits', url: 'https://arxiv.org/abs/1811.12926', type: 'paper' },
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
              { title: 'Yale – Superconducting Qubits Lecture Notes', url: 'https://girvin.sites.yale.edu/lectures', type: 'course' },
              { title: 'How to Turn Superconductors Into A Quantum Computer', url: 'https://youtu.be/xsdleM-f0i8?si=pkc9oB0zgDYHgBNX', type: 'video' },
              { title: 'Charge Insensitive Qubit Design (Cooper Pair Box)', url: 'https://arxiv.org/abs/cond-mat/0703002', type: 'paper' },
            ],
          },
          {
            nodeId: '6-1-2',
            nodeTitle: 'Trapped Ions',
            nodeDescription: 'Qubits encoded in the internal states of trapped atomic ions, used by companies like IonQ.',
            whyItMatters: 'Trapped ion systems offer long coherence times and high-fidelity gates.',
            whatToLearn: 'Ion trapping techniques, gate operations, and the advantages of trapped ion quantum computers.',
            resources: [
              { title: 'University of Innsbruck – Trapped Ion QC', url: 'https://www.uibk.ac.at/en/exphys/research/quantum-interfaces/research/itt/', type: 'course' },
              { title: 'MIT OCW – Ion Trap Quantum Computing', url: 'https://ocw.mit.edu/courses/8-422-atomic-and-optical-physics-ii-spring-2013/resources/lecture-21-ion-trapping-and-quantum-gates/', type: 'course' },
              { title: 'What is Trapped Ion Quantum Computing?', url: 'https://youtu.be/f80y85GGyfE', type: 'video' },
              { title: 'NIST Quantum Simulator Using Trapped Ions', url: 'https://youtu.be/fw4SsCeexMs', type: 'video' },
              { title: 'Quantum Computations with Cold Trapped Ions', url: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4091', type: 'paper' },
            ],
          },
          {
            nodeId: '6-1-3',
            nodeTitle: 'Photonic Systems',
            nodeDescription: 'Quantum computing using photons as qubits, enabling room-temperature operation and long-distance quantum communication.',
            whyItMatters: 'Photonic quantum computing offers unique advantages for quantum networking and certain algorithms.',
            whatToLearn: 'Photon-based qubits, linear optical quantum computing, and photonic quantum processors.',
            resources: [
              { title: 'University of Bristol – Photonic Quantum Computing', url: 'https://www.bristol.ac.uk/research/groups/pho/', type: 'course' },
              { title: 'Building Quantum Computers Using Photonics (Xanadu)', url: 'https://www.xanadu.ai/photonics', type: 'course' },
              { title: 'How Xanadu\'s Photonic Quantum Computers Work', url: 'https://youtu.be/v7iAqcFCTQQ?si=QFsAhORnPQYLM7uO', type: 'video' },
              { title: 'Strawberry Fields (Photonic Simulator)', url: 'https://xanadu.ai/', type: 'practice' },
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
              { title: 'IBM Quantum Learning – Quantum Error Correction (Intro)', url: 'https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction/correcting-quantum-errors/introduction', type: 'course' },
              { title: 'Quantum Error Correction Using Qiskit', url: 'https://medium.com/swlh/quantum-error-correction-using-qiskit-1d6b708490b9', type: 'article' },
              { title: 'Demonstrating Quantum Error Correction', url: 'https://youtu.be/_ugJLuJ1_gM?si=BbI_AQKk8eTbdjF0', type: 'video' },
              { title: 'Correcting Quantum Errors – Understanding QI & Computation', url: 'https://youtu.be/OoQSdcKAIZc?si=ldPgAmbPl4sXUKGU', type: 'video' },
              { title: 'Quantum Error Correction — Lidar & Brun', url: 'https://www.cambridge.org/in/universitypress/subjects/physics/quantum-physics-quantum-information-and-quantum-computation/quantum-error-correction?format=HB&isbn=9780521897877', type: 'book' },
            ],
          },
          {
            nodeId: '6-2-2',
            nodeTitle: 'Decoherence',
            nodeDescription: 'The loss of quantum coherence due to interaction with the environment, one of the main challenges in quantum computing.',
            whyItMatters: 'Understanding decoherence is crucial for designing quantum algorithms and hardware that can maintain quantum states.',
            whatToLearn: 'Causes of decoherence, coherence times, and techniques for mitigating decoherence effects.',
            resources: [
              { title: 'MIT OpenCourseWare – Decoherence', url: 'https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/resources/mit8_06s16_chap3/', type: 'course' },
              { title: 'How Decoherence Splits The Quantum Multiverse', url: 'https://youtu.be/GlOwJWJWPUs?si=xQKIxKqMX0bOFEJv', type: 'video' },
              { title: 'What is Decoherence?', url: 'https://youtube.com/shorts/Xee56M4mSCU?si=Mm-rrbjGJmyc2xML', type: 'video' },
              { title: 'Zurek (2003) – Decoherence, Einselection, and the Quantum Origins of the Classical', url: 'https://arxiv.org/abs/quant-ph/0306072', type: 'paper' },
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
              { title: 'IBM Quantum – Quantum Cryptography', url: 'https://www.ibm.com/think/topics/quantum-cryptography', type: 'course' },
              { title: 'NIST – Post-Quantum Cryptography', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography', type: 'course' },
              { title: 'Post-Quantum Cryptography: the Good, the Bad, and the Powerful', url: 'https://www.youtube.com/watch?v=uE_Y1C4QPU8', type: 'video' },
              { title: 'Public Key Cryptography – Computerphile', url: 'https://www.youtube.com/watch?v=GSIDS_lvRv4', type: 'video' },
              { title: 'Quantum Cryptography and Secret-Key Distillation — Van Assche', url: 'https://www.cambridge.org/core/books/quantum-cryptography-and-secretkey-distillation/73509C334A1665F8CA0514E7E9BC5CEF', type: 'book' },
              { title: 'Quantum Cryptography: Public Key Distribution and Coin Tossing', url: 'https://arxiv.org/abs/2003.06557', type: 'paper' },
            ],
          },
          {
            nodeId: '7-1-2',
            nodeTitle: 'Optimization',
            nodeDescription: 'Using quantum algorithms to solve optimization problems in logistics, finance, and operations research.',
            whyItMatters: 'Many real-world problems are optimization problems that could benefit from quantum speedup.',
            whatToLearn: 'Quantum optimization algorithms, variational quantum eigensolvers, and quantum approximate optimization algorithms.',
            resources: [
              { title: 'IBM Quantum – Quantum Circuit Optimization', url: 'https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/quantum-circuit-optimization', type: 'course' },
              { title: 'D-Wave – Optimization with Quantum Annealing', url: 'https://docs.dwavequantum.com/en/latest/quantum_research/quantum_annealing_intro.html', type: 'course' },
              { title: 'What is Quantum Annealing?', url: 'https://youtu.be/zvfkXjzzYOo?si=nPiou-mFeVD7lBxL', type: 'video' },
              { title: 'A Promising Quantum Application – QAOA', url: 'https://youtube.com/shorts/cXS45Awe-FU?si=QbBz3L8SW2FRkQJu', type: 'video' },
              { title: 'A Quantum Approximate Optimization Algorithm', url: 'https://arxiv.org/abs/1411.4028', type: 'paper' },
              { title: 'Qiskit Optimization', url: 'https://qiskit-community.github.io/qiskit-optimization/#', type: 'practice' },
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
              { title: 'IBM Quantum Learning – Quantum Chemistry', url: 'https://quantum.cloud.ibm.com/learning/en/courses/quantum-chem-with-vqe', type: 'course' },
              { title: 'Qiskit Nature Overview', url: 'https://qiskit-community.github.io/qiskit-nature/#', type: 'course' },
              { title: 'Quantum and Chemistry', url: 'https://youtu.be/qarc7AA4-wM?si=cs4dsdRATxhkootR', type: 'video' },
              { title: 'Aspuru-Guzik et al. (2005) – Simulated Quantum Computation of Molecular Energies', url: 'https://www.science.org/doi/10.1126/science.1113479', type: 'paper' },
            ],
          },
          {
            nodeId: '7-2-2',
            nodeTitle: 'Machine Learning',
            nodeDescription: 'Quantum machine learning algorithms that leverage quantum computing for pattern recognition and data analysis.',
            whyItMatters: 'Quantum machine learning could provide advantages for certain types of learning problems.',
            whatToLearn: 'Quantum neural networks, quantum support vector machines, and quantum data encoding techniques.',
            resources: [
              { title: 'Xanadu – Quantum Machine Learning', url: 'https://www.xanadu.ai/blog/quantum-machine-learning-1-0', type: 'course' },
              { title: 'IBM Quantum Learning – Quantum ML', url: 'https://quantum.cloud.ibm.com/learning/en/courses/quantum-machine-learning', type: 'course' },
              { title: 'QML: 2023 and Beyond!', url: 'https://youtu.be/zNqYkPByyP0?si=GbAFTQWADNj5wIw5', type: 'video' },
              { title: 'Quantum Machine Learning Explained', url: 'https://youtu.be/NqHKr9CGWJ0?si=Sq8RYfej_zN13nUD', type: 'video' },
              { title: 'Machine Learning with Quantum Computers — Schuld & Petruccione', url: 'https://link.springer.com/book/10.1007/978-3-030-83098-4', type: 'book' },
              { title: 'Quantum Machine Learning (arXiv)', url: 'https://arxiv.org/abs/1611.09347', type: 'paper' },
            ],
          },
          {
            nodeId: '7-2-3',
            nodeTitle: 'Finance',
            nodeDescription: 'Applications of quantum computing in financial modeling, risk analysis, and portfolio optimization.',
            whyItMatters: 'The finance industry is exploring quantum computing for complex calculations and optimization problems.',
            whatToLearn: 'Quantum Monte Carlo methods, portfolio optimization, and risk analysis using quantum algorithms.',
            resources: [
              { title: 'IBM Research – Quantum Finance', url: 'https://research.ibm.com/topics/quantum-finance', type: 'course' },
              { title: 'Qiskit Finance', url: 'https://qiskit-community.github.io/qiskit-finance/#', type: 'practice' },
              { title: 'A Survey of Quantum Computing for Finance', url: 'https://www.researchgate.net/publication/357734003_A_Survey_of_Quantum_Computing_for_Finance', type: 'book' },
              { title: 'Quantum Computing for Finance: Overview and Prospects', url: 'https://www.sciencedirect.com/science/article/pii/S2405428318300571', type: 'paper' },
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
              { title: 'Caltech – Quantum Error Correction (Preskill)', url: 'https://www.preskill.caltech.edu/ph229/notes/chap7.pdf', type: 'paper' },
              { title: 'Quantum Error Correction — Lidar & Brun', url: 'https://www.cambridge.org/in/universitypress/subjects/physics/quantum-physics-quantum-information-and-quantum-computation/quantum-error-correction?format=HB&isbn=9780521897877', type: 'book' },
              { title: 'Quantum Error Correction – Lecture Notes', url: 'https://www.thp.uni-koeln.de/kastoryano/ExSheets/Notes_v7.pdf', type: 'paper' },
              { title: 'Stabilizer Codes and Quantum Error Correction', url: 'https://arxiv.org/abs/quant-ph/9705052', type: 'paper' },
              { title: 'Surface Codes: Towards Practical Large-Scale Quantum Computation', url: 'https://arxiv.org/abs/1208.0928', type: 'paper' },
            ],
          },
          {
            nodeId: '8-1-2',
            nodeTitle: 'Fault Tolerance',
            nodeDescription: 'The ability of a quantum computer to operate correctly even in the presence of errors and noise.',
            whyItMatters: 'Fault tolerance is necessary for practical quantum computing applications.',
            whatToLearn: 'Fault-tolerant quantum computation, error thresholds, and concatenated codes.',
            resources: [
              { title: 'How Quantum Computers Become Fault Tolerant', url: 'https://youtu.be/vja_KmolxAU?si=y7K500LwkxAlWXTt', type: 'video' },
              { title: 'Fault Tolerant Quantum Computation (INSPIRE-HEP)', url: 'https://inspirehep.net/literature/452683', type: 'paper' },
              { title: 'Fault-Tolerant Quantum Computation', url: 'https://arxiv.org/abs/quant-ph/9712048', type: 'paper' },
              { title: 'Fault Tolerant Quantum Computation with Constant Error', url: 'https://arxiv.org/abs/quant-ph/9611025', type: 'paper' },
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
              { title: 'Microsoft – Topological Quantum Computing', url: 'https://quantum.microsoft.com/en-us/insights/education/concepts/topological-qubits', type: 'course' },
              { title: 'Majorana 1 Explained: The Path to a Million Qubits', url: 'https://youtu.be/wSHmygPQukQ?si=xYL0QPFL4IpavyoX', type: 'video' },
              { title: 'Fault-Tolerant Quantum Computation by Anyons', url: 'https://arxiv.org/abs/quant-ph/9707021', type: 'paper' },
            ],
          },
          {
            nodeId: '8-2-2',
            nodeTitle: 'Quantum Supremacy',
            nodeDescription: 'The demonstration that a quantum computer can solve a problem that classical computers cannot solve in a reasonable time.',
            whyItMatters: 'Quantum supremacy marks a milestone in demonstrating the practical advantage of quantum computers.',
            whatToLearn: 'What quantum supremacy means, how it was demonstrated, and its implications for the field.',
            resources: [
              { title: 'On "Quantum Supremacy" (IBM Blog)', url: 'https://www.ibm.com/quantum/blog/on-quantum-supremacy', type: 'blog' },
              { title: 'Quantum Supremacy Explained', url: 'https://youtu.be/90U_SmKyfGI?si=AT9K8I4xKkY42gQB', type: 'video' },
              { title: 'Quantum Supremacy Using a Programmable Superconducting Processor', url: 'https://www.nature.com/articles/s41586-019-1666-5', type: 'paper' },
            ],
          },
          {
            nodeId: '8-2-3',
            nodeTitle: 'Current Open Problems',
            nodeDescription: 'Active research questions and unsolved problems in quantum computing that drive current research.',
            whyItMatters: 'Understanding open problems helps identify research directions and the current frontiers of the field.',
            whatToLearn: 'Major open questions in quantum algorithms, hardware, error correction, and applications.',
            resources: [
              { title: 'Quantum Computing in the NISQ Era and Beyond', url: 'https://arxiv.org/abs/1801.00862', type: 'paper' },
              { title: 'Open Problems Related to Quantum Query Complexity', url: 'https://arxiv.org/abs/2109.06917', type: 'paper' },
              { title: 'Quantum Frontiers – Caltech Blog', url: 'https://quantumfrontiers.com/', type: 'blog' },
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
              { title: 'A Guide to Careers in Physics (APS)', url: 'https://www.aps.org/publications/reports/careers-guide', type: 'book' },
              { title: 'Quantum Careers Paper', url: 'https://arxiv.org/pdf/2404.03439', type: 'paper' },
            ],
          },
          {
            nodeId: '9-1-2',
            nodeTitle: 'Industry Roles',
            nodeDescription: 'Career opportunities in quantum computing at technology companies, startups, and research labs.',
            whyItMatters: 'The quantum computing industry is growing rapidly, creating diverse career opportunities.',
            whatToLearn: 'Types of industry roles, required skills, and how to transition into quantum computing careers.',
            resources: [
              { title: 'The Year of Quantum: From Concept to Reality in 2025 (McKinsey)', url: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-year-of-quantum-from-concept-to-reality-in-2025', type: 'article' },
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
              { title: 'arXiv – Quantum Physics', url: 'https://arxiv.org/archive/quant-ph', type: 'tool' },
              { title: 'Google Scholar – Quantum Computing', url: 'https://scholar.google.com/', type: 'tool' },
              { title: 'PHYS771 Quantum Computing Since Democritus', url: 'https://www.scottaaronson.com/democritus/', type: 'article' },
            ],
          },
          {
            nodeId: '9-2-2',
            nodeTitle: 'Conferences',
            nodeDescription: 'Major quantum computing conferences and how to participate, present, and network.',
            whyItMatters: 'Conferences are essential for staying current with research and building professional networks.',
            whatToLearn: 'Key conferences in quantum computing, how to submit papers, and networking strategies.',
            resources: [
              { title: 'QIP Conference', url: 'https://qipconference.org/', type: 'article' },
              { title: 'IEEE Quantum Week', url: 'https://qce.quantum.ieee.org/2026/', type: 'article' },
            ],
          },
          {
            nodeId: '9-2-3',
            nodeTitle: 'Open Source Contribution',
            nodeDescription: 'Contributing to open-source quantum computing projects and building a portfolio.',
            whyItMatters: 'Open source contributions demonstrate practical skills and help build a professional reputation.',
            whatToLearn: 'Major open-source quantum projects, how to contribute, and building a portfolio of quantum computing work.',
            resources: [
              { title: 'Qiskit', url: 'https://github.com/Qiskit', type: 'practice' },
              { title: 'Cirq', url: 'https://github.com/quantumlib/Cirq', type: 'practice' },
              { title: 'PennyLane', url: 'https://github.com/PennyLaneAI/pennylane', type: 'practice' },
              { title: 'OpenFermion', url: 'https://github.com/quantumlib/OpenFermion', type: 'practice' },
            ],
          },
          {
            nodeId: '9-2-4',
            nodeTitle: 'Communities',
            nodeDescription: 'Online communities and forums for quantum computing enthusiasts, researchers, and practitioners.',
            whyItMatters: 'Engaging with the community accelerates learning and opens doors to collaboration and opportunities.',
            whatToLearn: 'Where to ask questions, share knowledge, and connect with others in the quantum computing field.',
            resources: [
              { title: 'Quantum Computing StackExchange', url: 'https://quantumcomputing.stackexchange.com/', type: 'tool' },
              { title: 'Qiskit Slack', url: 'https://qiskit.org/slack', type: 'tool' },
            ],
          },
        ],
      },
    ],
  },
];
