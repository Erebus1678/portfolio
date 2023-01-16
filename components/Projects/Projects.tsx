
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import { nanoid } from 'nanoid';

import 'swiper/css';
import "swiper/css/navigation";

import { projects_data } from './projects_data';
import Image from 'next/image';

const Projects = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 h-[90vh] sm:h-[85vh] mt-[10vh] sm:mt-[15vh]'>
        <Swiper navigation={true} modules={[Navigation]} className=''>
          {projects_data?.map((project, i) => (
            <div key={nanoid()}
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center cursor-grab h-full'>
              <SwiperSlide className='flex flex-col items-center justify-center'>
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project.projPhoto}
                  className='max-h-[58vh]'
                />
                <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-4xl sm:text-3xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects_data.length}:</span>
                    {' '}{project.title}{' '}{project.title === 'Portfolio' ? '' : <a className='opacity-60 hover:opacity-100' href={project.link}>- Link</a>}
                  </h4>

                  <div className='flex items-center space-x-2 justify-center'>
                    {project.techno?.map(techno => (
                      <Image key={nanoid()}
                        src={techno}
                        alt='tehnology logo'
                        width={40}
                        height={40} />
                    ))}
                  </div>
                  <p className='text-lg text-center md:text-left '>
                    {project.summary}
                  </p>

                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div >
  )
}

export default Projects