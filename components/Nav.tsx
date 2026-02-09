'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={toggle}
          className="text-neutral-500 hover:text-[#7C3AED] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors text-sm tracking-wide uppercase">
            About
          </Link>
          <Link href="#projects" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors text-sm tracking-wide uppercase">
            Projects
          </Link>
          <Link href="#contact" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors text-sm tracking-wide uppercase">
            Contact
          </Link>
          <a
            href="/resume.pdf"
            download
            className="text-sm tracking-wide uppercase border border-[#7C3AED] text-[#7C3AED] px-4 py-2 hover:bg-[#7C3AED] hover:text-white transition-all"
          >
            Resume
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-black dark:text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-black dark:bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-px bg-black dark:bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-black dark:bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black transition-colors">
          <div className="flex flex-col px-6 py-6 gap-4">
            <Link href="#about" onClick={() => setMobileOpen(false)} className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors text-sm tracking-wide uppercase">
              About
            </Link>
            <Link href="#projects" onClick={() => setMobileOpen(false)} className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors text-sm tracking-wide uppercase">
              Projects
            </Link>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors text-sm tracking-wide uppercase">
              Contact
            </Link>
            <a
              href="/resume.pdf"
              download
              className="text-sm tracking-wide uppercase border border-[#7C3AED] text-[#7C3AED] px-4 py-2 hover:bg-[#7C3AED] hover:text-white transition-all w-fit"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
