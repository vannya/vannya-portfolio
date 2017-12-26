import React from "react";
import PageHeader from "../common/PageHeader";
import rocks from '../../stylesheets/assets/VanRocks-300x300.jpg';
import shrine from '../../stylesheets/assets/VanShrine-300x300.jpg';
import littlevan from '../../stylesheets/assets/Little-Van.jpg';

const About = props => {
  return (
    <div id="about" className="about">
      <PageHeader text="About Me" />
      <p>
        I am an aspiring Software Developer rounding the end of my AAS in
        Software Development. After dabbling in code for years, I decided that a
        career transition must happen to follow my passion. In the meantime, I’m
        spending all my free time taking courses, learning everything I can and
        expanding my professional portfolio. I live in Dallas, TX currently, but
        have lived around the US and Japan. I get wanderlust and, at 5 years,
        have definitely been in this city far too long. Hopefully, relocation
        will be part of my next career move! Until then, I’ll spend as much time
        traveling and hiking as I can. You can check out my resume for my
        education and employment background. Unfortunately, that only tells the
        story of “Professional Van”. If you really want to know me, you’ll learn
        much more over a cup of coffee. My interests are definitely varied.
        Sewing, cooking, reading, playing a smattering of video and board games
        keep me entertained. However, if I really want to enjoy myself, I read
        and listen to audiobooks on a variety of topics, such as philosophy,
        eastern religions, preparedness, self reliance, personal discipline,
        radical simplicity, minimalism…..and of course, too many sci-fi novels.
      </p>
      <div className="img-group">
        <img className="canhide" src={shrine} alt="Van and daughter at Shrine" />
        <img className="canhide" src={littlevan} alt="Little Van"  />
        <img src={rocks} alt="Bouldering Van"  />
      </div>
      <p>
      When my hands are not attached to my keyboard, you’ll more than likely
      find me at the gym, yoga studio or traveling around the US.
    </p>
    { window.location.pathname === "/" ? <a href="#cta"><i className="fas fa-angle-down"></i></a> : ""}
    </div>
  );
};

export default About;
