import { Experience } from '../../typings';

export const experience: Experience[] = [
  {
    job_img: '/Experience/dreamhost.svg',
    job_title: 'JS Web Developer',
    job_company: 'DreamHost',
    technologies: [
      '/Icons/javascript.svg',
      '/Icons/react.svg',
      '/Icons/redux.svg',
      '/Icons/sass.svg',
    ],
    dataStarted: '02/23',
    isCurrentlyWorkingHere: true,
    points: [
      'Migrated Google Analytics (GA3 to GA4) with 100% data integrity, enabling better insights and reducing reporting time by ~25%.',

      'Redesigned the main product’s UI/UX, cutting negative user feedback and raising satisfaction',

      'Spearheaded the development of more than 10 new marketing pages, enhancing user engagement by 35% and contributing to a 20% increase in lead generation within the first quarter post-launch.',

      'Revamped the existing dashboard interface by implementing a user-friendly design that improved loading speed by 50%, resulting in a decrease in bounce rates from 18% to just 9%.',

      'Conducted an extensive code refactor and bug-fix initiative, addressing over 150 legacy issues and optimizing functionality, which led to a remarkable reduction in support ticket volumes by 40%.',
    ],
  },
]