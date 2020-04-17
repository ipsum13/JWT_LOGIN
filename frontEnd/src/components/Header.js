import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../actions/authActions";
import { Navbar, Nav, Button } from "react-bootstrap";

class Header extends Component {
  renderLinks() {
    if (this.props.auth.isAuthenticated) {
      return (
        <Nav>
          <Nav.Link href="/">
            <Button variant="primary" onClick={this.onLogoutClick}>
              Log out
            </Button>
          </Nav.Link>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <Nav.Link href="/register">
            <Button
              variant="primary"
              style={{ width: "100px", fontWeight: "600" }}
            >
              Sign up
            </Button>
          </Nav.Link>
          <Nav.Link eventKey={2} href="/login">
            <Button
              variant="success"
              style={{ width: "100px", fontWeight: "600" }}
            >
              Sign in
            </Button>
          </Nav.Link>
        </Nav>
      );
    }
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const currentRoute = window.location.pathname;
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand href="/" style={{ color: "black" }}>
          MERN{" "}
          <svg
            className="bi bi-code-slash"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z"
              clipRule="evenodd"
            />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={
            currentRoute === "/register"
              ? { backgroundColor: "#0275d8" }
              : { backgroundColor: "#57b846" }
          }
        />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          {this.renderLinks()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser, logoutUser })(Header);
