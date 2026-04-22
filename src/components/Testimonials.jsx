import { motion } from 'motion/react'
import { Quote } from 'lucide-react'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'

const testimonials = [
  {
    text: 'Rohit redesigned our dashboard flow and reduced task completion time by 38%. The product now feels significantly faster for real users.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    name: 'Briana Patton',
    role: 'Operations Manager',
    outcome: '+38% workflow speed',
  },
  {
    text: 'Implementation was smooth with clear architecture decisions. Our team shipped updates 2.8x faster within one quarter.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    name: 'Bilal Ahmed',
    role: 'IT Manager',
    outcome: '2.8x release cadence',
  },
  {
    text: 'Support and handoff quality were outstanding. We moved from scattered workflows to a structured, reliable system in weeks.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
    name: 'Saman Malik',
    role: 'Customer Support Lead',
    outcome: 'Faster team alignment',
  },
  {
    text: 'The platform integrated with our stack without friction and noticeably improved efficiency across operations and reporting.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    name: 'Omar Raza',
    role: 'CEO',
    outcome: 'Lower ops overhead',
  },
  {
    text: 'Features are robust, and onboarding was effortless for new team members. Delivery quality improved sprint after sprint.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    name: 'Zainab Hussain',
    role: 'Project Manager',
    outcome: 'Higher delivery quality',
  },
  {
    text: 'The rollout exceeded expectations and gave us clearer business visibility. We now make decisions based on cleaner data.',
    image: 'https://images.unsplash.com/photo-1542204625-de293a9b5f8c?auto=format&fit=crop&w=300&q=80',
    name: 'Aliza Khan',
    role: 'Business Analyst',
    outcome: 'Better decision speed',
  },
  {
    text: 'A clean interface and strong UX details improved customer confidence and contributed to measurable conversion growth.',
    image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&w=300&q=80',
    name: 'Farhan Siddiqui',
    role: 'Marketing Director',
    outcome: '+21% conversion',
  },
  {
    text: 'They understood our goals quickly and built around real business needs. The final result was polished and practical.',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80',
    name: 'Sana Sheikh',
    role: 'Sales Manager',
    outcome: 'Stronger sales flow',
  },
  {
    text: 'Our online workflow and collaboration improved immediately. Teams now execute with less friction and better consistency.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    name: 'Hassan Ali',
    role: 'E-commerce Manager',
    outcome: 'Higher team throughput',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function Testimonials() {
  return (
    <section className="relative my-20 overflow-hidden bg-white px-6 py-24 dark:bg-neutral-950">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-6 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-155 flex-col items-center justify-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-700 dark:border-white/10 dark:bg-white/6 dark:text-cyan-300">
            <Quote className="h-3.5 w-3.5" />
            Testimonials
          </div>

          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-white">
            What people say about working with me
          </h2>
          <p className="mt-4 max-w-xl text-sm text-neutral-600 dark:text-white/65">
            Real outcomes from product teams focused on performance, reliability, and business impact.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-175 justify-center gap-5 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={32} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={36} reverse />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden xl:block" duration={34} />
        </div>
      </div>
    </section>
  )
}
