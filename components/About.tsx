export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm tracking-widest uppercase text-neutral-500 mb-4">
              About
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              I&apos;m a Computer Science and Intelligent Systems student at UC Irvine,
              building at the intersection of full-stack development and artificial intelligence.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              My work focuses on creating scalable systems, intelligent agents, and high-impact
              web products that push the boundaries of what&apos;s possible. With experience spanning
              backend infrastructure, agentic AI systems, and modern web frameworks, I approach
              every project with a commitment to excellence.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Whether it&apos;s designing robust APIs, implementing cutting-edge AI workflows, or
              building seamless user experiences, I&apos;m driven by the ambition to architect
              solutions that make a meaningful difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
