import "../styles/Skills.css";
import "../styles/Projects.css";
import routefinder from "../img/route_finder.png";
import mealpickr from "../img/mealpickr.png";
import snake from "../img/snake.png";
import { motion } from "motion/react";
// import mealpickr from "../img/mealpickr.png";
// import snake from "../img/snake.png";

export default function Projects() {
  return (
    <>
      <div id="Projects" className="center-vertical">
        <h1 className="center text-center border2">Projects</h1>
        <div className="page">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            viewport={{ once: true }}
            className="container project"
          >
            <div className="project-desc">
              <h4>RouteFinder</h4>
              <div>
                An iOS application for those who cannot decide where to run.
                Demonstrated software design models and diagrams. This program
                is designed to meet the needs of individuals who want to plot a
                route between two points, particularly for activities such as
                running, biking, jogging, or casual exploration. Users will be
                able to set a destination point and a starting point, generate a
                path between them, and set random maximum and minimum distances
                for variability. The main focus is on utilizing the MapKit API
                from Apple’s iOS platform, with all data stored locally.
              </div>
            </div>
            <img
              className="container-fluid"
              src={routefinder}
              alt="RouteFinder"
              style={{ width: "255px" }}
            />
          </motion.div>
        </div>
        <div className="page">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            viewport={{ once: true }}
            className="container project"
          >
            <div className="project-desc">
              <h4>MealPickr</h4>
              <div>
                MealPickr is a mobile Android application designed to help
                indecisive users quickly find a place to eat by randomly
                selecting a nearby restaurant based on the user's current
                location and a chosen distance range. Users can apply filters
                for meal type, dessert, open hours, or cuisine preferences.
                Instead of wasting time deciding where to eat—which can often
                take over 30 minutes—MealPickr offers a fast, convenient way to
                discover dining options, making it a practical tool for anyone,
                anytime.
              </div>
            </div>
            <img
              className="container-fluid"
              src={mealpickr}
              alt="MealPickr"
              style={{ width: "255px", borderRadius: "20%" }}
            />
          </motion.div>
        </div>
        <div className="page">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            viewport={{ once: true }}
            className="container project"
          >
            <div className="project-desc">
              <h4>Snake</h4>
              <div>
                The game must be written in Python using Pygame with
                object-oriented design. It must be graphical, support keyboard,
                mouse, or joystick controls (with keyboard fallback), and
                include at least one player. The player earns points over time
                and by eating food, which elongates the character. The game ends
                if the character hits itself, a boundary, another player, or a
                hazard. Movement is in four directions, and the character
                follows its path like a train. Optional tunnels can teleport the
                player with possible bonuses or penalties. A start screen
                summarizes rules and offers options. Points must be shown during
                play without interference, and game data (date, duration, score)
                is saved to a JSON or Pickle file at the end. Players have one
                life and can choose to play again.
              </div>
            </div>
            <img
              className="container-fluid"
              src={snake}
              alt="snake"
              style={{ width: "255px", borderRadius: "20%" }}
            />
          </motion.div>
        </div>
        {/* <div className="scrolling-wrapper-flexbox">
          <a
            href="https://github.com/vlee20/route_finder-master"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="cntr1" className="border2 mborder1 card1">
              <div>
                <div>
                  <h4>RouteFinder</h4>
                  <hr></hr>
                  <div className="desc">
                    An iOS application for those who cannot decide where to run.
                    Demonstrated software design models and diagrams.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/CSUF-CPSC411-2021F/group-project-team-hypervisor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="cntr1" className="border2 mborder1 card1">
              <div>
                <div>
                  <h4>MealPickr</h4>
                  <hr></hr>
                  <div className="desc">
                    It's always hard choosing a place to eat around the area.
                    There are times where it takes over 30 minutes just thinking
                    of what to eat. For those indecisive folks, it would be nice
                    to have a generator to select random restaurants to eat. It
                    can also help give ideas by having the application choose
                    random restaurants for you. I feel like it is universal
                    because everyone has to eat. Time is important so don’t
                    waste time thinking when you should be eating.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vlee20/snake_game"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="cntr1" className="border2 mborder1 card1">
              <div>
                <div>
                  <h4>Snake</h4>
                  <hr></hr>
                  <div className="desc">
                    A snake game from scratch for my video game design class.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/vlee20/pig_game"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="cntr1" className="border2 mborder1 card1">
              <div>
                <div>
                  <h4>Pig Game</h4>
                  <hr></hr>
                  <div className="desc">
                    A game executed through the console and to demonstrate good
                    practice of OOP.
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div> */}
      </div>
    </>
  );
}
