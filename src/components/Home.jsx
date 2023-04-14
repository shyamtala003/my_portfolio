import React from "react";
import "../style/home.css";
import Blog from "./home/Blog";
import Heading from "./home/Heading";
import NewsLetter from "./home/NewsLetter";

const Home = ({ theme }) => {
  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Heading theme={theme} />
      <Blog theme={theme} />
      <NewsLetter theme={theme} />
    </div>
  );
};

export default Home;
