import ME from "../../assets/me-about.png";
import React from "react";
import "./about.css";
import { RiAwardFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <artical className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </artical>
            <artical className="about__card">
              <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </artical>
          </div>
          <p>As a web developer with over one year of experience, I have demonstrated proficiency in designing, developing, and maintaining interactive and user-friendly websites. My skills encompass front-end and back-end technologies, allowing me to create seamless and responsive web applications. I have a strong understanding of HTML, CSS, and JavaScript, enabling me to build engaging user interfaces and intuitive user experiences. Additionally, I am proficient in server-side programming languages like Node.js or PHP, as well as databases like MySQL or MongoDB.</p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
