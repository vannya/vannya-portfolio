import React from "react";
import { Link } from "react-router-dom";
import Card from '../common/Card';

const Portfolio = props => {

  return (
    <div className="portfolio">
      <div className="port-row">
        {Object.keys(props.portfolio).map(key => {
          const image = require(`../../stylesheets/assets/${props.portfolio[key].img}`);

          return (
            <Link to={`/portfolio/${props.portfolio[key].pagename}`} key={key}>
              <Card title={props.portfolio[key].name} image={image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;