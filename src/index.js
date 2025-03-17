import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./styles/Navbar.css";
import "./styles/styles.css";
import StarsBgAnimation from "./components/Background";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));

var savedScrollPos = 0;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  var diff = currentScrollPos - savedScrollPos
  if (diff > 0) {
    // detects scrolling down
    // document.getElementById("nav").classList.remove("fade-in")
    // document.getElementById("nav").classList.add("fade-out")
    document.getElementById("nav").classList.remove("slide2");
    document.getElementById("nav").classList.add("slide1");
  } else {
    // detects scrolling up 
    // document.getElementById("nav").classList.remove("fade-out")
    // document.getElementById("nav").classList.add("fade-in")
    document.getElementById("nav").classList.remove("slide1");
    document.getElementById("nav").classList.add("slide2");
    
  }
  savedScrollPos = currentScrollPos

  if (currentScrollPos > 1100) {
    const element1 = document.getElementById("skill1");
    const element2 = document.getElementById("skill2");
    const element3 = document.getElementById("skill3");

    element1.classList.add("animate");
    element2.classList.add("animate");
    element3.classList.add("animate");
  }

  // if (currentScrollPos > 120) {
  //   const abt = document.getElementById("About");
  //   abt.classList.add("fade1");
  // }
};



window.onload = function() {
  var currentScrollPos = window.scrollY;
  if (currentScrollPos == 0) {
    const element4 = document.getElementById("IntroCont");
    element4.classList.add("fade1");
  }
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
      <Contact />
      <Footer />
    </body>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
