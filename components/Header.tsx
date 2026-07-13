import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

import ThemeToggle from './ThemeToggle'

const Socials = [
  { url: 'https://github.com/Erebus1678', label: 'GitHub profile' },
  {
    url: 'https://www.linkedin.com/in/dmitryi-platov/',
    label: 'LinkedIn profile',
  },
]

// Distance from the top of the scroll container still considered "at the top".
const TOP_THRESHOLD = 80
// Cursor within this many px of the viewport top peeks the header back in.
const PEEK_ZONE = 88

function Header(): JSX.Element {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>('.snap-y')
    if (!scroller) return

    let atTop = true
    let nearTop = false
    const apply = () => setVisible(atTop || nearTop)

    const onScroll = () => {
      atTop = scroller.scrollTop < TOP_THRESHOLD
      apply()
    }
    const onPointerMove = (e: PointerEvent) => {
      nearTop = e.clientY < PEEK_ZONE
      apply()
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    onScroll()
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return (
    <header
      style={{ transform: visible ? 'none' : 'translateY(-115%)' }}
      className="sticky top-0 z-20 mx-auto flex max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] items-center justify-between px-6 py-3 transition-transform duration-300 ease-out [will-change:transform] sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-1 text-ink"
      >
        {Socials.map((social) => (
          <SocialIcon
            key={social.url}
            url={social.url}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            fgColor="currentColor"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
        ))}
        <Link
          href="https://drive.google.com/file/d/1heBZI8lZaKyYmdAQEGxFRQ3aiSInbYem/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV"
          className="ml-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
        >
          CV ↗
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 sm:gap-6"
      >
        <ThemeToggle />
        <Link
          href="#contact"
          className="hidden font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent sm:inline-flex"
        >
          Get in touch ↗
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
