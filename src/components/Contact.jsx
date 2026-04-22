import { motion } from 'framer-motion'
import { useState } from 'react'
import MagneticButton from './ui/MagneticButton'

const socials = [
  { name: 'GitHub', href: '#', label: 'GH' },
  { name: 'LinkedIn', href: '#', label: 'IN' },
  { name: 'Twitter', href: '#', label: 'X' },
  { name: 'Email', href: '#', label: '@' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full aurora" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-4 font-mono">Contact</div>
          <h2 className="mb-6 font-display text-5xl font-bold tracking-tight leading-[1.05] text-neutral-900 md:text-7xl dark:text-white">
            Let&apos;s build{' '}
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
              something great
            </span>
            .
          </h2>
          <p className="mx-auto max-w-xl text-lg text-neutral-600 dark:text-white/60">
            Have a role, project, or wild idea? I respond within 24 hours — guaranteed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-purple-500/30 via-blue-500/20 to-cyan-400/30 blur-3xl opacity-60" />
          <form onSubmit={submit} className="relative space-y-5 rounded-3xl border border-black/10 bg-white/90 p-8 backdrop-blur-lg md:p-10 dark:border-white/10 dark:bg-white/5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 dark:text-white/50">Name</label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white/3 px-4 py-3.5 text-sm text-neutral-900 transition-all focus:border-purple-400/50 focus:bg-white/6 focus:shadow-[0_0_0_4px_rgba(168,85,247,0.12)] focus:outline-none dark:border-white/10 dark:text-white"
                  placeholder="rohit solanki"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 dark:text-white/50">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white/3 px-4 py-3.5 text-sm text-neutral-900 transition-all focus:border-cyan-400/50 focus:bg-white/6 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)] focus:outline-none dark:border-white/10 dark:text-white"
                  placeholder="rohitsolanki0473@gmail.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 dark:text-white/50">Message</label>
              <textarea
                rows={5} required value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-black/10 bg-white/3 px-4 py-3.5 text-sm text-neutral-900 transition-all focus:border-blue-400/50 focus:bg-white/6 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] focus:outline-none dark:border-white/10 dark:text-white"
                placeholder="Tell me about your project or role..."
              />
            </div>
            <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 font-mono text-xs text-neutral-600 transition-colors hover:border-purple-400/40 hover:text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
                    title={s.name}
                    data-cursor="hover"
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
              <MagneticButton primary type="submit">
                {sent ? '✓ Sent, talk soon' : 'Send message'}
                {!sent && <span>→</span>}
              </MagneticButton>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center font-mono text-sm text-neutral-500 dark:text-white/40"
        >
          Or reach out directly · <a href="mailto:rohitsolanki0473@gmail.com" className="text-neutral-700 underline underline-offset-4 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white" data-cursor="hover">rohitsolanki0473@gmail.com</a>
        </motion.div>
      </div>
    </section>
  )
}