import { type JSX } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import selfie2 from '../images/selfie2.png'

export default function About(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const easeOutCubic = [0.22, 1, 0.36, 1] as const

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'Express',
    'CSS', 'Tailwind CSS', 'HTML', 'Google Cloud', 'Git', 'Python'
  ]

  const interests = [
    'My Dogs', 'Gaming', 'MMA', 'Basketball', 'Football'
  ]

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20
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
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  }

  return (
    <div className="about-shell min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="about-noise" aria-hidden="true" />

      <motion.div
        className="relative z-[1] mx-auto max-w-5xl"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.section className="about-hero" variants={reveal}>
          <div className="relative inline-block mb-5">
            <img
              src={selfie2}
              alt="Mitchell Vieira"
              className="about-avatar"
            />
            <span className="about-wave" aria-hidden="true">👋</span>
          </div>
          <p className="about-kicker">About</p>
          <h1 className="about-title">Meet Mitchell</h1>
          <p className="about-subcopy">
            Full-stack developer focused on meaningful user experiences,
            scalable architecture, and visual personality.
          </p>
        </motion.section>

        <motion.section className="about-panel mt-8" variants={reveal}>
          <h2 className="about-panel-title">My Story</h2>
          <div className="space-y-5 about-text">
            <p>
              My name is Mitchell Vieira, and I was born and raised just outside
              of the GTA (Greater Toronto Area), in a city of approximately
              150,000 residents. I attended Carleton University from 2017 to
              2019, where I pursued a degree in Commerce before having to step
              away due to medical reasons. Since then, I have gained experience
              in the retail sector and spent three years with Just Junk, a local
              waste management company, working directly with customers and
              delivering prompt, courteous service.
            </p>
            <p>
              For over 4 years, I have immersed myself in web development
              through self-guided learning and structured online courses. I have
              completed hundreds of hours of coursework, over 1600 lessons, and
              a multitude of solo projects as part of Scrimba&apos;s Frontend Career
              Path. I have also followed numerous YouTube crash courses focused
              on the MERN stack.
            </p>
          </div>
        </motion.section>

        <motion.section className="about-panel mt-8" variants={reveal}>
          <h2 className="about-panel-title">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <span key={skill} className="about-chip">{skill}</span>
            ))}
          </div>
          <p className="about-footnote">Currently exploring AI and expanding my Python knowledge.</p>
        </motion.section>

        <motion.section className="about-panel mt-8" variants={reveal}>
          <h2 className="about-panel-title">When I&apos;m Not Coding</h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span key={interest} className="about-interest">{interest}</span>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}