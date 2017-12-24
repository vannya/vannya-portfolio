import React from 'react';

const SocialIcon = (props) => {
  return (
    <div className="social-box">
      <span className="social-icon">
        <i className={props.icon}></i>
      </span>
      <span className="social-text">
        {props.text.toUpperCase()}
      </span>
    </div>
  );
}

export default SocialIcon;