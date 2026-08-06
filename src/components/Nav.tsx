import { useState, type JSX } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/whitelogotrans.png'

export default function Nav():JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const easeOutCubic = [0.22, 1, 0.36, 1] as const

  const menuContainer = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: easeOutCubic
      }
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: easeOutCubic,
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  }

  const mobileItem = {
    closed: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -6
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: easeOutCubic
      }
    }
  }

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `site-nav-link ${isActive ? 'site-nav-link-active' : ''}`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `site-nav-mobile-link ${isActive ? 'site-nav-mobile-link-active' : ''}`

  return (
    <motion.nav
      className="site-nav-shell fixed py-3 px-5 align-center items-center flex-col top-0 left-0 right-0 z-20 md:p-3"
      initial={{ y: shouldReduceMotion ? 0 : -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: easeOutCubic }}
    >
      {/* Mobile Layout */}
      <div className="relative flex items-center justify-between w-full md:hidden">
        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className="sm:hidden flex flex-col gap-1 p-2 z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <motion.span
            className="site-nav-bar w-6 h-0.5 block"
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
          <motion.span
            className="site-nav-bar w-6 h-0.5 block"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
          <motion.span
            className="site-nav-bar w-6 h-0.5 block"
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
        </button>

        {/* Logo - Centered on mobile */}
        <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-1">
          <img src={logo} alt="Logo" className="block h-16" />
        </Link>

        {/* Empty div to balance the layout */}
        <div className="w-10"></div>
      </div>

      {/* Desktop Layout - md and up */}
      <div className="hidden md:flex items-center justify-between w-full px-6">
        {/* Logo on the left */}
        <Link to="/">
          <img src={logo} alt="Logo" className="block h-16 lg:h-20" />
        </Link>
        
        {/* Navigation items in the center */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <NavLink to="/" className={desktopLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={desktopLinkClass}>About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={desktopLinkClass}>My Projects</NavLink>
          </li>
        </ul>

        {/* Contact button on the right */}
        <NavLink to="/contact" className="site-nav-contact">
          Contact
        </NavLink>
      </div>

      {/* Mobile Dropdown Menu - Only visible when menu is open */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.ul
            className="sm:hidden md:hidden w-full site-nav-mobile-menu pt-3 mt-4 overflow-hidden"
            variants={menuContainer}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.li variants={mobileItem}>
              <NavLink to="/" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            </motion.li>
            <motion.li variants={mobileItem}>
              <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            </motion.li>
            <motion.li variants={mobileItem}>
              <NavLink to="/portfolio" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
            </motion.li>
            <motion.li variants={mobileItem}>
              <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}