import { useRef } from 'react'
import Image from 'next/image'

import SectionHeading from './SectionHeading'
import { useReveal } from '../lib/reveal'

const facts = [
  { k: 'Location', v: 'Bucharest, RO' },
  { k: 'Availability', v: 'Remote (EU) · relocation' },
  { k: 'Currently', v: 'MSc — Computer Science, AI/ML' },
]

const About = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useReveal(rootRef, {
    arm: (el) => {
      el.querySelectorAll<HTMLElement>('.about-item').forEach((n) => {
        n.style.opacity = '0'
        n.style.transform = 'translateY(20px)'
      })
      const cover = el.querySelector<HTMLElement>('.about-photo-cover')
      if (cover) cover.style.transform = 'scaleX(1)'
    },
    play: (el, { animate, stagger }) => {
      animate(el.querySelectorAll('.about-photo-cover'), {
        scaleX: [1, 0],
        duration: 760,
        ease: 'outExpo',
      })
      animate(el.querySelectorAll('.about-item'), {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 640,
        delay: stagger(90),
        ease: 'outExpo',
      })
    },
  })

  return (
    <div
      ref={rootRef}
      className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-12 px-6 py-24 sm:px-10"
    >
      <div className="about-item">
        <SectionHeading tag="// profile" title="About" />
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12 lg:gap-16">
        <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-ink md:max-w-none">
          <Image
            src="/Photo/aboutPhoto.jpg"
            alt="Dmytro Platov"
            fill
            sizes="(max-width: 768px) 280px, 300px"
            style={{ transform: 'scale(1.18)' }}
            className="object-cover object-[center_42%]"
          />
          <div className="about-photo-cover" aria-hidden="true" />
        </div>

        <div className="max-w-2xl">
          <p className="about-item text-[clamp(1.3rem,1rem+1.5vw,2rem)] font-medium leading-[1.15]">
            Senior Frontend Engineer focused on{' '}
            <span className="text-accent">React, TypeScript and Next.js</span>.
          </p>
          <p className="about-item mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I build high-traffic single-page apps and Next.js surfaces for 100k+
            monthly users — working within micro-frontend architectures, sharing
            UI through design systems in Storybook, and keeping a strong eye on
            performance and accessibility. I care about maintainable interfaces
            and shipping reliable software in cross-functional teams.
          </p>

          <dl className="about-item mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-wire pt-6 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="label mb-1">{f.k}</dt>
                <dd className="text-sm">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About
