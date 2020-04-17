import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="form-modal">
        <div className="form-toggle">
          <p>
          <Link to="/">
            <svg
              className="bi bi-box-arrow-in-left"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.854 11.354a.5.5 0 000-.708L5.207 8l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9A.5.5 0 0015 8z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M2.5 14.5A1.5 1.5 0 011 13V3a1.5 1.5 0 011.5-1.5h8A1.5 1.5 0 0112 3v1.5a.5.5 0 01-1 0V3a.5.5 0 00-.5-.5h-8A.5.5 0 002 3v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0V13a1.5 1.5 0 01-1.5 1.5h-8z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Back to home
          </Link>
          </p>

          <h4>
            <b>Login</b> below
          </h4>
        </div>

        <div id="login-form">
          <form noValidate onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={this.state.email}
              placeholder="Enter email"
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound,
              })}
            />
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
            <input
              onChange={this.onChange}
              placeholder="Enter password"
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password || errors.passwordincorrect,
              })}
            />
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
            <button type="submit" className="btn login">
              login
            </button>

            <p className="create">
              No Account?{" "}
              <button type="button" className="toggle-signup">
                <Link to={{ pathname: "/register" }}>Create one</Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
