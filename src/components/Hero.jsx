import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const techIcons = [
  { icon: FaReact, label: 'React', color: '#61DAFB' },
  { icon: FaNodeJs, label: 'Node.js', color: '#339933' },
  { icon: FaJs, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiExpress, label: 'Express', color: '#888' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: FaGitAlt, label: 'Git', color: '#F05032' },
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center">
<div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-primary/3 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20 pt-24 sm:pt-32">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-3 space-y-5 sm:space-y-6 text-center lg:text-left">
<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg">
              Hi there! 🤟
            </motion.p>
<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-[Outfit] tracking-tight leading-[1.1]">
              I&apos;m <span className="gradient-text">Rohit Solanki</span>,
            </motion.h1>
<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              A <strong className="text-foreground">Full Stack Developer</strong> &amp;{' '}
              <TypeAnimation
                sequence={['MERN Stack Developer', 2000, 'React Developer', 2000, 'Backend Engineer', 2000, 'Problem Solver', 2000]}
                wrapper="strong" speed={50} repeat={Infinity} className="text-foreground"
              />{' '}
              who loves building intuitive, clean and modern web applications.
            </motion.p>
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('contact')}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all text-sm">
                Get in Touch
              </motion.button>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#"
                className="group px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all flex items-center gap-2 text-sm">
                <HiDownload size={16} /> Resume
              </motion.a>
            </motion.div>
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
              className="flex justify-center lg:justify-start gap-3 pt-3">
              {[
                { icon: FiGithub, href: 'https://github.com/rohitsolanki01', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rohit--solanki/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:rohitsolanki0473@gmail.com', label: 'Email' },
              ].map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={s.label}>
                  <s.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-2 flex justify-center items-center relative order-first lg:order-last">
            <div className="absolute w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-primary/8 rounded-full blur-[100px] animate-pulse-soft" />

            <div className="relative">
              <div className="absolute inset-[-20px] sm:inset-[-30px] rounded-full border border-primary/8" />
              <div className="absolute inset-[-40px] sm:inset-[-60px] rounded-full border border-primary/5 hidden sm:block" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20px] sm:inset-[-30px] rounded-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary/70 shadow-lg shadow-primary/30" />
              </motion.div>

              <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/15 shadow-2xl shadow-primary/10">
                <img src="/images/avatar.png" alt="Rohit Solanki" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 sm:-right-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-card border border-border/50 shadow-lg text-[10px] sm:text-xs font-medium text-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="hidden xs:inline">Available for work</span>
                <span className="xs:hidden">Open to work</span>
              </motion.div>

              <motion.div animate={{ y: [3, -5, 3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 sm:-top-4 -left-3 sm:-left-6 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-card border border-border/50 shadow-lg text-[10px] sm:text-xs font-mono text-muted-foreground">
                &lt;Developer /&gt;
              </motion.div>
            </div>
          </motion.div>
        </div>
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-border/50">
          <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3 sm:mb-4 text-center lg:text-left">Tech Stack & Tools</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
            {techIcons.map((t) => (
              <motion.div key={t.label} whileHover={{ y: -3, scale: 1.1 }}
                className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default group"
                title={t.label}>
                <t.icon size={18} style={{ color: t.color }} className="opacity-60 group-hover:opacity-100 transition-opacity sm:text-[22px]" />
                <span className="text-[10px] sm:text-xs font-medium">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
