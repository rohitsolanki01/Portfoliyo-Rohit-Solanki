import { motion } from 'framer-motion'

const quotes = [
  {
    quote: "Rohit is one of those rare engineers who cares equally about pixels and performance. He raised our team's bar overnight.",
    name: 'Sarah Chen',
    role: 'VP Engineering, Pulse Labs',
    avatar: 'SC',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    quote: "Shipped a complex Web3 integration in two weeks that our previous team couldn't finish in two months. Exceptional work.",
    name: 'Marcus Lee',
    role: 'Founder, NeonSwap',
    avatar: 'ML',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    quote: "The kind of developer every PM dreams about — autonomous, communicative, and his code reviews are legendary.",
    name: 'Priya Sharma',
    role: 'Senior PM, Orbit Studio',
    avatar: 'PS',
    gradient: 'from-cyan-400 to-emerald-400',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3 font-mono">Praise</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
            What people{' '}
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
              say
            </span>
            .
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-3xl border border-black/10 bg-white/80 p-7 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <svg className="mb-4 h-8 w-8 text-neutral-300 dark:text-white/15" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.333 8h4v8c0 3.315-2.685 6-6 6v-2.667c1.84 0 3.333-1.493 3.333-3.333H6.667V8h2.666zm12 0h4v8c0 3.315-2.685 6-6 6v-2.667c1.84 0 3.334-1.493 3.334-3.333h-4V8h2.666z" />
              </svg>
              <p className="mb-6 flex-1 leading-relaxed text-neutral-700 dark:text-white/80">"{q.quote}"</p>
              <div className="flex items-center gap-3 border-t border-black/10 pt-4 dark:border-white/10">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br ${q.gradient} text-xs font-bold text-black`}>
                  {q.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">{q.name}</div>
                  <div className="text-xs text-neutral-500 dark:text-white/50">{q.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}