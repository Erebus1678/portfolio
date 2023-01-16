import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{ once: true }}
        src='/Photo/aboutPhoto.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]'
      />
      <div className='space-y-10 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-base'>I have great emotional intelligence, I am a team player who is not afraid to take responsibility. I like to learn and improve myself, reaching out for new and bigger things. Constantly self-educating. Putting up with my weaknesses and fighting them.</p>
      </div>
    </motion.div>
  )
}

export default About