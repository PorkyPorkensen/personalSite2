import { type JSX } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import lanternShowcase from "../images/lanternSHOWCASE.png";
import sportsShowcase from "../images/sportsSHOWCASE.png";
import solScannerShowcase from "../images/SSSHOWCASE.png";
import tcgShowcase from "../images/tcgtSHOWCASE.png";

const featuredProjects = [
  {
    title: "The Lantern Keeper",
    label: "Interactive Storytelling AI",
    description:
      "A narrative-first app designed around mood, character creation, and immersive roleplay prompts.",
    stack: ["React", "Node", "Prompt Design"],
    image: lanternShowcase,
    glowClass: "home-glow-amber"
  },
  {
    title: "SportSync",
    label: "Live Scores and League Stats",
    description:
      "A polished sports dashboard with mobile-first cards, scheduling data, and a clean browsing flow.",
    stack: ["TypeScript", "API Integration", "Responsive UI"],
    image: sportsShowcase,
    glowClass: "home-glow-blue"
  },
  {
    title: "SolScanner",
    label: "Solana Wallet Tracker",
    description:
      "A neon visual style with on-chain wallet visibility and fast API-backed token value snapshots.",
    stack: ["Web3", "REST APIs", "Data Visualization"],
    image: solScannerShowcase,
    glowClass: "home-glow-cyan"
  },
  {
    title: "TCGTracker",
    label: "Collection Value Platform",
    description:
      "Card collection analytics with eye-catching visuals and value recalculation features across devices.",
    stack: ["React", "Database", "Authentication"],
    image: tcgShowcase,
    glowClass: "home-glow-gold"
  }
] as const;

const serviceOffers = [
  {
    index: "01",
    icon: "strategy",
    title: "Personalized Site Planning",
    description:
      "A discovery-first process to define audience, goals, and visual direction before development starts."
  },
  {
    index: "02",
    icon: "devices",
    title: "Mobile and Desktop Design",
    description:
      "Responsive layouts tuned for phone, tablet, and desktop so your site feels polished on every screen."
  },
  {
    index: "03",
    icon: "api",
    title: "API Integration",
    description:
      "Clean integration with third-party services and custom endpoints to power dynamic features and data flow."
  },
  {
    index: "04",
    icon: "seo",
    title: "Search Optimization",
    description:
      "Technical SEO setup with semantic structure, metadata, and performance-focused implementation."
  },
  {
    index: "05",
    icon: "content",
    title: "Content Architecture",
    description:
      "Thoughtful information structure so your content is easy to scan, understand, and maintain over time."
  },
  {
    index: "06",
    icon: "performance",
    title: "Performance and Reliability",
    description:
      "Fast loading experiences with optimized assets, efficient rendering, and stable production deployment."
  }
] as const;

function ServiceIcon({ kind }: { kind: (typeof serviceOffers)[number]["icon"] }): JSX.Element {
  if (kind === "strategy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="home-service-icon">
        <path d="M4 5h16M4 12h10M4 19h7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (kind === "devices") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="home-service-icon">
        <rect x="3.5" y="5" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="16.5" y="8" width="4" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 17h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "api") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="home-service-icon">
        <path d="M7 8l-3 4 3 4M17 8l3 4-3 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 5l-4 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "seo") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="home-service-icon">
        <circle cx="10" cy="10" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14.5 14.5L20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 10h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "content") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="home-service-icon">
        <path d="M7 4h8l4 4v12H7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M15 4v4h4M10 12h6M10 16h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="home-service-icon">
      <path d="M12 3l2 3.5 4 .7-2.8 2.8.6 4-3.8-1.9-3.8 1.9.6-4L6 7.2l4-.7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 20h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Home(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const easeOutCubic = [0.22, 1, 0.36, 1] as const;

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
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  return (
    <div className="home-shell min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="home-noise" aria-hidden="true" />
      <div className="home-radial" aria-hidden="true" />

      <motion.section
        className="relative z-[1] mx-auto max-w-6xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.p className="home-kicker" variants={sectionReveal}>
          Mitchell Vieira · Full-Stack Developer
        </motion.p>
        <motion.h1 className="home-hero-title" variants={sectionReveal}>
          Digital projects with a cinematic feel and a product-focused backbone.
        </motion.h1>
        <motion.p className="home-hero-copy" variants={sectionReveal}>
          I design and build responsive applications that look distinct, load fast,
          and scale with clean architecture. This version of the site leans into a
          showcase-forward style inspired by your mockups.
        </motion.p>

        <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-4" variants={sectionReveal}>
          <Link to="/portfolio" className="home-btn home-btn-primary">
            Explore My Projects
          </Link>
          <Link to="/contact" className="home-btn home-btn-outline">
            Start A Conversation
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="relative z-[1] mx-auto mt-14 max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="home-section-head" variants={sectionReveal}>
          <h2 className="home-section-title">Featured Builds</h2>
        </motion.div>

        <div className="mt-8 space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={sectionReveal}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: easeOutCubic }}
              className="home-project-card"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="order-2 lg:order-1">
                  <p className="home-project-label">{project.label}</p>
                  <h3 className="home-project-title">{project.title}</h3>
                  <p className="home-project-copy">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="home-chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link to="/portfolio" className="home-inline-link mt-6 inline-block">
                    View Build Details
                  </Link>
                </div>

                <div className={`order-1 lg:order-2 home-image-wrap ${project.glowClass}`}>
                  <img
                    src={project.image}
                    alt={`${project.title} on laptop and mobile`}
                    className="home-showcase-image"
                    loading={index > 1 ? "lazy" : "eager"}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="relative z-[1] mx-auto mt-14 max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="home-section-head" variants={sectionReveal}>
          <h2 className="home-section-title">What You Get</h2>
          <p className="home-section-copy">Standard features I build into modern websites.</p>
        </motion.div>

        <div className="home-services-grid mt-8">
          {serviceOffers.map((service) => (
            <motion.article
              key={service.title}
              variants={sectionReveal}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: easeOutCubic }}
              className="home-service-card"
            >
              <div className="home-service-icon-wrap">
                <ServiceIcon kind={service.icon} />
              </div>
              <p className="home-service-index">{service.index}</p>
              <h3 className="home-service-title">{service.title}</h3>
              <p className="home-service-copy">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="relative z-[1] mx-auto mt-14 max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="home-capstone" variants={sectionReveal}>
          <h2 className="home-capstone-title">Want your project to feel like a launch, not just a deploy?</h2>
          <p className="home-capstone-copy">
            I can help shape the UX, engineering flow, and visual personality from first wireframe to shipped product.
          </p>
          <Link to="/contact" className="home-btn home-btn-primary mt-6 inline-block">
            Contact Me
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}