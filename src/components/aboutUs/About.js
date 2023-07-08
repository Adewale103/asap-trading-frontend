import React from "react";
import "./About.css";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdSupport } from "react-icons/md";

const About = () => {
  return (
    <div className="aboutBackgroundPage">
      <div className="aboutContainerPage">
        <div className="aboutTitleBox">
          <p className="aboutParagrah">
            <AiOutlineBarChart color="blue" />
            WHAT WE DO
          </p>
          <h2 className="aboutTitleHeader">TRADE CONFIDENTLY</h2>
          <p className="aboutDetailsText">
            We provide individuals and businesses a world class experience to
            buy and sell cutting-edge cryptocurrencies and digital tokens.
            Crypto is the go-to spot for traders who demand lightning fast trade
            execution, stable wallets, and industry-best security practices.
            Whether you are new to trading and cryptocurrencies, or a veteran to
            both, It was created for you!
          </p>
          <button className="aboutDetailsButton">Get Started Now</button>
        </div>
      </div>
      <div className="aboutDetailsPage">
        <div className="aboutDetailsContainer">
          <div className="aboutDetailsSecurityBox">
            <BiMoney size={50} color="#337ab7" />
            <h2 className="aboutDetailsHeader">Low Fee</h2>
            <p className="aboutDetailsText">
              0% maker fee and 0.1% taker fee makes us one of the most
              competitive exchanges on the market
            </p>
          </div>
          <div className="aboutDetailsSecurityBox">
            <FaLock size={50} color="#337ab7" />
            <h2 className="aboutDetailsHeader">Security</h2>
            <p className="aboutDetailsText">
              The vast majority of digital assets are stored securely in offline
              storages
            </p>
          </div>
          <div className="aboutDetailsSecurityBox">
            <HiUserGroup size={50} color="#337ab7" />
            <h2 className="aboutDetailsHeader">Experience Team</h2>
            <p className="aboutDetailsText">
              Our experienced team helps us build the best product and deliver
              first class service to our clients
            </p>
          </div>
          <div className="aboutDetailsSecurityBox">
            <MdSupport size={50} color="#337ab7" />
            <h2 className="aboutDetailsHeader">24/7 Support</h2>
            <p className="aboutDetailsText">
              Our multilingual 24/7 support allows us to keep in touch with
              customers in all time zones and regions{"     "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
