import { type JSX } from 'react'
import { projects } from "../data"
export default function Portfolio(): JSX.Element {
 
 type Project = {
  id: number;
  name: string;
  image: string;
  short: string;
  details: string;
  stack: string[];
  url?: string;
};
 
 
  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold  bg-clip-text mb-4 text-center mt-4 md:text-5xl">Featured Projects 💻</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Below are some of the personal projects I've worked on.
        </p>
        
        {/* Featured Project */}
        {projects.length > 0 && (
          <div className="mb-12 shadow-lg bg-white border border-gray-300 rounded-lg p-8 hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
            {projects[0].url ? (
              <a href={projects[0].url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <h2 className="text-4xl font-bold mb-4 cursor-pointer">{projects[0].name}</h2>
              </a>
            ) : (
              <h2 className="text-4xl font-bold mb-4">{projects[0].name}</h2>
            )}
            
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-4">{projects[0].short}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{projects[0].details}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].stack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 text-sm bg-blue-200 text-blue-900 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {projects[0].url && (
                  <a href={projects[0].url} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    View Project →
                  </a>
                )}
              </div>
              
              <div className="md:w-1/3">
                {projects[0].url ? (
                  <a href={projects[0].url} target="_blank" rel="noopener noreferrer">
                    <img src={projects[0].image} alt={projects[0].name} className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-md" />
                  </a>
                ) : (
                  <img src={projects[0].image} alt={projects[0].name} className="w-full h-auto rounded-lg shadow-md" />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <h3 className="text-2xl font-semibold mb-6">Other Projects</h3>
        <div className=''>
          {projects.slice(1).map((project: Project) => (
            <div className="shadow-md md:shadow-none bg-white border border-gray-400 rounded-md p-6 mb-6 hover:shadow-lg transition-shadow flex">
              <div key={project.id} className="flex-1 my-auto">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <h2 className="text-2xl font-semibold mb-2 cursor-pointer">{project.name}</h2>
                  </a>
                ) : (
                  <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                )}
                <p className="text-gray-600 mb-3">{project.short}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-1/3 h-auto my-auto ml-4 md:w-1/5">
                  <img src={project.image} alt={project.name} className="w-full h-auto rounded-md hover:opacity-90 transition-opacity cursor-pointer" />
                </a>
              ) : (
                <img src={project.image} alt={project.name} className="w-1/3 h-auto my-auto rounded-md ml-4 md:w-1/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}