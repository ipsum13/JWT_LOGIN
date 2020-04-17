import React, { Component } from "react";
import { Jumbotron, ListGroup } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <Jumbotron fluid style={{ height: "100vh", textAlign: 'center',}}>
        <h3>This is a simple Login/Authentication App using MERN Stack</h3>
        <h5 className="mb-5">This project uses the following technologies:</h5>
        <ListGroup style={{width: '50%', display: 'block', margin: 'auto'}}>
          <ListGroup.Item variant="primary">React</ListGroup.Item>
          <ListGroup.Item variant="secondary">Redux</ListGroup.Item>
          <ListGroup.Item variant="success">React Router</ListGroup.Item>
          <ListGroup.Item variant="danger">Express and Node</ListGroup.Item>
          <ListGroup.Item variant="warning">MongoDB</ListGroup.Item>
          <ListGroup.Item variant="info">Passport and JWTs</ListGroup.Item>
        </ListGroup>
      </Jumbotron>
    );
  }
}

export default Landing;
