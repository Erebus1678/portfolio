import { Experience } from '../../typings';

export const experience: Experience[] = [
	{
		job_img: '/Experience/phobosys.svg',
		job_title: 'JS Web Developer',
		job_company: 'Phobosys (Outsource)',
		technologies: [
			'/Icons/javascript.svg',
			'/Icons/react.svg',
			'/Icons/redux.svg',
			'/Icons/sass.svg',
		],
		dataStarted: '02.06.2023',
		isCurrentlyWorkingHere: true,
		points: [
			'Configured and integrated AI chatbot using a machine learning model trained on an internal knowledge base. Optimized the chatbot\'s parameters to ensure its accuracy, relevance, and efficiency. The chatbot answered more user questions, reducing support workload by 47%. The chatbot received positive feedback from users. Monitored and analyzed the performance of the chatbot, making adjustments as needed. Cooperated with the development team to ensure smooth operation of the chatbot.',

			'Redesigned the main product, improving its usability and visual appeal. Refactored the code, improving its readability, maintainability, and performance. Implemented new functionality, such as filters and sorting, to improve the user experience, which was well received by users.',

			'Successfully completed the migration from Google Analytics Universal (GA3) to Google Analytics 4 (GA4) on time, maintaining 100% data accuracy. Analyzed and compared data in GA3 and GA4, generated reports with valuable recommendations for using GA4',

			'Developed and implemented solutions to fix bugs and improve UX, resulting in improved UX that reduced the number of dissatisfied customers. Increased user satisfaction by 44%'
		]
	}
]