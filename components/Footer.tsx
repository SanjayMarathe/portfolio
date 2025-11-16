import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/SanjayMarathe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sanjay-marathe-2257811b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:maraths1@uci.edu"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
          <div className="text-center space-y-2">
            <p className="text-slate-400">
              <Link href="mailto:maraths1@uci.edu" className="hover:text-white transition-colors">
                maraths1@uci.edu
              </Link>
            </p>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Sanjay Marathe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
