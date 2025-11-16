import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      name: 'Calyra',
      description: 'AI-powered productivity and scheduling platform that automates workflows across calendars, CRM, and communication tools. Prioritizes tasks, supports wellness-aware planning, and integrates seamlessly for individuals and teams.',
      tech: ['LangChain', 'Next.js', 'FastAPI'],
      link: null,
      github: null
    },
    {
      name: 'DrystAI',
      description: 'Transforms smart glasses into a real-time memory assistant, recognizing faces, transcribing conversations, and overlaying contextual info to make networking smarter.',
      tech: ['MongoDB Atlas', 'Vector Embedding', 'Next.js'],
      link: null,
      github: 'https://github.com/RadonUmar/drystai'
    },
    {
      name: 'MeDisha',
      description: 'Revolutionizing Clinical Trial Access with Agentic AI.',
      tech: ['Amazon Bedrock', 'Next.js'],
      link: null,
      github: 'https://github.com/hdadhich01/meddisha'
    },
    {
      name: 'StudentRoute',
      description: 'Created a secure carpooling platform helping students connect with verified drivers for safe, consistent school travel.',
      tech: ['React.js'],
      link: 'https://www.youtube.com/watch?v=SUQ_URS6NNI',
      github: null
    },
    {
      name: 'BoredTutors',
      description: 'Peer tutoring platform for PUSD (React, Node, MySQL); tutor dashboard, verification system, pitched to schools, 250+ users.',
      tech: ['React.js', 'AWS Lambda', 'MySQL', 'Product Development'],
      link: 'https://www.boredtutors.com/',
      github: null
    },
    {
      name: 'kiruthirupathi.org',
      description: 'Full-stack temple administration app for admins/priests—manages events, donations, finances, outreach. Raised ~$500,000 in donations.',
      tech: ['React.js', 'Express.js', 'PostgreSQL', 'Full-Stack Development'],
      link: 'http://kiruthirupathi.org/',
      github: null
    }
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-slate-800 text-indigo-400 rounded-lg text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
