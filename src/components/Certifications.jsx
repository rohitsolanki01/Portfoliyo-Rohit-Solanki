import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const certifications = [
  {
    title: 'Delta — Full Stack Web Development',
    issuer: 'Apna College',
    instructor: 'Shradha Khapra (Co-Founder)',
    color: '#1a6b8a',
    image: '/certificates/apna-college.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Namaste Node.js',
    issuer: 'NamasteDev.com',
    instructor: 'Akshay Saini (Founder)',
    color: '#e67e22',
    image: '/certificates/namaste-nodejs.jpg',
    tags: ['Node.js', 'Express', 'Backend', 'JavaScript'],
  },
  {
    title: 'MERN Stack Developer Intern',
    issuer: 'Codec Technologies Pvt. Ltd.',
    instructor: 'Dr. Anurag Shrivastava',
    date: 'Dec 2025 — Feb 2026',
    color: '#2ecc71',
    image: '/certificates/codec-internship.jpg',
    tags: ['MERN Stack', 'Internship', 'AICTE Approved'],
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null);

  const navigate = (dir) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < certifications.length) setLightbox(next);
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Achievements</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Courses and programs I&apos;ve completed to sharpen my skills.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                  <span className="text-xs font-medium text-foreground flex items-center gap-1">
                    <FiExternalLink size={12} /> View Certificate
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${cert.color}20` }}>
                    <FiAward size={16} style={{ color: cert.color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold font-[Outfit] text-foreground leading-tight">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                </div>

                {cert.date && (
                  <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-2 font-mono">{cert.date}</p>
                )}

                <div className="flex flex-wrap gap-1 mt-3">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-md bg-primary/8 text-primary/80 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX size={20} />
            </motion.button>

            {lightbox > 0 && (
              <motion.button
                className="absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                whileHover={{ scale: 1.1 }}
              >
                <FiChevronLeft size={24} />
              </motion.button>
            )}

            {lightbox < certifications.length - 1 && (
              <motion.button
                className="absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                whileHover={{ scale: 1.1 }}
              >
                <FiChevronRight size={24} />
              </motion.button>
            )}

            <motion.img
              key={lightbox}
              src={certifications[lightbox].image}
              alt={certifications[lightbox].title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 text-center"
            >
              <p className="text-white text-sm font-semibold">{certifications[lightbox].title}</p>
              <p className="text-white/50 text-xs mt-1">{certifications[lightbox].issuer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
