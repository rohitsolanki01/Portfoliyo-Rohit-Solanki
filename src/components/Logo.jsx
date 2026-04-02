import { motion } from 'framer-motion';

export default function Logo({ size = 36, animated = false, className = '' }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay, duration: 0.8, ease: [0.65, 0, 0.35, 1] },
    }),
  };

  const fadeIn = (delay) => ({
    initial: animated ? { opacity: 0, scale: 0.5 } : undefined,
    animate: animated ? { opacity: 1, scale: 1 } : undefined,
    transition: animated ? { delay, duration: 0.4, type: 'spring', stiffness: 300 } : undefined,
  });

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {animated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.3] }}
          transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
          className="absolute inset-[-8px] rounded-2xl"
          style={{ background: 'radial-gradient(circle, oklch(0.73 0.15 215 / 0.42), transparent 70%)' }}
        />
      )}

      <svg viewBox="0 0 56 56" width={size} height={size} fill="none" className="relative z-10">
        <motion.rect
          x="3" y="3" width="50" height="50" rx="14"
          fill="url(#logoGradient)"
          initial={animated ? { opacity: 0, scale: 0.6 } : undefined}
          animate={animated ? { opacity: 1, scale: 1 } : undefined}
          transition={animated ? { duration: 0.5, type: 'spring', stiffness: 250 } : undefined}
          style={{ transformOrigin: 'center' }}
        />
        <defs>
          <linearGradient id="logoGradient" x1="8" y1="6" x2="46" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="oklch(0.75 0.15 215)" />
            <stop offset="1" stopColor="oklch(0.8 0.12 160)" />
          </linearGradient>
        </defs>
        <motion.rect
          x="6" y="6" width="44" height="44" rx="11"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.15" fill="none"
          variants={animated ? draw : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
          custom={0.3}
        />
        <motion.path
          d="M15 20 L10 28 L15 36"
          stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          strokeOpacity="0.3" fill="none"
          variants={animated ? draw : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
          custom={0.6}
        />
        <motion.path
          d="M41 20 L46 28 L41 36"
          stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          strokeOpacity="0.3" fill="none"
          variants={animated ? draw : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
          custom={0.6}
        />
        <motion.path
          d="M22 40 L22 16 L32 16 C36.4 16 40 18.8 40 23 C40 27.2 36.4 30 32 30 L22 30"
          stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          variants={animated ? draw : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
          custom={0.8}
        />
        <motion.path
          d="M30 30 L39 40"
          stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          variants={animated ? draw : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
          custom={1.4}
        />
        <motion.circle
          cx="43" cy="15" r="2"
          fill="white" fillOpacity="0.5"
          {...fadeIn(1.8)}
        />
      </svg>
    </div>
  );
}
