import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topfixedimage from "./components/Topfixedimage";

// for animation
import { motion, AnimatePresence } from "framer-motion";

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
import NormalVsArrowFunction from "./components/All_blogs/NormalVsArrowFunction";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#111827";
    } else {
      document.body.style.background = "#ffffff";
    }
  }, [theme]);

  return (
    <AnimatePresence>
      <div className={`${theme ? "dark" : "light"} main_container`}>
        <Router>
          <Navbar theme={theme} setTheme={setTheme} />
          <Topfixedimage image={rayImage} />
          <Routes>
            <Route path="/" exact element={<Home theme={theme} />}></Route>
            <Route
              path="/about"
              exact
              element={<About theme={theme} />}
            ></Route>
            <Route
              path="/projects"
              exact
              element={<Projects theme={theme} />}
            ></Route>
            <Route
              path="/blogs"
              exact
              element={<Blogs theme={theme} />}
            ></Route>

            {/* all blogs route */}
            <Route
              path="/iife"
              exact
              element={<Iife theme={theme}></Iife>}
            ></Route>
            <Route
              path="/Excecontext"
              exact
              element={<Excecontext theme={theme} />}
            ></Route>
            <Route
              path="/hoisting"
              exact
              element={<Hoisting theme={theme} />}
            ></Route>
            <Route
              path="/NormalVsArrowFunctions"
              exact
              element={<NormalVsArrowFunction theme={theme} />}
            ></Route>
          </Routes>
          <Footer theme={theme} />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
