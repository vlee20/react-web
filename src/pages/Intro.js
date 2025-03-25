import "../styles/styles.css";
import Typewriter from "../components/Typewriter.js";
// import "../styles/Starfield.css";
import { color } from "framer-motion";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <div
      id="Intro"
      className="center-horizontal page"
      style={{}}
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: {duration:2}}} viewport={{ once: true }}>

      <div id="IntroCont">
        <h2 style={{}}><Typewriter text = "Welcome" delay={200}/></h2>
      </div>
      </motion.div>
    </div>
  );
}
