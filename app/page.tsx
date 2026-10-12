import Image from 'next/image'

type Project = { name: string; description: string; tech: string; code?: string; live?: string }
type Experience = { role: string; organization: string; period: string; description?: string }

const experience: Experience[] = [
  { role: 'Software Engineer Intern', organization: 'Orthogonal (YC W26)', period: 'Jun–Sep 2026', description: 'Worked on agentic infrastructure.' },
  { role: 'Software Engineer Intern', organization: 'Fetch.ai', period: 'Jun–Sep 2026', description: 'Worked in the Innovation Lab.' },
  { role: 'Research Intern', organization: 'NASA', period: 'Mar–May 2026', description: 'Built machine learning models to approximate solar magnetic field distributions at the DRIVE Science Center.' },
  { role: 'Software Engineer Intern', organization: 'Grangou', period: 'Jan–May 2026', description: 'Built a social dining app for Gen Z, available on the App Store.' },
  { role: 'Software Engineer Intern', organization: 'Geodo', period: 'Dec 2025–Mar 2026', description: 'Built data pipelines for computer-use automation and vision-language models at an Entrepreneurs First-backed company.' },
  { role: 'Founder', organization: 'HLS Solutions', period: 'Dec 2024–May 2025', description: 'Ran a web development consulting agency and exited at $10,000 ARR.' },
  { role: 'Founder', organization: 'Web Development Workshop', period: 'Aug 2023–May 2025', description: 'Founded a web development workshop and taught more than 20 students.' },
  { role: 'Software Engineer Intern', organization: 'Doozie Software Solutions', period: 'Jun–Aug 2024', description: 'Built organization administration software.' },
  { role: 'Biomechanics Researcher', organization: 'University of Southern California', period: 'Jun 2023–Aug 2024' },
  { role: 'Software Engineer Intern', organization: 'Doozie Software Solutions', period: 'Jun–Aug 2023', description: 'Worked on mobile apps.' },
]

const projects: Project[] = [
  { name: 'DrystAI', description: 'Smart glasses become a real-time memory assistant, recognizing faces, transcribing conversations, and showing helpful context as you meet people.', tech: 'MongoDB Atlas, vector embeddings, Next.js', code: 'https://github.com/RadonUmar/drystai' },
  { name: 'MeDisha', description: 'An AWS Bedrock-powered assistant that matches patients to clinical trials, explains eligibility, and compares trial locations and costs.', tech: 'Amazon Bedrock, Next.js', code: 'https://github.com/hdadhich01/meddisha' },
  { name: 'Kaimon', description: 'Point a camera at an item and let AI agents identify it, compare listings, and handle the purchase through a single checkout.', tech: 'TwelveLabs, Fetch.ai, Browser Use, Stripe', live: 'https://devpost.com/software/kaimon' },
]

const hackathons = [
  { event: 'AWS LA AI Hackathon', result: '1st place overall' },
  { event: 'Google Gemini × Cerebral Valley at SHACK15', result: 'Finalist' },
  { event: 'Anthropic × UCI', result: '3rd place overall' },
  { event: 'Major League Hacking × DigitalOcean', result: 'Popular vote winner' },
  { event: 'SB Hacks 12', result: '1st place, Best Use of Solana; 2nd place, Best Use of Deepgram' },
  { event: 'DiamondHacks 2026', result: '1st place, Best Use of TwelveLabs; 2nd place, Best Use of Fetch.ai' },
  { event: 'StanfordXR', result: 'Best Design & Storytelling' },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sanjay Marathe',
  url: 'https://www.sanjaymarathe.me/',
  image: 'https://www.sanjaymarathe.me/profile.jpg',
  description: 'Computer Science and Intelligent Systems student at UC Irvine building software and AI products.',
  affiliation: { '@type': 'CollegeOrUniversity', name: 'University of California, Irvine' },
  sameAs: [
    'https://github.com/SanjayMarathe',
    'https://www.linkedin.com/in/sanjay-marathe-2257811b0/',
    'https://x.com/itsmesmarathe',
  ],
}

export default function Home() {
  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }} />
      <header className="site-nav">
        <a className="site-name" href="#top">Sanjay Marathe</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#hackathons">Hackathons</a>
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
              <span aria-hidden="true">·</span>
              <a href="https://x.com/itsmesmarathe" target="_blank" rel="noopener noreferrer">x</a>
            </p>
          </div>
        </div>
        <section id="about" className="content-section">
          <h2>About</h2>
          <p>My work sits at the intersection of software engineering and AI. I&apos;ve built backend infrastructure, agentic systems, and interactive products, and I enjoy turning ambitious ideas into things people can use.</p>
        </section>
        <section id="experience" className="content-section">
          <h2>Experience</h2>
          <ul className="experience-list">
            {experience.map((item) => (
              <li key={`${item.organization}-${item.period}`} className="experience-item">
                <div className="experience-heading">
                  <h3>{item.role}, <span>{item.organization}</span></h3>
                  <span className="experience-period">{item.period}</span>
                </div>
                {item.description && <p>{item.description}</p>}
              </li>
            ))}
          </ul>
        </section>
        <section id="projects" className="content-section">
          <h2>Highlighted Projects</h2>
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
        <section id="hackathons" className="content-section">
          <h2>Hackathons</h2>
          <p className="hackathon-summary">Awards and recognition across {hackathons.length} hackathons.</p>
          <ul className="hackathon-list">
            {hackathons.map((item) => (
              <li key={item.event}><strong>{item.event}.</strong> {item.result}.</li>
            ))}
          </ul>
        </section>
        <section id="miscellaneous" className="content-section">
          <h2>Miscellaneous</h2>
          <p>Drums (6 years), high school varsity swim &amp; rugby. Bench: 230 lb, squat: 300 lb, deadlift: 335 lb.</p>
          <p>i think burning out is a symptom revoked by the momentum of small wins.</p>
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
