import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BeamBackground from './ui/BeamBackground'
import Spotlight from './ui/Spotlight'
import Particles from './ui/Particles'
import MagneticButton from './ui/MagneticButton'
import TextReveal from './ui/TextReveal'

const roles = ['Full Stack Developer', 'Web3 Engineer', 'UI Craftsman', 'Problem Solver']

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BeamBackground />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 w-[140%] h-[140%]" />
      <Particles count={60} />

      {/* Floating tech orbs */}
      <motion.div
        className="absolute top-32 left-[8%] hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative w-14 h-14 glass-strong rounded-2xl flex items-center justify-center text-2xl border-gradient">
          ⚛️
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[6%] hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-12 h-12 glass-strong rounded-xl flex items-center justify-center text-xl border-gradient">
          ◆
        </div>
      </motion.div>
      <motion.div
        className="absolute top-40 right-[10%] hidden lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="w-16 h-16 glass-strong rounded-full flex items-center justify-center text-3xl border-gradient">
          ✨
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[8%] hidden lg:block"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center text-2xl border-gradient">
          🚀
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-1.5 mb-8 text-xs text-white/70 border-gradient"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>Open to senior roles · Remote / Global</span>
        </motion.div>

        <h1 className="font-display text-[13vw] md:text-[8vw] lg:text-[6.5rem] font-bold tracking-[-0.04em] leading-[0.9] mb-6">
          <div className="overflow-hidden">
            <TextReveal delay={2.3}>Rohit Solanki</TextReveal>
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.9 }}
          className="flex items-center justify-center gap-2 mb-8 text-sm md:text-base text-white/60 font-mono"
        >
          <span>→</span>
          <div className="relative h-6 w-60 overflow-hidden">
            {roles.map((role, i) => (
              <motion.div
                key={role}
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: idx === i ? 0 : idx > i ? -24 : 24,
                  opacity: idx === i ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="gradient-text">{role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.1 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          I build scalable web experiences that feel{' '}
          <span className="text-white font-medium italic">premium</span> — from elegant
          interfaces to robust systems that scale to millions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton primary href="#projects">
            View my work
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </MagneticButton>
          <MagneticButton href="#contact">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Book a call
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.3em]"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}