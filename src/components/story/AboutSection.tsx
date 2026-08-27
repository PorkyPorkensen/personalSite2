import { type JSX } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import selfie2 from '../../images/selfie2.png'
import awsIcon from '../../images/stack icons/aws.webp'
import cssIcon from '../../images/stack icons/css.png'
import githubIcon from '../../images/stack icons/github.webp'
import googleCloudIcon from '../../images/stack icons/googlecloud.png'
import htmlIcon from '../../images/stack icons/html.png'
import javascriptIcon from '../../images/stack icons/javascript.webp'
import llmIcon from '../../images/stack icons/llm.png'
import nodeIcon from '../../images/stack icons/node.webp'
import pythonIcon from '../../images/stack icons/python.webp'
import reactIcon from '../../images/stack icons/React.webp'
import tailwindIcon from '../../images/stack icons/tailwind.webp'
import typescriptIcon from '../../images/stack icons/typescript.png'

const skills = [
  { label: 'JavaScript', icon: javascriptIcon },
  { label: 'TypeScript', icon: typescriptIcon },
  { label: 'React', icon: reactIcon },
  { label: 'Node.js', icon: nodeIcon },
  { label: 'AWS', icon: awsIcon },
  { label: 'LLMs', icon: llmIcon },
  { label: 'CSS', icon: cssIcon },
  { label: 'Tailwind CSS', icon: tailwindIcon },
  { label: 'HTML', icon: htmlIcon },
  { label: 'Google Cloud', icon: googleCloudIcon },
  { label: 'Git', icon: githubIcon },
  { label: 'Python', icon: pythonIcon }
] as const

export default function AboutSection(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="about"
      className="story-section story-section-about"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="story-section-surface story-section-inner">
        <div className="story-about-layout">
          <div className="story-about-media">
            <img src={selfie2} alt="Mitchell Vieira" className="story-about-avatar" />
          </div>

          <div className="story-about-copy">
            <SectionHeading
              eyebrow="About Me"
              title="Small intro, big focus"
              copy="My name is Mitchell Vieira, I'm a frontend-focused web developer who builds clear UX, strong structure, and projects that feel intentional from the first interaction."
            />

            <div className="story-about-text">
              <p>
                I’m based just outside the GTA and have spent the last few years building projects, learning new tools, and sharpening the craft of turning ideas into polished interfaces.
              </p>
              <p>
                My background mixes commerce, customer-facing work, and self-directed development, which shapes how I think about users, clarity, and product flow.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="story-tech-panel">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I reach for"
          copy="A compact snapshot of the stack I use most often."
          align="center"
        />

        <div className="story-tech-grid">
          {skills.map((skill) => (
            <div key={skill.label} className="story-tech-card">
              <span className="story-tech-icon-slot" aria-hidden="true">
                <img src={skill.icon} alt="" aria-hidden="true" className="story-tech-icon-image" />
              </span>
              <span className="story-tech-chip">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
