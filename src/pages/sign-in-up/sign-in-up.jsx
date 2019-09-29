import React from "react";
import "./sign-in-up.scss";
import SignIn from "./../../components/sign-in/sign-in";
import SignUp from "./../../components/sign-up/sign-up";

const SignInUP = () => (
  <div className="sign-in-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUP;
