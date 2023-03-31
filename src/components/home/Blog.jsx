import Reac, { useEffect } from "react";
import blog1Image from "../../assets/blog_images/iife.png";
import blog2Image from "../../assets/blog_images/excecontext.webp";
import blog3Image from "../../assets/blog_images/hoisting.webp";
import { Link } from "react-router-dom";
import Blogcard from "./Blogcard";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Blog = ({ theme }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // const { ref, inView } = useInView({
  //   threshold: 0.2 , // set the threshold to 20%
  // });
  return (
    <>
      <section
        className={`${theme === "dark" ? "dark" : "light"} blog_section`}
      >
        <motion.h1
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 1, y: 100 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          I love to share my knowledge through writing.
        </motion.h1>
        <motion.h3
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 1, y: 100 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Check out a few of my recent publishings.
        </motion.h3>

        <div className="blogs_container">
          <Blogcard
            blogLink="/iife"
            blogImage={blog1Image}
            blogHeading="Immediately Invoked Function Expression (IIFE)"
            blogPublishedDate="June 11, 2022"
          ></Blogcard>

          <Blogcard
            blogLink="/Excecontext"
            blogImage={blog2Image}
            blogHeading="What is an Execution Context in JavaScript?"
            blogPublishedDate="February 8,2022"
          ></Blogcard>

          <Blogcard
            blogLink="/hoisting"
            blogImage={blog3Image}
            blogHeading="What is Hoisting in JavaScript?🤔"
            blogPublishedDate="April 21,2022"
          ></Blogcard>
        </div>

        <Link to="/blog" className="blog_link">
          See all articles<i className="ri-arrow-right-s-line"></i>
        </Link>
      </section>
    </>
  );
};

export default Blog;
