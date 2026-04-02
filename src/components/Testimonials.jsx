import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Dr. Anurag Shrivastava',
    role: 'Program Manager',
    company: 'Codec Technologies Pvt. Ltd.',
    avatar: '🧑‍💼',
    color: '#2ecc71',
    text: 'Rohit demonstrated exceptional dedication and technical skills during his MERN Stack internship. He quickly grasped complex concepts, contributed meaningfully to team projects, and consistently delivered high-quality code. His problem-solving abilities and willingness to learn made him a standout intern.',
  },
  {
    name: 'Shradha Khapra',
    role: 'Co-Founder & Instructor',
    company: 'Apna College',
    avatar: '👩‍💻',
    color: '#1a6b8a',
    text: 'Students like Rohit who complete the Delta Full Stack course and go on to build real-world production applications are exactly what the program is designed for. His portfolio projects show a strong understanding of both frontend and backend development.',
  },
  {
    name: 'Akshay Saini',
    role: 'Founder & Instructor',
    company: 'NamasteDev.com',
    avatar: '👨‍🏫',
    color: '#e67e22',
    text: 'Rohit completed the Namaste Node.js course and has shown a solid grasp of backend architecture, async programming, and server-side JavaScript. His ability to apply course concepts to real projects like Nestigo shows genuine understanding.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Sora] mt-2">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Feedback from mentors and industry professionals.</p>
        </motion.div>

        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-card/45 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_14px_40px_-25px_rgba(0,0,0,0.7)]"
          >
            <FaQuoteLeft className="absolute top-5 left-5 sm:top-6 sm:left-6 text-primary/20" size={40} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed relative z-10 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl border border-white/15" style={{ backgroundColor: `${t.color}20` }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-foreground font-[Sora]">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-gradient-to-r from-primary to-accent w-6' : 'bg-border hover:bg-muted-foreground/30'}`} />
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:border-primary/35 transition-colors">
                  <FiChevronLeft size={16} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:border-primary/35 transition-colors">
                  <FiChevronRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex justify-center mt-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
              <FiMessageCircle size={13} />
              <span>Based on professional interactions and course completions</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
