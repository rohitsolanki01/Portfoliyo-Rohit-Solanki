import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { damping: 25, stiffness: 300, mass: 0.5 })
  const sy = useSpring(y, { damping: 25, stiffness: 300, mass: 0.5 })

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"], input, textarea')) setHovering(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"], input, textarea')) setHovering(false)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [x, y])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-9999 h-2 w-2 rounded-full bg-white pointer-events-none mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 z-9998 rounded-full border border-white/30 pointer-events-none"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 50 : 30,
          height: hovering ? 50 : 30,
          backgroundColor: hovering ? 'rgba(168,85,247,0.15)' : 'transparent',
          borderColor: hovering ? 'rgba(168,85,247,0.5)' : 'rgba(255,255,255,0.3)',
          transition: 'width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s',
        }}
      />
    </>
  )
}