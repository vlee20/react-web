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
import mammoth_mountain from "../img/R0000843.JPG";
import lake_tahoe_lake from "../img/R0000886.JPG";
import fatty_tuna_jp from "../img/R0000918.JPG";
import under_freeway_jp from "../img/R0000930.JPG";
import sakura_jp from "../img/R0000961.JPG";
import hakone_shrine_jp from "../img/R0001306.JPG";
import "../styles/Home.css";

// motion and useAnimation Hooks from Framer Motion;
// useEffect Hook from React;
// useInView Hook from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(StickyIn(), Fade(), ZoomIn())}>
            <h2>Welcome to my Portfolio Page</h2>
            <h3>This is an archive of the recent trips I've visited.</h3>
            <h3>I like to travel if you can't tell!</h3>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}
