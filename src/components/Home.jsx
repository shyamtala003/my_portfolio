import React from "react";
import "../style/home.css";
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
      <Heading />
      <Blog />
      <NewsLetter />
    </>
  );
};

export default Home;
