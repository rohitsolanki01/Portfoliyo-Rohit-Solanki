import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: 'StackMeet',
    emoji: '🤝',
    color: '#22d3ee',
    description: 'A developer networking platform where engineers showcase their stack, discover collaborators, connect, and chat in real time.',
    highlights: [
      'JWT cookie auth, protected/public routing, and secure password reset flow',
      'Explore feed with filters, connection requests/reviews, and accepted-connections graph',
      '1:1 realtime chat + notifications using Socket.IO with HTTP fallback support',
    ],
    tech: ['React 19', 'Vite', 'Redux Toolkit', 'Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'Socket.IO', 'Cloudinary', 'JWT'],
    github: 'https://github.com/rohitsolanki01',
    live: 'https://www.stackmeet.tech/',
    screenshot: '/images/projects/stackmeet.png',
  },
  {
    title: 'Tranquvest',
    emoji: '💵',
    color: '#fb923c',
    description: 'A full-stack trading platform that allows users to buy and sell real stocks at live market prices with real-time market feeds.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Chart.js', 'Google Auth'],
    github: 'https://github.com/rohitsolanki01/Tranquvest',
    live: 'https://treding-app-tranquvest.vercel.app/',
    screenshot: '/images/projects/tranquvest.png',
  },
  {
    title: 'Nestigo',
    emoji: '🌍',
    color: '#34d399',
    description: 'A comprehensive vacation rental platform connecting travelers with unique accommodations worldwide. Features secure booking and host management.',
    tech: ['MongoDB', 'Express', 'EJS', 'Node.js', 'JWT', 'Bootstrap'],
    github: 'https://github.com/rohitsolanki01/Nestigo',
    live: 'https://nestigo.onrender.com/',
    screenshot: '/images/projects/nestigo.png',
  },
  {
    title: 'Weather Dashboard',
    emoji: '🌤️',
    color: '#38bdf8',
    description: 'Real-time weather application with dynamic backgrounds and detailed forecasts using OpenWeather API.',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Responsive'],
    github: 'https://github.com/rohitsolanki01/Weather_App-',
    live: null,
    screenshot: null,
  },
  {
    title: 'ShortIt',
    emoji: '🔗',
    color: '#c084fc',
    description: 'A sleek URL shortening service with dual API support for instant short links and click analytics.',
    tech: ['React', 'Tailwind CSS', 'API Integration'],
    github: 'https://github.com/rohitsolanki01/ShortIt',
    live: 'https://short-it-kappa.vercel.app/',
    screenshot: '/images/projects/shortit.png',
  },
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-14 sm:py-18 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="section-badge">Featured Projects</span>
          <h2 className="section-title max-w-4xl">
            Design Brands That <span className="gradient-text">Speak To Audiences</span>
          </h2>
          <p className="section-copy text-sm sm:text-base">Each product is crafted with strong visual direction and practical engineering behind the scenes.</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10"
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
          variants={
            prefersReducedMotion
              ? undefined
              : {
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
                }
          }
        >
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
              className="group reference-panel rounded-3xl overflow-hidden flex flex-col">

              {p.screenshot ? (
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary/20 border-b border-white/10">
                  <img
                    src={p.screenshot}
                    alt={`${p.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                    <span className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                </div>
              ) : (
                <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-2.5 sm:pb-3 bg-black/25 border-b border-white/10">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                    <span className="w-2 h-2 rounded-full bg-green-400/70" />
                    <span className="ml-2 text-[9px] text-muted-foreground/40 font-mono truncate">{p.title.toLowerCase()}</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] leading-relaxed space-y-0.5">
                    <p className="text-primary">$ npm start</p>
                    <p className="text-green-400">Compiled successfully ✓</p>
                    <p className="text-cyan-400">Server running...</p>
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl">{p.emoji}</span>
                  <h3 className="text-base sm:text-lg font-bold font-[Sora] text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>

                {p.highlights && (
                  <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-muted-foreground/90">
                    {p.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-3 sm:mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-md bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-white/10">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 border-t border-white/10">
                  <div className="flex gap-3">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                        <FiGithub size={14} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  {(p.live || p.github) && (
                    <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] sm:text-xs font-medium text-muted-foreground hover:text-primary group-hover:text-primary transition-colors uppercase tracking-[0.08em]">
                      Explore <FiArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-7">
          <a href="#contact" className="accent-link">Load More</a>
        </div>
      </div>
    </section>
  );
}
