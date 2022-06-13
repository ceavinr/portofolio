import React from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import About from "../about/About";
import Experience from "../experience/Experience";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Testimonials from "../testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio slice={3} />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </>
  );
};

export default App;
