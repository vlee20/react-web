// motion and useAnimation Hooks from Framer Motion;
// useEffect Hook from React;
// useInView Hook from 'react-intersection-observer'
import { motion, useAnimation, useScroll} from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  Fade,
  Move,
  MoveIn,
  MoveOut,
  FadeOut,
  FadeIn,
  ZoomIn,
  StickyIn,
} from "react-scroll-motion";

import "../styles/Contact.css";

import mammoth_mountain from "../img/R0000843.JPG";
import lake_tahoe_lake from "../img/R0000886.JPG";
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
          padding: 5,
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
        className="singleImg"
      />
    </motion.div>
  );
};
export default function Contact() {
  const control = useAnimation();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
      <div className="App">
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        {/* <div className="pgbreak">

          <h2>Welcome to my Portfolio Page</h2>
          <h3>This is an archive of the recent trips I've visited.</h3>
          <h3>I like to travel if you can't tell!</h3>
        </div> */}
        <div className="container1">
          <ImageCont image={mammoth_mountain} desc={"Picture from Mammoth"} />
          <div>
            <p>
              This is located near the Mammoth Mountain resort. Mammoth has
              always been an annual trip with friends. We always make memories
              riding down the slopes. Snowboarding has been one of my favorite
              sports because of how scenic and fun it is.
            </p>
          </div>
        </div>
        <div className="container1">
          <ImageCont image={lake_tahoe_lake} desc={"Picture from Lake Tahoe"} />
          <div>
            <p>
              This is located near the Palisades resort at Lake Tahoe. It was a
              crazy drive from SoCal all the way to San Jose. Then from San Jose
              to Lake Tahoe. The amount of time driving was insane because it
              was during a storm, but we were all able to make it in one peace.
              I recommend visiting Lake Tahoe sometime. There are so many
              resorts and the slopes are long and wide. This trip was truly one
              for the books.
            </p>
          </div>
        </div>
        <div className="container1">
          <div className="container2">
            <GroupImg image={sakura_jp} desc={"Picture from Japan"} />
            <GroupImg image={hakone_shrine_jp} desc={"Picture from Japan"} />
            <GroupImg image={fatty_tuna_jp} desc={"Picture from Japan"} />
            <GroupImg image={under_freeway_jp} desc={"Picture from Japan"} />
          </div>
          <div>
            <p style={{ alignContent: "center" }}>
              You already know where this was taken judging by the pictures.
              Can't explain how surreal this trip was because its JAPAN. Theres
              really an endless amount of spots to explore around. I've never
              seen rain so beautiful that it made me love it. Also, I love
              listening to the sounds of the street lights and trains. Matter of
              fact, their public transportation is far superior. Miss every
              second truly....
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
