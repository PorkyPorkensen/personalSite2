import { useState, type JSX } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import navLogo from '../images/mvlogo1.png'

const navItems = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#portfolio', label: 'Portfolio' },
  { to: '/#contact', label: 'Contact' }
] as const

export default function Nav(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return location.pathname === '/' && !prefersReducedMotion
  })

  const railAnim = {
    hidden: { x: shouldReduceMotion ? 0 : -20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.36 }
    }
  }

  const drawerAnim = {
    hidden: { x: shouldReduceMotion ? 0 : -40, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.04
      }
    },
    exit: {
      x: shouldReduceMotion ? 0 : -22,
      opacity: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.2 }
    }
  }

  const drawerItem = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -12 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.25 }
    }
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="site-intro-overlay"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setShowIntro(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.nav
        className="site-left-rail"
        variants={railAnim}
        initial={showIntro ? { x: 'calc(100vw - 3.9rem)', opacity: 1 } : 'hidden'}
        animate={showIntro ? { x: 0, opacity: 1 } : 'show'}
        transition={showIntro ? { duration: 1.5, ease: [0.22, 1, 0.36, 1] } : undefined}
      >
        <Link to="/" className="site-rail-spacer" aria-label="Go to homepage">
          <img src={navLogo} alt="MV logo" className="site-rail-logo" />
        </Link>

        <button
          className="site-hamburger"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={isMenuOpen ? 'site-hamburger-bar is-open' : 'site-hamburger-bar'} />
          <span className={isMenuOpen ? 'site-hamburger-bar is-open' : 'site-hamburger-bar'} />
          <span className={isMenuOpen ? 'site-hamburger-bar is-open' : 'site-hamburger-bar'} />
        </button>

        <p className="site-rail-tag">MV</p>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              className="site-drawer-backdrop"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            />

            <motion.aside
              className="site-drawer"
              variants={drawerAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <p className="site-drawer-kicker">Navigation</p>
              <ul className="site-drawer-list">
                {navItems.map((item) => (
                  <motion.li key={item.to} variants={drawerItem}>
                    <Link to={item.to} className="site-drawer-link" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}