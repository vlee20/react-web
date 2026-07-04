import "../styles/Intro.css";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import avatar from "../img/pp.JPG";

const chips = [
  { label: "Python", className: "chip-1" },
  { label: "Django REST", className: "chip-2" },
  { label: "GCP", className: "chip-3" },
  { label: "Networking", className: "chip-4" },
];

const roles = [
  "Software Engineer",
  "Cloud & Automation Developer",
  "CCNA Candidate",
];

function RotatingRole({ words }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === word) delay = 2200;
    if (deleting && text === "") delay = 350;

    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((wordIdx + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words]);

  return (
    <span className="hero-role-type">
      {text}
      <span className="hero-cursor" aria-hidden="true" />
    </span>
  );
}

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
          <p className="hero-role">
            <RotatingRole words={roles} />
          </p>
          <p className="hero-bio">
            I build cloud-integrated REST APIs, ETL pipelines, and automation
            tooling that run in production &mdash; from Django services on GCP
            to interactive dashboards. I&rsquo;m currently strengthening my
            infrastructure roots by studying for the Cisco CCNA, labbing
            routing, switching, and subnetting in my free time.
          </p>
          <div className="hero-actions">
            <a href="#Projects" className="btn btn-primary">
              View My Work
            </a>
            <a
              href={process.env.PUBLIC_URL + "/resume.pdf"}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-file-earmark-arrow-down btn-icon" /> Resume
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

          <div className="hero-focus" aria-label="Focus areas">
            <span className="hero-focus-item">
              <i className="bi bi-braces" /> Software Engineering
            </span>
            <span className="hero-focus-sep" aria-hidden="true" />
            <span className="hero-focus-item">
              <i className="bi bi-cloud-check" /> Cloud &amp; Infrastructure
            </span>
            <span className="hero-focus-sep" aria-hidden="true" />
            <span className="hero-focus-item">
              <i className="bi bi-hdd-network" /> Networking &middot; CCNA in
              progress
            </span>
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
