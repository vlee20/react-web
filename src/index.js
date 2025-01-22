import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
import "./styles/styles.css";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Navbar />
  //     <div className="container">
  //       <Routes>
  //         <Route path="/" element={<Home />}></Route>
  //         <Route path="/about" element={<About />}></Route>
  //         <Route path="/contact" element={<Contact />}></Route>
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // </React.StrictMode>
  <React.Fragment>
    <Navbar />
    <Intro />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
