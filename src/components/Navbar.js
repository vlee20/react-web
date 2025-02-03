import "../styles/Navbar.css";
import "../styles/styles.css";

function transitionNav() {
  if (window.scrollY == 0) {
    //user scrolled to the top of the page
    document.getElementsByClassName("navbar-light").style.backgroundColor =
      "transparent";
  }
}

window.onscroll = function () {
  var currentScrollPos = window.scrollY;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 7000) {
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
          <ul class="navbar-set center-vertical">
            <li class="nitem active">
              <a class="nav-link" href="#Intro">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li class="nitem">
              <a class="nav-link" href="#About">
                About
              </a>
            </li>
            <li class="nitem">
              <a class="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li class="nitem">
              <a class="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
