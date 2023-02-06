import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { RiServiceLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiServiceLine className="about__icon" />
              <h5>Services</h5>
              <small>Full-stack development, UI/UX design</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>10+ organizations</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ completed projects</small>
            </article>
          </div>
          <p>
            I consider myself a highly dedicated, determined, and curious person
            that willing to learn new things. My determination to take action
            has contributed to my most recent success in my academic career.
          </p>
          <p>
            I am currently working as a freelance web developer and have always
            been interested in a challenge.
          </p>
          <a href="#contact" className="btn btn-primary">
            Reach me out!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
