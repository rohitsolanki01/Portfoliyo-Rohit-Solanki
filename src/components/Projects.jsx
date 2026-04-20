import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    year: '2026',
    title: 'StackMeet',
    tagline: 'A developer networking platform with realtime collaboration',
    description: 'A platform where engineers showcase their stack, discover collaborators, connect, and chat in real time. Includes JWT cookie auth, protected/public routes, secure password reset flow, explore feed filters, connection requests, accepted-connections graph, and Socket.IO chat with HTTP fallback.',
    tech: ['React 19', 'Vite', 'Redux Toolkit', 'Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'Socket.IO', 'Cloudinary', 'JWT'],
    gradient: 'from-violet-600 via-purple-600 to-cyan-500',
    emoji: '🤝',
    metrics: [{ label: 'Auth', value: 'JWT + Cookies' }, { label: 'Chat', value: 'Realtime 1:1' }, { label: 'Routing', value: 'Protected/Public' }],
    liveUrl: 'https://www.stackmeet.tech/',
    sourceUrl: 'https://github.com/rohitsolanki01/stackmeet',
  },
  {
    year: '2025',
    title: 'Tranquvest',
    tagline: 'A full-stack trading platform with live market feeds',
    description: 'A full-stack trading platform that allows users to buy and sell real stocks at live market prices with realtime market feeds.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Chart.js', 'Google Auth'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    emoji: '💵',
    metrics: [{ label: 'Experience', value: 'Full-stack' }, { label: 'Prices', value: 'Live Market' }, { label: 'Charts', value: 'Realtime' }],
    liveUrl: 'https://treding-app-tranquvest.vercel.app/',
    sourceUrl: 'https://github.com/rohitsolanki01/Treding---app---Tranquvest',
  },
  {
    year: '2025',
    title: 'Nestigo',
    tagline: 'A global vacation rental and booking platform',
    description: 'A comprehensive vacation rental platform connecting travelers with unique accommodations worldwide, with secure booking and host management.',
    tech: ['MongoDB', 'Express', 'EJS', 'Node.js', 'JWT', 'Bootstrap'],
    gradient: 'from-indigo-600 via-violet-600 to-fuchsia-500',
    emoji: '🌍',
    metrics: [{ label: 'Platform', value: 'Rental + Booking' }, { label: 'Security', value: 'JWT Auth' }, { label: 'Roles', value: 'Host + Traveler' }],
    liveUrl: 'https://nestigo.onrender.com/',
    sourceUrl: 'https://github.com/rohitsolanki01/Nestigo',
  },
  {
    year: '2024',
    title: 'Weather Dashboard',
    tagline: 'Realtime weather app with dynamic visual feedback',
    description: 'Realtime weather application with dynamic backgrounds and detailed forecasts powered by the OpenWeather API.',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Responsive UI'],
    gradient: 'from-sky-500 via-cyan-500 to-blue-600',
    emoji: '🌤️',
    metrics: [{ label: 'Data', value: 'Live Weather' }, { label: 'UX', value: 'Dynamic Backgrounds' }, { label: 'Design', value: 'Responsive' }],
    liveUrl: '#',
    sourceUrl: 'https://github.com/rohitsolanki01/Weather_App-',
  },
  {
    year: '2024',
    title: 'ShortIt',
    tagline: 'A sleek URL shortener with analytics-ready link flows',
    description: 'A URL shortening service with dual API support for instant short links and click analytics.',
    tech: ['React', 'Tailwind CSS', 'API Integration'],
    gradient: 'from-orange-500 via-amber-500 to-yellow-400',
    emoji: '🔗',
    metrics: [{ label: 'Links', value: 'Instant Shortening' }, { label: 'Insights', value: 'Click Analytics' }, { label: 'Support', value: 'Dual API' }],
    liveUrl: 'https://short-it-kappa.vercel.app/',
    sourceUrl: 'https://github.com/rohitsolanki01/ShortIt',
  },
]

function ProjectCard({ p, i, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: (i % 2) * 0.15 }}
      onClick={() => onOpen(p)}
      className="group relative cursor-pointer"
      data-cursor="hover"
    >
      <div className="relative glass rounded-3xl overflow-hidden border-gradient transition-all duration-500 group-hover:-translate-y-2">
        <div className={`relative h-64 md:h-72 bg-linear-to-br ${p.gradient} overflow-hidden noise`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 dot-grid opacity-20" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-8xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {p.emoji}
          </motion.div>

          <div className="absolute top-5 left-5 glass-strong rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
            {p.year}
          </div>
          <div className="absolute top-5 right-5 w-9 h-9 glass-strong rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-45">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </div>

          {/* shine */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="p-7">
          <h3 className="font-display text-2xl font-bold tracking-tight mb-1.5 group-hover:gradient-text transition-all">
            {p.title}
          </h3>
          <p className="text-sm text-white/60 mb-5">{p.tagline}</p>

          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-md glass text-white/60 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-purple-400">03</span>
              <span className="h-px w-8 bg-purple-400/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">Selected Work</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
              Projects I am{' '}
              <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
                proud
              </span>{' '}
              of.
            </h2>
          </div>
          <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white transition-colors flex items-center gap-2 font-mono" data-cursor="hover">
            All projects
            <span>→</span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-100 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong rounded-3xl max-w-3xl w-full overflow-hidden border-gradient my-10"
            >
              <div className={`h-72 md:h-80 bg-linear-to-br ${active.gradient} relative flex items-center justify-center noise`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 dot-grid opacity-25" />
                <span className="text-9xl relative">{active.emoji}</span>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:rotate-90 transition-transform"
                data-cursor="hover"
              >
                ✕
              </button>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4 text-xs font-mono text-white/50">
                  <span>{active.year}</span>
                  <span>·</span>
                  <span>Case Study</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">{active.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">{active.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {active.metrics.map((m) => (
                    <div key={m.label} className="glass rounded-2xl p-4">
                      <div className="font-display text-2xl font-bold gradient-text">{m.value}</div>
                      <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {active.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-md glass text-white/70 font-mono">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  {active.liveUrl && active.liveUrl !== '#' ? (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                      data-cursor="hover"
                    >
                      Visit live
                      <span>→</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 text-black text-sm font-medium cursor-not-allowed">
                      Live soon
                    </span>
                  )}

                  {active.sourceUrl && active.sourceUrl !== '#' ? (
                    <a
                      href={active.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong text-sm font-medium hover:bg-white/10 transition-colors"
                      data-cursor="hover"
                    >
                      Source code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong text-sm font-medium text-white/60 cursor-not-allowed">
                      Private code
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}