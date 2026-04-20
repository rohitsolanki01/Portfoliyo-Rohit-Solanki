import { motion } from 'framer-motion'

export default function BeamBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 mesh-grid opacity-60" />

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(168,85,247,0.5), transparent 60%)',
        }}
      />

      <motion.div
        className="absolute -top-60 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)', filter: 'blur(100px)' }}
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)', filter: 'blur(120px)' }}
        animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)', filter: 'blur(110px)' }}
        animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}