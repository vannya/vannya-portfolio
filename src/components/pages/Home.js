import React from "react";
import BouncingArrow from '../common/BouncingArrow';

const Home = () => {
  return (
    <div id="home">
      <div className="hero">
        <div className="hero-overlay">
          <div className="typing-wrapper">
            <div className="header-intro">HELLO, MY NAME IS</div>
            <div className="header-name">VAN</div>
            <div className="header-name">TABBERT</div>
            <div className="header-typewriter anim-typewriter">I'M A FRONT END DEVELOPER.</div>
            <a href="#about"><BouncingArrow /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;