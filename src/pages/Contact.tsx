import { type JSX, useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact(): JSX.Element {
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const easeOutCubic = [0.22, 1, 0.36, 1] as const

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    
    setIsLoading(true)
    
    emailjs.sendForm(
      'service_9sn8rem',
      'template_yw2f39j',
      formRef.current,
      'oSA5rsgKjM2FLo_K2'
    ).then(
      () => {
        setSent(true)
        setIsLoading(false)
        formRef.current && formRef.current.reset()
        setTimeout(() => setSent(false), 3500)
      },
      (error: any) => {
        console.log(error.text)
        setIsLoading(false)
      }
    )
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "mitchvwebsolutions@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/mitchell-vieira-894442151/",
      description: "Connect with me professionally"
    },
    {
      icon: "🐱",
      title: "GitHub",
      value: "https://github.com/PorkyPorkensen",
      description: "Check out my code"
    }
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
    <div className="contact-shell min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="contact-noise" aria-hidden="true" />

      <motion.div
        className="relative z-[1] mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.section className="contact-hero" variants={reveal}>
          <p className="contact-kicker">Contact</p>
          <h1 className="contact-title">Let&apos;s Work Together</h1>
          <p className="contact-copy">
            Ready to bring your project to life? I would love to hear your ideas
            and shape a strong build plan with you.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-full mt-8">
          <motion.section className="contact-panel w-full" variants={reveal}>
            <h2 className="contact-panel-title">Send Me a Message</h2>

            {sent && (
              <div className="contact-success mb-6">
                <p className="font-medium">
                  Message sent successfully. I will get back to you soon.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="contact-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="contact-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="contact-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="contact-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="contact-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="contact-input contact-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="contact-submit"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#151b29]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.section>

          <div className="space-y-8 w-full">
            <motion.section className="contact-panel w-full" variants={reveal}>
              <h2 className="contact-panel-title">Other Ways to Reach Me</h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div key={method.title} className="contact-method-row">
                    <div className="text-2xl" aria-hidden="true">{method.icon}</div>
                    <div className="flex-1">
                      <h3 className="contact-method-title">{method.title}</h3>
                      {method.title === 'Email' ? (
                        <p className="contact-method-link">{method.value}</p>
                      ) : (
                        <a
                          href={method.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-method-link"
                        >
                          {method.title === 'LinkedIn' ? 'linkedin.com/in/mitchell-vieira' : 'github.com/PorkyPorkensen'}
                        </a>
                      )}
                      <p className="contact-method-copy">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section className="contact-status" variants={reveal}>
              <h2 className="contact-status-title">Quick Response</h2>
              <p className="contact-status-copy">
                I typically respond to messages within 24 hours. For urgent
                inquiries, feel free to reach out directly via email.
              </p>
              <div className="contact-status-list space-y-1 text-sm text-[#c8d8ee]">
                <p>Response time: Within 24 hours</p>
                <p>Time zone: EST (UTC-5)</p>
                <p>Preferred contact: Email or contact form</p>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}