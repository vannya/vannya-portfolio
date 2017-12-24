import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-box">
        <img className="card-image" alt="" src={props.image} />
      </div>
      <div className="card-caption">{props.title}</div>
    </div>
  );
}

export default Card;