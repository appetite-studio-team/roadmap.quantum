import Link from 'next/link';

/** Edit copy and CTA per deployment */
const BRAND_NAME = 'QuantumX School';
const ANNOUNCEMENT_MESSAGE = 'July cohort about to start, register today';
const SHORT_MOBILE_MESSAGE = 'July cohort starting — register today';
const CTA_LABEL = 'Register';
const CTA_URL = 'https://quantumx.school/';

/** Matches banner height (~40px); use for layout offset and header `top` */
export const ANNOUNCEMENT_BANNER_OFFSET = '2.5rem';

export default function AnnouncementBanner() {
  return (
    <div
      role="region"
      aria-label="Announcement"
      className="fixed top-0 left-0 right-0 z-[10002] bg-[#1a0a2e] text-white font-sans"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-400/15 to-violet-600/0" />
        <div className="absolute inset-y-0 -left-1/4 w-1/2 bg-gradient-to-r from-transparent via-violet-300/10 to-transparent motion-safe:animate-[banner-shimmer_4s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <span
            aria-hidden
            className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-violet-400"
          />
          <p className="min-w-0 text-xs md:text-sm">
            <span className="sm:hidden">
              <span className="font-semibold">{BRAND_NAME}</span>
              {', '}
              <span className="text-white/90">{SHORT_MOBILE_MESSAGE}</span>
            </span>
            <span className="hidden items-center gap-3 sm:inline-flex">
              <span className="shrink-0 font-semibold">{BRAND_NAME}</span>
              <span
                aria-hidden
                className="h-3.5 w-px shrink-0 bg-white/25"
              />
              <span className="truncate text-white/90">
                {ANNOUNCEMENT_MESSAGE}
              </span>
            </span>
          </p>
        </div>

        <Link
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-black transition-colors hover:bg-white/90 md:text-sm"
        >
          {CTA_LABEL} →
        </Link>
      </div>
    </div>
  );
}
