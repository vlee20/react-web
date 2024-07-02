// motion and useAnimation Hooks from Framer Motion;
// useEffect Hook from React;
// useInView Hook from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import "../styles/Contact.css";

import mammoth_mountain from "../img/R0000843.JPG";
import sakura_jp from "../img/R0000961.JPG";
import hakone_shrine_jp from "../img/R0001306.JPG";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
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

const Group = ({ image }) => {
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
      <img
        src={image}
        alt={"--"}
        style={{
          maxWidth: 350,
          maxHeight: 350,
        }}
      />
    </motion.div>
  );
};

const ImageCont = ({ num }) => {
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
      <img
        src={mammoth_mountain}
        alt={"Taken leaving Mammoth Mountain"}
        style={{
          maxWidth: 700,
          maxHeight: 700,
        }}
      />
    </motion.div>
  );
};
export default function Contact() {
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
    <>
      <div className="App">
        <Box num={1} />
        <Box num={2} />
        <ImageCont num={1} />
        <div className="container2">
          <Group image={sakura_jp} />
          <Group image={hakone_shrine_jp} />
        </div>
      </div>
    </>
  );
}
