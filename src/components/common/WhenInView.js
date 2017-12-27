import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
  constructor(){
    super();
    this.state = { 
      isInView: false 
    };
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition, currentPosition }){
    if(previousPosition === Waypoint.below || currentPosition === Waypoint.inside) {
      this.setState({
        isInView: true
      });
    }
  }
  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter} />
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}

export default WhenInView;