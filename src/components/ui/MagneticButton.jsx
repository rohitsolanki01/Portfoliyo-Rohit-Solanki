import { useMagnetic } from '../../hooks/useMagnetic'

export default function MagneticButton({ children, className = '', href, onClick, primary = false, ...rest }) {
  const ref = useMagnetic(0.25)
  const base = 'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 will-change-transform'
  const variant = primary
    ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.15)]'
    : 'glass-strong hover:bg-white/[0.07] text-white'

  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      className={`${base} ${variant} ${className}`}
      data-cursor="hover"
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Tag>
  )
}