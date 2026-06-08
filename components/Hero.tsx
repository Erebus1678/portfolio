import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Dmytro Platov",
      'Senior Frontend Engineer',
      'React · TypeScript · Next.js',
    ],
    loop: true,
    delaySpeed: 3000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
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
        <p className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Senior Frontend Engineer
        </p>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
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
