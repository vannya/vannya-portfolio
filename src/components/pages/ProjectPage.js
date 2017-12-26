import React from "react";
import PageHeader from '../common/PageHeader';
import Button from '../common/Button';

const ProjectPage = props => {
  const image = require(`../../stylesheets/assets/${props.portfolio.img}`);
  return (
    <div className="project-item">
      <PageHeader text={props.portfolio.name} />
      <div className="project-image">
        <img src={image} alt="" />
      </div>
      <p>{props.portfolio.description}</p>
      <div className="project-links">
        <a href={props.portfolio.livelink}><Button text='Live Demo'/></a>
        <a href={props.portfolio.github}><Button text='View Code'/></a>    
      </div>
    </div>
  );
};

export default ProjectPage;