import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, duration: 4 },
  hidden: { opacity: 0, scale: 0 },
};

const squareTransition = {
  duration: 0.5, // add a duration of 4 seconds
};

const Blogcard = ({ blogLink, blogImage, blogHeading, blogPublishedDate }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Link to={blogLink} className="blog_card">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={squareTransition}
          variants={squareVariants}
        >
          <div className="card_img">
            {/* <img src={blogImage} alt="blog"></img> */}
            <LazyLoadImage
              className="blog_image"
              alt={blogHeading}
              effect="blur"
              src={blogImage}
            />
          </div>
          <div className="blog_text">
            <h1 className="blog_heading">{blogHeading}</h1>
            <p className="blog_published_date">{blogPublishedDate}</p>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default Blogcard;
