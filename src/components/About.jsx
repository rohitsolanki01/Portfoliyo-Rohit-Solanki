import { motion } from 'framer-motion';
import { FiCode, FiBox, FiLayers, FiTerminal } from 'react-icons/fi';

const ringIcons = [FiCode, FiBox, FiLayers, FiTerminal];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-18 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center reference-panel p-6 sm:p-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge">About Me</span>
            <h2 className="section-title mt-3">Everything About <span className="font-serif italic normal-case">Rohit</span></h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Hi, I&apos;m Rohit, a Full Stack Developer focused on building modern web apps from interface to backend. I love shipping fast, scalable products with clean architecture and sharp interaction details.
            </p>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              My stack includes React, Tailwind CSS, Node.js, Express, and MongoDB. I combine engineering discipline with product thinking to deliver solutions ready for real users.
            </p>
            <a href="#projects" className="accent-link inline-flex mt-5">More About Me →</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative flex justify-center">
            <div className="relative w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/10 bg-black/30">
              <motion.div
                className="absolute inset-8 rounded-full border border-primary/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-16 rounded-full border border-accent/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="absolute inset-[34%] rounded-2xl border border-white/15 bg-black/35 flex items-center justify-center text-primary"
                animate={{ scale: [1, 1.06, 1], boxShadow: ['0 0 0px rgba(60, 220, 170, 0)', '0 0 28px rgba(60, 220, 170, 0.35)', '0 0 0px rgba(60, 220, 170, 0)'] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiCode size={34} />
              </motion.div>

              {ringIcons.map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 16 + i * 3, repeat: Infinity, ease: 'linear' }}
                >
                  <motion.div
                    className="absolute w-10 h-10 rounded-xl border border-white/15 bg-black/45 flex items-center justify-center text-muted-foreground"
                    style={{
                      left: `${50 + Math.cos((i / ringIcons.length) * Math.PI * 2) * 42}%`,
                      top: `${50 + Math.sin((i / ringIcons.length) * Math.PI * 2) * 42}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ y: [0, -4, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon size={16} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
