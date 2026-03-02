# Quantum Computing Roadmap 2026

An interactive, structured learning roadmap for quantum computing -- from absolute beginner to advanced mastery. Built with Next.js and deployed on Netlify.

**Live:** [roadmap.quantumx.com](https://roadmap.quantumx.com)

## Contributing

We welcome contributions! If you'd like to improve this roadmap, add new content, fix issues, or suggest enhancements, please reach out at **[hi@quantumx.foundation](mailto:hi@quantumx.foundation)**.

## Features

- **9 Learning Phases** covering 160+ curated resources (articles, videos, courses, books, papers, tools)
- **Interactive Topic Modals** with descriptions, learning objectives, and external resource links
- **Progress Tracking** -- mark topics as completed, persisted in localStorage
- **Header Progress Bar** showing overall completion at a glance
- **PDF Download** with email capture via Netlify Forms
- **FAQ Section** with 10 real questions and answers
- **SEO/AEO Optimized** -- sitemap, robots.txt, JSON-LD structured data (Course, FAQPage, ItemList, WebSite, Organization)
- **Google Analytics** integration
- **Responsive Design** -- works on desktop, tablet, and mobile
- **Smooth Animations** using Framer Motion

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Headless UI** (modals/transitions)
- **Framer Motion** (animations)
- **Lucide Icons**
- **Google Fonts** (Montserrat)
- **Netlify** (hosting + forms)
- **Google Analytics** (gtag.js)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
roadmap.quantum/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout, metadata, Google Analytics
│   ├── page.tsx             # Main page, structured data (JSON-LD)
│   ├── sitemap.ts           # XML sitemap generation
│   └── robots.ts            # robots.txt generation
├── components/
│   ├── Header.tsx           # Sticky header with progress bar
│   ├── Footer.tsx           # Footer
│   ├── RoadmapCanvas.tsx    # Main roadmap container
│   ├── PhaseSection.tsx     # Phase section layout
│   ├── PhaseCard.tsx        # Phase header card
│   ├── PhaseModal.tsx       # Phase detail modal
│   ├── CategoryCard.tsx     # Category grouping card
│   ├── TopicItem.tsx        # Topic button with completion indicator
│   ├── NodeCard.tsx         # Clickable node card
│   ├── Modal.tsx            # Topic detail modal with completion toggle
│   ├── EmailModal.tsx       # Email capture modal for PDF download
│   ├── FAQ.tsx              # FAQ accordion section
│   └── StructuredData.tsx   # Structured data component
├── context/
│   └── ProgressContext.tsx   # Progress state management (localStorage)
├── data/
│   └── roadmap.ts           # Roadmap data: phases, categories, topics, resources
├── public/
│   ├── __forms.html         # Netlify Forms detection (Next.js v5 compat)
│   ├── manifest.json        # Web app manifest
│   ├── favicon.ico
│   ├── images/
│   └── pdf/
└── .coderabbit.yaml         # CodeRabbit review config
```

## Learning Phases

1. **Foundations** -- Mathematical and conceptual basics
2. **Quantum Mechanics for Computing** -- Core quantum principles
3. **Quantum Computing Models** -- Computational paradigms
4. **Quantum Algorithms** -- Fundamental algorithms demonstrating quantum advantage
5. **Quantum Programming** -- Practical tools (Qiskit, Cirq, Q#)
6. **Hardware & Systems** -- Physical implementations and engineering
7. **Applications** -- Real-world use cases (cryptography, optimization, ML)
8. **Advanced & Research** -- Cutting-edge topics and open problems
9. **Career & Research Path** -- Professional guidance and communities

## Customization

Roadmap content lives in `data/roadmap.ts`. The data is fully typed:

```typescript
Phase -> Category -> Node (topic) -> Resource
```

You can add phases, modify topics, or update resources without touching any UI code.

## SEO

The site includes:
- Auto-generated `/sitemap.xml` and `/robots.txt`
- JSON-LD structured data (`@graph` with Course, FAQPage, ItemList, WebSite, Organization schemas)
- Open Graph and Twitter Card meta tags
- Canonical URL
- Web app manifest

## License

This project is open source and available for educational purposes.
