import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiTarget } from 'react-icons/fi';

const highlights = [
  { icon: FiCode, label: 'MERN Stack Specialist' },
  { icon: FiBookOpen, label: 'Always Learning' },
  { icon: FiTarget, label: 'Full Stack Focus' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">About</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2 leading-tight">
            Get to know <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 mt-8 sm:mt-12">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-3 space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              I&apos;m <strong className="gradient-text">Rohit Solanki</strong>, a passionate Full Stack Web Developer specializing in the <strong>MERN stack</strong>. I build fast, scalable, and beautiful web applications.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Currently pursuing my education while building real-world projects. My journey spans from pixel-perfect frontends with React and Tailwind CSS to robust backend APIs with Node.js, Express, and MongoDB.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I&apos;m also experienced in <strong className="text-foreground">JavaScript</strong> and <strong className="text-foreground">Data Structures & Algorithms</strong>, keeping my problem-solving skills sharp. My goal is to become a top-tier full-stack developer and contribute to impactful products.
            </p>
<div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4">
              {highlights.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-border/50 bg-card/50 text-xs sm:text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all">
                  <item.icon size={14} className="text-primary shrink-0" />
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-5 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground/60">Quick Info</h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  ['Name', 'Rohit Solanki'],
                  ['Role', 'Full Stack Developer'],
                  ['Stack', 'MERN (MongoDB, Express, React, Node)'],
                  ['Education', 'BCA (Pursuing)'],
                  ['Location', 'India 🇮🇳'],
                  ['Focus', 'Web Applications & APIs'],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between items-start gap-3 sm:gap-4 py-1.5 sm:py-2 border-b border-border/30 last:border-0">
                    <span className="text-xs sm:text-sm text-muted-foreground shrink-0">{key}</span>
                    <span className="text-xs sm:text-sm text-foreground text-right font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
