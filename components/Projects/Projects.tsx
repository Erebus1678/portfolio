import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'

import { projects_data } from './projects_data'
import SectionHeading from '../SectionHeading'

const pad = (n: number) => String(n).padStart(2, '0')

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex flex-col gap-8 overflow-hidden pt-24 pb-12"
    >
      <div className="mx-auto w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] px-6 sm:px-10">
        <SectionHeading
          tag="// selected work"
          title="Projects"
          meta={`${projects_data.length} case studies`}
        />
      </div>

      <div className="min-h-0 w-full flex-1">
        <Swiper navigation modules={[Navigation]} className="h-full w-full">
          {projects_data?.map((project, i) => {
            const hasShot = Boolean(project.projPhoto)

            const meta = (
              <span className="label">
                Case {pad(i + 1)} / {pad(projects_data.length)}
              </span>
            )
            const title = (
              <h3 className="mt-2 text-2xl font-medium sm:text-3xl">
                {project.title}
              </h3>
            )
            const stack = (
              <div
                className={`mt-4 flex flex-wrap items-center gap-2.5 ${
                  hasShot ? '' : 'justify-center'
                }`}
              >
                {project.techno?.map((techno) => (
                  <Image
                    key={techno}
                    src={techno}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                ))}
              </div>
            )
            const summary = (
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.summary}
              </p>
            )
            const links = (
              <div
                className={`mt-5 flex flex-wrap gap-5 ${
                  hasShot ? '' : 'justify-center'
                }`}
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm uppercase tracking-[0.1em] text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                  >
                    Live ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm uppercase tracking-[0.1em] text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            )

            return (
              <SwiperSlide
                key={project.title}
                className="flex h-full flex-col [justify-content:safe_center] overflow-y-auto px-10 py-6 sm:px-14"
              >
                {hasShot ? (
                  <div className="mx-auto grid w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] items-center gap-8 md:grid-cols-[1.5fr_1fr] md:gap-10">
                    <div className="border border-wire p-2">
                      {/* Kept as <img>: project shots include animated GIFs,
                          which next/image would freeze to a single frame. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.projPhoto}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="max-h-[40vh] w-full object-contain md:max-h-[62vh]"
                      />
                    </div>
                    <div>
                      {meta}
                      {title}
                      {stack}
                      {summary}
                      {links}
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto max-w-2xl text-center">
                    {meta}
                    {title}
                    {stack}
                    {summary}
                    {links}
                  </div>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Projects
