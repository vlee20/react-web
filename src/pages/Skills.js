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
            <div id="skill1" className="skillperc" per="90%" style={{maxWidth: "90%"}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skillname">SQL</div>
          <div className="skillbar">
            <div id="skill2" className="skillperc" per="80%" style={{maxWidth: "80%"}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skillname">Frontend</div>
          <div className="skillbar">
            <div id="skill3" className="skillperc" per="50%" style={{maxWidth: "50%"}}></div>
          </div>
        </div>
      </div>
      <h1 className="center text-center border2">Projects</h1>
      <div className="scrolling-wrapper-flexbox">
        <div id="cntr1" className="border2 mborder1 card">
          <div>
            <div>
              <h4>TITLE</h4>
              <hr></hr>
              <div className="desc">The API project had spontaneous deadlines where some changes must be done in two weeks. It was a collaborative effort where my role was to send information from and back to the partnering company. My co-worker used that information to process the orders and create the labels for each sales order. I then send out a ship confirmation for each order that has been processed. My lead communicated the requirements for us and what changes needed to be done. This was done successfully in a timely manner in preparation for the testing process.</div>
            </div>            
          </div>
        </div>
        <div id="cntr1" className="border2 mborder1 card">
          <div>
            <div>
              <h4>TITLE</h4>
              <hr></hr>
              <div className="desc">The API project had spontaneous deadlines where some changes must be done in two weeks. It was a collaborative effort where my role was to send information from and back to the partnering company. My co-worker used that information to process the orders and create the labels for each sales order. I then send out a ship confirmation for each order that has been processed. My lead communicated the requirements for us and what changes needed to be done. This was done successfully in a timely manner in preparation for the testing process.</div>
            </div>            
          </div>
        </div>
        <div id="cntr1" className="border2 mborder1 card">
          <div>
            <div>
              <h4>TITLE</h4>
              <hr></hr>
              <div className="desc">The API project had spontaneous deadlines where some changes must be done in two weeks. It was a collaborative effort where my role was to send information from and back to the partnering company. My co-worker used that information to process the orders and create the labels for each sales order. I then send out a ship confirmation for each order that has been processed. My lead communicated the requirements for us and what changes needed to be done. This was done successfully in a timely manner in preparation for the testing process.</div>
            </div>            
          </div>
        </div>
        <div id="cntr1" className="border2 mborder1 card">
          <div>
            <div>
              <h4>TITLE</h4>
              <hr></hr>
              <div className="desc">The API project had spontaneous deadlines where some changes must be done in two weeks. It was a collaborative effort where my role was to send information from and back to the partnering company. My co-worker used that information to process the orders and create the labels for each sales order. I then send out a ship confirmation for each order that has been processed. My lead communicated the requirements for us and what changes needed to be done. This was done successfully in a timely manner in preparation for the testing process.</div>
            </div>            
          </div>
        </div>
        <div id="cntr1" className="border2 mborder1 card">
          <div>
            <div>
              <h4>TITLE</h4>
              <hr></hr>
              <div className="desc">The API project had spontaneous deadlines where some changes must be done in two weeks. It was a collaborative effort where my role was to send information from and back to the partnering company. My co-worker used that information to process the orders and create the labels for each sales order. I then send out a ship confirmation for each order that has been processed. My lead communicated the requirements for us and what changes needed to be done. This was done successfully in a timely manner in preparation for the testing process.</div>
            </div>            
          </div>
        </div>
      </div>

      </div>
    </>
  );
}
