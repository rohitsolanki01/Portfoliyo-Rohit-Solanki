import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { TbBinaryTree } from 'react-icons/tb';

const stacks = [
  {
    title: 'Frontend',
    description: 'JavaScript, TypeScript, React, Next.js, HTML, CSS, Tailwind for responsive user interfaces.',
    className: 'md:col-span-3',
    items: [FaReact, SiTailwindcss, FaJs, FaHtml5, FaCss3Alt],
  },
  {
    title: 'Databases',
    description: 'MongoDB and document modeling with performant read/write flow for full stack products.',
    className: 'md:col-span-2',
    items: [SiMongodb, FaDatabase],
  },
  {
    title: 'Backend',
    description: 'Node.js and Express APIs with auth, middleware, and clean service architecture.',
    className: 'md:col-span-2',
    items: [FaNodeJs, SiExpress, TbBinaryTree],
  },
  {
    title: 'Authentication',
    description: 'Sessions, JWT, role-based access, secure validations, and route protection.',
    className: 'md:col-span-1',
    items: [FaGitAlt, FaGithub],
  },
  {
    title: 'Tools',
    description: 'Postman, Git, GitHub workflows for collaboration, testing, and reliable deployment.',
    className: 'md:col-span-2',
    items: [SiPostman, FaGithub, FaGitAlt],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-18 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="section-badge">Skills and Tech Stack</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Toolbox</span>
          </h2>
          <p className="section-copy text-sm sm:text-base">A compact ecosystem of technologies I use to build complete production-ready web products.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {stacks.map((stack, index) => (
            <motion.article
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`reference-panel rounded-2xl p-4 sm:p-5 ${stack.className}`}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {stack.items.map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-lg border border-white/12 bg-black/30 flex items-center justify-center text-primary">
                    <Icon size={16} />
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-serif italic text-primary">{stack.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{stack.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
