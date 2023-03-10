import { motion } from 'framer-motion'
import { Skill } from '../../typings'



type Props = {
  skill: Skill
  directionLeft?: boolean
}

const SkillCard = ({ directionLeft, skill }: Props) => {
  return (<div className='group relative flex cursor-pointer '>
    <motion.img
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      src={skill.image}
      className='rounded-3xl border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
    />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-3xl z-0'>
      <div className='flex flex-col items-center justify-center h-full'>
        <p className='text-xl font-bold text-black opacity-100'>{`${skill.title}`}</p>
        <p className='text-2xl font-bold text-black opacity-100'>{`${skill.progress}`}%</p>
      </div>
    </div>
  </div>)
}

export default SkillCard