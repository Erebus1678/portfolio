import { useRef } from 'react'
import Image from 'next/image'

import { Skill } from '../../typings'
import { useMagnetic } from '../../lib/reveal'

type Props = {
  skill: Skill
}

// One cell in the stack reference table. Label always shown (mono); hover
// inverts the cell (bg -> foreground, label -> surface) and the inner content
// magnetically eases toward the pointer in both themes.
const SkillCard = ({ skill }: Props) => {
  const innerRef = useRef<HTMLDivElement>(null)
  useMagnetic(innerRef, { strength: 0.25, max: 8 })

  return (
    <div
      className="group relative flex min-h-[88px] cursor-default flex-col items-center justify-center border-b border-r border-wire p-3 outline-none transition-colors duration-200 hover:bg-ink focus-visible:bg-ink sm:min-h-[112px]"
      tabIndex={0}
      aria-label={skill.title}
    >
      <div ref={innerRef} className="flex flex-col items-center gap-2">
        <Image
          src={skill.image}
          alt=""
          width={40}
          height={40}
          className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110 sm:h-10 sm:w-10"
        />
        <span className="text-center font-mono font-medium text-[10px] uppercase leading-tight tracking-[0.06em] text-muted transition-colors group-hover:text-paper group-focus-visible:text-paper sm:text-[11px]">
          {skill.title}
        </span>
      </div>
    </div>
  )
}

export default SkillCard
