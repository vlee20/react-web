import "../styles/styles.css";
import Typewriter from "../components/Typewriter.js";
// import "../styles/Starfield.css";
import { color } from "framer-motion";

export default function Intro() {
  return (
    <div
      id="Intro"
      className="center-horizontal page"
      style={{}}
    >
      <div id="IntroCont">
        <h2 style={{}}><Typewriter text = "Welcome" delay={200}/></h2>
      </div>
    </div>
  );
}
