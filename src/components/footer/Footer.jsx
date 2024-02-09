import React from "react";
import "./footer.css";
import Contact from "./Contact";
import { BsLinkedin } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="logo-container">
        <a href="/" className="footer__logo">
          <Logo />
        </a>
        <a href="/" className="footer__name">
          Ceavin Rufus
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ceavin Rufus. All rights reserved</small>
      </div>
      <Contact />
      <h3 className="find__me">Find me on</h3>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ceavinrufus/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/ceavinrufus/" target="blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/ceavinrufus/" target="blank">
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com/ceavinrufus/" target="blank">
          <IoLogoTwitter />
        </a>
        <a href="https://medium.com/@ceavinrufus" target="blank">
          <FaMedium />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
