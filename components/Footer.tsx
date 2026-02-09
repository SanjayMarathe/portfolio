import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 lg:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm tracking-widest uppercase text-neutral-500 mb-4">
              Contact
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-neutral-300 text-lg leading-relaxed mb-12">
              Interested in working together? Feel free to reach out.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:maraths1@uci.edu"
                className="block text-[#7C3AED] hover:text-[#7C3AED]/70 transition-colors text-2xl sm:text-3xl font-light tracking-tight"
              >
                maraths1@uci.edu
              </a>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <Link
                href="https://github.com/SanjayMarathe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#7C3AED] transition-colors text-sm tracking-wide uppercase underline underline-offset-4 decoration-neutral-800 hover:decoration-[#7C3AED]"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/sanjay-marathe-2257811b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#7C3AED] transition-colors text-sm tracking-wide uppercase underline underline-offset-4 decoration-neutral-800 hover:decoration-[#7C3AED]"
              >
                LinkedIn
              </Link>
              <a
                href="mailto:maraths1@uci.edu"
                className="text-neutral-500 hover:text-[#7C3AED] transition-colors text-sm tracking-wide uppercase underline underline-offset-4 decoration-neutral-800 hover:decoration-[#7C3AED]"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-700 text-xs tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Sanjay Marathe
          </p>
          <a
            href="/resume.pdf"
            download
            className="text-neutral-700 hover:text-white transition-colors text-xs tracking-wider uppercase"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
