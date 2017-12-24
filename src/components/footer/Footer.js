import React from "react";
import {Link} from 'react-router-dom';
import SocialIcon from '../common/SocialIcon';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <Link to='/about'><SocialIcon text="Facebook" icon="fab fa-facebook-f" /></Link>
        <Link to='/about'><SocialIcon text="Instagram" icon="fab fa-instagram" /></Link>
        <Link to='/about'><SocialIcon text="Pinterest" icon="fab fa-pinterest" /></Link>
        <Link to='/about'><SocialIcon text="LinkedIn" icon="fab fa-linkedin-in" /></Link>
        <Link to='/about'><SocialIcon text="Github" icon="fab fa-github" /></Link>
      </div>
      <div className="copyright">©2017 - Van Tabbert. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;