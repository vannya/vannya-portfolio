import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {

  state = {
    selectedKey: ""
  };

  handleOnClick(newKey) {
    this.setState({
      selectedKey: newKey
    });
  }

  render() {
    return (
      <div className="navbar">
        <ul className="web-nav">
          <Link to="/"><li className={this.state.selectedKey === "1" ? "selected" : ""} onClick={() => this.handleOnClick("1")}>HOME</li></Link>
          <Link to="/about"><li className={this.state.selectedKey === "2" ? "selected" : ""} onClick={() => this.handleOnClick("2")}>ABOUT</li></Link>
          <Link to="/projects"><li className={this.state.selectedKey === "3" ? "selected" : ""} onClick={() => this.handleOnClick("3")}>PROJECTS</li></Link>
          <Link to="/resume"><li className={this.state.selectedKey === "4" ? "selected" : ""} onClick={() => this.handleOnClick("4")}>RESUME</li></Link>
          <Link to="https://github.com/vannya" target="_blank"><li>GITHUB</li></Link>
          <Link to="https://www.linkedin.com/in/vannya/" target="_blank"><li>LINKEDIN</li></Link>
        </ul>
        <ul className="mobile-nav">
          <Link to="/"><li className={this.state.selectedKey === "1" ? "selected" : ""} onClick={() => this.handleOnClick("1")}>HOME</li></Link>
          <Link to="/about"><li className={this.state.selectedKey === "2" ? "selected" : ""} onClick={() => this.handleOnClick("2")}>ABOUT</li></Link>
          <Link to="/projects"><li className={this.state.selectedKey === "3" ? "selected" : ""} onClick={() => this.handleOnClick("3")}>PROJECTS</li></Link>
          <Link to="/resume"><li className={this.state.selectedKey === "4" ? "selected" : ""} onClick={() => this.handleOnClick("4")}>RESUME</li></Link>
          <Link to="https://github.com/vannya" target="_blank"><li><i className="fab fa-github"></i></li></Link>
          <Link to="https://www.linkedin.com/in/vannya/" target="_blank"><li><i className="fab fa-linkedin-in"></i></li></Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;