import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import Image from 'next/image'

const ExperienceCard = (data: Experience, key: string) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 sm:space-y-7 flex-shrink-0 w-full sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-4 sm:p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={data.job_img}
      />

      <div className="px-2 sm:px-5 w-full">
        <div className="flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0 md:space-x-4 mb-3">
          <div className="md:w-1/2">
            <h4 className="text-2xl sm:text-4xl font-light">
              {data.job_title}
            </h4>
            <div className="flex space-x-2 my-2 align-middle">
              {data.technologies.map((technology: string) => (
                <Image
                  key={`tech-icon-${technology}`}
                  src={technology}
                  alt="technology icon"
                  className="flex items-center justify-center"
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/2 text-end flex flex-col justify-between">
            <p className="text-lg sm:text-4xl font-light">{data.job_company}</p>
            <p className="text-gray-300 italic">
              {data.dataStarted} -{' '}
              {data.isCurrentlyWorkingHere
                ? 'Present'
                : new Date(data.dataStarted).toDateString()}
            </p>
          </div>
        </div>

        <ul className="list-disc space-y-2 sm:space-y-4 ml-4 sm:ml-5 text-base sm:text-lg max-h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-4 sm:pr-5 list-inside">
          {data.points.map((point: string) => (
            <li key={`point-${point}`}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
