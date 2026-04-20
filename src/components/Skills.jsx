import { motion } from 'framer-motion'
import { useRef } from 'react'

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
      className="spotlight-card rounded-3xl border border-black/10 bg-white/80 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
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
      </div>
    </section>
  )
}