import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h2>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/Photo/aboutPhoto.jpg"
        alt="Dmytro Platov"
        loading="lazy"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 md:px-10">
        <h3 className="text-4xl font-semibold">
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
            I build high-traffic single-page apps and Next.js surfaces for 100k+
            monthly users — working with micro-frontends, design systems in
            Storybook, and a strong eye for performance and architecture. I care
            about accessible, maintainable UIs and shipping reliable software in
            cross-functional teams. Based in Bucharest, Romania, open to remote
            (EU) and relocation. Currently pursuing an MSc in Computer Science
            (AI/ML track).
          </span>
        </p>
      </div>
    </motion.div>
  )
}

export default About
