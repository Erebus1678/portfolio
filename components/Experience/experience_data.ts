import { Experience } from '../../typings'

export const experience: Experience[] = [
  {
    job_img: '/Experience/dreamhost.svg',
    job_title: 'Frontend Engineer',
    job_company: 'DreamHost',
    technologies: [
      '/Icons/react.svg',
      '/Icons/typescript.svg',
      '/Icons/next.png',
      '/Icons/redux.svg',
    ],
    dateStarted: 'Feb 2023',
    dateEnded: 'Jun 2026',
    isCurrentlyWorkingHere: true,
    points: [
      'Build and maintain 45+ React 18 SPAs plus a Next.js surface serving 100k+ monthly users for a US remote-first product company.',
      'Work within a micro-frontend architecture, sharing UI through a design system documented in Storybook.',
      'Migrated analytics from Google Analytics 3 to GA4 and introduced Datadog RUM for real-user performance monitoring.',
      'Drove a sustained refactor and bug-fix effort that cut the bug backlog by 50%+.',
    ],
  },
  {
    job_img: '/Experience/infopulse.svg',
    job_title: 'Frontend Developer',
    job_company: 'Infopulse',
    technologies: [
      '/Icons/react.svg',
      '/Icons/redux.svg',
      '/Icons/javascript.svg',
    ],
    dateStarted: 'Feb 2021',
    dateEnded: 'Nov 2022',
    isCurrentlyWorkingHere: false,
    points: [
      'Developed React/Redux interfaces for enterprise clients in a cross-functional delivery team.',
      'Implemented reusable components and state management to keep large codebases maintainable.',
    ],
  },
]
