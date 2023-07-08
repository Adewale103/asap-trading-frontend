import React, { useState } from "react";
import "./Sign_In.css";
import { BiLogIn } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { signInUser, logout } from "../../redux/authSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log(email, password);
    dispatch(signInUser({ email, password }));
  };

  const logoutHandle = () => {
    dispatch(logout);
  };

  return (
    <div className="signInContainer">
      <div className="signInBoxHeader">
        <h1 className="signInHeader">
          <BiLogIn />
          Sign In
          <br />
        </h1>
        <span className="signInParagraph">
          Have an account? Sign in & start trading
        </span>
      </div>
      <div className="signInFormBox">
        <input
          className="signInInputBox"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signInInputBox"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signInButtonRed" onClick={handleLogin}>
          Sign In
        </button>

        <button className="signInButtonRed" onClick={logoutHandle}>
          Log Out
        </button>
        <p className="signInIntroForm">
          By Clicking Get Trial you agree to our terms of conditions of this
          product
        </p>
      </div>
    </div>
  );
};

export default SignIn;
