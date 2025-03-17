import React, { useState } from "react";
import "../styles/mainbg.scss";

function StarsBgAnimation() {
  const [scrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <>
      <div className="stars-fg" style={{ transform: `translateY(-${scrollY * 0.6}px)` }} />
      <div className="stars-mg" style={{ transform: `translateY(-${scrollY * 0.3}px)` }} />
      <div className="stars-bg" style={{ transform: `translateY(-${scrollY * 0.1}px)` }} />
    </>
  );
}

export default StarsBgAnimation;