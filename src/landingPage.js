import React from "react";
import NavBar from "./components/navbar.components";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./styles.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="jumbotron">
          <h1 className="display-3">Welcome to Music..</h1>
          <p className="lead">Check out our top albums..</p>
          <Link to="/home">
            <Button color="primary">Top Albums </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
