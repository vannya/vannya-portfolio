import React from 'react';

const IconBlurb = (props) => {
  return (
    <div className="icon-blurb">
      <i className={props.iconName}></i>
      <h2>{props.text}</h2>
      <h4>{props.blurb}</h4>
    </div>
  );
}

export default IconBlurb;