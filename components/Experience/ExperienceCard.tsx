import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import Image from 'next/image'

const ExperienceCard = (data: Experience, key: string) => {
	console.log(data)

	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}

				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg'
				src={data.job_img}
			/>

			<div className='px-0 md:px-5'>
				<h4 className='text-4xl font-light'>{data.job_title}</h4>
				<p className='font-bold text-2xl mt-1'>{data.job_company}</p>
				<div className='flex space-x-2 my-2 align-middle'>
					{data.technologies.map((technology: string, i: number) => (
						<Image
							key={`tech-icon-${technology}`}
							src={technology}
							alt='technology icon'
							className='rounded-full flex items-center justify-center'
							width={40}
							height={40}
						/>
					))}
				</div>
				<p className='py-5 text-gray-300 italic'>{data.dataStarted} - {data.isCurrentlyWorkingHere
					? "Present"
					: new Date(data.dataStarted).toDateString()}</p>
				<ul className='list-disc space-y-4 ml-5 text-lg max-h-40 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5 list-inside'>
					{data.points.map((point: string, i: number) => (
						<li key={`point-${point}`} >{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard