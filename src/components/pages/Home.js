import React from "react";
import NavBar from "../header/NavBar";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-overlay">
          <div className="rw-wrapper">
            <div className="rw-sentence">
              <span>Hi! I'm Van, </span>
              <div className="rw-words rw-words-1">
                <span>a front-end web developer.</span>
                <span>a ReactJS developer.</span>
                <span>a UI fanatic.</span>
                <span>a number cruncher.</span>
                <span>a minimalist.</span>
                <span>a team leader.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
