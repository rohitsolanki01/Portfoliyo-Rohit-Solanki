import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: 'Tranquvest',
    emoji: '💵',
    color: '#fb923c',
    description: 'A full-stack trading platform that allows users to buy and sell real stocks at live market prices with real-time market feeds.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Chart.js', 'Google Auth'],
    github: 'https://github.com/rohitsolanki01/Tranquvest',
    live: 'https://treding-app-tranquvest.vercel.app/',
    terminal: [
      { text: '$ npm run dev', cls: 'text-primary' },
      { text: '> Tranquvest trading server...', cls: 'text-green-400' },
      { text: 'MongoDB connected ✓', cls: 'text-green-400' },
      { text: 'Live market feed active ✓', cls: 'text-green-400' },
      { text: 'Server running on :5000', cls: 'text-cyan-400' },
    ],
  },
  {
    title: 'Nestigo',
    emoji: '🌍',
    color: '#34d399',
    description: 'A comprehensive vacation rental platform connecting travelers with unique accommodations worldwide. Features secure booking and host management.',
    tech: ['MongoDB', 'Express', 'EJS', 'Node.js', 'JWT', 'Bootstrap'],
    github: 'https://github.com/rohitsolanki01/Nestigo',
    live: 'https://nestigo.onrender.com/',
    terminal: [
      { text: '$ node app.js', cls: 'text-primary' },
      { text: 'Express server started ✓', cls: 'text-green-400' },
      { text: 'MongoDB Atlas connected ✓', cls: 'text-green-400' },
      { text: 'JWT middleware loaded ✓', cls: 'text-green-400' },
      { text: 'Listening on port 3000', cls: 'text-cyan-400' },
    ],
  },
  {
    title: 'Weather Dashboard',
    emoji: '🌤️',
    color: '#38bdf8',
    description: 'Real-time weather application with dynamic backgrounds and detailed forecasts using OpenWeather API.',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Responsive'],
    github: 'https://github.com/rohitsolanki01/Weather_App-',
    live: null,
    terminal: [
      { text: '$ npm start', cls: 'text-primary' },
      { text: 'React app compiled ✓', cls: 'text-green-400' },
      { text: 'OpenWeather API ready ✓', cls: 'text-green-400' },
      { text: '> Fetching: Ahmedabad, IN', cls: 'text-cyan-400' },
      { text: '  Temp: 32°C · Clear ☀️', cls: 'text-muted-foreground' },
    ],
  },
  {
    title: 'ShortIt',
    emoji: '🔗',
    color: '#c084fc',
    description: 'A sleek URL shortening service with dual API support for instant short links and click analytics.',
    tech: ['React', 'Tailwind CSS', 'API Integration'],
    github: 'https://github.com/rohitsolanki01/ShortIt',
    live: 'https://short-it-kappa.vercel.app/',
    terminal: [
      { text: '$ npm run build', cls: 'text-primary' },
      { text: '✓ Compiled successfully', cls: 'text-green-400' },
      { text: '✓ Deployed to Vercel', cls: 'text-green-400' },
      { text: '> POST /api/shorten', cls: 'text-cyan-400' },
      { text: '  Output: shrt.it/xK92p', cls: 'text-amber-400' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Real-world applications I&apos;ve built and deployed.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all flex flex-col">
<div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-2.5 sm:pb-3 bg-background/50 border-b border-border/30">
                <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-2 text-[9px] sm:text-[10px] text-muted-foreground/40 font-mono truncate">{p.title.toLowerCase()}</span>
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] leading-relaxed space-y-0.5 overflow-x-auto">
                  {p.terminal.map((line, li) => (
                    <p key={li} className={`whitespace-nowrap ${line.cls || 'text-muted-foreground/60'}`}>{line.text}</p>
                  ))}
                </div>
              </div>
<div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl">{p.emoji}</span>
                  <h3 className="text-base sm:text-lg font-bold font-[Outfit] text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
<div className="flex flex-wrap gap-1 sm:gap-1.5 mt-3 sm:mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-md bg-primary/8 text-primary/80 border border-primary/10">{t}</span>
                  ))}
                </div>
<div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 border-t border-border/30">
                  <div className="flex gap-3">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                      <FiGithub size={14} />
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] sm:text-xs font-medium text-muted-foreground hover:text-primary group-hover:text-primary transition-colors">
                    {p.live ? 'Live demo' : 'View code'} <FiArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
