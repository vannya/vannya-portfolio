import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import CallToAction from '../common/CallToAction';

const SinglePageHome = (props) => {
  
  return (
    <div>
      <Home />
      <About />
      <CallToAction />
      <Projects portfolio={props.portfolio}/>
    </div>
  );
}

export default SinglePageHome;