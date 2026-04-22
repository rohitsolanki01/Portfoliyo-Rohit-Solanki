import React, { useRef } from 'react'
import { cn } from '@/lib/utils'

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  paused = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = 'off',
  ariaRole = 'marquee',
  ...props
}) {
  const marqueeRef = useRef(null)

  return (
    <div
      {...props}
      ref={marqueeRef}
      data-slot="marquee"
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap) contain-[layout_paint_style]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className,
      )}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole}
      tabIndex={0}
    >
      {React.useMemo(
        () => (
          <>
            {Array.from({ length: repeat }, (_, i) => (
              <div
                key={i}
                style={{
                  willChange: 'transform',
                  animationPlayState: paused ? 'paused' : 'running',
                }}
                className={cn(
                  !vertical ? 'flex-row gap-(--gap)' : 'flex-col gap-(--gap)',
                  'flex shrink-0 justify-around transform-gpu',
                  !vertical && 'animate-marquee flex-row',
                  vertical && 'animate-marquee-vertical flex-col',
                  pauseOnHover && 'group-hover:paused',
                  reverse && 'direction-[reverse]',
                )}
              >
                {children}
              </div>
            ))}
          </>
        ),
        [repeat, children, vertical, pauseOnHover, reverse],
      )}
    </div>
  )
}
