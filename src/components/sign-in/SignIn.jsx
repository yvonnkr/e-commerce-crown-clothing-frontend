import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "./../form-input/FormInput";
import CustomButton from "./../custom-button/CustomButton";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import "./SignIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    this.props.emailSignInStart({ email, password });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={() => googleSignInStart()}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
