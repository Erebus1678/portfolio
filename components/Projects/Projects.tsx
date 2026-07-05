import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'

import { projects_data } from './projects_data'
import SectionHeading from '../SectionHeading'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 min-h-screen w-full flex flex-col items-center gap-y-[clamp(1.5rem,3vh,2.5rem)] pt-24 pb-10 overflow-hidden"
    >
      <SectionHeading title="Projects" />

      <div className="flex-1 min-h-0 w-full z-20 flex overflow-hidden">
        <Swiper navigation={true} modules={[Navigation]} className="w-full">
          {projects_data?.map((project, i) => (
            <SwiperSlide
              key={project.title}
              className="flex-shrink-0 snap-center flex flex-col space-y-3 sm:space-y-5 items-center [justify-content:safe_center] cursor-grab h-full px-4 py-4 overflow-y-auto"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-h-[34vh] sm:max-h-[44vh] md:max-h-[52vh] relative max-w-[90%] md:max-w-[100%]"
                alt={`${project.title} project preview`}
                src={project.projPhoto}
                loading="lazy"
              />

              <div className="space-y-3 sm:space-y-5 px-2 md:px-10 max-w-6xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects_data.length}:
                  </span>{' '}
                  {project.title}
                  {project.link && (
                    <>
                      {' · '}
                      <a
                        className="opacity-60 hover:opacity-100"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                      </a>
                    </>
                  )}
                  {project.repo && (
                    <>
                      {' · '}
                      <a
                        className="opacity-60 hover:opacity-100"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </>
                  )}
                </h3>

                <div className="flex items-center space-x-2 justify-center">
                  {project.techno?.map((techno) => (
                    <Image
                      key={techno}
                      src={techno}
                      alt="technology logo"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full absolute top-[30%] left-0 -z-10 h-[500px] bg-[#F7AB0A]/10 -skew-y-12" />
    </motion.div>
  )
}

export default Projects
