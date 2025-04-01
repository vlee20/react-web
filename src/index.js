import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./styles/Navbar.css";
import "./styles/styles.css";
import StarsBgAnimation from "./components/Background";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

// nav bar animation
var savedScrollPos = 0;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  var diff = currentScrollPos - savedScrollPos;
  if (diff > 0) {
    // detects scrolling down
    document.getElementById("nav").classList.remove("fade-in");
    document.getElementById("nav").classList.add("fade-out");
    // document.getElementById("nav").classList.remove("slide2");
    // document.getElementById("nav").classList.add("slide1");
  } else {
    // detects scrolling up
    document.getElementById("nav").classList.remove("fade-out");
    document.getElementById("nav").classList.add("fade-in");
    // document.getElementById("nav").classList.remove("slide1");
    // document.getElementById("nav").classList.add("slide2");
  }
  savedScrollPos = currentScrollPos;
};

root.render(
  <React.Fragment>
    <body className="starsbg">
      <StarsBgAnimation />
      <Header />
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </body>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
