import React from 'react';

const Button = (props) => {
  return (
    <button className={props.coloration === 'white' ? "btn" : "btn-color"}>{props.text}</button>
  );
}

export default Button;