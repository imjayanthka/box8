import React from "react";
import axios from "axios";
import { Input, InputGroup, InputGroupAddon, Col } from "reactstrap";

import Album from "./album.components";

import "./albums.css";

const URL = "https://itunes.apple.com/in/rss/topalbums/limit=100/json";

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null,
      searchFeed: null
    };
  }
  componentDidMount() {
    axios.get(URL).then(res => {
      this.setState({
        ...res.data
      });
    });
  }

  searchOnChange = event => {
    const searched = this.state.feed.entry.filter(album => {
      return album["im:name"].label.toLowerCase().includes(event.target.value);
    });
    this.setState({
      searchFeed: searched
    });
  };

  render() {
    if (this.state.feed) {
      const { searchFeed } = this.state;
      const { entry } = this.state.feed;
      console.log(entry);
      return (
        <div className="search-contianer">
          <div className="album-container">
            <Col sm="12">
              <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                <Input onChange={this.searchOnChange} />
              </InputGroup>
            </Col>
            {!searchFeed &&
              entry.map(album => (
                <Album
                  name={album["im:name"].label}
                  artist={album["im:artist"].label}
                  image={album["im:image"][2].label}
                  price={album["im:price"].label}
                  items={album["im:itemCount"].label}
                />
              ))}
            {searchFeed &&
              searchFeed.length !== 0 &&
              searchFeed.map(album => (
                <Album
                  name={album["im:name"].label}
                  artist={album["im:artist"].label}
                  image={album["im:image"][2].label}
                  price={album["im:price"].label}
                  items={album["im:itemCount"].label}
                />
              ))}
            {searchFeed && searchFeed.length === 0 && (
              <div className="no-album-available">
                <div>No album available</div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Albums;
