
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { experience } from './experience_data'
import { useId } from 'react'

const WorkExperience = () => {
	const id = useId()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex w-full justify-center space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 h-[90vh] sm:h-[85vh] mt-[10vh] sm:mt-[15vh]">
        {experience.map((experience) => (
          <ExperienceCard key={id} {...experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience