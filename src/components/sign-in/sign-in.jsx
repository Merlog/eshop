import React from "react";
import "./sign-in.scss";
import FormInput from "./../form-input/form-input";
import CustomButton from "./../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
