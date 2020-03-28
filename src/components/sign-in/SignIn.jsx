import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "./../form-input/FormInput";
import CustomButton from "./../custom-button/CustomButton";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import "./SignIn.scss";

const SignIn = props => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => dispatch(googleSignInStart())}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
