import Link from 'next/link'
import Head from 'next/head'
import About from '../components/About'
import BlueprintFrame from '../components/BlueprintFrame'
import BlueprintRail from '../components/BlueprintRail'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import SectionIndex from '../components/SectionIndex'
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
        <meta
          name="theme-color"
          content="#E9E8E3"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0E0E0C"
          media="(prefers-color-scheme: dark)"
        />
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
      <div className="bg-paper text-ink font-sans h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-transparent scrollbar-thumb-ink/30">
        <BlueprintFrame />
        <Header />
        <BlueprintRail />
        <SectionIndex />

        <main className="relative z-10">
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

        <footer className="pointer-events-none sticky bottom-4 z-20 w-full">
          <div className="mx-auto flex max-w-6xl justify-end px-6 sm:px-10">
            <Link
              href="#hero"
              aria-label="Back to top"
              className="pointer-events-auto font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              ↑ Top
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}
export default Home
