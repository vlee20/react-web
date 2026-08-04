import "../styles/Projects.css";
import routefinder from "../img/route_finder.png";
import mealpickr from "../img/mealpickr.png";
import snake from "../img/snake.png";
import dashboard from "../img/finance-dashboard.png";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";

const featured = {
  title: "Overstock FPL API",
  label: "Production System",
  description:
    "Deployed and maintained a production server environment on GCP Linux VMs for a high-volume order and inventory system — full end-to-end ownership of network configuration, SSL certificates, DNS records, and web server setup.",
  infra:
    "Designed relational SQL schemas and backend validation scripts, then authored the architecture overviews, API references, and SOPs the team still runs on.",
  tags: ["Python", "Django", "MySQL", "GCP", "Nginx", "Linux"],
};

const projects = [
  {
    title: "Finance Tracker Dashboard",
    description:
      "Full-stack interactive dashboard that parses, stores, and visualizes financial data with cloud persistence — an intuitive, accessible UI with dynamic filters and a responsive layout across devices.",
    image: dashboard,
    link: "https://github.com/vlee20/dashboard",
    tags: ["React", "Vite", "Firebase", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "RouteFinder",
    description:
      "iOS app that plots running and biking routes between two points, with random distance ranges for when you can't decide where to go. Built on the MapKit API with all data stored locally.",
    image: routefinder,
    link: "https://github.com/vlee20/route_finder-master",
    tags: ["iOS", "MapKit", "Local Storage"],
  },
  {
    title: "MealPickr",
    description:
      "Android app that ends the \"where do we eat\" debate by randomly picking a nearby restaurant from your location and distance range, with filters for cuisine, meal type, and open hours.",
    image: mealpickr,
    link: "https://github.com/CSUF-CPSC411-2021F/group-project-team-hypervisor",
    tags: ["Android", "Geolocation", "Filters"],
  },
  {
    title: "Snake",
    description:
      "Classic Snake in Python and Pygame with object-oriented design — keyboard, mouse, and joystick controls, tunnels, a point system, and persistent high scores.",
    image: snake,
    link: "https://github.com/vlee20/snake_game",
    tags: ["Python", "Pygame", "OOP"],
  },
];

const apiLog = [
  { method: "POST", path: "/api/orders/sync", code: "201 Created" },
  { method: "GET", path: "/api/inventory/verify", code: "200 OK" },
  { method: "POST", path: "/api/alerts/duplicate-order", code: "200 OK" },
  { method: "GET", path: "/api/shipments?status=live", code: "200 OK" },
];

export default function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <span className="section-eyebrow">Selected Work</span>
      <h1 className="section-heading">Projects</h1>
      <p className="section-sub">
        Production systems I&rsquo;ve shipped at work and things I&rsquo;ve
        built on my own time.
      </p>

      {/* Featured production project */}
      <motion.div
        className="project-featured"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="project-featured-visual" aria-hidden="true">
          <div className="api-log">
            <div className="api-log-bar">
              <span className="term-dot term-dot-r" />
              <span className="term-dot term-dot-y" />
              <span className="term-dot term-dot-g" />
              <span className="api-log-title">gunicorn — access.log</span>
            </div>
            <div className="api-log-body">
              {apiLog.map((line, i) => (
                <motion.p
                  key={line.path}
                  className="api-log-line"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.3, delay: 0.4 + i * 0.25 },
                  }}
                  viewport={{ once: true }}
                >
                  <span className="api-method">{line.method}</span>
                  <span className="api-path">{line.path}</span>
                  <span className="api-code">{line.code}</span>
                </motion.p>
              ))}
            </div>
          </div>
        </div>
        <div className="project-featured-content">
          <span className="project-featured-label">
            <i className="bi bi-stars" /> {featured.label}
          </span>
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
          <p>{featured.infra}</p>
          <div className="project-tags">
            {featured.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: idx * 0.1 },
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            ) : (
              <div className="project-placeholder" aria-hidden="true" />
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github" /> View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
