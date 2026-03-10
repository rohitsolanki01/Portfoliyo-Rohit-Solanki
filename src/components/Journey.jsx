import { motion } from 'framer-motion';
import { FiZap, FiCode, FiStar } from 'react-icons/fi';

const milestones = [
  {
    year: '2024',
    title: 'The Spark',
    desc: 'Started my journey into web development, mastering HTML, CSS, and JavaScript fundamentals. Built my first static sites and fell in love with the craft.',
    icon: FiZap,
    color: '#38bdf8',
  },
  {
    year: '2025',
    title: 'Full Stack Evolution',
    desc: 'Deep dived into the MERN stack and built my first production-ready applications — Tranquvest and Nestigo. Learned backend architecture, auth, and database design.',
    icon: FiCode,
    color: '#a78bfa',
  },
  {
    year: '2026',
    title: 'Advanced Engineering',
    desc: 'Focusing on system design, performance optimization, TypeScript, Docker, and advanced animations. Building a strong portfolio to land that first dream role.',
    icon: FiStar,
    color: '#34d399',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2">
            Learning <span className="gradient-text">Path</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">My growth as a developer — from first lines of code to full-stack applications.</p>
        </motion.div>
<div className="relative mt-10 sm:mt-14">
<div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

          <div className="space-y-6 sm:space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-4 sm:gap-6 pl-14 sm:pl-16"
              >
<motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute left-0 flex w-10 h-10 sm:w-12 sm:h-12 rounded-xl items-center justify-center border border-border/50 bg-card shadow-md"
                  style={{ boxShadow: `0 0 20px ${m.color}15` }}
                >
                  <m.icon size={18} style={{ color: m.color }} />
                </motion.div>
<div className="flex-1 rounded-xl border border-border/50 bg-card/30 p-4 sm:p-5 hover:border-primary/20 transition-colors group">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-border/50 text-muted-foreground" style={{ color: m.color, borderColor: `${m.color}30` }}>
                      {m.year}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-[Outfit] text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
