import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

// Manual light/dark toggle layered on top of the CSS prefers-color-scheme
// default. Persists the choice; the pre-paint script in _document applies it.
const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const initial =
      stored ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    setTheme(initial)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable — choice just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
    >
      {theme === null ? 'Theme' : theme === 'dark' ? 'Light ☀' : 'Dark ☾'}
    </button>
  )
}

export default ThemeToggle
