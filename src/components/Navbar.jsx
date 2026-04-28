import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

const links = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ onCmdOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 32))

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? 'border-black/10 bg-white/80 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-neutral-900/80'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a
          href="#"
          data-cursor="hover"
          className="group flex items-center gap-2.5 rounded-xl px-2 py-1"
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-black p-1 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-300/50 dark:ring-cyan-300/40 md:h-12 md:w-12">
            <img
              src="/logo.svg"
              alt="Rohit logo"
              className="h-full w-full object-contain object-center brightness-110 contrast-125 saturate-125"
            />
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="hover"
              className="rounded-full px-4 py-2 text-sm text-neutral-600 transition-all hover:bg-black/5 hover:text-neutral-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCmdOpen}
            data-cursor="hover"
            className="hidden items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs text-neutral-700 transition-all hover:bg-black/5 md:flex dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
          >
            <span className="font-mono">⌘K</span>
          </button>
          <a
            href="#contact"
            data-cursor="hover"
            className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100"
          >
            Hire me
          </a>
        </div>
      </nav>
    </motion.header>
  )
}