import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import WebBackground from '@/components/WebBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors relative">
      <div className="relative">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
      <WebBackground />
    </main>
  )
}
