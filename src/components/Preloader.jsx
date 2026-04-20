import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className="fixed inset-0 z-10000 flex items-center justify-center bg-ink-950 pointer-events-none"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 aurora rounded-full" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="relative w-20 h-20 rounded-full border-2 border-transparent border-t-purple-400 border-r-cyan-400"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-white/50 whitespace-nowrap"
        >
          LOADING
        </motion.div>
      </div>
    </motion.div>
  )
}