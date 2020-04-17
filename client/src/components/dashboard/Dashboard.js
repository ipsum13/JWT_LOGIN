import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <Jumbotron fluid style={{ textAlign: "center", height: "100vh" }}>
        <h4>
          <b>Hey there,</b> {user.name.split(" ")[0]}
          <p>
            You are logged into a full-stack{" "}
            <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
          </p>
        </h4>
      </Jumbotron>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
