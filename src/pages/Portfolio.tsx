import { type JSX } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data'

type Project = {
  id: number
  name: string
  image: string
  short: string
  details: string
  stack: string[]
  url?: string
}

export default function Portfolio(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const easeOutCubic = [0.22, 1, 0.36, 1] as const

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: easeOutCubic
      }
    }
  }

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.06
      }
    }
  }

  const [featured, ...otherProjects] = projects as Project[]

  return (
    <div className="portfolio-shell min-h-screen pt-28 pb-18 px-4 sm:px-6 lg:px-8">
      <div className="portfolio-noise" aria-hidden="true" />

      <motion.div
        className="relative z-[1] mx-auto max-w-5xl"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.section className="portfolio-heading" variants={reveal}>
          <p className="portfolio-kicker">Build Archive</p>
          <h1 className="portfolio-title">Featured Projects</h1>
          <p className="portfolio-copy">A curated selection of personal builds across AI, web apps, dashboards, and experimental products.</p>
        </motion.section>

        {featured && (
          <motion.article className="portfolio-featured mt-8" variants={reveal}>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                {featured.url ? (
                  <a href={featured.url} target="_blank" rel="noopener noreferrer" className="portfolio-featured-title-link">
                    <h2 className="portfolio-featured-title">{featured.name}</h2>
                  </a>
                ) : (
                  <h2 className="portfolio-featured-title">{featured.name}</h2>
                )}

                <p className="portfolio-featured-short">{featured.short}</p>
                <p className="portfolio-featured-details">{featured.details}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <span key={tech} className="portfolio-chip">{tech}</span>
                  ))}
                </div>

                {featured.url && (
                  <a href={featured.url} target="_blank" rel="noopener noreferrer" className="portfolio-cta mt-6 inline-block">
                    Visit Project
                  </a>
                )}
              </div>

              <div className="portfolio-featured-image-wrap">
                {featured.url ? (
                  <a href={featured.url} target="_blank" rel="noopener noreferrer">
                    <img src={featured.image} alt={featured.name} className="portfolio-featured-image" />
                  </a>
                ) : (
                  <img src={featured.image} alt={featured.name} className="portfolio-featured-image" />
                )}
              </div>
            </div>
          </motion.article>
        )}

        <motion.section
          className="mt-8 grid gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
        >
          {otherProjects.map((project) => (
            <motion.article key={project.id} className="portfolio-card" variants={reveal}>
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-card-title-link">
                      <h3 className="portfolio-card-title">{project.name}</h3>
                    </a>
                  ) : (
                    <h3 className="portfolio-card-title">{project.name}</h3>
                  )}

                  <p className="portfolio-card-short">{project.short}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={`${project.id}-${tech}`} className="portfolio-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="portfolio-card-image-wrap">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <img src={project.image} alt={project.name} className="portfolio-card-image" />
                    </a>
                  ) : (
                    <img src={project.image} alt={project.name} className="portfolio-card-image" />
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </motion.div>
    </div>
  )
}