import { motion } from 'framer-motion'
import Image from 'next/image'

import SectionHeading from './SectionHeading'

const facts = [
  { k: 'Location', v: 'Bucharest, RO' },
  { k: 'Availability', v: 'Remote (EU) · relocation' },
  { k: 'Currently', v: 'MSc — Computer Science, AI/ML' },
]

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-12 px-6 py-24 sm:px-10"
    >
      <SectionHeading tag="// profile" title="About" />

      <div className="grid gap-8 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-ink md:max-w-none"
        >
          <Image
            src="/Photo/aboutPhoto.jpg"
            alt="Dmytro Platov"
            fill
            sizes="(max-width: 768px) 280px, 300px"
            style={{ transform: 'scale(1.18)' }}
            className="object-cover object-[center_42%]"
          />
        </motion.div>

        <div className="max-w-2xl">
          <p className="text-[clamp(1.3rem,1rem+1.5vw,2rem)] font-medium leading-[1.15]">
            Senior Frontend Engineer focused on{' '}
            <span className="text-accent">React, TypeScript and Next.js</span>.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I build high-traffic single-page apps and Next.js surfaces for 100k+
            monthly users — working within micro-frontend architectures, sharing
            UI through design systems in Storybook, and keeping a strong eye on
            performance and accessibility. I care about maintainable interfaces
            and shipping reliable software in cross-functional teams.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-wire pt-6 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="label mb-1">{f.k}</dt>
                <dd className="text-sm">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  )
}

export default About
