import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from "./components/pages/Portfolio";
import ProjectPage from "./components/pages/ProjectPage";
import Footer from "./components/footer/Footer";
import PortfolioAPI from "./api/PortfolioData";

const Resume = () => <h2>Resume</h2>;

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
        {window.location.pathname ==="/" ? "" : <Header />}
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/portfolio"
          render={() => <Portfolio portfolio={this.state.portfolio} />}
        />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        {Object.keys(this.state.portfolio).map(item => {
          return (
            <Route
              key={item}
              exact
              path={`/portfolio/${this.state.portfolio[item].pagename}`}
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

