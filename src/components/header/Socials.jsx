import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ceavinrufus/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ceavinrufus/" target="blank">
        <FaGithub />
      </a>
      <a href="https://medium.com/@ceavinrufus" target="blank">
        <FaMedium />
      </a>
    </div>
  );
};

export default Socials;
