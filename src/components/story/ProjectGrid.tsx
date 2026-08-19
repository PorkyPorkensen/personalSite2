import { type JSX } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../../data'

export type Project = {
  id: number
  name: string
  image: string
  short: string
  details: string
  stack: string[]
  url?: string
}

export default function ProjectGrid({ limit }: { limit?: number }): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const items = (projects as Project[]).slice(0, limit ?? projects.length)

  return (
    <motion.div
      className="story-project-grid"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.06,
            delayChildren: shouldReduceMotion ? 0 : 0.04
          }
        }
      }}
    >
      {items.map((project) => (
        <motion.article
          key={project.id}
          className="story-project-card"
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
            show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] } }
          }}
        >
          <div className="story-project-image-wrap">
            <img src={project.image} alt={project.name} className="story-project-image" />
          </div>
          <div className="story-project-copy-wrap">
            <h3 className="story-project-title">{project.name}</h3>
            <p className="story-project-summary">{project.short}</p>

            <div className="story-project-tags">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={`${project.id}-${tech}`} className="story-project-tag">{tech}</span>
              ))}
            </div>

            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="story-project-link">
                Open Project
              </a>
            ) : null}
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
