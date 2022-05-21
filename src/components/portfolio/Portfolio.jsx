import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio/portfolio1.png";
import IMG2 from "../../assets/portfolio/portfolio2.png";
import IMG3 from "../../assets/portfolio/portfolio3.png";
import { GiPlayButton } from "react-icons/gi";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MovieHub",
    tech: "React",
    role: "Frontend Developer",
    github: "https://github.com/ceavinr/movie-hub",
    demo: "https://movie-hub-website.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Portofolio Website",
    tech: "React",
    role: "Frontend Developer",
    github: "https://github.com/ceavinr/portofolio",
    demo: "https://ceavinr.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Montirloka",
    tech: "React, Firebase",
    role: "Full Stack Developer",
    github: "https://github.com/ceavinr/montirloka",
    demo: "https://montirloka-457b6.web.app/",
  },
];

const portofolio = () => {
  return (
    <section id="portfolio" data-aos="fade-up">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, tech, role, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4>{role}</h4>
              <h5>{tech}</h5>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn" target="_blank">
                  GitHub
                </a> */}
                <a href={demo} className="btn btn-primary" target="_blank">
                  <GiPlayButton className="portofolio__item-icon" /> Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portofolio;
