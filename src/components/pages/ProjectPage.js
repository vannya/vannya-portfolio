import React from "react";
import PageHeader from '../common/PageHeader';

const ProjectPage = props => {
  const image = require(`../../stylesheets/assets/${props.portfolio.img}`);
  return (
    <div className="portfolio-item">
      <PageHeader text={props.portfolio.name} />
      <div className="port-image">
        <img src={image} alt="" />
      </div>
      <p>{props.portfolio.description}</p>
      <a href={props.portfolio.livelink}>Live Demo</a>
      <a href={props.portfolio.github}>Github</a>
    </div>
  );
};

export default ProjectPage;