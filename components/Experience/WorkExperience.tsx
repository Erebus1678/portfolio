import { motion } from 'framer-motion'

import ExperienceCard from './ExperienceCard'
import SectionHeading from '../SectionHeading'
import { experience } from './experience_data'

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-12 px-6 py-24 sm:px-10"
    >
      <SectionHeading
        tag="// timeline"
        title="Experience"
        meta={`${experience.length} roles`}
      />

      <div className="border-t border-wire">
        {experience.map((item, i) => (
          <ExperienceCard key={item.job_company} data={item} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
