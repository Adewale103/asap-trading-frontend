import React from "react";
import "./Header.css";
import asaptrading from "../../assets/Asaptrading.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky-wrapper">
      <div className="header-navbar">
        <div className="container">
          <div className="imagebox">
            <img className="headLogo" alt="#" src={asaptrading} />
          </div>
          <ul className="line_list">
            <li className="link_item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="link_item">
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className="link_item">
              <Link className="link" to="/currencies">
                Currencies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
