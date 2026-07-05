import { motion } from 'framer-motion'

import SkillCard from './Skill'
import SectionHeading from '../SectionHeading'
import { skills_data } from './skills_data'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="min-h-screen w-full max-w-[2000px] mx-auto flex flex-col items-center justify-center gap-y-[clamp(2rem,4vh,3.5rem)] px-4 py-24 sm:px-8 xl:px-10"
    >
      <SectionHeading
        title="Skills"
        subtitle="Hover or focus a skill to see its name"
      />

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4 xl:gap-6">
        {skills_data?.slice(0, skills_data.length / 2).map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
        {skills_data
          ?.slice(skills_data.length / 2, skills_data.length)
          .map((skill) => (
            <SkillCard key={skill.title} skill={skill} directionLeft />
          ))}
      </div>
    </motion.div>
  )
}

export default Skills
