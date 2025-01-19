import { Button } from "react-bootstrap";
import "../styles/Navbar.css";
import "../styles/styles.css";

// function removeNavBG() {
//   var ele = document.getElementById("nav");
//   if (window.scrollY == 0) {
//     //user scrolled to the top of the page
//     ele.classList.remove("bg-light");
//   }
// }

// function addNavBG() {
//   var ele = document.getElementById("nav");
//   if (window.scrollY > 0) {
//     //user scrolled to the top of the page
//     ele.classList.add("bg-light");
//   }
// }

export default function Navbar() {
  return (
    <>
      <nav id="nav" class="navbar navbar-expand-lg navbar-light sticky-top">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#Intro">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#About">
                About
              </a>
            </li>
            <li class="nav-item">
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
