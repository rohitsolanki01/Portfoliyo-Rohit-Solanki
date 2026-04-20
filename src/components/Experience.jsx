import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2025 — 2026',
    role: 'Software Development Intern',
    company: 'Codec Technologies',
    description:
      'Completed a 3-month internship from December 2025 to February 2026, building responsive UI with HTML, CSS, JavaScript, and React, plus backend features with Node.js and Express.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
  },
]

export default function Experience() {
  return (
    <section className="relative bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-blue-400">04</span>
            <span className="h-px w-8 bg-blue-400/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-white/50">Journey</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
            My professional{' '}
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
              journey
            </span>
            {' '}so far.
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute bottom-2 left-0 top-2 w-px bg-linear-to-b from-purple-500/40 via-blue-500/40 to-cyan-400/40 md:left-45" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 pl-8 md:pl-0 pb-14 last:pb-0 group"
            >
              <div className="pt-1 font-mono text-xs text-neutral-500 md:w-35 md:shrink-0 md:text-right dark:text-white/50">
                {item.year}
              </div>

              {/* dot */}
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-linear-to-br from-purple-400 to-cyan-400 ring-4 ring-white transition-transform group-hover:scale-150 dark:ring-ink-950 md:left-44" />

              <div className="flex-1 rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur-sm transition-colors group-hover:bg-white dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/4">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-white">{item.role}</h3>
                  <span className="text-sm text-neutral-500 dark:text-white/60">@ {item.company}</span>
                </div>
                <p className="mb-4 leading-relaxed text-neutral-600 dark:text-white/65">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 bg-white/80 px-2.5 py-0.5 font-mono text-[11px] text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}