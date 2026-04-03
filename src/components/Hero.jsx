import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
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
  const prefersReducedMotion = useReducedMotion();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.35 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.35 });

  const bgX = useTransform(sx, [-1, 1], [-26, 26]);
  const bgY = useTransform(sy, [-1, 1], [-20, 20]);
  const bgXAlt = useTransform(bgX, (v) => v * -0.75);
  const bgYAlt = useTransform(bgY, (v) => v * -0.75);
  const bgXThird = useTransform(bgX, (v) => v * 0.6);
  const bgYThird = useTransform(bgY, (v) => v * 0.6);
  const cardX = useTransform(sx, [-1, 1], [-12, 12]);
  const cardY = useTransform(sy, [-1, 1], [-10, 10]);

  const handlePointerMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    px.set(nx);
    py.set(ny);
  };

  const handlePointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  const staggerParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0.2 }
        : { staggerChildren: 0.11, delayChildren: 0.1 },
    },
  };

  const revealUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0.2 }
        : { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-10" onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div style={prefersReducedMotion ? undefined : { x: bgX, y: bgY }} className="absolute top-[-16%] left-[6%] w-[520px] h-[420px] bg-primary/20 rounded-full blur-[140px]" />
        <motion.div style={prefersReducedMotion ? undefined : { x: bgXAlt, y: bgYAlt }} className="absolute top-[18%] right-[10%] w-[420px] h-[360px] bg-accent/18 rounded-full blur-[120px]" />
        <motion.div style={prefersReducedMotion ? undefined : { x: bgXThird, y: bgYThird }} className="absolute bottom-[-20%] left-[20%] w-[540px] h-[420px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-14 sm:py-16">
        <div className="reference-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="spotlight-beam" />
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center relative z-10">
            <motion.div
              variants={staggerParent}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3 text-center lg:text-left"
            >
              <motion.h1 variants={revealUp} className="mt-4 text-[2.25rem] sm:text-[3.15rem] lg:text-[4rem] font-[Sora] font-semibold tracking-tight leading-[1.03]">
                From <em className="font-serif font-medium italic text-primary not-italic sm:italic">Sketch</em> to Scale
                <br /> I Build the Web You
                <span className="gradient-text"> Imagine</span>
              </motion.h1>

              <motion.p variants={revealUp} className="mt-4 text-sm sm:text-[0.96rem] text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Full Stack Developer and{' '}
                <TypeAnimation
                  sequence={['MERN Specialist', 1800, 'React Engineer', 1800, 'Backend Builder', 1800]}
                  wrapper="strong"
                  speed={50}
                  repeat={Infinity}
                  className="text-foreground"
                />{' '}
                shipping polished interfaces and stable APIs with measurable business impact.
              </motion.p>

              <motion.div variants={revealUp} className="mt-5 grid grid-cols-2 sm:flex gap-3 justify-center lg:justify-start">
                <div className="hero-stat"><strong>5+</strong><span>Projects Completed</span></div>
                <div className="hero-stat col-span-2 sm:col-span-1"><strong>100%</strong><span>Delivery Focus</span></div>
              </motion.div>

              <motion.div variants={revealUp} className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start items-center">
                <motion.button
                  onClick={() => scrollTo('projects')}
                  whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_16px_40px_-20px_rgba(37,187,149,0.8)]"
                >
                  View Projects
                </motion.button>
                <motion.a
                  whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  href="https://d8it4huxumps7.cloudfront.net/uploads/attachements/user-resumes/6996b7df96be1_Rohit_Solanki_Full_Stack_Developer.pdf" target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/15 bg-white/5 text-foreground hover:border-primary/40 transition-colors flex items-center gap-2">
                  <HiDownload size={15} /> Resume
                </motion.a>
              </motion.div>

              <motion.div variants={revealUp} className="mt-4 flex gap-2.5 justify-center lg:justify-start">
                {[
                  { icon: FiGithub, href: 'https://github.com/rohitsolanki01', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rohit--solanki/', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:rohitsolanki0473@gmail.com', label: 'Email' },
                ].map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.05 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                    className="p-2.5 rounded-lg border border-white/12 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={s.label}>
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="lg:col-span-2">
              <motion.div
                className="relative max-w-sm mx-auto"
                style={prefersReducedMotion ? undefined : { x: cardX, y: cardY }}
                animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
                transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute -inset-4 rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-primary/14 to-accent/10 blur-sm" />
                <div className="relative rounded-[1.6rem] overflow-hidden border border-white/16 bg-card/65 backdrop-blur-xl">
                  <img src="/images/avatar.png" alt="Rohit Solanki" className="w-full h-[390px] sm:h-[450px] object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-3 left-4 right-4 rounded-xl glass-panel px-4 py-3 text-xs">
                  <p className="text-muted-foreground">Focused on product quality, performance, and developer experience.</p>
                  <motion.button
                    onClick={() => scrollTo('contact')}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                    className="mt-2 px-3 py-1.5 rounded-md text-[11px] font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  >
                    Hire Me
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
          {techIcons.map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" title={t.label}>
              <t.icon size={18} style={{ color: t.color }} className="opacity-80" />
              <span className="text-xs font-medium">{t.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
