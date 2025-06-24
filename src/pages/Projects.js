import "../styles/Projects.css";
import routefinder from "../img/route_finder.png";
import mealpickr from "../img/mealpickr.png";
import snake from "../img/snake.png";
import { motion } from "motion/react";

const projects = [
  {
    title: "RouteFinder",
    description: `An iOS application for those who cannot decide where to run. Demonstrated software design models and diagrams. This program is designed to meet the needs of individuals who want to plot a route between two points, particularly for activities such as running, biking, jogging, or casual exploration. Users can set a destination and starting point, generate a path, and set random distance ranges. Built with MapKit API, all data stored locally.`,
    image: routefinder,
    link: "https://github.com/vlee20/route_finder-master",
  },
  {
    title: "MealPickr",
    description: `MealPickr is a mobile Android app that helps indecisive users quickly find a place to eat by randomly selecting a nearby restaurant based on the user's location and distance range. Users can filter by meal type, dessert, open hours, or cuisine. It offers a fast, convenient way to discover dining options.`,
    image: mealpickr,
    link: "https://github.com/CSUF-CPSC411-2021F/group-project-team-hypervisor",
  },
  {
    title: "Snake",
    description: `A classic Snake game written in Python using Pygame with object-oriented design. Features graphical interface, keyboard/mouse/joystick controls, point system, tunnels, and persistent score saving. Includes a start screen and replay option.`,
    image: snake,
    link: "https://github.com/vlee20/snake_game",
  },
];

export default function Projects() {
  return (
    <div id="Projects" className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: idx * 0.15 },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
