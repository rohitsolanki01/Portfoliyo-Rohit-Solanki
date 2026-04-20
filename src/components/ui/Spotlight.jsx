export default function Spotlight() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 left-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute top-48 right-8 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
    </div>
  )
}
