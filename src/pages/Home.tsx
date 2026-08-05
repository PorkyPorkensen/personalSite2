import { type JSX } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

  const frontendStack = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Responsive Design", "UI/UX Design"
  ];

  const backendStack = [
    "Node.js", "Express.js", "REST APIs", "Firebase", 
    "MongoDB", "Git", "AWS", "Database Design"
  ];

  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Custom responsive websites built with modern technologies and best practices.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Modern UI/UX"]
    },
    {
      icon: "🔗",
      title: "API Integration",
      description: "Seamless integration with third-party services and custom API development.",
      features: ["RESTful APIs", "Third-party Services", "Data Processing", "Real-time Updates"]
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and security.",
      features: ["Server Architecture", "Database Design", "Authentication", "Cloud Deployment"]
    }
  ];

  const sectionReveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: easeOutCubic
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  const chipReveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 14,
      scale: shouldReduceMotion ? 1 : 0.96
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: easeOutCubic
      }
    }
  };

  const serviceCardReveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 26
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: easeOutCubic
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: 'url(/bg2.svg)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Hero/Intro Section */}
        <motion.section
          className="bg-white shadow-2xl rounded-2xl p-8 mb-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            variants={sectionReveal}
          >
            Hi, I'm Mitchell
          </motion.h1>
          <motion.p className="text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed" variants={sectionReveal}>
            Full-Stack Developer specializing in modern web applications
          </motion.p>
          <motion.p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed" variants={sectionReveal}>
            I create responsive, user-friendly websites and robust backend solutions using cutting-edge technologies. 
            With over 4 years of self-guided learning and hands-on project experience, I bring both technical expertise 
            and creative problem solving to every project.
          </motion.p>
        </motion.section>

        {/* Tech Stacks Section */}
        <motion.section
          className="grid md:grid-cols-2 gap-8 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Frontend Stack */}
          <motion.div className="bg-white shadow-xl rounded-2xl p-8" variants={sectionReveal}>
            <motion.h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center" variants={sectionReveal}>
              <span className="text-2xl mr-3">🎨</span>
              Frontend Skills
            </motion.h2>
            <motion.div className="grid grid-cols-2 gap-3" variants={staggerContainer}>
              {frontendStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-center font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  variants={chipReveal}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.04 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Stack */}
          <motion.div className="bg-white shadow-xl rounded-2xl p-8" variants={sectionReveal}>
            <motion.h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center" variants={sectionReveal}>
              <span className="text-2xl mr-3">🔧</span>
              Backend Skills
            </motion.h2>
            <motion.div className="grid grid-cols-2 gap-3" variants={staggerContainer}>
              {backendStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-center font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  variants={chipReveal}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.04 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="bg-white shadow-2xl rounded-2xl p-8 mb-8"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center" variants={sectionReveal}>
            <span className="text-3xl mr-3">💼</span>
            Services I Offer
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {services.map((service, index) => (
              <motion.article
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-[background-color,box-shadow] duration-300 hover:bg-gray-100"
                variants={serviceCardReveal}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: easeOutCubic }}
              >
                <motion.div
                  className="text-4xl mb-4 text-center"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
                  transition={{ duration: 0.2, ease: easeOutCubic }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      className="text-sm text-gray-500 flex items-center"
                      variants={chipReveal}
                    >
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl rounded-2xl p-8 text-center text-white"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2 className="text-3xl font-bold mb-4" variants={sectionReveal}>Ready to Start Your Project?</motion.h2>
          <motion.p className="text-xl mb-6 opacity-90" variants={sectionReveal}>
            Let's discuss how I can help bring your ideas to life
          </motion.p>
          <motion.div variants={sectionReveal}>
            <Link 
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <motion.span
                className="inline-block"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              >
                Get In Touch
              </motion.span>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}