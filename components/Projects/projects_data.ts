import { Project } from '../../typings'

export const projects_data: Project[] = [
  {
    projPhoto: '/projectPhoto/fsd-react-template.svg',
    title: 'FSD React Template',
    summary:
      'Production-ready React starter built on Feature-Sliced Design — TypeScript, Vite, TailwindCSS, Zustand, React Router and Jest/RTL, with ESLint/Prettier wired up. A reusable architecture baseline for scaling frontend codebases.',
    techno: [
      '/Icons/typescript.svg',
      '/Icons/react.svg',
      '/Icons/tailwindcss.svg',
    ],
    repo: 'https://github.com/Erebus1678/fsd-react-template',
  },
  {
    projPhoto: '/projectPhoto/next-mobx-crypto-exchange.svg',
    title: 'Crypto Exchange',
    summary:
      'Real-time cryptocurrency converter built with Next.js 15, React 19 and MobX. TypeScript throughout, MUI for the interface, and react-hook-form with Zod for validated forms.',
    techno: ['/Icons/typescript.svg', '/Icons/react.svg', '/Icons/next.png'],
    link: 'https://next-mobx-crypto-exchange.vercel.app',
    repo: 'https://github.com/Erebus1678/next-mobx-crypto-exchange',
  },
  {
    projPhoto: '/projectPhoto/imaginify.png',
    title: 'Imaginify',
    summary:
      'AI image-editing SaaS — Next.js 14 and TypeScript with Cloudinary AI for restoration, recoloring and background removal. Clerk authentication, Stripe payments, MongoDB and Radix UI, with Zod-validated forms.',
    techno: [
      '/Icons/typescript.svg',
      '/Icons/react.svg',
      '/Icons/next.png',
      '/Icons/tailwindcss.svg',
    ],
    link: 'https://imaginify-tan-tau.vercel.app/',
    repo: 'https://github.com/Erebus1678/imaginify',
  },
]
