import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio/portfolio1.jpg";
import IMG2 from "../../assets/portfolio/portfolio2.png";
import { GiPlayButton } from "react-icons/gi";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MovieHub",
    tech: "React",
    github: "https://github.com/ceavinr/movie-hub",
    demo: "https://movie-hub-website.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Portofolio Website",
    tech: "React",
    github: "https://github.com/ceavinr/portofolio",
    demo: "https://ceavinr.netlify.app/",
  },
];

const portofolio = () => {
  return (
    <section id="portfolio" data-aos="fade-up">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
