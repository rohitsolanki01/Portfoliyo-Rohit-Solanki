import { useEffect, useRef } from 'react'

export default function Particles({ count = 50 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio)
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio)
    canvas.style.width = canvas.offsetWidth + 'px'
    canvas.style.height = canvas.offsetHeight + 'px'
    ctx.scale(devicePixelRatio, devicePixelRatio)
    let raf

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      hue: Math.random() > 0.5 ? 270 : 195,
      a: Math.random() * 0.6 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${p.a})`
        ctx.shadowBlur = 10
        ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 0.8)`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [count])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}