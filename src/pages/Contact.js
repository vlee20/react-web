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
import fatty_tuna_jp from "../img/R0000918.JPG";
import under_freeway_jp from "../img/R0000930.JPG";

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

const GroupImg = ({ image, desc }) => {
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
        alt={"desc"}
        style={{
          maxWidth: 350,
          maxHeight: 350,
          padding: 5
        }}
      />
    </motion.div>
  );
};

const ImageCont = ({ image, desc }) => {
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
        alt={desc}
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
        <ImageCont image={mammoth_mountain} desc={"Picture from Mammoth"} />
        <div className="container2">
          <div className="container2">
            <GroupImg image={sakura_jp} desc={"Picture from Japan"} />
            <GroupImg image={hakone_shrine_jp} desc={"Picture from Japan"} />
            <GroupImg image={fatty_tuna_jp} desc={"Picture from Japan"} />
            <GroupImg image={under_freeway_jp} desc={"Picture from Japan"} />
          </div>
          <div>
            <p style={{padding:30, alignContent: "center"}}>
                You already know where this was taken judging by the pictures.
                Can't explain how surreal this trip was because its JAPAN.
                Theres really an endless amount of spots to explore around.
                I've never seen rain so beautiful that it made me love it.
                Also, I love listening to the sounds of the street lights and trains.
                Matter of fact, their public transportation is far superior.
                Miss every second truly....
              </p>
          </div>
        </div>
      </div>
    </>
  );
}
