import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/projects" exact element={<Projects />}></Route>
          <Route path="/blogs" exact element={<Blogs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
