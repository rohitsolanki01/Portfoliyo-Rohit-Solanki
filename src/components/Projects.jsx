import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    year: '2026',
    title: 'StackMeet',
    tagline: 'Developer networking platform with realtime collaboration',
    description: 'A secure platform where engineers showcase their skills, discover collaborators, and collaborate in real time with instant messaging.',
    problem: 'Developers struggle to find vetted collaborators and maintain meaningful professional connections. Traditional networking platforms lack technical depth and real-time collaboration features.',
    approach: 'Built a profile-driven discovery platform with connection requests, real-time chat, and protected routes. Implemented JWT cookie authentication with secure password reset, feed filters, and connection graph tracking.',
    result: 'Created a full-featured networking platform enabling developers to showcase stacks, discover collaborators by technology match, send connection requests, and chat instantly with HTTP fallback for reliability.',
    tech: ['React 19', 'Vite', 'Redux Toolkit', 'Node.js', 'Express 5', 'MongoDB', 'Socket.IO', 'JWT', 'Cloudinary'],
    gradient: 'from-violet-600 via-purple-600 to-cyan-500',
    emoji: '🤝',
    metrics: [{ label: 'Realtime', value: 'Socket.IO' }, { label: 'Auth', value: 'JWT Cookies' }, { label: 'Routes', value: 'Protected' }],
    liveUrl: 'https://www.stackmeet.tech/',
    sourceUrl: 'https://github.com/rohitsolanki01/stackmeet',
  },
  {
    year: '2025',
    title: 'Tranquvest',
    tagline: 'Full-stack trading platform with live market feeds',
    description: 'A polished trading interface combining real-time market data, interactive charts, and a complete buy/sell workflow with authentication.',
    problem: 'Users need a responsive trading interface that displays live market prices, visualizes trends, and enables quick transactions—all with clean, modern UX.',
    approach: 'Built a full-stack application with React frontend for responsive UI, Express backend for market data aggregation, Chart.js for data visualization, and Google Auth for seamless access.',
    result: 'Delivered a professional trading platform demonstrating real-time UI updates, backend data flow architecture, finance-style interactions, and user authentication at scale.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Google Auth', 'Vercel'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    emoji: '💵',
    metrics: [{ label: 'Data', value: 'Live Market' }, { label: 'Charts', value: 'Real-time' }, { label: 'Auth', value: 'Google' }],
    liveUrl: 'https://treding-app-tranquvest.vercel.app/',
    sourceUrl: 'https://github.com/rohitsolanki01/Treding---app---Tranquvest',
  },
  {
    year: '2025',
    title: 'Nestigo',
    tagline: 'Global vacation rental and booking platform',
    description: 'Complete rental marketplace connecting travelers with unique accommodations worldwide, featuring dual-role authentication and secure transaction flows.',
    problem: 'Travelers need a reliable platform to discover and book rentals with clear host information and secure payment. Hosts need tools to manage listings and bookings efficiently.',
    approach: 'Designed a role-aware architecture with separate host and traveler flows. Implemented JWT authentication, listing management, secure booking workflows, and payment integration.',
    result: 'Launched a full-featured vacation rental platform demonstrating complex user roles, authentication systems, booking state management, and a complete end-to-end booking experience.',
    tech: ['MongoDB', 'Express', 'Node.js', 'EJS', 'JWT', 'Bootstrap', 'Render'],
    gradient: 'from-indigo-600 via-violet-600 to-fuchsia-500',
    emoji: '🌍',
    metrics: [{ label: 'Roles', value: 'Host + Traveler' }, { label: 'Security', value: 'JWT' }, { label: 'Workflow', value: 'Booking' }],
    liveUrl: 'https://nestigo.onrender.com/',
    sourceUrl: 'https://github.com/rohitsolanki01/Nestigo',
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
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">Featured Case Studies</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
              Selected{' '}
              <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
                work
              </span>{' '}
              I am proud of.
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
            className="fixed inset-0 z-100 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 md:p-6 overflow-y-auto"
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
                <div className="flex items-center gap-3 mb-6 text-xs font-mono text-white/50">
                  <span>{active.year}</span>
                  <span>·</span>
                  <span className="text-purple-400">Case Study</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">{active.title}</h3>
                <p className="text-white/60 mb-8 text-sm">{active.tagline}</p>

                {/* Case Study Sections */}
                <div className="space-y-6 mb-10">
                  {/* Problem */}
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-purple-400 mb-2">Problem</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{active.problem}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-2">Approach</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{active.approach}</p>
                  </div>

                  {/* Result */}
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-2">Result</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{active.result}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {active.metrics.map((m) => (
                    <div key={m.label} className="glass rounded-2xl p-4">
                      <div className="font-display text-lg md:text-xl font-bold gradient-text">{m.value}</div>
                      <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {active.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-md glass text-white/70 font-mono">{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 flex-wrap">
                  {active.liveUrl && active.liveUrl !== '#' ? (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                      data-cursor="hover"
                    >
                      View Live
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
                      Source Code
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