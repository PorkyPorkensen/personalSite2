import { type JSX } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const contactMethods = [
  {
    label: 'Email',
    value: 'mitchvwebsolutions@gmail.com',
    href: 'mailto:mitchvwebsolutions@gmail.com'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mitchell-vieira',
    href: 'https://www.linkedin.com/in/mitchell-vieira-894442151/'
  },
  {
    label: 'GitHub',
    value: 'github.com/PorkyPorkensen',
    href: 'https://github.com/PorkyPorkensen'
  }
]

export default function ContactSection(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="contact"
      className="story-section story-section-contact"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="story-section-surface story-section-inner story-contact-layout">
        <div className="story-contact-copy">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about the next build"
            copy="If you’ve got a project idea, a redesign, or just want to work through a concept, reach out and I’ll reply with next steps."
          />

          <div className="story-contact-methods">
            {contactMethods.map((method) => (
              <a key={method.label} href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="story-contact-pill">
                <span className="story-contact-label">{method.label}</span>
                <span className="story-contact-value">{method.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="story-contact-panel">
          <p className="story-contact-panel-title">Quick response</p>
          <p className="story-contact-panel-copy">
            I usually reply within 24 hours. For direct messaging, email is the quickest route.
          </p>
          <a href="mailto:mitchvwebsolutions@gmail.com" className="story-contact-cta">
            Send Email
          </a>
        </div>
      </div>
    </motion.section>
  )
}
