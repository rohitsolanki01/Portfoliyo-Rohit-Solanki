import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => {
    if (to >= 1000) return (v / 1000).toFixed(v >= 1000 ? 1 : 0) + 'M'
    return Math.floor(v)
  })
  const display = useTransform(count, (v) => {
    if (to >= 1000000) return (v / 1000000).toFixed(1)
    if (to >= 1000) return Math.floor(v / 1000)
    return Math.floor(v)
  })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.2, ease: [0.25, 1, 0.5, 1] })
      return () => controls.stop()
    }
  }, [inView, to, count])

  return (
    <span ref={ref} className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
      <motion.span className="gradient-text">{display}</motion.span>
      <span className="gradient-text">{suffix}</span>
    </span>
  )
}

const stats = [
  { value: 5, suffix: '+', label: 'Projects Delivered', sub: 'Across 4 continents' },
  { value: 99, suffix: '%', label: 'On-Time Delivery', sub: 'Consistently shipped' },
  { value: 20000000, suffix: '+', label: 'Users Reached', sub: 'Through products I built' },
    { value: 4.9, suffix: '/5', label: 'Average Rating', sub: 'From clients and users' },
]

export default function Stats() {
  return (
    <section className="relative bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-3 font-mono">Numbers</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
            Receipts, not{' '}
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
              promises
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur-sm md:p-8 dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/8 to-cyan-400/8 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-3 text-sm font-medium text-neutral-900 dark:text-white">{s.label}</div>
                <div className="mt-1 text-xs text-neutral-500 dark:text-white/50">{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}