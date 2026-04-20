const partners = [
  'NeonSwap',
  'Pulse Labs',
  'Orbit Studio',
  'ChainBridge',
  'ScaleGrid',
  'Nova Finance',
]

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-white/85 py-10 dark:border-white/10 dark:bg-neutral-900/70">
      <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500 dark:text-white/40">
        Teams and products I have shipped with
      </p>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap pr-12">
          {[...partners, ...partners, ...partners].map((name, index) => (
            <div key={`${name}-${index}`} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />
              <span className="font-display text-2xl font-semibold tracking-tight text-neutral-700/85 dark:text-white/65">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent dark:from-neutral-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent dark:from-neutral-900" />
    </section>
  )
}