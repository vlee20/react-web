
// motion and useAnimation Hooks from Framer Motion;
// useEffect Hook from React;
// useInView Hook from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import "../styles/Contact.css";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};


const Box = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1 className="pgbreak">Box {num} </h1>
    </motion.div>
  );
};



export default function Contact() {
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      {/* <div>
        <motion.div variants={boxVariant}
          ref={ref}
          initial="hidden"
          whileInView="visible"
          animate={control}>
          <h1 className="pgbreak">Contact</h1>
        </motion.div>
        <motion.div variants={boxVariant}
          ref={ref}
          initial="hidden"
          whileInView="visible"
          animate={control}>
          <h1 className="pgbreak">Contact2</h1>
        </motion.div>
      </div> */}
    <div className="App">
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </div>
    </>
  );
}
