import { useRef } from 'react'

import { useIsomorphicLayoutEffect } from '../lib/reveal'

const TICKS = 6

// A blueprint ruler down the left edge that continues the hero's guide lines
// across the whole page: a static wire track, an accent fill that extends
// downward with total scroll progress, and section tick marks whose active one
// lights up. The fill reflects position (an indicator), so it stays useful
// under reduced motion — nothing here is decorative motion.
const BlueprintRail = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const scroller = document.querySelector<HTMLElement>('.snap-y')
    const root = rootRef.current
    if (!scroller || !root) return

    let raf = 0
    let activeTick = -1

    const update = () => {
      raf = 0
      const max = scroller.scrollHeight - scroller.clientHeight
      const p = max > 0 ? Math.min(1, Math.max(0, scroller.scrollTop / max)) : 0

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${p})`
      }

      const next = Math.round(p * (TICKS - 1))
      if (next !== activeTick) {
        activeTick = next
        const ticks = root.querySelectorAll<HTMLElement>('.rail-tick')
        ticks.forEach((t, i) => {
          const on = i === next
          t.classList.toggle('bg-accent', on)
          t.classList.toggle('bg-wire', !on)
          // Widen the active tick. Inline width avoids a Tailwind class the
          // JIT never sees in source (it wouldn't generate the rule).
          t.style.width = on ? '14px' : '8px'
        })
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed left-12 top-0 z-30 hidden h-full flex-col items-center justify-center xl:flex"
      aria-hidden="true"
    >
      <div className="relative h-[82vh] w-px bg-wire">
        <div
          ref={fillRef}
          className="absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-accent"
        />
        {Array.from({ length: TICKS }).map((_, i) => (
          <span
            key={i}
            className="rail-tick absolute left-1/2 h-px w-2 -translate-x-1/2 bg-wire"
            style={{ top: `${(i / (TICKS - 1)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export default BlueprintRail
