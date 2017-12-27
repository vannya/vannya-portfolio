import React from "react";
import PageHeader from "../common/PageHeader";
import IconBlurb from "../common/IconBlurb";
import ProgressBar from "../common/ProgressBar";
import WhenInView from "../common/WhenInView";
import rocks from "../../stylesheets/assets/VanRocks-300x300.jpg";

const About = props => {
  return (
    <div id="about" className="about">
      <PageHeader text="About Me" />
      <WhenInView>
        {({ isInView }) => (
          <div className="about-center">
            <div className={isInView ? "img-group" : "nodisplay"}>
              <img src={rocks} alt="" />
              <h2>Meet Van</h2>
              <p>
                I'm a Front-End Developer interested in creating efficient,
                mobile-ready web applications with engaging user interfaces.
              </p>
            </div>
            <div className={isInView ? "bar-group" : "nodisplay"}>
              <ProgressBar label="React" width="80%" />
              <ProgressBar label="Javascript" width="80%" />
              <ProgressBar label="CSS/Sass" width="60%" />
              <ProgressBar label="HTML" width="90%" />
              <ProgressBar label="MongoDB" width="60%" />
              <ProgressBar label="SQL" width="50%" />
              <ProgressBar label="Express and Node.js" width="70%" />
              <ProgressBar label="Java" width="60%" />
              <ProgressBar label="Photoshop" width="80%" />
              <ProgressBar label="Git/Version Control" width="80%" />
            </div>
          </div>
        )}
      </WhenInView>
      <WhenInView>
        {({ isInView }) => (
          <div className={isInView ? "about-lower" : "nodisplay"}>
            <IconBlurb
              iconName="fas fa-user fa-2x"
              text="UI/UX Focused"
              blurb="Words Words"
            />
            <IconBlurb
              iconName="fas fa-user fa-2x"
              text="UI/UX Focused"
              blurb="Words Words"
            />
            <IconBlurb
              iconName="fas fa-user fa-2x"
              text="UI/UX Focused"
              blurb="Words Words"
            />
            <IconBlurb
              iconName="fas fa-user fa-2x"
              text="UI/UX Focused"
              blurb="Words Words"
            />
          </div>
        )}
      </WhenInView>
      {window.location.pathname === "/" ? (
        <a href="#cta">
          <i className="fas fa-angle-down" />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default About;
