import React, { useEffect } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "aos/dist/aos.css";
import RoutesConfig from "./config/RoutesConfig";
import Aos from "aos";

const App = () => {
  // Animation
  useEffect(() => {
    Aos.init({ delay: 100, duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <RoutesConfig />
      <Footer />
    </>
  );
};

export default App;
