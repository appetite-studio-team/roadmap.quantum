import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import PWAInstall from "@/components/PWAInstall";

const GA_ID = "G-392XQM7Y2Q";

export const metadata: Metadata = {
  title: {
    default: "Quantum Computing Roadmap 2026 | Learn Quantum Computing from Beginner to Advanced",
    template: "%s | Quantum Computing Roadmap",
  },
  description: "A comprehensive, structured learning roadmap for quantum computing. Master quantum computing from foundations to advanced topics. Perfect for students, developers, researchers, and engineers. Free interactive guide with 9 learning phases covering qubits, algorithms, programming, and applications.",
  keywords: [
    "quantum computing",
    "quantum computing roadmap",
    "learn quantum computing",
    "quantum computing tutorial",
    "quantum computing course",
    "quantum algorithms",
    "qubits",
    "quantum programming",
    "Qiskit",
    "Cirq",
    "quantum computing for beginners",
    "quantum computing guide",
    "quantum mechanics",
    "quantum computing education",
    "quantum computing career",
    "quantum computing 2026",
    "free quantum computing course",
    "quantum computing learning path",
    "quantum hardware",
    "quantum error correction",
  ],
  authors: [{ name: "Quantum Computing Roadmap" }],
  creator: "Quantum Computing Roadmap",
  publisher: "Quantum Computing Roadmap",
  category: "Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://roadmap.quantumx.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quantum Computing Roadmap 2026 | Learn Quantum Computing",
    description: "Master quantum computing with our comprehensive learning roadmap. From foundations to advanced topics, perfect for students, developers, and researchers.",
    url: "https://roadmap.quantumx.com",
    siteName: "Quantum Computing Roadmap",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://roadmap.quantumx.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Quantum Computing Roadmap 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Computing Roadmap 2026",
    description: "A comprehensive learning roadmap for quantum computing from beginner to advanced. Free interactive guide.",
    creator: "@_Quantum_X_",
    images: ["https://roadmap.quantumx.com/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className="antialiased dark bg-black text-white">
        {children}
        <PWAInstall />
      </body>
    </html>
  );
}

