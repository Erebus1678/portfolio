import { motion } from 'framer-motion'

import SkillCard from './Skill'
import SectionHeading from '../SectionHeading'
import { skills_data } from './skills_data'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-10 px-6 py-24 sm:px-10"
    >
      <SectionHeading
        tag="// stack"
        title="Skills"
        meta={`${skills_data.length} tools`}
      />

      <div className="grid grid-cols-4 border-l border-t border-wire sm:grid-cols-5">
        {skills_data?.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
