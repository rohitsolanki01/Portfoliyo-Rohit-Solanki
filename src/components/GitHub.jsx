import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const GITHUB_USERNAME = 'rohitsolanki01'

const fallbackProfile = {
  login: GITHUB_USERNAME,
  name: 'Rohit Solanki',
  html_url: `https://github.com/${GITHUB_USERNAME}`,
  bio: 'Full Stack Developer focused on production-ready MERN applications.',
  public_repos: 0,
  followers: 0,
  following: 0,
}

function formatK(value) {
  if (value < 1000) return String(value)
  return `${(value / 1000).toFixed(1)}k`
}

function languageBadge(language) {
  if (!language) return 'Other'
  return language
}

export default function Github() {
  const [profile, setProfile] = useState(fallbackProfile)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadGithub() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=6&sort=updated`),
        ])

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch GitHub data')
        }

        const profileData = await profileRes.json()
        const reposData = await reposRes.json()

        if (!isMounted) return

        setProfile(profileData)
        setRepos(Array.isArray(reposData) ? reposData : [])
      } catch {
        if (!isMounted) return
        setProfile(fallbackProfile)
        setRepos([])
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadGithub()
    return () => {
      isMounted = false
    }
  }, [])

  const totalStars = useMemo(() => repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0), [repos])

  return (
    <section className="relative bg-white px-6 py-28 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-cyan-400">05</span>
            <span className="h-px w-8 bg-cyan-400/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-white/50">GitHub</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
            Real-time{' '}
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text italic text-transparent dark:from-violet-400 dark:to-cyan-300">
              GitHub profile
            </span>
            .
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/85 p-8 backdrop-blur-sm md:p-10 dark:border-white/10 dark:bg-white/5"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-400/15 blur-3xl rounded-full" />

          <div className="relative flex flex-col lg:flex-row gap-10">
            <div className="shrink-0 lg:w-64">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-cyan-400 font-bold text-black">R</div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">@{profile.login}</div>
                  <div className="font-mono text-xs text-neutral-500 dark:text-white/50">github.com</div>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-white/65">{profile.bio || 'Building and shipping full stack products.'}</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Repos', val: formatK(profile.public_repos || 0) },
                  { label: 'Stars', val: formatK(totalStars) },
                  { label: 'Followers', val: formatK(profile.followers || 0) },
                  { label: 'Following', val: formatK(profile.following || 0) },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-black/10 bg-white/75 p-3 dark:border-white/10 dark:bg-white/5">
                    <div className="font-display text-2xl font-bold bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-300">{s.val}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-neutral-500 dark:text-white/50">{s.label}</div>
                  </div>
                ))}
              </div>
              <a
                href={profile.html_url || fallbackProfile.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-xs font-medium text-neutral-800 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Visit Profile
              </a>
            </div>

            <div className="flex-1">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-neutral-500 dark:text-white/50">Latest repositories</span>
                <span className="font-mono text-xs text-neutral-500 dark:text-white/50">Live from GitHub API</span>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {loading && (
                  <div className="md:col-span-2 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                    Loading repositories...
                  </div>
                )}

                {!loading && repos.length === 0 && (
                  <div className="md:col-span-2 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                    Could not load repositories right now. Please try again later.
                  </div>
                )}

                {!loading &&
                  repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-black/10 bg-white/75 p-4 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h3 className="line-clamp-1 text-sm font-semibold text-neutral-900 dark:text-white">{repo.name}</h3>
                        <span className="rounded-full border border-black/10 px-2 py-0.5 text-[10px] text-neutral-600 dark:border-white/10 dark:text-white/70">
                          {languageBadge(repo.language)}
                        </span>
                      </div>
                      <p className="mb-3 line-clamp-2 text-xs text-neutral-600 dark:text-white/65">
                        {repo.description || 'No description provided.'}
                      </p>
                      <div className="flex items-center gap-4 font-mono text-[10px] text-neutral-500 dark:text-white/50">
                        <span>Stars: {repo.stargazers_count || 0}</span>
                        <span>Forks: {repo.forks_count || 0}</span>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}