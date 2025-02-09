import "../styles/Navbar.css";
import "../styles/styles.css";


var savedScrollPos = 0;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  var diff = currentScrollPos - savedScrollPos
  if (diff > 0) {
    // detects scrolling down
    document.getElementById("nav").classList.remove("fade-in")
    document.getElementById("nav").classList.add("fade-out")
  } else {
    document.getElementById("nav").classList.remove("fade-out")
    document.getElementById("nav").classList.add("fade-in")
    
  }
  savedScrollPos = currentScrollPos
};

export default function Navbar() {
  return (
    <>
      <nav id="nav" className="fade-in">
        <div>
          <ul className="navbar-set center-vertical">
            <li className="nitem active">
              <a className="nav-link" href="#Intro">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nitem">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nitem">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nitem">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
