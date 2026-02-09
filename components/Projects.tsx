import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      name: 'ShieldNet',
      description: 'AI-powered fraud detection network for payments. Multi-agent invoice verification system that analyzes invoices before USDC transactions, detects fraud patterns, and shares threat intelligence across the network.',
      tech: ['React', 'TypeScript', 'Python'],
      link: null,
      github: 'https://github.com/Steve-Dusty/ShieldNet'
    },
    {
      name: 'HealthXR',
      description: 'Extended reality healthcare application built for Apple Vision Pro using WebSpatial. Features AI-powered health analysis with Google Gemini and immersive 3D health visualizations.',
      tech: ['React', 'TypeScript', 'WebSpatial', 'Gemini AI'],
      link: 'https://healthxr.vercel.app',
      github: 'https://github.com/Steve-Dusty/healthxr'
    },
    {
      name: 'DermaVisionXR',
      description: 'Spatial dermatoscopic analysis platform for VR. Features fullscreen camera scanning, AI-powered diagnosis with Pinecone similarity search, and real-time confidence visualization.',
      tech: ['TypeScript', 'Pinecone', 'WebXR', 'Three.js'],
      link: null,
      github: 'https://github.com/SanjayMarathe/DermaVisionXR'
    },
    {
      name: 'StructuraXR',
      description: 'Immersive WebXR application for designing and testing engineering structures in VR. Features AI-powered structure generation via Claude, CAD model uploads, and real-time stress visualization.',
      tech: ['Three.js', 'WebXR', 'TypeScript', 'Claude AI'],
      link: null,
      github: 'https://github.com/SanjayMarathe/StructuraXR'
    },
    {
      name: 'Nomad',
      description: 'Travel companion platform designed to help travelers discover, plan, and book accommodations and unique experiences with intelligent recommendations.',
      tech: ['React', 'TypeScript', 'Node.js'],
      link: null,
      github: 'https://github.com/SanjayMarathe/nomad'
    },
    {
      name: 'OneApp',
      description: 'Unified daily productivity platform built at CalHacks 12.0. Consolidates multiple daily tasks and workflows into a single streamlined application.',
      tech: ['React', 'TypeScript', 'Vercel'],
      link: 'https://one-app-frontend.vercel.app',
      github: 'https://devpost.com/software/oneapp-oawqzl'
    },
    {
      name: 'Calyra',
      description: 'AI-powered productivity and scheduling platform that automates workflows across calendars, CRM, and communication tools with wellness-aware planning.',
      tech: ['LangChain', 'Next.js', 'FastAPI'],
      link: null,
      github: null
    },
    {
      name: 'DrystAI',
      description: 'Transforms smart glasses into a real-time memory assistant, recognizing faces, transcribing conversations, and overlaying contextual info for smarter networking.',
      tech: ['MongoDB Atlas', 'Vector Embedding', 'Next.js'],
      link: null,
      github: 'https://github.com/RadonUmar/drystai'
    },
    {
      name: 'MeDisha',
      description: 'Revolutionizing clinical trial access with Agentic AI and Amazon Bedrock.',
      tech: ['Amazon Bedrock', 'Next.js'],
      link: null,
      github: 'https://github.com/hdadhich01/meddisha'
    },
    {
      name: 'StudentRoute',
      description: 'Secure carpooling platform helping students connect with verified drivers for safe, consistent school travel.',
      tech: ['React.js'],
      link: 'https://www.youtube.com/watch?v=SUQ_URS6NNI',
      github: null
    },
    {
      name: 'BoredTutors',
      description: 'Peer tutoring platform for PUSD with tutor dashboard, verification system. Pitched to schools with 250+ users.',
      tech: ['React.js', 'AWS Lambda', 'MySQL'],
      link: 'https://www.boredtutors.com/',
      github: null
    },
    {
      name: 'kiruthirupathi.org',
      description: 'Full-stack temple administration app managing events, donations, finances, and outreach. Raised ~$500,000 in donations.',
      tech: ['React.js', 'Express.js', 'PostgreSQL'],
      link: 'http://kiruthirupathi.org/',
      github: null
    }
  ]

  return (
    <section id="projects" className="py-32 px-6 lg:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-neutral-500 mb-16">
          Projects
        </h2>
        <div className="space-y-0">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group border-t border-neutral-800 py-8 hover:border-[#7C3AED]/40 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium text-white group-hover:text-[#7C3AED] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs text-neutral-600 uppercase tracking-wider"
                      >
                        {tech}{techIdx < project.tech.length - 1 ? ' /' : ''}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-[#7C3AED] transition-colors text-xs uppercase tracking-wider underline underline-offset-4"
                    >
                      Code
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-[#7C3AED] transition-colors flex items-center gap-1"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-neutral-800" />
        </div>
      </div>
    </section>
  )
}
