import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-20 bg-white dark:bg-black transition-colors">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <p className="text-neutral-400 dark:text-neutral-500 text-sm tracking-widest uppercase animate-fade-in-up">
              Software Engineer
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#7C3AED] tracking-tight leading-[0.9] animate-fade-in-up-delay-1">
              Sanjay
              <br />
              Marathe
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg sm:text-xl max-w-xl leading-relaxed animate-fade-in-up-delay-2">
              Computer Science & Intelligent Systems at UC Irvine.
              Building scalable systems, intelligent agents, and
              high-impact products.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-4 animate-fade-in-up-delay-3">
            <Link
              href="https://github.com/SanjayMarathe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-[#7C3AED] transition-colors text-sm tracking-wide uppercase underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-[#7C3AED]"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/sanjay-marathe-2257811b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-[#7C3AED] transition-colors text-sm tracking-wide uppercase underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-[#7C3AED]"
            >
              LinkedIn
            </Link>
            <a
              href="mailto:maraths1@uci.edu"
              className="text-neutral-500 dark:text-neutral-400 hover:text-[#7C3AED] transition-colors text-sm tracking-wide uppercase underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-[#7C3AED]"
            >
              Email
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-4">
          <Link href="#about" className="text-neutral-400 dark:text-neutral-600 hover:text-[#7C3AED] transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
