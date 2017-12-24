import React from "react";
import {Link} from 'react-router-dom';
import SocialIcon from '../common/SocialIcon';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <Link to='https://www.facebook.com/vannienicole' target="_blank" rel="noopener noreferrer"><SocialIcon text="Facebook" icon="fab fa-facebook-f" /></Link>
        <Link to='https://www.instagram.com/minimalvannya/' target="_blank" rel="noopener noreferrer"><SocialIcon text="Instagram" icon="fab fa-instagram" /></Link>
        <Link to='https://www.linkedin.com/in/vannya/' target="_blank" rel="noopener noreferrer"><SocialIcon text="LinkedIn" icon="fab fa-linkedin-in" /></Link>
        <Link to='https://github.com/vannya' target="_blank" rel="noopener noreferrer"><SocialIcon text="Github" icon="fab fa-github" /></Link>
      </div>
      <div className="copyright">©2017 - Van Tabbert. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;