import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

function IntroScreen({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3200);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * (60 + i * 30)],
            y: [0, -(80 + i * 20)],
          }}
          transition={{ delay: 1 + i * 0.2, duration: 2, ease: 'easeOut' }}
          style={{ left: `${40 + i * 4}%`, top: '55%' }}
        />
      ))}

      <div className="text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.68 0.18 275 / 0.5), transparent 65%)' }}
        />
        <motion.div initial={{ opacity: 0, scale: 0.5, rotateY: -30 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 180 }}
          className="mx-auto mb-6 relative">
          <Logo size={80} animated />
        </motion.div>
        <div className="flex justify-center gap-[2px] mb-1">
          {'Rohit Solanki'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.04, duration: 0.3 }}
              className="text-xl font-bold font-[Outfit] tracking-tight text-foreground"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          className="text-[11px] tracking-[3px] uppercase text-muted-foreground/60 font-medium">Full Stack Developer</motion.p>
        <motion.div className="mt-6 w-52 h-[2px] bg-border/30 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 2.0 }}>
          <motion.div className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, oklch(0.68 0.18 275), oklch(0.72 0.16 300), oklch(0.68 0.18 275))' }}
            initial={{ width: '0%' }} animate={{ width: '100%' }}
            transition={{ delay: 2.2, duration: 1, ease: [0.65, 0, 0.35, 1] }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const h = () => { const d = document.documentElement.scrollHeight - window.innerHeight; setP(d > 0 ? (window.scrollY / d) * 100 : 0); };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]"><div className="h-full bg-primary transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <div className="grid-bg" />

      <AnimatePresence>{intro && <IntroScreen onComplete={() => setIntro(false)} />}</AnimatePresence>

      <ScrollProgress />
      <Navbar darkMode={dark} setDarkMode={setDark} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Testimonials />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
