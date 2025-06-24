import "../styles/Intro.css";
import { motion } from "motion/react";
import Typewriter from "../components/Typewriter.js";

export default function Intro() {
  return (
    <section id="Intro" className="intro-section page-background">
      <motion.div
        className="intro-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
        viewport={{ once: true }}
      >
        <h1 className="intro-title">
          <Typewriter text="Welcome" delay={120} />
        </h1>
        <p className="intro-subtitle">
          I’m Vincent Lee, a data-driven developer passionate about building
          impactful solutions.
        </p>
        <a href="#Projects" className="intro-cta">
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
