import { useState, type JSX } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

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

  return (
    <motion.nav
      className="fixed border border-transparent shadow-lg py-4 px-8 align-center items-center flex-col top-0 left-0 right-0 z-10 bg-white md:p-4"
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
            className="w-6 h-0.5 bg-black block"
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
        </button>

        {/* Logo - Centered on mobile */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        {/* Empty div to balance the layout */}
        <div className="w-10"></div>
      </div>

      {/* Desktop Layout - md and up */}
      <div className="hidden md:flex items-center justify-between w-full px-6">
        {/* Logo on the left */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
        
        {/* Navigation items in the center */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-600 cursor-pointer">My Projects</Link>
          </li>
        </ul>

        {/* Contact button on the right */}
        <Link to="/contact">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Contact
          </button>
        </Link>
      </div>

      {/* Mobile Dropdown Menu - Only visible when menu is open */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.ul
            className="sm:hidden md:hidden w-full bg-white border-t border-gray-200 pt-4 mt-6 overflow-hidden"
            variants={menuContainer}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.li variants={mobileItem}>
              <Link to="/" className="block hover:text-blue-600 cursor-pointer py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </motion.li>
            <motion.li variants={mobileItem}>
              <Link to="/about" className="block hover:text-blue-600 cursor-pointer py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>About</Link>
            </motion.li>
            <motion.li variants={mobileItem}>
              <Link to="/portfolio" className="block hover:text-blue-600 cursor-pointer py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            </motion.li>
            <motion.li variants={mobileItem}>
              <Link to="/contact" className="block hover:text-blue-600 cursor-pointer py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}