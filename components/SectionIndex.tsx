import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

// Blueprint HUD: a fixed readout of the current section, ticked live by an
// IntersectionObserver scoped to the snap scroll container. Purely a readout,
// so it needs no motion and no reduced-motion branch.
const SectionIndex = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.snap-y')
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    )
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const i = SECTIONS.findIndex((s) => s.id === entry.target.id)
          if (i >= 0) setActive(i)
        }
      },
      { root, threshold: 0.5 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="pointer-events-none fixed bottom-4 left-6 z-40 hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted sm:flex sm:left-10">
      <span className="text-accent">{String(active + 1).padStart(2, '0')}</span>
      <span className="text-wire">/</span>
      <span>{String(SECTIONS.length).padStart(2, '0')}</span>
      <span className="ml-2 text-ink">{SECTIONS[active].label}</span>
    </div>
  )
}

export default SectionIndex
