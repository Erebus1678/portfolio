import '../styles/globals.css'

import 'swiper/css'
import 'swiper/css/navigation'

import 'tippy.js/dist/tippy.css'

import type { AppProps } from 'next/app'
import { Space_Grotesk, JetBrains_Mono } from '@next/font/google'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${grotesk.variable} ${mono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
