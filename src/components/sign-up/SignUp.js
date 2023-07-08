import React, { useState } from "react";
import "./Sign_Up.css";
import { HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/authSlice";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const registerHandle = () => {
    console.log(fullName, email, password);
    dispatch(signUpUser({ fullName, email, password, phoneNumber }));
  };

  return (
    <div className="signUpContainer">
      <div className="signUpBoxHeader">
        <h1 className="signUpHeader">
          <HiUser />
          Register
          <br />
        </h1>
        <span className="signUpParagraph">
          Don't have an account? Register to start trading
        </span>
      </div>
      <div className="signUpFormBox">
        <input
          className="signUpInputBox"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="signUpInputBox"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signUpInputBox"
          type="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="signUpInputBox"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          className="signUpInputBox"
          type="confirmPassword"
          placeholder="Repeat Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <button className="signUpButtonRed" onClick={registerHandle}>
          Sign Up
        </button>
        <p className="signUpIntroForm">
          By Signing up you agree our
          <a href="blank" style={{ textDecoration: "none" }}>
            {" "}
            terms of conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
