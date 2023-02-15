import { useEffect } from "react";
import Topfixedimage from "./components/Topfixedimage";

import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";

import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import rayImage from "./assets/rays_bg.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import particular blog components
import Iife from "./components/All_blogs/Iife";
import Excecontext from "./components/All_blogs/Excecontext";
import Hoisting from "./components/All_blogs/Hoisting";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Topfixedimage image={rayImage} />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/projects" exact element={<Projects />}></Route>
          <Route path="/blogs" exact element={<Blogs />}></Route>

          {/* all blogs route */}
          <Route path="/iife" exact element={<Iife></Iife>}></Route>
          <Route path="/Excecontext" exact element={<Excecontext />}></Route>
          <Route path="/hoisting" exact element={<Hoisting />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
