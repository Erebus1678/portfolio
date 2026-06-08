/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Socials = [
  'https://github.com/Erebus1678',
  'https://www.linkedin.com/in/dmitryi-platov/',
]

function Header(): JSX.Element {
  return (
    <header className="sticky top-0 p-2 sm:p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {Socials.map((social) => (
          <SocialIcon
            key={social}
            url={social}
            target="_blank"
            rel="noopener noreferrer"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}

        <Link
          href="https://drive.google.com/file/d/1iJ9cqS0ue8NNprHrETJ2BQhRdZ6WXQTo/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV"
        >
          <img
            src="/Icons/cv.svg"
            alt="Download CV"
            className="h-8 w-8 fill-gray-600"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer md:h-10 md:w-10"
          network="email"
          url="#contact"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link
          href="#contact"
          className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer"
        >
          Get In Touch
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
