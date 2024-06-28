import { Animator, ScrollContainer, ScrollPage, Sticky, batch, Fade } from 'react-scroll-motion'
import mammoth_mountain from "../img/R0000843.JPG";
import lake_tahoe_lake from "../img/R0000886.JPG";
import fatty_tuna_jp from "../img/R0000918.JPG";
import under_freeway_jp from "../img/R0000930.JPG";
import sakura_jp from "../img/R0000961.JPG";

export default function Home() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), Fade())}>
            <h2>Welcome to my Portfolio Page</h2>
            <h3>This is an archive of the recent trips I've visited.</h3>
            <h3>I like to travel if you can't tell!</h3>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Sticky(), Fade())}>
            <img
              src={mammoth_mountain}
              alt={"Taken leaving Mammoth Mountain"}
              style={{
                width: 700,
                height: 700,
              }}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Sticky(), Fade())}>
          <img
              src={lake_tahoe_lake}
              alt={"Taken leaving Lake Tahoe"}
              style={{
                width: 700,
                height: 700,
              }}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Sticky(), Fade())}>
          <img
              src={fatty_tuna_jp}
              alt={"Taken in Japan"}
              style={{
                width: 700,
                height: 700,
              }}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Sticky(), Fade())}>
          <img
              src={under_freeway_jp}
              alt={"Taken in Japan"}
              style={{
                width: 700,
                height: 700,
              }}
            />
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={batch(Sticky(), Fade())}>
          <img
              src={sakura_jp}
              alt={"Taken in Japan"}
              style={{
                width: 700,
                height: 700,
              }}
            />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>

  );
}
