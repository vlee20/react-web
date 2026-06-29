import "../styles/Intro.css";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import avatar from "../img/pp.JPG";

const chips = [
  { label: "Python", className: "chip-1" },
  { label: "React", className: "chip-2" },
  { label: "GCP", className: "chip-3" },
  { label: "Django", className: "chip-4" },
];

export default function Intro() {
  return (
    <section id="Intro" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob-a" />
        <span className="hero-blob hero-blob-b" />
        <span className="hero-grid" />
      </div>

      <div className="hero-inner">
        {/* Left: intro + bio */}
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <span className="hero-badge">
            <span className="hero-badge-dot" /> Available for new opportunities
          </span>
          <h1 className="hero-title">
            Hi, I&rsquo;m <span className="hero-name">Vincent Lee</span>
          </h1>
          <p className="hero-role">Software Engineer</p>
          <p className="hero-bio">
            I&rsquo;m a data-driven developer who builds cloud-integrated APIs,
            ETL pipelines, and automation tooling that ship to production. From
            Django REST services on GCP to interactive dashboards, I turn messy
            data and manual workflows into reliable, efficient systems.
          </p>
          <div className="hero-actions">
            <a href="#Projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#Contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/vlee20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              href="https://github.com/vlee20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github" />
            </a>
            <a href="#Contact" aria-label="Email">
              <i className="bi bi-envelope-fill" />
            </a>
          </div>
        </motion.div>

        {/* Right: portrait + floating chips */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <div className="hero-portrait">
            <span className="hero-ring" aria-hidden="true" />
            <img src={avatar} alt="Vincent Lee" className="hero-avatar" />
            {chips.map((chip, i) => (
              <motion.span
                key={chip.label}
                className={`hero-chip ${chip.className}`}
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
