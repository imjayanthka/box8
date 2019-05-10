import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./home";
import LandingPage from "./landingPage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home/" component={Home} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
