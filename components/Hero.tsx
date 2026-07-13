import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  loadAnime,
  prefersReducedMotion,
  useIsomorphicLayoutEffect,
  useMagnetic,
} from '../lib/reveal'

const LINKEDIN_URL = 'https://www.linkedin.com/in/dmitryi-platov/'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

type Fact = { k: string; v?: string; count?: number; suffix?: string }

const facts: Fact[] = [
  { k: 'Stack', v: 'React · TypeScript · Next.js' },
  { k: 'Scale', count: 100, suffix: 'K+ users shipped' },
  { k: 'Focus', v: 'Design systems · performance · a11y' },
  { k: 'Based', v: 'Bucharest, RO — remote (EU)' },
]

const nameLine = (word: string, key: string) => (
  <span className="block" aria-hidden="true">
    {word.split('').map((ch, i) => (
      <span className="hero-letter inline-block" key={`${key}${i}`}>
        {ch}
      </span>
    ))}
  </span>
)

// Blueprint guide lines + corner registration marks. viewBox is stretched to
// the hero box (preserveAspectRatio none) and strokes stay 1px via
// vector-effect, so the frame reads like a technical drawing at any size.
const Blueprint = () => (
  <svg
    className="hero-blueprint pointer-events-none absolute inset-0 z-0 h-full w-full text-wire"
    viewBox="0 0 1000 1000"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <g
      stroke="currentColor"
      strokeWidth={1}
      style={{ vectorEffect: 'non-scaling-stroke' }}
    >
      <line className="bp-line" x1="0" y1="120" x2="1000" y2="120" />
      <line className="bp-line" x1="0" y1="880" x2="1000" y2="880" />
      {/* corner registration crosses (verticals come from the page-wide
          BlueprintFrame so the hero doesn't double them) */}
      <line className="bp-line" x1="40" y1="60" x2="140" y2="60" />
      <line className="bp-line" x1="90" y1="10" x2="90" y2="110" />
      <line className="bp-line" x1="860" y1="940" x2="960" y2="940" />
      <line className="bp-line" x1="910" y1="890" x2="910" y2="990" />
    </g>
  </svg>
)

const Hero = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(ctaRef, { strength: 0.4, max: 16 })

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return

    root.classList.add('motion-ready')

    let cancelled = false
    let timeline: { pause?: () => void } | undefined
    let detachScroll: (() => void) | undefined

    // Safety net: never leave the hero stuck hidden. If anime is slow, errors,
    // or a Fast-Refresh remount races the reveal, drop the start states so the
    // content shows regardless (anime's inline styles still win if it ran).
    const reveal = () => root.classList.remove('motion-ready')
    const safety = setTimeout(reveal, 2500)

    loadAnime()
      .then((anime) => {
        if (cancelled || !rootRef.current) return
        const { createTimeline, animate, stagger, svg, utils } = anime
        const q = (s: string) =>
          Array.from(root.querySelectorAll<HTMLElement>(s))

        // Blueprint lines draw in.
        const drawables = svg.createDrawable('.bp-line')
        animate(drawables, {
          draw: ['0 0', '0 1'],
          opacity: [0, 1],
          duration: 700,
          delay: stagger(55),
          ease: 'inOutQuad',
        })

        // Accent scan-line sweeps top to bottom once.
        animate(q('.hero-scan'), {
          translateY: [0, root.clientHeight],
          opacity: [0, 0.9, 0.9, 0],
          duration: 900,
          delay: 250,
          ease: 'inOutQuad',
        })

        // Name assembles: each letter drops in from a random offset + tilt.
        timeline = createTimeline({ defaults: { ease: 'outExpo' } })
          .add(q('.hero-topbar-item'), { opacity: [0, 1], duration: 400 }, 0)
          .add(
            q('.hero-letter'),
            {
              opacity: [0, 1],
              translateY: () => [utils.random(-70, 70), 0],
              rotate: () => [utils.random(-12, 12), 0],
              duration: 900,
              delay: stagger(38),
            },
            150
          )
          .add(
            q('.hero-role'),
            { opacity: [0, 1], translateY: [12, 0], duration: 620 },
            500
          )
          .add(q('.hero-photo-cover'), { scaleX: [1, 0], duration: 760 }, 560)
          .add(
            q('.hero-fact'),
            {
              opacity: [0, 1],
              translateY: [18, 0],
              duration: 600,
              delay: stagger(70),
            },
            760
          )
          .add(
            q('.hero-cta'),
            { opacity: [0, 1], translateY: [12, 0], duration: 600 },
            1120
          )
          .add(
            q('.hero-nav-item'),
            {
              opacity: [0, 1],
              translateY: [8, 0],
              duration: 520,
              delay: stagger(38),
            },
            1200
          )

        // Number counter on the "Scale" fact: 0 -> 100.
        const countEl = root.querySelector<HTMLElement>('.hero-count')
        if (countEl) {
          countEl.textContent = '0'
          const proxy = { v: 0 }
          animate(proxy, {
            v: 100,
            duration: 1400,
            delay: 820,
            ease: 'outExpo',
            onUpdate: () => {
              countEl.textContent = String(Math.round(proxy.v))
            },
          })
        }

        // Scroll-scrub: the name group recedes as the hero scrolls away.
        const scroller = document.querySelector<HTMLElement>('.snap-y')
        const stage = root.querySelector<HTMLElement>('.hero-stage')
        if (scroller && stage) {
          let raf = 0
          const onScroll = () => {
            if (raf) return
            raf = requestAnimationFrame(() => {
              raf = 0
              const h = root.offsetHeight || window.innerHeight
              const p = Math.min(1, Math.max(0, scroller.scrollTop / h))
              stage.style.transform = `translateY(${-32 * p}px) scale(${
                1 - 0.12 * p
              })`
              stage.style.opacity = String(1 - 0.55 * p)
            })
          }
          scroller.addEventListener('scroll', onScroll, { passive: true })
          detachScroll = () => {
            scroller.removeEventListener('scroll', onScroll)
            if (raf) cancelAnimationFrame(raf)
          }
        }
      })
      .catch(reveal)

    return () => {
      cancelled = true
      clearTimeout(safety)
      timeline?.pause?.()
      detachScroll?.()
    }
  }, [])

  return (
    <div ref={rootRef} className="relative min-h-screen w-full overflow-hidden">
      <Blueprint />
      <div
        className="hero-scan pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-accent opacity-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] flex-col justify-center gap-8 px-6 py-24 sm:gap-10 sm:px-10">
        <div className="flex items-center justify-between border-b border-ink pb-3">
          <span className="label hero-topbar-item">
            Portfolio — {new Date().getFullYear()}
          </span>
          <span className="label hero-topbar-item hidden sm:block">
            Available for hire
          </span>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="hero-stage">
            <h1
              className="font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(3rem,1rem+11vw,9rem)]"
              aria-label="Dmytro Platov"
            >
              {nameLine('Dmytro', 'd')}
              {nameLine('Platov', 'p')}
            </h1>
            <p className="hero-role mt-4 flex items-center gap-3 font-mono uppercase tracking-[0.12em] text-sm sm:text-base text-accent">
              <span className="inline-block h-3 w-3 bg-accent" />
              Senior Frontend Engineer
            </p>
          </div>

          <div className="relative hidden h-[240px] w-[190px] shrink-0 overflow-hidden border border-ink md:block">
            <Image
              src="/Photo/heroPhoto.jpg"
              alt="Dmytro Platov"
              fill
              priority
              sizes="190px"
              style={{ transform: 'scale(1.35)' }}
              className="object-cover object-[center_20%]"
            />
            <div className="hero-photo-cover" aria-hidden="true" />
          </div>
        </div>

        <div className="border-t border-ink">
          {facts.map((f) => (
            <div
              key={f.k}
              className="hero-fact flex flex-col gap-1 border-b border-wire py-3 sm:flex-row sm:gap-8 sm:py-4"
            >
              <span className="label shrink-0 sm:w-32">{f.k}</span>
              <span className="text-base sm:text-lg">
                {f.count != null ? (
                  <>
                    <span className="hero-count tabular-nums">{f.count}</span>
                    {f.suffix}
                  </>
                ) : (
                  f.v
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="hero-cta">
          <a
            ref={ctaRef}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-none bg-accent px-6 py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-paper transition-opacity hover:opacity-90"
          >
            Connect on LinkedIn ↗
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 border-t border-wire pt-4">
          {nav.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              className="hero-nav-item group font-mono text-sm uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
            >
              <span className="text-muted group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>{' '}
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Hero
