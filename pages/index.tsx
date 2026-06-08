import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import WorkExperience from '../components/Experience/WorkExperience'

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Dmytro Platov — Senior Frontend Engineer (React / TypeScript)
        </title>
        <meta
          name="description"
          content="Dmytro Platov — Senior Frontend Engineer specialising in React, TypeScript and Next.js. Building high-traffic SPAs and design systems for 100k+ users."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dmytro Platov" />
        <meta
          name="keywords"
          content="Dmytro Platov, Frontend Engineer, React, TypeScript, Next.js, Redux Toolkit, Storybook, Design Systems"
        />
        <meta name="theme-color" content="#242424" />
        <link rel="canonical" href="https://platov-portfolio.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://platov-portfolio.vercel.app/"
        />
        <meta
          property="og:title"
          content="Dmytro Platov — Senior Frontend Engineer (React / TypeScript)"
        />
        <meta
          property="og:description"
          content="Senior Frontend Engineer specialising in React, TypeScript and Next.js. High-traffic SPAs, micro-frontends and design systems for 100k+ users."
        />
        <meta
          property="og:image"
          content="https://platov-portfolio.vercel.app/Photo/aboutPhoto.jpg"
        />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Dmytro Platov" />
        <meta property="og:site_name" content="Dmytro Platov" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Dmytro Platov — Senior Frontend Engineer (React / TypeScript)"
        />
        <meta
          name="twitter:description"
          content="Senior Frontend Engineer specialising in React, TypeScript and Next.js. High-traffic SPAs, micro-frontends and design systems for 100k+ users."
        />
        <meta
          name="twitter:image"
          content="https://platov-portfolio.vercel.app/Photo/aboutPhoto.jpg"
        />
      </Head>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Header />

        <main>
          <section id="hero" className="snap-start">
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>

          <section id="experience" className="snap-center">
            <WorkExperience />
          </section>

          <section id="skills" className="snap-start">
            <Skills />
          </section>

          <section id="projects" className="snap-start">
            <Projects />
          </section>

          <section id="contact" className="snap-start">
            <ContactMe />
          </section>
        </main>

        <Link href="#hero" aria-label="Back to top">
          <footer className="sticky bottom-2 w-full cursor-pointer">
            <div className="flex items-center justify-center mx-auto">
              <Image
                width={40}
                height={40}
                className="opacity-30 rounded-full filter cursor-pointer
              hover:opacity-100"
                src="/Icons/arrow-up.svg"
                alt="Back to top"
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  )
}
export default Home
