/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Router from 'next/router'
import { nanoid } from 'nanoid'

const Socials = ['https://t.me/Erebus1678', 'https://github.com/Erebus1678', 'https://www.linkedin.com/in/dmitryi-platov/']


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
            key={nanoid()}
            url={social}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}

        <Link href="https://drive.google.com/file/d/1iJ9cqS0ue8NNprHrETJ2BQhRdZ6WXQTo/view?usp=sharing">
          <img
            src="/Icons/cv.svg"
            alt="Cv button"
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
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        onClick={() => Router.push('#contact')}
      >
        <SocialIcon
          className="cursor-pointer md:h-10 md:w-10"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header