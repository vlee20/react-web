import "../styles/styles.css";
import "../styles/Skills.css";

// window.onscroll = function () {
//   var currentScrollPos2 = window.scrollY;
//   if (currentScrollPos2 > 1100) {
//     const element1 = document.getElementById("skill1");
//     const element2 = document.getElementById("skill2");
//     const element3 = document.getElementById("skill3");

//     element1.classList.add("animate");
//     element2.classList.add("animate");
//     element3.classList.add("animate");
//   }
// }

export default function Skills() {
  return (
    <>
      <div id="Skills" className="center-vertical page">
        <h1 className="center text-center border2">Skills</h1>
        <div className="skills">
          <div className="skill">
            <div className="skillname">Python</div>
            <div className="skillbar">
              <div
                id="skill1"
                className="skillperc"
                per="90%"
                style={{ maxWidth: "90%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillname">SQL</div>
            <div className="skillbar">
              <div
                id="skill2"
                className="skillperc"
                per="80%"
                style={{ maxWidth: "80%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillname">Frontend</div>
            <div className="skillbar">
              <div
                id="skill3"
                className="skillperc"
                per="50%"
                style={{ maxWidth: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
