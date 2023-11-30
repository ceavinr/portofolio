import React from "react";
import "./portfolio.css";

import { GiPlayButton } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { BsChevronCompactDown, BsChevronDoubleDown } from "react-icons/bs";
import { data } from "./db";

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
                    {github && (
                      <a href={github} className="btn" target="_blank">
                        <FaGithub className="portofolio__item-icon" />
                        {"\u00a0"} GitHub
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        <GiPlayButton className="portofolio__item-icon" />
                        {"\u00a0"} Live Demo
                      </a>
                    )}
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
