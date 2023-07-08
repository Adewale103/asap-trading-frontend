import React, { useState } from "react";
import "./Home.css";
import SignUp from "../sign-up/SignUp";
import SignIn from "../sign-in/SignIn";
import { HiUser } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import About from "../aboutUs/About";
import Currencies from "../currencies/Currencies";

const Home = () => {
  const [visibility, setVisibility] = useState(true);
  const showButton1 = () => {
    setVisibility(true);
  };
  const showButton2 = () => {
    setVisibility(false);
  };

  return (
    <div>
      <div className="home_wrapper">
        <section className="left_side">
          <div className="left_side_section">
            <h2 className="left_side_title">Digital Currency Exchange</h2>
            <p className="left_side_paragraph">
              Fast, trusted and the most secure channel to sell your
              cryptocurrency
            </p>
            <button className="left_side_button">Get started now</button>
          </div>
        </section>
        <section className="right_side">
          <div className="button_section">
            <div className="buttonContainer">
              <button
                className="right_side_button_signUp"
                onClick={showButton1}
              >
                <HiUser style={{ marginBottom: "3px" }} /> Sign Up
              </button>
              <button
                className="right_side_button_signIn"
                onClick={showButton2}
              >
                <BiLogIn />
                Sign In
              </button>
            </div>
            <div className="signUp_page">
              {visibility && (
                <div>
                  <SignUp />
                </div>
              )}
              {!visibility && (
                <div>
                  <SignIn />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <About />
      <Currencies />
    </div>
  );
};

export default Home;
