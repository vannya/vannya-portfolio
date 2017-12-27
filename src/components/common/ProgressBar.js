import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${props.width}` }} />
      <div className="progress-bar-label">{props.label}</div>
      <div className="progress-bar-percentage">{props.width}</div>
    </div>
  );
}

export default ProgressBar;