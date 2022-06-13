import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio/portfolio1.png";
import IMG2 from "../../assets/portfolio/portfolio2.png";
import IMG3 from "../../assets/portfolio/portfolio3.png";
import IMG4 from "../../assets/portfolio/portfolio4.png";
import { GiPlayButton } from "react-icons/gi";
import { BsChevronCompactDown, BsChevronDoubleDown } from "react-icons/bs";

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
  {
    id: 4,
    image: IMG4,
    title: "Simple To-do-list",
    tech: "Vanilla Javascript",
    role: "Frontend Developer",
    github: "https://github.com/ceavinr/to-do-list",
    demo: "https://ceavinr.github.io/to-do-list/",
  },
];

const Portfolio = ({ slice = data.length }) => {
  return (
    <section id="portfolio" data-aos="fade-up">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>

      <div className="container ">
        <div className="portfolio__container">
          {data
            .slice(0, slice)
            .map(({ id, image, title, tech, role, github, demo }) => {
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
                      <GiPlayButton className="portofolio__item-icon" />
                      {"\u00a0"} Live Demo
                    </a>
                  </div>
                </article>
              );
            })}
        </div>
        <div className="see__more">
          {slice <= 3 ? (
            <a href="/portfolio">
              Show More
              <BsChevronCompactDown className="chevron__icon" />
              <BsChevronDoubleDown className="double-chevron__icon" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
