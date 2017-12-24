import React from "react";
import Button from './Button';

const CallToAction = () => {

  return (
    <div id="cta" className="call-to-action">
      <div className="cta-overlay">
        <div className="cta-text">
          <a href="/resume"><Button text="View My Resume" /></a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
