import "../styles/Navbar.css";
import "../styles/styles.css";

function transitionNav() {
  if (window.scrollY == 0) {
    //user scrolled to the top of the page
    document.getElementsByClassName("navbar-light").style.backgroundColor =
      "transparent";
  }
}

var savedScrollPos = 0;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  console.log(savedScrollPos, currentScrollPos);
  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  savedScrollPos = Math.min(savedScrollPos, currentScrollPos);
  if (currentScrollPos > 0) {
    // I am using 'display' instead of 'top':
    document.getElementById("nav").style.display = "none";
  } else {
    document.getElementById("nav").style.display = "initial";
  }
};

export default function Navbar() {
  return (
    <>
      <nav id="nav">
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
