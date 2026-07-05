import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../../typings'

type Props = {
  data: Experience
  index: number
}

// One row in the experience timeline. Reveals with a scroll-triggered
// slide-up, staggered by index. Large mono index + date on the left; the
// index and hairline pick up the accent on hover.
const ExperienceCard = ({ data, index }: Props) => {
  const end = data.isCurrentlyWorkingHere ? 'Present' : data.dateEnded

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group grid gap-4 border-b border-wire py-6 transition-colors duration-200 hover:border-accent sm:grid-cols-[10rem_1fr] sm:gap-8 md:py-8"
    >
      <div className="flex items-baseline gap-4 sm:flex-col sm:gap-3">
        <span className="font-mono text-3xl leading-none text-muted transition-colors duration-200 group-hover:text-accent sm:text-4xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="label whitespace-nowrap">
          {data.dateStarted} — {end}
        </span>
      </div>

      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-2xl font-medium sm:text-3xl">{data.job_title}</h3>
          <span className="font-mono text-sm uppercase tracking-[0.08em] text-muted">
            {data.job_company}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2.5">
          {data.technologies.map((tech) => (
            <Image key={tech} src={tech} alt="" width={22} height={22} />
          ))}
        </div>

        <ul className="mt-4 space-y-2">
          {data.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
            >
              <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default ExperienceCard
