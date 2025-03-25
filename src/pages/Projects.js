import "../styles/Skills.css";

export default function Projects() {
  return (
    <>
      <div id="Projects" className="center-vertical page">
        <h1 className="center text-center border2">Projects</h1>
        <div className="scrolling-wrapper-flexbox">
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
        </div>
      </div>
    </>
  );
}
