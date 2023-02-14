import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topfixedimage from "./components/Topfixedimage";

import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";

// import particular blog components
import Iife from "./components/All_blogs/Iife";

import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import rayImage from "./assets/rays_bg.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Topfixedimage image={rayImage} />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/projects" exact element={<Projects />}></Route>
          <Route path="/blogs" exact element={<Blogs />}></Route>

          {/* all blogs route */}
          <Route path="/iife" exact element={<Iife></Iife>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
