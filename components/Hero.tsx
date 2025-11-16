import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-30 animate-float-slow" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-25 animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-700 rounded-full blur-[100px] opacity-20 animate-float-fast" />
      </div>
      {/* </CHANGE> */}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in backdrop-blur-sm">
        {/* </CHANGE> */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Sanjay Marathe
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-medium">
            Computer Science & Intelligent Systems @ UC Irvine
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="https://github.com/SanjayMarathe"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all duration-200 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </Link>
          
          <Link
            href="https://www.linkedin.com/in/sanjay-marathe-2257811b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-200 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Link>

          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-200 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>

        <div className="pt-8">
          <Link
            href="#about"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
