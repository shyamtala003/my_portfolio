import React from "react";
import Navbar from "./Navbar";
import "../style/home.css";
import Footer from "./Footer";
import Blog from "./home/Blog";
import Heading from "./home/Heading";
import NewsLetter from "./home/NewsLetter";

const Home = () => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <Navbar />
      <Heading />
      <Blog />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
