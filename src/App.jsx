import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from "./Navbar";
import Projects from "./Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Cursor from "./Cursor";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    AOS.init({
      duration: 3000, 
      easing: "ease-in-out", 
      delay: 800, 
      offset: 400, 
      once: true, 
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  }, []);

  return (
    <HashRouter>
      {loading ? (
        <div className="preloader">
         
          <ScaleLoader
            color={"#f87765"}
            loading={loading}
            height={100}
            margin={"10px"}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Cursor />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </>
      )}
    </HashRouter>
  );
};

export default App;
