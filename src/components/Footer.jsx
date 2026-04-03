import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import Logo from './Logo';

const socials = [
  { icon: FiGithub, href: 'https://github.com/rohitsolanki01', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rohit--solanki/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rohitsolanki0473@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-background/30 mt-4">
      <div className="max-w-6xl mx-auto px-6 py-10 sm:py-12">
        <div className="grid md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
          <div>
            <Logo size={36} />
            <div className="mt-6 flex gap-5 text-xs text-muted-foreground">
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#about" className="hover:text-primary transition-colors">About Me</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted-foreground/70 hover:text-primary transition-colors" aria-label={s.label}>
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-[1.9rem] sm:text-[2.55rem] font-[Sora] font-semibold leading-tight">
              Is there a fascinating
              <span className="font-serif italic text-primary"> project </span>
              brewing in your mind?
            </p>
            <a href="mailto:rohitsolanki0473@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <FiMail size={15} /> rohitsolanki0473@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-muted-foreground/60">Designed by Rohit · {new Date().getFullYear()}</p>
          <motion.button whileHover={{ y: -2 }} onClick={scrollToTop} className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted-foreground/70 hover:text-primary transition-colors" aria-label="Back to top">
            <FiArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
