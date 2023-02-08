import React from "react";
import "../style/home.css";
import Blog from "./home/Blog";
import Heading from "./home/Heading";
import NewsLetter from "./home/NewsLetter";

const Home = () => {
  return (
    <>
      <Heading />
      <Blog />
      <NewsLetter />
    </>
  );
};

export default Home;
