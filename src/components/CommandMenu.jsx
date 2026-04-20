import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const commands = [
  { label: 'Go to Projects', shortcut: 'P', href: '#projects', icon: '📁' },
  { label: 'Go to About', shortcut: 'A', href: '#about', icon: '👤' },
  { label: 'Go to Contact', shortcut: 'C', href: '#contact', icon: '✉️' },
  { label: 'Download Resume', shortcut: 'R', href: '#', icon: '📄' },
  { label: 'View GitHub', shortcut: 'G', href: '#', icon: '🐙' },
  { label: 'Send Email', shortcut: 'E', href: 'mailto:hello@rohit.dev', icon: '💬' },
]

export default function CommandMenu({ open, setOpen }) {
  const [query, setQuery] = useState('')
  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-200 flex items-start justify-center bg-black/70 px-4 pt-[15vh] backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ type: 'spring', damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/90"
          >
            <div className="flex items-center gap-3 border-b border-black/10 px-5 py-4 dark:border-white/10">
              <svg className="h-4 w-4 text-neutral-500 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-500 dark:text-white dark:placeholder:text-white/30"
              />
              <kbd className="rounded border border-black/10 bg-white/80 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-white/40">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-black/5 hover:text-neutral-900 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <span>{c.icon}</span>
                  <span className="flex-1">{c.label}</span>
                  <kbd className="rounded border border-black/10 bg-white/80 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-white/40">⌘ {c.shortcut}</kbd>
                </a>
              ))}
              {filtered.length === 0 && (
                <div className="py-8 text-center text-sm text-neutral-500 dark:text-white/40">No results</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}