import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import classnames from "classnames";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="modal-form">
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
            <b>Register</b> below
          </h4>
        </div>

        <div id="signup-form">
          <form noValidate onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              placeholder="Enter name"
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name,
              })}
            />
            <span className="red-text">{errors.name}</span>
            <input
              onChange={this.onChange}
              placeholder="Enter email"
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email,
              })}
            />
            <span className="red-text">{errors.email}</span>
            <input
              onChange={this.onChange}
              placeholder="Enter password"
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password,
              })}
            />

            <span className="red-text">{errors.password}</span>

            <input
              onChange={this.onChange}
              placeholder="Confirm password"
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2,
              })}
            />

            <span className="red-text">{errors.password2}</span>
            <button type="submit" className="btn signup">
              Create account
            </button>

            <hr />

            <p className="create">
              Already have an account?{" "}
              <button type="button" className="toggle-signup">
                <Link to={{ pathname: "/login" }}>Sign in</Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
