import React from "react";
import PageHeader from "../common/PageHeader";
import image from "../../stylesheets/assets/van.jpg";
import resume from "../../stylesheets/assets/resume/Van Tabbert - Front End Developer.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <PageHeader text="Resume" />
      <div className="resume-download">
        <a href={resume}>Download My Resume</a>
      </div>
      <div className="resume-wrapper">
        <div className="resume-header">
          <div className="resume-header-left">
            <img
              src={image}
              alt="Van Tabbert"
              className="resume-img"
              height="200px"
              width="200px"
            />
          </div>
          <div className="resume-header-right">
            <div className="resume-h1">VAN TABBERT</div>
            <div className="resume-h2">FRONT END DEVELOPER</div>
          </div>
        </div>
        <div className="resume-body">
          <div className="resume-body-left">
            <div className="resume-section">
              <div className="resume-subheader">PROFILE</div>
              <div className="resume-subheader-underline" />
              <div className="resume-text">
                Front end developer with experience using modern JavaScript
                libraries. Analytical problem solver with the ability to quickly
                learn new technologies and languages. Skilled multi-tasker who
                is comfortable working within a team and independently. Seeking
                a full-time position as a front end developer with a forward
                thinking company. Open to relocation and remote positions.
              </div>
            </div>
            <div className="resume-section">
              <div className="resume-subheader">CONTACT ME</div>
              <div className="resume-subheader-underline" />
              <div className="resume-contact-group-top">
                <div className="resume-text">t: (817)908-7911</div>
                <div className="resume-text">e: van.tabbert@gmail.com</div>
                <div className="resume-text">
                  w:{" "}
                  <a className="resume-link" href="https://www.vannya.me">
                    www.vannya.me
                  </a>
                </div>
              </div>
              <div className="resume-contact-group">
                <div className="resume-text">
                  <i className="fab fa-facebook" />{" "}
                  <a
                    className="resume-link"
                    href="https://www.facebook.com/vannienicole"
                  >
                    facebook.com/vannienicole
                  </a>
                </div>
                <div className="resume-text">
                  <i className="fab fa-github" />{" "}
                  <a className="resume-link" href="https://github.com/vannya">
                    github.com/vannya
                  </a>
                </div>
                <div className="resume-text">
                  <i className="fab fa-linkedin" />{" "}
                  <a
                    className="resume-link"
                    href="https://www.linkedin.com/in/vannya/"
                  >
                    linkedin.com/in/vannya/
                  </a>
                </div>
              </div>
            </div>
            <div className="resume-section">
              <div className="resume-subheader">TECHNICAL SKILLS</div>
              <div className="resume-subheader-underline" />
              <div className="resume-text bottom-space">
                <strong>Strong:</strong> ReactJS, JavaScript, HTML5, CSS3, ES6,
                Express, Sass, Git/Version Control, Photoshop, InDesign.
              </div>
              <div className="resume-text">
                <strong>Knowledgable:</strong> Redux, GraphQL, MongoDB, Node.js,
                SQL, Webpack, Android, Java, C++
              </div>
            </div>
            <div className="resume-section">
              <div className="resume-subheader">CERTIFICATIONS</div>
              <div className="resume-subheader-underline" />
              <div className="resume-group">
                <div className="resume-text">FCC Front End Certificate</div>
                <div className="resume-text resume-date">Feb 2018</div>
              </div>
            </div>
            <div className="resume-section">
              <div className="resume-subheader">VOLUNTEER</div>
              <div className="resume-subheader-underline" />
              <div className="resume-group">
                <div className="resume-text resume-title">Mercy House</div>
                <div className="resume-text resume-date">
                  Aug 2014 - Oct 2017
                </div>
                <div className="resume-text">Photographer</div>
              </div>
              <div className="resume-group">
                <div className="resume-text resume-title">
                  Girl Scouts of USA
                </div>
                <div className="resume-text resume-date">
                  Aug 2010 - May 2012
                </div>
                <div className="resume-text">Daisy and Brownie Leader</div>
              </div>
            </div>
          </div>
          <div className="resume-body-right">
            <div className="resume-section bottom-space">
              <div className="resume-subheader">EXPERIENCE</div>
              <div className="resume-subheader-underline" />
              <div className="resume-group">
                <div className="resume-text resume-position">
                  Front End Developer (Remote)
                </div>
                <div className="resume-text resume-location">
                  Chingu Cohorts - Toronto, Canada
                </div>
                <div className="resume-text resume-date">
                  Jul 2017 - present
                </div>
                <ul>
                  <li>
                    Front end development of the Chingu Developer Network client
                    using React and interfacing with a Node / GraphQL /
                    PostgreSQL backend.
                  </li>
                  <li>
                    Facilitate 8-10 week long Voyage cohorts of 350 persons
                    across 75 nations.
                  </li>
                  <li>
                    Write/edit articles for the Chingu Medium publication and
                    create screencast walkthroughs for members/teams.
                  </li>
                </ul>
              </div>
              <div className="resume-group">
                <div className="resume-text resume-position">
                  Accounting Specialist
                </div>
                <div className="resume-text resume-location">
                  Sound Productions - Irving, TX
                </div>
                <div className="resume-text resume-date">
                  Dec 2016 - Sept 2017
                </div>
                <ul>
                  <li>
                    Designed new system for 3-way matching for increased
                    department efficiency.
                  </li>
                  <li>
                    Implemented process for shipment tracking for increased
                    customer satisfaction.
                  </li>
                  <li>
                    Processed 8 months of backlogged financial documents within
                    60 days for 2017 year end reporting.
                  </li>
                </ul>
              </div>
              <div className="resume-group">
                <div className="resume-text resume-position">
                  Guest Educator
                </div>
                <div className="resume-text resume-location">
                  Irving ISD - Irving, TX
                </div>
                <div className="resume-text resume-date">
                  Sept 2016 - Jun 2017
                </div>
                <ul>
                  <li>
                    Taught a range of grade levels and subjects as district
                    needs fluctuated.
                  </li>
                  <li>
                    Preferred Guest Educator for gifted education and STEM
                    classrooms in the district.
                  </li>
                </ul>
              </div>
              <div className="resume-group">
                <div className="resume-text resume-position">
                  Shift Supervisor
                </div>
                <div className="resume-text resume-location">
                  CVS Pharmacy - Irving, TX
                </div>
                <div className="resume-text resume-date">
                  May 2012 - Nov 2013
                </div>
                <ul>
                  <li>
                    Lead supervisor for 24-hour store with responsibility for 6
                    cashiers and technicians.
                  </li>
                  <li>
                    Decreased shrink/loss in both Makeup and Beauty departments
                    by 5% and 7%.{" "}
                  </li>
                  <li>
                    Led bi-weekly inventory counts to maintain streamlined
                    product flow.
                  </li>
                </ul>
              </div>
            </div>
            <div className="resume-section bottom-space">
              <div className="resume-subheader">PROJECTS</div>
              <div className="resume-subheader-underline" />
              <div className="resume-text">
                <a className="resume-link" href="https://chingu.io/">
                  Chingu.io
                </a>: Front end development of the Chingu Development Network
                client using React and interfacing with a
                Node/GraphQL/PostgreSQL backend.
              </div>
              <div className="resume-text">
                <a
                  className="resume-link"
                  href="https://modmemes.herokuapp.com/"
                >
                  ModMemes
                </a>:  Meme Library web application using MERN stack.
              </div>
              <div className="resume-text">
                <a
                  className="resume-link"
                  href="https://junipermail.herokuapp.com/"
                >
                  JuniperMail
                </a>: Survey generation site using MERN stack with Stripe and
                Sendgrid.
              </div>
              <div className="resume-text">
                <a
                  className="resume-link"
                  href="https://bearbnb-06.herokuapp.com/"
                >
                  Bearbnb
                </a>: Clone of Airbnb using ReactJS/Redux, Express, Node.js and
                MongoDB.
              </div>
              <div className="resume-text">
                <a
                  className="resume-link"
                  href="https://www.npmjs.com/package/vannya-mern-app"
                >
                  Vannya-MERN-app
                </a>: NPM published boilerplate package for creating MERN apps.
              </div>
              <div className="resume-text">
                <a
                  className="resume-link"
                  href="https://vannya.github.io/momentum-clone/"
                >
                  Momentum
                </a>: Clone of productivity Chrome Tab Extension using
                React/Firebase.
              </div>
              <div className="resume-text">
                <a
                  className="resume-link"
                  href="https://turtrello.herokuapp.com/"
                >
                  Turtrello
                </a>: Kanban-style web application using React and Firebase.
              </div>
              <div className="resume-text">
                <a className="resume-link" href="vannya.me/">
                  Vannya.me
                </a>: Personal portfolio site using React where my work can be
                found.
              </div>
            </div>
            <div className="resume-education">
              <div className="resume-subheader">EDUCATION</div>
              <div className="resume-subheader-underline" />
              <div className="resume-group">
                <div className="resume-text resume-title">
                  Associates of Applied Science, Software Development
                </div>
                <div className="resume-text resume-title">
                  North Lake College - Irving, TX
                </div>
                <div className="resume-text resume-date">Dec 2017</div>
                <ul>
                  <li>Programming in Java and C++. President’s Honor Roll.</li>
                </ul>
              </div>
              <div className="resume-group">
                <div className="resume-text resume-title">
                  Associates of Arts, Liberal Studies
                </div>
                <div className="resume-text resume-title">
                  North Lake College - Irving, TX
                </div>
                <div className="resume-text resume-date">May 2017</div>
                <ul>
                  <li>Areas: Accounting, Calculus, Geology and Photography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
