import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [36, -36])

  return (
    <section id="about" ref={ref} className="relative bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid items-start gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-4 md:sticky md:top-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-violet-500">01</span>
              <span className="h-px w-8 bg-violet-400/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-white/45">About</span>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white">
              Engineering at the intersection of{' '}
              <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
                design
              </span>{' '}
              and{' '}
              <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
                scale
              </span>
              .
            </h2>
          </div>

          <div className="space-y-6 text-lg font-light leading-relaxed text-neutral-700 md:col-span-8 md:text-xl dark:text-white/70">
            <p>
              I am a full stack developer focused on building products that feel premium and perform like systems software.
              My obsession is the same from design to deployment: clarity, speed, and durable architecture.
            </p>
            <p>
              I have shipped Web3 and SaaS products, led critical frontend workstreams, and built APIs that stay stable
              under real user load.
            </p>
            <p className="text-neutral-500 dark:text-white/55">
              I care deeply about interaction quality, developer experience, and measurable business outcomes.
            </p>

            <div className="flex flex-wrap gap-2 pt-6">
              {['React', 'Node.js', 'Web3', 'System Design', 'Performance', 'DX'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 text-xs text-neutral-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                >
                  {tag}
                </span>
              ))}
            </div>

  
          </div>
        </motion.div>
      </div>
    </section>
  )
}