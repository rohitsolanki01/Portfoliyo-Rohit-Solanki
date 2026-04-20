import { motion } from 'framer-motion'

export default function TextReveal({ children, className = '', delay = 0 }) {
  const words = String(children).split(' ')
  return (
    <span className={`inline-block ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block"
          >
            {w}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}