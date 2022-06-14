import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (window.scrollY <= 80 && !click) {
      setNavbar(true);
    } else if (window.scrollY <= 80 && click) {
      setNavbar(false);
    }
  };
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else if (window.scrollY <= 80 && click) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <div className="logo-container">
            <a href="/" className="navbar-logo">
              <Logo />
            </a>
            <a href="/" className="navbar-name">
              <h3>Ceavin Rufus</h3>
            </a>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
