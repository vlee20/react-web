import { Animator, ScrollContainer, ScrollPage, Sticky, batch, Fade, Move, MoveIn, MoveOut, FadeOut, FadeIn, ZoomIn, StickyIn } from 'react-scroll-motion'
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
        <div className='container'>
          <ScrollPage page={1}>
            <Animator animation={batch(Sticky(25), Fade())}>
              <img
                src={mammoth_mountain}
                alt={"Taken leaving Mammoth Mountain"}
                style={{
                  maxWidth: 700,
                  maxHeight: 700,
                }}
              />
            </Animator>
            <Animator animation={batch(Sticky(75), Fade())}>
              <p>
                This is located near the Mammoth Mountain resort.
                Mammoth has always been an annual trip with friends. We always make memories riding down the slopes.
                Snowboarding has been one of my favorite sports because of how scenic and fun it is.
              </p>
            </Animator>
          </ScrollPage>
        </div>
        <ScrollPage page={2}>
          <Animator animation={batch(Sticky(25), Fade())}>
            <div className='single_container'>
              <img
                src={lake_tahoe_lake}
                alt={"Taken leaving Lake Tahoe"}
                style={{
                  maxWidth: 700,
                  maxHeight: 700,
                }}
              />
            </div>
          </Animator>
          <Animator animation={batch(Sticky(75), Fade())}>
            <p>
              This is located near the Palisades resort at Lake Tahoe.
              It was a crazy drive from SoCal all the way to San Jose. Then from San Jose to Lake Tahoe.
              The amount of time driving was insane because it was during a storm, but we were all able to make it in one peace.
              I recommend visiting Lake Tahoe sometime. There are so many resorts and the slopes are long and wide.
              This trip was truly one for the books.
            </p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(MoveIn(-1000, 0), Sticky(20, 32), Fade())}>
            <img
              src={fatty_tuna_jp}
              alt={"Taken in Japan"}
            />
          </Animator>
          <Animator animation={batch(MoveIn(-1000, 0), Sticky(42, 32), Fade())}>
            <img
              src={under_freeway_jp}
              alt={"Taken in Japan"}
            />
          </Animator>
          <Animator animation={batch(MoveIn(1000, 0), Sticky(20, 67), Fade())}>
            <img
              src={sakura_jp}
              alt={"Taken in Japan"}
            />
          </Animator>
          <Animator animation={batch(MoveIn(1000, 0), Sticky(42, 67), Fade())}>
            <img
              src={hakone_shrine_jp}
              alt={"Taken in Japan"}
            />
          </Animator>

          <Animator animation={batch(Sticky(75), Fade())}>
            <p>
              You already know where this was taken judging by the pictures.
              Can't explain how surreal this trip was because its JAPAN.
              Theres really an endless amount of spots to explore around.
              I've never seen rain so beautiful that it made me love it.
              Also, I love listening to the sounds of the street lights and trains.
              Matter of fact, their public transportation is far superior.
              Miss every second truly....
            </p>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>

  );
}
