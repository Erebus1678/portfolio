import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const facts = [
  { k: 'Stack', v: 'React · TypeScript · Next.js' },
  { k: 'Scale', v: '100K+ users shipped' },
  { k: 'Focus', v: 'Design systems · performance · a11y' },
  { k: 'Based', v: 'Bucharest, RO — remote (EU)' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] mx-auto flex flex-col justify-center gap-8 sm:gap-10 px-6 py-24 sm:px-10"
    >
      <motion.div
        variants={item}
        className="flex items-center justify-between border-b border-ink pb-3"
      >
        <span className="label">Portfolio — {new Date().getFullYear()}</span>
        <span className="label hidden sm:block">Available for hire</span>
      </motion.div>

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <motion.div variants={item}>
          <h1 className="font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(3rem,1rem+11vw,9rem)]">
            Dmytro
            <br />
            Platov
          </h1>
          <p className="mt-4 flex items-center gap-3 font-mono uppercase tracking-[0.12em] text-sm sm:text-base text-accent">
            <span className="inline-block h-3 w-3 bg-accent" />
            Senior Frontend Engineer
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="relative hidden h-[240px] w-[190px] shrink-0 overflow-hidden border border-ink md:block"
        >
          <Image
            src="/Photo/heroPhoto.jpg"
            alt="Dmytro Platov"
            fill
            priority
            sizes="190px"
            style={{ transform: 'scale(1.35)' }}
            className="object-cover object-[center_20%]"
          />
        </motion.div>
      </div>

      <motion.div variants={item} className="border-t border-ink">
        {facts.map((f) => (
          <div
            key={f.k}
            className="flex flex-col gap-1 border-b border-wire py-3 sm:flex-row sm:gap-8 sm:py-4"
          >
            <span className="label shrink-0 sm:w-32">{f.k}</span>
            <span className="text-base sm:text-lg">{f.v}</span>
          </div>
        ))}
      </motion.div>

      <motion.nav variants={item} className="flex flex-wrap gap-x-6 gap-y-2">
        {nav.map((n, i) => (
          <Link
            key={n.href}
            href={n.href}
            className="group font-mono text-sm uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
          >
            <span className="text-muted group-hover:text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>{' '}
            {n.label}
          </Link>
        ))}
      </motion.nav>
    </motion.div>
  )
}

export default Hero
