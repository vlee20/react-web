import "../styles/Intro.css";
import { motion, AnimatePresence } from "motion/react";
import Typewriter from "../components/Typewriter.js";
import { useEffect, useState } from "react";
// Slideshow images (all starting with 'R')
import R0000886 from "../img/R0000886.JPG";
import R0000930 from "../img/R0000930.JPG";
import R0000961 from "../img/R0000961.JPG";
import R0001052 from "../img/R0001052.JPG";
import R0001097 from "../img/R0001097.JPG";
import R0001118 from "../img/R0001118.JPG";
import R0001224 from "../img/R0001224.JPG";
import R0001263 from "../img/R0001263.JPG";
import R0001274 from "../img/R0001274.JPG";
import R0001306 from "../img/R0001306.JPG";

export default function Intro() {
  const images = [
    R0000886,
    R0000930,
    R0000961,
    R0001052,
    R0001097,
    R0001118,
    R0001224,
    R0001263,
    R0001274,
    R0001306,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 7000); // 3 seconds
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section id="Intro" className="intro-section page-background">
      <div className="intro-bg">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="intro-bg-layer"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 7 }}
            aria-hidden="true"
          />
        </AnimatePresence>
      </div>
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
