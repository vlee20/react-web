import "../styles/Navbar.css";
import "../styles/styles.css";
import { useEffect, useState } from "react";

// var savedScrollPos = 0;
// window.onscroll = function () {
//   var currentScrollPos = window.scrollY;
//   var diff = currentScrollPos - savedScrollPos;
//   if (diff > 0) {
//     // detects scrolling down
//     document.getElementById("nav").classList.remove("fade-in");
//     document.getElementById("nav").classList.add("fade-out");
//   } else {
//     document.getElementById("nav").classList.remove("fade-out");
//     document.getElementById("nav").classList.add("fade-in");
//   }
//   savedScrollPos = currentScrollPos;
// };

export default function Navbar() {
  const [activeId, setActiveId] = useState("Intro");

  useEffect(() => {
    const sectionIds = [
      "Intro",
      "Experience",
      "Skills",
      "Projects",
      "Contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav id="nav">
        <div>
          <ul className="navbar-set center-vertical">
            <li className={`nitem ${activeId === "Intro" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#Intro"
                aria-current={activeId === "Intro" ? "page" : undefined}
              >
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className={`nitem ${activeId === "Experience" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#Experience"
                aria-current={activeId === "Experience" ? "page" : undefined}
              >
                Experience
              </a>
            </li>
            <li className={`nitem ${activeId === "Skills" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#Skills"
                aria-current={activeId === "Skills" ? "page" : undefined}
              >
                Skills
              </a>
            </li>
            <li className={`nitem ${activeId === "Projects" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#Projects"
                aria-current={activeId === "Projects" ? "page" : undefined}
              >
                Projects
              </a>
            </li>
            <li className={`nitem ${activeId === "Contact" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#Contact"
                aria-current={activeId === "Contact" ? "page" : undefined}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
