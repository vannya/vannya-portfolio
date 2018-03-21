import React from "react";
import PageHeader from "../common/PageHeader";
import {Link} from "react-router-dom";
import rocks from "../../stylesheets/assets/VanRocks-300x300.jpg";

const About = props => {
  return (
    <div id="about" className="about">
      <PageHeader text="Meet Van" />
      <div className="about-center">
        <div className="img-group">
          <section>
            <img src={rocks} alt="Van Tabbert" align="left" />
            <p>
              I'm a Front-End Developer interested in creating efficient,
              mobile-ready web applications with engaging user interfaces.
            </p>
            <p>
              Recently, I've been working with a non-profit as a Front End
              Developer, Cohort Facilitator and Project Manager. We just
              deployed the first version of the Chingu Developer Network, which
              integrates the backend tools, Slack and user profiles. I built the
              front end of this application using ReactJS and Apollo Client to
              interface with the Node/GraphQL/PostgreSQL backend. Additionally,
              I am an Agile project manager of an international remote team of 4
              developers during each Voyage (2.5 month project) and mentor new
              project managers. We are working on bringing people together
              across the world to learn, build and grow together!
            </p>
            <p>
              Currently, I am seeking a full-time front end developer position
              with a company that embraces enthusiasm and collaboration within
              teams. I'd like to find a position in the DFW area or remote, but
              am willing to relocate for the right position.
            </p>
          </section>
          <Link to="/daily" className="link-button">Check Out My Daily Log</Link>
        </div>
      </div>
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
