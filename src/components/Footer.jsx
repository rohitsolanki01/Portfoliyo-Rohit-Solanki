import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/rohitsolanki01', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rohit--solanki/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rohitsolanki0473@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-background/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
            Built with <FiHeart size={11} className="text-red-500" /> by Rohit Solanki &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted-foreground/70 hover:text-primary transition-colors" aria-label={s.label}>
                <s.icon size={15} />
              </a>
            ))}
            <div className="w-px h-4 bg-white/15 mx-1" />
            <motion.button whileHover={{ y: -2 }} onClick={scrollToTop} className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted-foreground/70 hover:text-primary transition-colors" aria-label="Back to top">
              <FiArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
