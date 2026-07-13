import { useEffect, useLayoutEffect, type RefObject } from 'react'

// The anime.js v4 module, loaded lazily so it stays out of the initial bundle.
type AnimeApi = typeof import('animejs')

// useLayoutEffect on the client (so start states are set before paint, no flash);
// falls back to useEffect on the server to avoid the SSR warning.
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

let animePromise: Promise<AnimeApi> | null = null

// Cached dynamic import — one network chunk shared by every caller.
export function loadAnime(): Promise<AnimeApi> {
  if (!animePromise) animePromise = import('animejs')
  return animePromise
}

type RevealConfig = {
  // Sync, pre-paint: set the hidden/offset start state. Runs only when motion
  // is allowed, so no-JS and reduced-motion visitors always see final content.
  arm: (el: HTMLElement) => void
  // Async: play the reveal with anime.js once the element enters the viewport.
  play: (el: HTMLElement, anime: AnimeApi) => void
  threshold?: number
}

// Tailored, once-only scroll reveal. IntersectionObserver drives it; anime.js
// runs the animation. Reduced-motion / no-window: no-op, content stays visible.
export function useReveal(
  ref: RefObject<HTMLElement | null>,
  { arm, play, threshold = 0.2 }: RevealConfig
): void {
  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    arm(el)

    let played = false
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !played) {
            played = true
            io.disconnect()
            loadAnime().then((anime) => play(el, anime))
          }
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

type MagneticOptions = { strength?: number; max?: number }

// Magnetic hover: the element's content eases toward the pointer while over it
// and springs back on leave, driven by a single rAF lerp. Transform-only, so
// it never touches layout; disabled under reduced motion.
export function useMagnetic(
  ref: RefObject<HTMLElement | null>,
  { strength = 0.35, max = 14 }: MagneticOptions = {}
): void {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let curX = 0
    let curY = 0
    let active = false

    const lerp = (a: number, b: number) => a + (b - a) * 0.18
    const clamp = (v: number) => Math.max(-max, Math.min(max, v))

    const tick = () => {
      curX = lerp(curX, targetX)
      curY = lerp(curY, targetY)
      el.style.transform = `translate(${curX.toFixed(2)}px, ${curY.toFixed(2)}px)`
      const settled =
        Math.abs(curX - targetX) < 0.1 && Math.abs(curY - targetY) < 0.1
      if (!settled || active) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
        el.style.transform = ''
      }
    }

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      targetX = clamp((e.clientX - (r.left + r.width / 2)) * strength)
      targetY = clamp((e.clientY - (r.top + r.height / 2)) * strength)
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const onEnter = () => {
      active = true
    }
    const onLeave = () => {
      active = false
      targetX = 0
      targetY = 0
      if (!raf) raf = requestAnimationFrame(tick)
    }

    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ''
    }
  }, [ref, strength, max])
}
