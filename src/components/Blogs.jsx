import React from "react";
import "../style/blogs.css";
import Blogcontainer from "./blogs/Blogcontainer";
import Heading from "./Heading";
import Navbar from "./Navbar";
import Footer from "./Footer";

const blogs = () => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <Navbar></Navbar>
      <main className="blog_container dark">
        <Heading
          heading="MY BLOG"
          description="Insightful and helpful content curated for you."
        />
        <Blogcontainer />
      </main>
      <Footer />
    </>
  );
};

export default blogs;
