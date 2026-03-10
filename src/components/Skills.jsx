import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { TbBinaryTree } from 'react-icons/tb';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#888' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'REST APIs', icon: FaDatabase, color: '#FF6B35' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Problem Solving', icon: TbBinaryTree, color: '#FF4081' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#888' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2">
            Tech Stack & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Technologies I use to build modern web applications.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {categories.map((cat, ci) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card/30 p-4 sm:p-6 hover:border-primary/30 transition-colors group">
              <h3 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-foreground/60 mb-4 sm:mb-5">{cat.title}</h3>
              <div className="space-y-1.5 sm:space-y-2">
                {cat.skills.map((skill, si) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.05 + si * 0.06 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-2 sm:p-2.5 rounded-lg hover:bg-secondary/50 transition-all cursor-default">
                    <skill.icon size={18} style={{ color: skill.color }} className="shrink-0 sm:text-[20px]" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
