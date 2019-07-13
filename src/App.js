import "./styles.css";
import React, { Component } from "react";

import TechSkills from "./TechSkills";
import DevSkills from "./DevSkills";
import Contact from "./Contact";
import Projects from "./Projects";
import Employment from './Employment'

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <ul className="nav">
              <li className="nav-item">
                <Link className="link" to="/">
                WebDevSkills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/TechSkills" className="link">
                   TechSkills
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Projects" className="link">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Employment" className="link">
                  Employment
                </Link> 
              </li>

              <li className="nav-item">
              <Link to="/Contact" className="link">
                Contact
              </Link> 
            </li>

            </ul>
          </div>

          <hr />
          <div>
            <Route exact path="/" component={DevSkills} />
            <Route path="/TechSkills" component={TechSkills} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Employment" component={Employment} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
