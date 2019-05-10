import React from "react";
import Albums from "./components/albums.components";
import NavBar from "./components/navbar.components";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Albums />
      </div>
    );
  }
}

export default Home;
