import React, { Component } from "react";
import { Route } from "react-router-dom";
import SinglePageHome from "./components/pages/SinglePageHome";
import NavBarSP from "./components/header/NavBarSP";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Resume from "./components/pages/Resume";
import About from './components/pages/About';
import Projects from "./components/pages/Projects";
import ProjectPage from "./components/pages/ProjectPage";
import PortfolioAPI from "./api/PortfolioData";

class App extends Component {
  state = {
    portfolio: {}
  };

  componentWillMount() {
    this.setState({
      portfolio: PortfolioAPI.portfolio
    });
  }

  render() {
    return (
      <div>
        {window.location.pathname ==="/" ? <NavBarSP /> : <Header />}
        <Route exact path='/' render={() => <SinglePageHome portfolio={this.state.portfolio} />} />
        <Route
          exact
          path="/projects"
          render={() => <Projects portfolio={this.state.portfolio} />}
        />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        {Object.keys(this.state.portfolio).map(item => {
          return (
            <Route
              key={item}
              exact
              path={`/projects/${this.state.portfolio[item].pagename}`}
              render={() => (
                <ProjectPage
                  key={item}
                  portfolio={this.state.portfolio[item]}
                />
              )}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
