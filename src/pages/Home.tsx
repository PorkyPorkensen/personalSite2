import { type CSSProperties, type JSX, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import lanternShowcase from '../images/lanternSHOWCASE.png'
import sportsShowcase from '../images/sportsSHOWCASE.png'
import solScannerShowcase from '../images/SSSHOWCASE.png'
import tcgShowcase from '../images/tcgtSHOWCASE.png'
import arrowHint from '../images/arrow.png'
import testBackground from '../images/testbg.jpg'
import logo from '../images/whitelogotrans.png'
import AboutSection from '../components/story/AboutSection'
import ContactSection from '../components/story/ContactSection'
import ProjectGrid from '../components/story/ProjectGrid'
import SectionHeading from '../components/story/SectionHeading'

const showcaseSlides = [
  {
    image: lanternShowcase,
    alt: 'The Lantern Keeper interface preview'
  },
  {
    image: sportsShowcase,
    alt: 'SportSync dashboard preview'
  },
  {
    image: solScannerShowcase,
    alt: 'SolScanner wallet tracker preview'
  },
  {
    image: tcgShowcase,
    alt: 'TCGTracker collection analytics preview'
  }
] as const

export default function Home(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState(0)
  const [pointer, setPointer] = useState({ x: 60, y: 38 })
  const [scrollCueOpacity, setScrollCueOpacity] = useState(1)
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    if (shouldReduceMotion) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseSlides.length)
    }, 6200)

    return () => window.clearInterval(intervalId)
  }, [shouldReduceMotion])

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const target = document.querySelector(location.hash)
    if (!target) {
      return
    }

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' })
    })
  }, [location.hash, shouldReduceMotion])

  useEffect(() => {
    const fadeStart = 80
    const fadeEnd = 240

    const updateOpacity = () => {
      const scrollY = window.scrollY
      let nextOpacity = 1

      if (scrollY > fadeStart) {
        nextOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)
      }

      setScrollCueOpacity(Math.max(0, Math.min(1, Number(nextOpacity.toFixed(3)))))
    }

    let rafId = window.requestAnimationFrame(updateOpacity)

    const onScroll = () => {
      window.cancelAnimationFrame(rafId)
      rafId = window.requestAnimationFrame(updateOpacity)
    }

    updateOpacity()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const spotlightStyle = useMemo(
    () => ({
      '--spot-x': `${pointer.x}%`,
      '--spot-y': `${pointer.y}%`
    }) as CSSProperties,
    [pointer.x, pointer.y]
  )

  const onHeroMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100

    setPointer({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    })
  }

  return (
    <main
      className="home-shell min-h-screen"
      onMouseMove={onHeroMouseMove}
      style={spotlightStyle}
    >
      <div className="home-bg-layer" aria-hidden="true" />
      <div
        className="home-bg-reveal"
        aria-hidden="true"
        style={{ backgroundImage: `url(${testBackground})` }}
      />
      <div className="home-vignette" aria-hidden="true" />

      <Link to="/" className="home-corner-logo" aria-label="Go to homepage">
        <img src={logo} alt="Mitchell Vieira logo" className="home-corner-logo-image" />
      </Link>

      <section id="home" className="home-hero-grid story-section story-section-hero">
        <motion.div
          className="home-hero-copy-wrap"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="home-hero-title">
            <span>Hi,</span>
            <span>
              I&apos;m <span className="home-hero-name">Mitch.</span>
            </span>
            <span>Web Developer</span>
          </p>

          <p className="home-hero-subtitle">
            Building responsive, modern products with careful UX and clean frontend architecture.
          </p>
        </motion.div>

        <motion.a
          className="home-scroll-cue"
          href="#about"
          aria-label="Scroll to the about section"
          style={{ opacity: scrollCueOpacity }}
          animate={shouldReduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2 }
              : { duration: 1.9, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <img src={arrowHint} alt="" aria-hidden="true" className="home-scroll-cue-image" />
        </motion.a>

        <motion.div
          id="showcase"
          className="home-showcase-shell"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          <div className="home-showcase-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={showcaseSlides[activeSlide].image}
                src={showcaseSlides[activeSlide].image}
                alt={showcaseSlides[activeSlide].alt}
                className="home-showcase-image"
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>

          <div className="home-showcase-dots" aria-hidden="true">
            {showcaseSlides.map((slide) => (
              <span
                key={slide.image}
                className={slide.image === showcaseSlides[activeSlide].image ? 'home-dot is-active' : 'home-dot'}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <AboutSection />

      <section id="portfolio" className="story-section story-section-portfolio">
        <div className="story-section-surface story-section-inner">
          <SectionHeading
            eyebrow="Portfolio"
            title="My work so far"
            copy="A compact archive of some of my work, displaying my skills and the types of projects I enjoy building."
          />
          <ProjectGrid limit={6} />
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
