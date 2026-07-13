import { useRef } from 'react'

import ExperienceCard from './ExperienceCard'
import SectionHeading from '../SectionHeading'
import { experience } from './experience_data'
import { useReveal } from '../../lib/reveal'

const WorkExperience = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useReveal(rootRef, {
    arm: (el) => {
      el.querySelectorAll<HTMLElement>('.exp-row').forEach((n) => {
        n.style.opacity = '0'
        n.style.transform = 'translateY(24px)'
      })
    },
    play: (el, { animate, stagger }) => {
      // The accent rule draws left-to-right, then the rows rise in sequence —
      // the hero's "construct" language continued for the timeline.
      animate(el.querySelectorAll('.exp-rule'), {
        scaleX: [0, 1],
        duration: 600,
        ease: 'outExpo',
      })
      animate(el.querySelectorAll('.exp-row'), {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 640,
        delay: stagger(90, { start: 200 }),
        ease: 'outExpo',
      })
    },
  })

  return (
    <div
      ref={rootRef}
      className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-12 px-6 py-24 sm:px-10"
    >
      <div className="exp-row">
        <SectionHeading
          tag="// timeline"
          title="Experience"
          meta={`${experience.length} roles`}
        />
      </div>

      <div className="relative border-t border-wire">
        <span
          className="exp-rule pointer-events-none absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-accent"
          aria-hidden="true"
        />
        {experience.map((item, i) => (
          <div className="exp-row" key={item.job_company}>
            <ExperienceCard data={item} index={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
