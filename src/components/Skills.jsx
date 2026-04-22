import { motion } from 'framer-motion'
import { useRef } from 'react'
import {
  Code2,
  Smartphone,
  Palette,
  Wrench,
  ServerCog,
  Github,
  Database,
} from 'lucide-react'
import { Radar, IconContainer } from './ui/radar-effect'

const groups = [
  {
    title: 'Frontend',
    num: '01',
    summary: 'JavaScript, React, HTML, CSS, Tailwind for responsive user interfaces.',
    items: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Databases',
    num: '02',
    summary: 'MongoDB and document modeling with performant read/write flow for full stack products.',
    items: [
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'Document Modeling' },
      { name: 'Read/Write Optimization' },
    ],
  },
  {
    title: 'Backend',
    num: '03',
    summary: 'Node.js and Express APIs with auth, middleware, and clean service architecture.',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'Middleware' },
      { name: 'Service Architecture' },
    ],
  },
  {
    title: 'Authentication',
    num: '04',
    summary: 'Sessions, JWT, role-based access, secure validations, and route protection.',
    items: [
      { name: 'Sessions' },
      { name: 'JWT' },
      { name: 'Role-Based Access' },
      { name: 'Secure Validation' },
      { name: 'Route Protection' },
    ],
  },
  {
    title: 'Tools',
    num: '05',
    summary: 'Postman, Git, GitHub workflows for collaboration, testing, and reliable deployment.',
    items: [
      { name: 'Postman' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Collaboration Workflows' },
      { name: 'Testing' },
      { name: 'Deployment' },
    ],
  },
]

function SkillCard({ group, i }) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      className="spotlight-card rounded-3xl border border-black/10 bg-white/80 p-8 backdrop-blur-lg dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-violet-500">{group.num}</span>
        <span className="h-px w-8 bg-violet-400/40" />
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-white/60">{group.title}</span>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-white/65">{group.summary}</p>
      <div className="grid grid-cols-2 gap-3">
        {group.items.map((item, j) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + j * 0.05 }}
            whileHover={{ scale: 1.04, y: -2 }}
            className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-3.5 py-3 text-sm text-neutral-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
            data-cursor="hover"
          >
            <span>{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-cyan-500">02</span>
            <span className="h-px w-8 bg-cyan-400/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-white/50">Tech Arsenal</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl">
            Technologies I use to{' '}
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
              build production apps
            </span>{' '}
            with performance and reliability.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, i) => (
            <SkillCard key={group.title} group={group} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-black/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(124,58,237,0.14),transparent_50%)] px-4 py-10 dark:border-white/10"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 28, 0], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-2 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
            animate={{ x: [0, -36, 0], y: [0, -26, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="relative z-20 mx-auto mb-6 max-w-2xl text-center"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">Capability Radar</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl dark:text-slate-100">
              How my core skills connect across product delivery
            </h3>
          </motion.div>

          <div className="mx-auto flex h-120 w-full max-w-3xl flex-col items-center justify-center space-y-4 overflow-hidden">
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer
                  text="Web Development"
                  delay={0.2}
                  scanOffset={0.2}
                  icon={<Code2 className="h-7 w-7 text-slate-300" />}
                />
                <IconContainer
                  delay={0.4}
                  text="Mobile Apps"
                  scanOffset={1.55}
                  icon={<Smartphone className="h-7 w-7 text-slate-300" />}
                />
                <IconContainer
                  text="UI Design"
                  delay={0.3}
                  scanOffset={0.95}
                  icon={<Palette className="h-7 w-7 text-slate-300" />}
                />
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer
                  text="Maintenance"
                  delay={0.5}
                  scanOffset={3.25}
                  icon={<Wrench className="h-7 w-7 text-slate-300" />}
                />
                <IconContainer
                  text="Infra Ops"
                  delay={0.8}
                  scanOffset={2.55}
                  icon={<ServerCog className="h-7 w-7 text-slate-300" />}
                />
              </div>
            </div>

            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer
                  delay={0.6}
                  text="GitHub Workflow"
                  scanOffset={4.8}
                  icon={<Github className="h-7 w-7 text-slate-300" />}
                />
                <IconContainer
                  delay={0.7}
                  text="Data Layer"
                  scanOffset={5.5}
                  icon={<Database className="h-7 w-7 text-slate-300" />}
                />
              </div>
            </div>

            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-41 h-px w-full bg-linear-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}