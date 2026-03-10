import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiUsers, FiBookOpen, FiMapPin } from 'react-icons/fi';

const USERNAME = 'rohitsolanki01';

const langColors = {
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  EJS: '#A91E50',
  TypeScript: '#3178C6',
};

export default function GitHub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`).then(r => r.json()),
      fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`).then(r => r.json()),
    ]).then(([p, r]) => {
      setProfile(p);
      setRepos(Array.isArray(r) ? r.filter(repo => repo.name !== USERNAME && repo.name !== `${USERNAME}.github.io`).slice(0, 6) : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Open Source</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2">My <span className="gradient-text">GitHub</span></h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Contributions and repositories I&apos;ve been working on.</p>
        </motion.div>
{profile && !loading && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-4">
            {[
              { icon: FiBookOpen, label: 'Repositories', value: profile.public_repos },
              { icon: FiUsers, label: 'Followers', value: profile.followers },
              { icon: FiUsers, label: 'Following', value: profile.following },
              { icon: FiMapPin, label: 'Location', value: profile.location || 'India' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-border/50 bg-card/30 text-xs sm:text-sm">
                <s.icon size={15} className="text-primary" />
                <span className="text-muted-foreground">{s.label}:</span>
                <span className="font-semibold text-foreground">{s.value}</span>
              </div>
            ))}
          </motion.div>
        )}
{profile && !loading && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              { label: 'Public Repos', value: profile.public_repos, color: '#7C3AED' },
              { label: 'Followers', value: profile.followers, color: '#38bdf8' },
              { label: 'Following', value: profile.following, color: '#34d399' },
              { label: 'Public Gists', value: profile.public_gists, color: '#fb923c' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/50 bg-card/30 p-3 sm:p-5 text-center hover:border-primary/30 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold font-[Outfit]" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}
<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex justify-center mt-4 sm:mt-6 overflow-x-auto">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=transparent&hide_border=true&ring=7C3AED&fire=7C3AED&currStreakLabel=7C3AED&sideLabels=94a3b8&dates=64748b&currStreakNum=e2e8f0&sideNums=e2e8f0&background=00000000`}
            alt="GitHub Streak"
            className="rounded-xl border border-border/50 max-w-full"
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>
{loading ? (
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="p-5 rounded-xl border border-border/50 bg-card/30 animate-pulse">
                <div className="h-4 bg-secondary/50 rounded w-1/3 mb-3" />
                <div className="h-3 bg-secondary/30 rounded w-2/3 mb-4" />
                <div className="h-3 bg-secondary/20 rounded w-1/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-10">
            {repos.map((r, i) => (
              <motion.a key={r.name} href={r.html_url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -3 }}
                className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FiGithub className="text-muted-foreground" size={15} />
                    <span className="font-semibold text-sm text-primary group-hover:underline truncate max-w-[180px]">{r.name}</span>
                  </div>
                  <FiExternalLink className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" size={13} />
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{r.description || 'No description'}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                  {r.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColors[r.language] || '#888' }} />
                      {r.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><FiStar size={11} />{r.stargazers_count}</span>
                  <span className="flex items-center gap-1"><FiGitBranch size={11} />{r.forks_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
          <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
            <FiGithub size={16} /> View All Repositories
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
