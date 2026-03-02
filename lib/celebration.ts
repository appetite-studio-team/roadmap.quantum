import type { MilestoneType } from '@/context/ProgressContext';

export function triggerCelebration(type: MilestoneType) {
  if (typeof window === 'undefined') return;
  import('canvas-confetti').then((mod) => {
    const confetti = mod.default;
    const particleCount = type === 'all' ? 100 : 50;
    const spread = type === 'all' ? 100 : 70;
    confetti({ particleCount, spread, origin: { y: 0.7 } });
    if (type === 'all') {
      const duration = 1500;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  });
}
