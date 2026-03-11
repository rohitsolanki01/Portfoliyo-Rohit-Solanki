import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock, FiBookOpen } from 'react-icons/fi';

const articles = [
  {
    title: 'Building a Full-Stack Trading App with MERN Stack',
    excerpt: 'A deep dive into how I built Tranquvest — a real-time stock trading platform using React, Express, MongoDB, and Chart.js with Google Auth integration.',
    date: 'Feb 2026',
    readTime: '8 min read',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#fb923c',
    emoji: '📈',
  },
  {
    title: 'Understanding JWT Authentication in Node.js',
    excerpt: 'A practical guide to implementing JSON Web Token authentication in Express.js applications, with secure cookie handling and middleware patterns.',
    date: 'Jan 2026',
    readTime: '6 min read',
    tags: ['Node.js', 'Security', 'JWT'],
    color: '#34d399',
    emoji: '🔐',
  },
  {
    title: 'MongoDB Schema Design: Lessons from Nestigo',
    excerpt: 'Key takeaways from designing database schemas for a vacation rental platform — relationships, indexing, and aggregation pipelines.',
    date: 'Dec 2025',
    readTime: '7 min read',
    tags: ['MongoDB', 'Database', 'Backend'],
    color: '#38bdf8',
    emoji: '🗄️',
  },
  {
    title: 'React State Management: Context API vs Redux',
    excerpt: 'When to use React Context API vs Redux for global state management, with real examples from production applications.',
    date: 'Nov 2025',
    readTime: '5 min read',
    tags: ['React', 'State', 'Frontend'],
    color: '#c084fc',
    emoji: '⚛️',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Blog</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Sharing what I learn along the way.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border/50 bg-card/30 p-5 sm:p-6 hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl sm:text-3xl">{article.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold font-[Outfit] text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-[10px] sm:text-xs text-muted-foreground/60">
                    <span className="flex items-center gap-1"><FiCalendar size={10} />{article.date}</span>
                    <span className="flex items-center gap-1"><FiClock size={10} />{article.readTime}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-md bg-primary/8 text-primary/80 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Read <FiArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
            <FiBookOpen size={16} /> View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
