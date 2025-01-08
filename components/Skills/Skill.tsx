import { motion } from 'framer-motion'
import { Skill } from '../../typings'

type Props = {
  skill: Skill
  directionLeft?: boolean
}

const SkillCard = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={skill.image}
        className="rounded-3xl border border-gray-500 object-cover h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-3xl z-0">
        <div className="flex flex-col items-center justify-center h-full p-">
          <p
            className="text-sm sm:text-xl font-bold text-black
          opacity-100 text-center break-words"
          >
            {`${skill.title}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
