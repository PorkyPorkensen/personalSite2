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
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold  bg-clip-text mb-4 text-center mt-4 md:text-5xl">Featured Projects 💻</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Below are some of the personal projects I've worked on.
        </p>
        <div className=''>
          {projects.map((project: Project) => (
            <div className="shadow-md md:shadow-none border border-gray-300 rounded-md p-6 mb-6 hover:shadow-lg transition-shadow flex">
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