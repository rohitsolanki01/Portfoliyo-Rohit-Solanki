import { useId } from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = 36, animated = false, className = '' }) {
  const uid = useId().replace(/:/g, '');
  const gradientId = `rs-logo-gradient-${uid}`;
  const ringId = `rs-logo-ring-${uid}`;
  const showWordmark = size >= 28;
  const iconSize = Math.max(24, size);
  const nameSize = Math.max(12, Math.round(size * 0.46));
  const subtitleSize = Math.max(8, Math.round(size * 0.26));

  return (
    <div className={`relative inline-flex items-center gap-2.5 ${className}`}>
      {animated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.18], scale: [0.94, 1.03, 1] }}
          transition={{ delay: 0.2, duration: 2.2, ease: 'easeOut' }}
          className="absolute -inset-x-4 -inset-y-2 rounded-2xl"
          style={{ background: 'radial-gradient(circle, oklch(0.82 0.14 160 / 0.34), transparent 72%)' }}
        />
      )}

      <svg viewBox="0 0 72 72" width={iconSize} height={iconSize} fill="none" className="relative z-10 shrink-0">
        <defs>
          <linearGradient id={gradientId} x1="12" y1="8" x2="60" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="oklch(0.82 0.14 160)" />
            <stop offset="1" stopColor="oklch(0.76 0.15 214)" />
          </linearGradient>
          <linearGradient id={ringId} x1="10" y1="12" x2="62" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="oklch(0.92 0.02 210 / 0.35)" />
            <stop offset="1" stopColor="oklch(0.86 0.03 170 / 0.14)" />
          </linearGradient>
        </defs>

        <motion.rect
          x="6"
          y="6"
          width="60"
          height="60"
          rx="18"
          fill={`url(#${gradientId})`}
          initial={animated ? { opacity: 0, scale: 0.72, rotate: -8 } : undefined}
          animate={animated ? { opacity: 1, scale: 1 } : undefined}
          transition={animated ? { duration: 0.65, type: 'spring', stiffness: 240, damping: 18 } : undefined}
          style={{ transformOrigin: 'center' }}
        />

        <motion.rect
          x="10"
          y="10"
          width="52"
          height="52"
          rx="15"
          stroke={`url(#${ringId})`}
          strokeWidth="0.8"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={animated ? { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] } : undefined}
        />

        <motion.path
          d="M20 50 V22 H34 C39 22 43 25 43 30 C43 35 39 38 34 38 H20"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={animated ? { delay: 0.34, duration: 0.78, ease: [0.22, 1, 0.36, 1] } : undefined}
        />

        <motion.path
          d="M35 38 L45 50"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={animated ? { delay: 0.52, duration: 0.62, ease: [0.22, 1, 0.36, 1] } : undefined}
        />

        <motion.path
          d="M53 24 C50 21 45 21 42 24 C39 27 40 31 44 33 L50 36 C54 38 55 42 52 45 C49 48 44 48 41 45"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={animated ? { delay: 0.66, duration: 0.75, ease: [0.22, 1, 0.36, 1] } : undefined}
        />

        <motion.path
          d="M50 36 L44 36"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={animated ? { delay: 0.82, duration: 0.5, ease: [0.22, 1, 0.36, 1] } : undefined}
        />
      </svg>

      {showWordmark && (
        <motion.div
          initial={animated ? { opacity: 0, x: -8 } : undefined}
          animate={animated ? { opacity: 1, x: 0 } : undefined}
          transition={animated ? { delay: 0.35, duration: 0.5 } : undefined}
          className="leading-none select-none"
        >
          <p className="font-[Sora] font-semibold tracking-tight text-foreground" style={{ fontSize: `${nameSize}px` }}>Rohit Solanki</p>
          <p className="mt-1 uppercase tracking-[0.22em] text-muted-foreground" style={{ fontSize: `${subtitleSize}px` }}>Developer</p>
        </motion.div>
      )}
    </div>
  );
}
