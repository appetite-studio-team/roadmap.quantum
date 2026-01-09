# Quantum Computing Roadmap 2026

An interactive, scrollable web application that presents a comprehensive learning roadmap for quantum computing, guiding learners from absolute beginner to advanced mastery.

## Features

- **9 Learning Phases**: From foundations to career paths
- **45+ Learning Nodes**: Comprehensive coverage of quantum computing topics
- **Interactive Modals**: Detailed explanations and resources for each topic
- **Clean, Academic Design**: Minimal, professional interface
- **Responsive Layout**: Works on desktop and mobile devices
- **Smooth Animations**: Subtle transitions using Framer Motion

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Headless UI** (for modals)
- **Framer Motion** (for animations)
- **Lucide Icons**
- **Google Fonts** (Montserrat)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
roadmap.quantumx/
├── app/
│   ├── globals.css       # Global styles with Montserrat font
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main roadmap page
├── components/
│   ├── Header.tsx        # Sticky header with navigation
│   ├── Footer.tsx        # Footer component
│   ├── Modal.tsx         # Modal for node details
│   ├── RoadmapCanvas.tsx # Main roadmap container
│   ├── PhaseSection.tsx  # Individual phase section
│   └── NodeCard.tsx      # Clickable node cards
├── data/
│   └── roadmap.ts        # Roadmap data structure
└── package.json
```

## Learning Phases

1. **Foundations** - Mathematical and conceptual basics
2. **Quantum Mechanics for Computing** - Core quantum principles
3. **Quantum Computing Models** - Different computational paradigms
4. **Quantum Algorithms** - Fundamental quantum algorithms
5. **Quantum Programming** - Practical programming tools
6. **Hardware & Systems** - Physical implementations
7. **Applications** - Real-world use cases
8. **Advanced & Research** - Cutting-edge topics
9. **Career & Research Path** - Professional guidance

## Customization

The roadmap content is defined in `data/roadmap.ts`. You can easily:
- Add new phases
- Modify existing nodes
- Update resources
- Change descriptions

All content is type-safe with TypeScript interfaces.

## Design Philosophy

This roadmap is designed to be:
- **Clear and academic** - Not flashy or marketing-focused
- **Navigation-focused** - Helps learners understand the learning path
- **Resource-rich** - Provides learning resources for each topic
- **Expandable** - Easy to add new content without touching UI code

## License

This project is open source and available for educational purposes.

# roadmap.quantum
# roadmap.quantum
