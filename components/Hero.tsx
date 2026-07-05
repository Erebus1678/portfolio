import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Dmytro Platov",
      'React · TypeScript · Next.js',
      'I build for 100k+ users',
    ],
    loop: true,
    delaySpeed: 3000,
  })

  return (
    <div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden py-16">
      <BackgroundCircles />
      <Image
        src="/Photo/heroPhoto.jpg"
        className=" relative rounded-full object-cover"
        alt="Portrait of Dmytro Platov"
        width={128}
        height={128}
        priority
      />
      <div className="z-20">
        <p className="uppercase text-gray-400 pb-2 tracking-[0.5em] text-[clamp(0.65rem,0.55rem+0.4vw,0.875rem)]">
          Senior Frontend Engineer
        </p>

        <h1 className="font-semibold px-6 sm:px-10 text-[clamp(2rem,1.2rem+3.6vw,4rem)]">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 flex flex-wrap justify-center gap-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
