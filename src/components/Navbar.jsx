import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-background/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_35px_-22px_rgba(0,0,0,0.75)]'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="text-xl font-bold font-[Sora] tracking-tight flex items-center gap-2">
            <Logo size={28} />
          </a>

          <div className="hidden lg:flex items-center gap-1 p-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative px-3 py-2 text-[11px] font-medium rounded-xl transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div layoutId="activeNav"
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 border border-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors border border-white/10"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <BsSunFill size={15} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <BsMoonStarsFill size={15} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground border border-white/10 transition-colors"
              aria-label="Menu">
              {mobileOpen ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-72 z-50 bg-card/90 backdrop-blur-2xl border-l border-white/10 lg:hidden">
              <div className="p-6 pt-20 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1) ? 'bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}>
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
