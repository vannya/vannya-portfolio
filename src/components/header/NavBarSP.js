import React, {Component} from 'react';

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
          <a href="#home"><li className={this.state.selectedKey === "1" ? "selected" : ""} onClick={() => this.handleOnClick("1")}>HOME</li></a>
          <a href="#about"><li className={this.state.selectedKey === "2" ? "selected" : ""} onClick={() => this.handleOnClick("2")}>ABOUT</li></a>
          <a href="#projects"><li className={this.state.selectedKey === "3" ? "selected" : ""} onClick={() => this.handleOnClick("3")}>PROJECTS</li></a>
          <a href="#cta"><li className={this.state.selectedKey === "4" ? "selected" : ""} onClick={() => this.handleOnClick("4")}>RESUME</li></a>
          <a href="https://github.com/vannya" target="_blank" rel="noopener noreferrer"><li>GITHUB</li></a>
          <a href="https://www.linkedin.com/in/vannya/" target="_blank" rel="noopener noreferrer"><li>LINKEDIN</li></a>
        </ul>
        <ul className="mobile-nav">
          <a href="#home"><li className={this.state.selectedKey === "1" ? "selected" : ""} onClick={() => this.handleOnClick("1")}>HOME</li></a>
          <a href="#about"><li className={this.state.selectedKey === "2" ? "selected" : ""} onClick={() => this.handleOnClick("2")}>ABOUT</li></a>
          <a href="#projects"><li className={this.state.selectedKey === "3" ? "selected" : ""} onClick={() => this.handleOnClick("3")}>PROJECTS</li></a>
          <a href="#cta"><li className={this.state.selectedKey === "4" ? "selected" : ""} onClick={() => this.handleOnClick("4")}>RESUME</li></a>
        </ul>
      </div>

    );
  }
}

export default NavBar;