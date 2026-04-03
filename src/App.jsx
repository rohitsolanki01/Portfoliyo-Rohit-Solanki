import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SiFigma, SiGithub, SiNetlify, SiVercel } from 'react-icons/si';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const h = () => { const d = document.documentElement.scrollHeight - window.innerHeight; setP(d > 0 ? (window.scrollY / d) * 100 : 0); };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]"><div className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function SectionDivider() {
  return (
    <div className="section-divider-wrap" aria-hidden="true">
      <div className="section-divider" />
    </div>
  );
}

function EntryCinematic({ onDone }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(onDone, prefersReducedMotion ? 900 : 2400);
    return () => clearTimeout(t);
  }, [onDone, prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
      transition={{ duration: prefersReducedMotion ? 0.25 : 0.65 }}
      className="fixed inset-0 z-[140] bg-[radial-gradient(circle_at_50%_8%,rgba(43,206,164,0.24),transparent_40%),linear-gradient(180deg,rgba(7,10,17,1),rgba(4,7,13,1))] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="text-center"
      >
        <Logo size={92} animated />
        <p className="mt-5 text-xl sm:text-2xl font-[Sora] font-semibold tracking-tight">Rohit Solanki</p>
        <p className="mt-1 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Full Stack Developer</p>
        <div className="mt-5 mx-auto w-44 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', repeat: prefersReducedMotion ? 0 : Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function BrandRibbon() {
  const prefersReducedMotion = useReducedMotion();
  const brands = [
    { name: 'Figma', Icon: SiFigma, featured: true },
    { name: 'Vercel', Icon: SiVercel },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Netlify', Icon: SiNetlify, featured: true },
    { name: 'Figma', Icon: SiFigma, featured: true },
    { name: 'Vercel', Icon: SiVercel },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Netlify', Icon: SiNetlify, featured: true },
  ];
  const loopedBrands = [...brands, ...brands];

  return (
    <div className="brand-ribbon relative overflow-hidden">
      <div className="brand-ribbon-label">Design + Deploy Stack</div>
      <motion.div
        className="brand-track text-sm w-max"
        animate={prefersReducedMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={prefersReducedMotion ? undefined : { duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {loopedBrands.map((brand, index) => (
          <span key={`${brand.name}-${index}`} className={`brand-chip ${brand.featured ? 'brand-chip-featured' : ''}`}>
            <brand.Icon size={15} />
            <span>{brand.name}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  const [dark] = useState(true);
  const [showEntry, setShowEntry] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const seen = sessionStorage.getItem('portfolio-entry-seen');
    if (!seen) {
      setShowEntry(true);
      sessionStorage.setItem('portfolio-entry-seen', '1');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <div className="grid-bg" />

      <AnimatePresence>
        {showEntry && <EntryCinematic onDone={() => setShowEntry(false)} />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <BrandRibbon />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <GitHub />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
