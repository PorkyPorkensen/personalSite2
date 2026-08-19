import { type JSX } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectGrid from '../components/story/ProjectGrid'
import SectionHeading from '../components/story/SectionHeading'

export default function Portfolio(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="portfolio-shell min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="portfolio-noise" aria-hidden="true" />

      <motion.div
        className="relative z-[1] mx-auto max-w-6xl"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected builds"
          copy="A compact archive of the work so far, presented in a grid that is easier to skim and more aligned with the new single-page flow."
        />

        <div className="mt-8">
          <ProjectGrid />
        </div>
      </motion.div>
    </div>
  )
}
