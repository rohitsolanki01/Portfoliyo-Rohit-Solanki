export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-black/10 bg-white px-6 py-12 dark:border-white/10 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-black p-1 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-300/50 dark:ring-cyan-300/40">
                <img
                  src="/logo.svg"
                  alt="Rohit logo"
                  className="h-full w-full object-contain object-center brightness-110 contrast-125 saturate-125"
                />
              </span>

            </div>
            <p className="max-w-xs text-xs text-neutral-500 dark:text-white/40">
              Designed & built with obsession by Rohit Solanki. © 2025. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-neutral-500 dark:text-white/50">
            <a href="https://d8it4huxumps7.cloudfront.net/uploads/attachements/user-resumes/69e6007282c02_Rohit_Solanki_MERN_Developer.pdf" className="transition-colors hover:text-neutral-900 dark:hover:text-white" data-cursor="hover">Resume ↗</a>
            <a href="https://github.com/rohitsolanki01" className="transition-colors hover:text-neutral-900 dark:hover:text-white" data-cursor="hover">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/rohit--solanki/" className="transition-colors hover:text-neutral-900 dark:hover:text-white" data-cursor="hover">LinkedIn ↗</a>
            <a href="https://x.com/Rohit_01_tech" className="transition-colors hover:text-neutral-900 dark:hover:text-white" data-cursor="hover">Twitter ↗</a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-black/10 pt-6 font-mono text-[11px] text-neutral-500 dark:border-white/10 dark:text-white/30">
          <span>v3.0.0 — Crafted in India · Available worldwide</span>
          <span>Press <kbd className="rounded border border-black/10 bg-white/80 px-1 py-0.5 dark:border-white/10 dark:bg-white/5">⌘K</kbd> anywhere</span>
        </div>
      </div>
    </footer>
  )
} 