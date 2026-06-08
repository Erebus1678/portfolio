import { motion } from 'framer-motion'

import SkillCard from './Skill'
import { skills_data } from './skills_data'

const Skills = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h2 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h2>

        <p className="absolute top-24 uppercase tracking-[3px] text-gray-400 text-sm">
          Hover or focus a skill to see its name
        </p>

        <div className="grid grid-cols-4 gap-5">
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
    </div>
  )
}

export default Skills
