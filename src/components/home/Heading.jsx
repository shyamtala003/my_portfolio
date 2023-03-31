import React from "react";
import devImage from "../../assets/shyam tala.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
const Heading = ({ theme }) => {
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div className="heading">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
          className="heading_text"
        >
          I'm <span>Shyam</span>. I'm a passionate frontend developer from
          India.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeIn" }}
          className="devloper_img"
        >
          <LazyLoadImage alt="shyam tala" effect="blur" src={devImage} />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeIn" }}
        className="btn_group"
      >
        <Link to="/blogs" className="blog_link">
          Read the blogs <i className="ri-arrow-right-s-line"></i>
        </Link>
        <Link to="/about" className="about_link">
          More about me <i className="ri-arrow-right-s-line"></i>
        </Link>
      </motion.div>

      <motion.h1
        className="heading_end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeIn" }}
      >
        ∿∿∿
      </motion.h1>
    </main>
  );
};

export default Heading;
