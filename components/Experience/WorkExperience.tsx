import { motion } from 'framer-motion'

import ExperienceCard from './ExperienceCard'
import SectionHeading from '../SectionHeading'
import { experience } from './experience_data'

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen w-full flex flex-col items-center gap-y-[clamp(1.5rem,3vh,2.5rem)] px-4 pt-24 pb-10 sm:px-6"
    >
      <SectionHeading title="Experience" />

      <div className="flex-1 min-h-0 w-full flex [justify-content:safe_center] gap-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience.map((item) => (
          <ExperienceCard key={item.job_company} {...item} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
