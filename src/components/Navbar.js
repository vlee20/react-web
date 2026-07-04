import "../styles/Navbar.css";
import "../styles/styles.css";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "Intro", label: "Home" },
  { id: "Experience", label: "Experience" },
  { id: "Skills", label: "Skills" },
  { id: "Certifications", label: "Certifications" },
  { id: "Projects", label: "Projects" },
  { id: "Contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("Intro");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

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
    <nav id="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#Intro">
          <span className="nav-brand-prompt">~$</span> vincent.lee
          <span className="nav-brand-cursor" aria-hidden="true" />
        </a>
        <ul className="navbar-set">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`nitem ${activeId === item.id ? "active" : ""}`}
            >
              <a
                className="nav-link"
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
