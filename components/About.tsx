import { motion } from 'framer-motion'

import SectionHeading from './SectionHeading'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-[clamp(2rem,4vh,3rem)] px-6 py-24 sm:px-10"
    >
      <SectionHeading title="About" />

      <div className="flex flex-col items-center gap-[clamp(1.5rem,4vw,3rem)] text-center md:flex-row md:text-left">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/Photo/aboutPhoto.jpg"
          alt="Dmytro Platov"
          loading="lazy"
          className="flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 xl:h-[560px] xl:w-[460px]"
        />

        <div className="max-w-2xl space-y-5 sm:space-y-8 md:px-4">
          <h3 className="font-semibold text-[clamp(1.6rem,1.1rem+2vw,2.5rem)]">
            Here is a{' '}
            <span className="underline decoration-[#F7AB0A]">little</span>{' '}
            background
          </h3>
          <p className="text-base">
            <span className="text-lg font-semibold">
              Senior Frontend Engineer focused on React, TypeScript and Next.js.
            </span>
            <br />
            <span>
              I build high-traffic single-page apps and Next.js surfaces for
              100k+ monthly users — working with micro-frontends, design systems
              in Storybook, and a strong eye for performance and architecture. I
              care about accessible, maintainable UIs and shipping reliable
              software in cross-functional teams. Based in Bucharest, Romania,
              open to remote (EU) and relocation. Currently pursuing an MSc in
              Computer Science (AI/ML track).
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
