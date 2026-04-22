import React from 'react'
import { motion } from 'motion/react'

export const TestimonialsColumn = ({ className, testimonials, duration = 16, reverse = false }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{ animationDirection: reverse ? 'reverse' : 'normal', willChange: 'transform' }}
        className="flex flex-col gap-5 pb-5"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role, outcome }, i) => (
              <div
                className="group relative max-w-xs w-full overflow-hidden rounded-3xl border border-neutral-300/70 bg-[linear-gradient(180deg,#fffdf9_0%,#fff8ee_100%)] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/12 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] dark:shadow-[0_10px_24px_rgba(2,6,23,0.34)]"
                key={`${name}-${i}`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-br from-cyan-400/8 via-transparent to-violet-400/8" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-soft-light"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.65'/%3E%3C/svg%3E\")",
                    backgroundSize: '160px 160px',
                  }}
                />

                <div className="relative text-sm leading-relaxed text-neutral-700 dark:text-white/80">{text}</div>
                <div className="relative mt-3 inline-flex items-center rounded-full border border-cyan-400/35 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-cyan-700 dark:text-cyan-200">
                  {outcome}
                </div>
                <div className="relative mt-5 flex items-center gap-2.5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full border border-black/10 object-cover dark:border-white/10"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold tracking-tight leading-5 text-neutral-900 dark:text-white">{name}</div>
                    <div className="leading-5 text-xs opacity-70 tracking-tight text-neutral-600 dark:text-white/60">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
