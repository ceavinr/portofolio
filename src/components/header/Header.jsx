import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Socials from "./Socials";
import { useTypingEffect } from "../../hooks/typing-effect";

const Header = () => {
  const text = useTypingEffect("Ceavin Rufus", 100);
  return (
    <header>
      <div className="container header__container" data-aos="fade-up">
        <h5>Hello I'm</h5>
        <h1>{text}</h1>
        <h5 className="text-light">Student at Institut Teknologi Bandung</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
