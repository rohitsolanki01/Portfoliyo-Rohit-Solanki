import React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export const Circle = ({ className, idx, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.2, 0.55, 0.2],
        scale: [0.985, 1.015, 0.985],
      }}
      transition={{
        delay: idx * 0.08,
        duration: 5.2,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      }}
      className={twMerge(
        'absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200',
        className,
      )}
    />
  )
}

export const Radar = ({ className }) => {
  const circles = new Array(8).fill(1)

  return (
    <div
      className={twMerge(
        'relative flex h-20 w-20 items-center justify-center rounded-full',
        className,
      )}
    >
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(20deg); }
          to   { transform: rotate(380deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 10s linear infinite;
        }
      `}</style>

      <div
        style={{ transformOrigin: 'right center' }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-1.25 w-100 items-end justify-center overflow-hidden bg-transparent"
      >
        <div className="relative z-40 h-px w-full bg-linear-to-r from-transparent via-sky-500 to-transparent" />
      </div>

      {circles.map((_, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: `1px solid rgba(71, 85, 105, ${1 - (idx + 1) * 0.1})`,
          }}
          key={`circle-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  )
}

export const IconContainer = ({ icon, text, delay, scanOffset = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: delay ?? 0 }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="relative z-50 flex flex-col items-center justify-center space-y-2"
    >
      <motion.div
        animate={{
          y: [0, -2, 0],
          scale: [1, 1, 1.05, 1],
          borderColor: [
            'rgba(51, 65, 85, 1)',
            'rgba(51, 65, 85, 1)',
            'rgba(34, 211, 238, 0.72)',
            'rgba(51, 65, 85, 1)',
          ],
        }}
        transition={{
          duration: 12,
          delay: scanOffset,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
          times: [0, 0.72, 0.82, 1],
        }}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 shadow-inner"
      >
        <motion.span
          aria-hidden
          animate={{ opacity: [0, 0, 0.65, 0], scale: [1, 1, 1.3, 1.55] }}
          transition={{
            duration: 12,
            delay: scanOffset,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
            times: [0, 0.73, 0.83, 1],
          }}
          className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-300"
        />
        {icon}
      </motion.div>

      <motion.div
        className="hidden rounded-md px-2 py-1 md:block"
        animate={{
          opacity: [0.72, 0.72, 0.95, 0.72],
        }}
        transition={{
          duration: 12,
          delay: scanOffset,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
          times: [0, 0.72, 0.82, 1],
        }}
      >
        <div className="text-center text-xs font-bold text-slate-300">{text}</div>
      </motion.div>
    </motion.div>
  )
}
