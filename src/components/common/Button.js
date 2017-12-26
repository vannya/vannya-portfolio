import React from 'react';

const Button = (props) => {
  return (
    <button className={props.style === 'white' ? "btn" : "btn-color"}>{props.text}</button>
  );
}

export default Button;