import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portofolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // Animation
  useEffect(() => {
    Aos.init({ delay: 100, duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portofolio />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
