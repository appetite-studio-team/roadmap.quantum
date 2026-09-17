'use client';

import { useEffect, useRef } from "react";

// Tagged so Qiskit Fall Fest registrations can be attributed back to this
// banner. Each QuantumX site that runs the banner sets its own utm_source.
const QFF_URL =
  "https://qff26.quantumx.foundation/?utm_source=roadmap.quantumx.com&utm_medium=banner&utm_campaign=qff26";

// This site is dark only (no theme toggle), so the bar is a white strip
// with near-black text.
const BANNER_BG = "#ffffff";
const BANNER_TEXT = "#0a0a0a";

export default function AnnouncementBanner() {
  const ref = useRef<HTMLDivElement>(null);

  // The copy fits on one line on wide screens and wraps to two on narrow ones,
  // so the bar is 36px in one place and 56px in another. Publishing what it
  // actually measures lets the spacer below it and the site header sit flush
  // against it at every width instead of guessing a single number.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const publish = () =>
      document.documentElement.style.setProperty(
        "--qx-banner-h",
        `${el.offsetHeight}px`
      );

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--qx-banner-h");
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed left-0 right-0 top-0 z-[10002] overflow-hidden px-3 py-2 md:px-4"
      style={{ backgroundColor: BANNER_BG, color: BANNER_TEXT }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs md:gap-3 md:text-sm">
        <span className="hidden sm:inline">
          <strong className="font-semibold">Qiskit Fall Fest 2026</strong>
          <span className="mx-1.5 inline-block h-3 w-px bg-current opacity-25" aria-hidden />
          QuantumX is an official host of IBM Quantum&apos;s Qiskit Fall Fest
        </span>
        <span className="sm:hidden">
          <strong>Qiskit Fall Fest 2026</strong>, hosted by QuantumX
        </span>
        <a
          href={QFF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-0.5 text-xs font-semibold transition-opacity hover:opacity-85"
          style={{ backgroundColor: BANNER_TEXT, color: BANNER_BG }}
        >
          Register now
          <span aria-hidden className="text-[0.85em]">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
