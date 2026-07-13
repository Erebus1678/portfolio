import { useRef } from 'react'

import SkillCard from './Skill'
import SectionHeading from '../SectionHeading'
import { skills_data } from './skills_data'
import { useReveal } from '../../lib/reveal'

const Skills = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useReveal(rootRef, {
    arm: (el) => {
      const head = el.querySelector<HTMLElement>('.skills-head')
      if (head) {
        head.style.opacity = '0'
        head.style.transform = 'translateY(16px)'
      }
      el.querySelectorAll<HTMLElement>('.skills-grid > *').forEach((n) => {
        n.style.opacity = '0'
        n.style.transform = 'translateY(14px)'
      })
    },
    play: (el, { animate, stagger }) => {
      animate(el.querySelectorAll('.skills-head'), {
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 600,
        ease: 'outExpo',
      })
      // Cells tick in reading order — a dense, quick stagger for a reference grid.
      animate(el.querySelectorAll('.skills-grid > *'), {
        opacity: [0, 1],
        translateY: [14, 0],
        duration: 520,
        delay: stagger(26, { start: 150 }),
        ease: 'outExpo',
      })
    },
  })

  return (
    <div
      ref={rootRef}
      className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-10 px-6 py-24 sm:px-10"
    >
      <div className="skills-head">
        <SectionHeading
          tag="// stack"
          title="Skills"
          meta={`${skills_data.length} tools`}
        />
      </div>

      <div className="skills-grid grid grid-cols-4 border-l border-t border-wire sm:grid-cols-5">
        {skills_data?.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
