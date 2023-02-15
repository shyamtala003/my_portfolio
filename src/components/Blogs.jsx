import React from "react";
import "../style/blogs.css";
import Blogcontainer from "./blogs/Blogcontainer";
import Heading from "./Heading";

const blogs = ({ theme }) => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <main className={`blog_container ${theme === "dark" ? "dark" : "light"}`}>
        <Heading
          heading="MY BLOG"
          description="Insightful and helpful content curated for you."
        />
        <Blogcontainer theme={theme} />
      </main>
    </>
  );
};

export default blogs;
