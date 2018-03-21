import React from 'react';

const Button = ({coloration, text, onClick, type}) => {
  let buttonColorType;
  if(coloration === "white") {
    buttonColorType = 'btn';
  } else if (coloration === "submit-btn") {
    buttonColorType = 'submit-btn';
  }else {
    buttonColorType = 'btn-color';
  }
  return (
    <button type={type} className={buttonColorType} onClick={onClick}>{text}</button>
  );
}

export default Button;