'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div />

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
            About
          </Link>
          <Link href="#projects" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
            Projects
          </Link>
          <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
            Contact
          </Link>
          <a
            href="/resume.pdf"
            download
            className="text-sm tracking-wide uppercase border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-all"
          >
            Resume
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-900 bg-black">
          <div className="flex flex-col px-6 py-6 gap-4">
            <Link href="#about" onClick={() => setMobileOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
              About
            </Link>
            <Link href="#projects" onClick={() => setMobileOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
              Projects
            </Link>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
              Contact
            </Link>
            <a
              href="/resume.pdf"
              download
              className="text-sm tracking-wide uppercase border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-all w-fit"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
