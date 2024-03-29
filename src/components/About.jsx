import React, { useEffect } from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import "../style/about.css";
import { motion } from "framer-motion";

const About = ({ theme }) => {
  return (
    <>
      <motion.main
        animate={{ scale: 1, opacity: 1, y: 0 }}
        initial={{ scale: 0, opacity: 0, y: 300 }}
        transition={{ duration: 1 }}
        className={`about ${theme === "dark" ? "dark" : "light"}`}
      >
        <Heading heading="about me" description="Here's my story." />
        <div className="description">
          <p className="about_me_descrition">
            I’m Shyam, a developer, creative coder, blogger and self-proclaimed
            designer who specializes in front-end development. My mission is to
            translate user-focussed designs into pixel-perfect websites or
            applications that run blazing fast.
          </p>

          <ul className="about_me_list">
            <li>
              🌱 I’m currently learning ReactJs,MongoDB,NodeJs and ExpressJs
            </li>
            <li>
              💻 All of my projects are available at{" "}
              <Link to="/project">shyamtala.netlify.app/projects</Link>
            </li>
            <li>
              📝 I regularly write articles on{" "}
              <Link to="/blogs">shyamtala.netlify.app/blogs</Link>
            </li>
            <li>💬 Ask me about Html , Css , Js , ReactJs</li>
            <li>
              📫 How to reach me{" "}
              <a href="mailto:shyamtala003@gmail.com">shyamtala003@gmail.com</a>
            </li>
            <li>
              ⚡ Fun fact By Profesion I am a Web Developer but by Passion I am
              a Farmer
            </li>
          </ul>

          <a href="https://streak-stats.demolab.com?user=shyamtala003&theme=merko"></a>
        </div>

        {/* education and work section  */}
        <div className="education_and_experience">
          <h3 className="education_section_title">
            Education and Work experience
          </h3>
          <p className="edu_description">
            Here's a brief rundown of my most recent activities.
          </p>

          <div className="journey_graph">
            <div className="graph">
              <p className="title-1">
                Atmiya Institute of Technology & Science
              </p>
              <p className="title-2">
                Gujarat Technological University, Ahmedbabd
              </p>
              <p className="title-3">Grade : 9.85 CGPA</p>
              <p className="title-4">June 2018 - Aug 2021</p>
            </div>

            <div className="graph">
              <p className="title-1">Udemy</p>
              <p className="title-3">Dec 2021 - May 2022</p>
              <p className="desc">
                Learn PHP and MySql from Udemy and at a time work on some
                e-commerce projects.
                <br />
              </p>
            </div>

            <div className="graph">
              <p className="title-1">Intern at iNeuron.ai(PWSkills)</p>
              <p className="title-2">Bengaluru, Karnataka, India · Remote</p>
              <p className="title-3">June 2022 - Present</p>
              <p className="desc">
                Working as a Full Stack JavaSCript Development Intern
                <br />
                Skills: Node.js · React.js(TailwindCss,SASS) · MongoDB ·
                Express.js
              </p>
            </div>
          </div>
        </div>

        {/* skill section */}
        <div className="skill">
          <h4 className="skill_heading">Skills</h4>

          <section className="skill_flex-box">
            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt=""
                  width="40px"
                  height="40px"
                />
                FRONT-END
              </h2>

              <div className="skill_data">
                <p className="skill_name">HTML</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #ff1f01, #ffc700)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">CSS</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "85%",
                      background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">Bootstrap</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "50%",
                      background: "linear-gradient(to right, #d0dae0, #8a2eff)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">TailwindCss</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "90%",
                      background: "linear-gradient(to right, #1a2980, #26d0ce)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">JavaScript</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "70%",
                      background: "linear-gradient(90deg,#f46b45, #eea849)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">ReactJs</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "60%",
                      background: "linear-gradient(90deg,#6f82e4, #1f2ebe)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                  alt="backend"
                  width="40px"
                  height="40px"
                />{" "}
                BACK-END
              </h2>

              <div className="skill_data">
                <p className="skill_name">NodeJs</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "40%",
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">ExpressJs</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "60%",
                      background: "linear-gradient(90deg,#136fc3, #76ef66)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill_data">
                <p className="skill_name">MongoDB</p>
                <div className="progress">
                  <div
                    className="progress-value"
                    style={{
                      width: "55%",
                      background: "linear-gradient(to right, #1aa37a,#9dffb3)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.main>
    </>
  );
};

export default About;
