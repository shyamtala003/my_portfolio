import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 1, y: 100 },
};

const squareTransition = {
  duration: 1, // add a duration of 4 seconds
};

const Projectcard = ({
  projectImage,
  projectTitle,
  projectDescription,
  liveLinkUrl,
  linkBtnText,
  githubLink,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={squareTransition}
        variants={squareVariants}
        className="project_card"
      >
        <div className="project_image">
          <LazyLoadImage alt={projectTitle} effect="blur" src={projectImage} />
          {/* <img  alt="" /> */}
        </div>
        <div className="project_text_content" data-aos="zoom-in">
          <h2 className="project_title">{projectTitle}</h2>
          <p className="project_description">{projectDescription}</p>
          <div className="btn_group">
            <a href={liveLinkUrl} target="_blank" className="live_link">
              <i className="remix-icon ri-external-link-line"></i> {linkBtnText}
            </a>
            <a href={githubLink} target="_blank" className="live_link">
              <i className="remix-icon ri-github-fill"></i> Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projectcard;
