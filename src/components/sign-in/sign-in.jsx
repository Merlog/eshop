import React from "react";
import "./sign-in";

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
    this.setState({ email: "" });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" value={this.state.email} />
          <label>Email</label>
          <input name="password" name="password" value={this.state.password} onChange={} required/>
          <label>Password</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
