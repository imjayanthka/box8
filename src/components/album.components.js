import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  Col,
  CardFooter,
  Badge
} from "reactstrap";
import "./albums.css";
class Album extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let toggler = `#${this.props.name}`;
    return (
      <Col sm="4" md="3" lg="2" className="album-art-grow">
        <Card id={this.props.name} className="card-padding" inverse>
          <CardImg src={this.props.image} alt="Card image cap" />
          <CardImgOverlay>
            <CardTitle>{this.props.name}</CardTitle>
          </CardImgOverlay>
          <CardFooter className="footer-pills">
            <Badge color="primary" pill>
              {this.props.price}
            </Badge>
            <Badge color="success" pill>
              {`${this.props.items} Tracks`}
            </Badge>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

export default Album;
