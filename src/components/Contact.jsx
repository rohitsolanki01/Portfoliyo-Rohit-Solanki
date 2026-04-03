import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-18 sm:py-22 lg:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="section-badge">Let&apos;s Build</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[4.1rem] font-[Sora] font-semibold leading-[1.03] mt-4">
            Something <span className="font-serif italic text-primary">Amazing</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">Have a project, idea, or collaboration in mind? Let&apos;s make it happen together.</p>

          <a href="mailto:rohitsolanki0473@gmail.com" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_18px_45px_-24px_rgba(48,179,145,0.8)]">
            Get In Touch <FiArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
