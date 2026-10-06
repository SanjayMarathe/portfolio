import Image from 'next/image'

type Project = { name: string; description: string; tech: string; code?: string; live?: string }

const projects: Project[] = [
  { name: 'VercelOS', description: 'A voice-to-PR agent built at the Vercel x SDx hackathon. It uses LiveKit, Deepgram, v0, and the Vercel AI SDK to turn spoken feature requests into React components and GitHub pull requests.', tech: 'LiveKit, Deepgram, Vercel AI SDK, React', code: 'https://lnkd.in/gZpMU3EM' },
  { name: 'ShieldNet', description: 'AI-powered fraud detection for payments, with agents that verify invoices before USDC transactions and share threat intelligence.', tech: 'React, TypeScript, Python', code: 'https://github.com/Steve-Dusty/ShieldNet' },
  { name: 'HealthXR', description: 'An extended reality healthcare app for Apple Vision Pro, featuring Gemini-powered health analysis and immersive visualizations.', tech: 'React, TypeScript, WebSpatial, Gemini AI', code: 'https://github.com/Steve-Dusty/healthxr', live: 'https://healthxr.vercel.app' },
  { name: 'DermaVisionXR', description: 'A VR dermatoscopic analysis platform with camera scanning, AI-assisted diagnosis, and confidence visualization.', tech: 'TypeScript, Pinecone, WebXR, Three.js', code: 'https://github.com/SanjayMarathe/DermaVisionXR' },
  { name: 'StructuraXR', description: 'A WebXR workspace for designing and testing structures with AI-generated models, CAD uploads, and stress visualization.', tech: 'Three.js, WebXR, TypeScript, Claude AI', code: 'https://github.com/SanjayMarathe/StructuraXR' },
  { name: 'Nomad', description: 'A travel companion for discovering, planning, and booking accommodations and experiences.', tech: 'React, TypeScript, Node.js', code: 'https://github.com/SanjayMarathe/nomad' },
  { name: 'OneApp', description: 'A unified daily productivity platform built at CalHacks 12.0 to bring common workflows into one place.', tech: 'React, TypeScript, Vercel', code: 'https://devpost.com/software/oneapp-oawqzl', live: 'https://one-app-frontend.vercel.app' },
  { name: 'Calyra', description: 'An AI-powered scheduling platform that automates work across calendars, CRM, and communications.', tech: 'LangChain, Next.js, FastAPI' },
  { name: 'DrystAI', description: 'A smart-glasses memory assistant that recognizes faces, transcribes conversations, and displays context in real time.', tech: 'MongoDB Atlas, vector embeddings, Next.js', code: 'https://github.com/RadonUmar/drystai' },
  { name: 'MeDisha', description: 'An agentic AI project designed to improve access to clinical trials.', tech: 'Amazon Bedrock, Next.js', code: 'https://github.com/hdadhich01/meddisha' },
  { name: 'StudentRoute', description: 'A secure carpooling platform connecting students with verified drivers for consistent school travel.', tech: 'React', live: 'https://www.youtube.com/watch?v=SUQ_URS6NNI' },
  { name: 'BoredTutors', description: 'A peer-tutoring platform for PUSD with a tutor dashboard and verification system, pitched to schools with more than 250 users.', tech: 'React, AWS Lambda, MySQL', live: 'https://www.boredtutors.com/' },
  { name: 'kiruthirupathi.org', description: 'A temple administration app for events, donations, finances, and outreach. The organization raised approximately $500,000 in donations.', tech: 'React, Express, PostgreSQL', live: 'http://kiruthirupathi.org/' },
]

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="site-name" href="#top">Sanjay Marathe</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="top">
        <div className="intro">
          <Image className="profile-photo" src="/profile.jpg" alt="Sanjay Marathe" width={120} height={120} priority />
          <div>
            <h1>Sanjay Marathe</h1>
            <p className="intro-copy">I&apos;m a Computer Science and Intelligent Systems student at UC Irvine. I build scalable systems, intelligent agents, and useful web products, with interests in full-stack development and artificial intelligence.</p>
            <p className="social-links">
              <a href="mailto:maraths1@uci.edu">maraths1@uci.edu</a><span aria-hidden="true">·</span>
              <a href="https://github.com/SanjayMarathe" target="_blank" rel="noopener noreferrer">github</a><span aria-hidden="true">·</span>
              <a href="https://www.linkedin.com/in/sanjay-marathe-2257811b0/" target="_blank" rel="noopener noreferrer">linkedin</a>
            </p>
          </div>
        </div>
        <section id="about" className="content-section">
          <h2>About</h2>
          <p>My work sits at the intersection of software engineering and AI. I&apos;ve built backend infrastructure, agentic systems, and interactive products, and I enjoy turning ambitious ideas into things people can use.</p>
        </section>
        <section id="projects" className="content-section">
          <h2>Projects</h2>
          <ol className="project-list">
            {projects.map((project, index) => (
              <li key={project.name} className="project">
                <span className="project-number" aria-hidden="true">[{index + 1}]</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p className="project-meta">{project.tech}</p>
                  {(project.code || project.live) && <p className="project-links">
                    {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer">[code]</a>}
                    {project.code && project.live && <span aria-hidden="true"> · </span>}
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">[view]</a>}
                  </p>}
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section id="contact" className="content-section contact-section">
          <h2>Contact</h2>
          <p>Interested in working together? <a href="mailto:maraths1@uci.edu">Send me an email</a>.</p>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} Sanjay Marathe</footer>
    </div>
  )
}
