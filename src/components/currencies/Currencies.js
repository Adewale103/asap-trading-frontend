import React from "react";
import "./Currencies.css";
import { BiMoney } from "react-icons/bi";
import Bitcoin from "../../assets/btc.png";
import Ethereum from "../../assets/eth.png";
import BinanceChain from "../../assets/Binance(BNB beacon chain).png";
import BinanceSmartChain from "../../assets/Binance(BNB smart chain).png";

import Tron from "../../assets/tron(USD).png";

const Currencies = () => {
  return (
    <div className="currenciesBackgroundPage">
      <div className="currenciesContainerPage">
        <p className="currenciesParagraph">
          <BiMoney size={20} color="#337ab7" />
          AVAILABLE COINS TO TRADE
        </p>
        <h2 className="currenciesText">AVAILABLE COINS</h2>
        <div className="currenciesLogoBox">
          <div className="currenciesLogoContainer">
            <img src={Bitcoin} alt="#" className="imageLogo" />
            <span className="imageWalletName">Bitcoin</span>
          </div>

          <div className="currenciesLogoContainer">
            <img src={Ethereum} alt="#" className="imageLogo" />
            <span className="imageWalletName">Ethereum</span>
          </div>

          <div className="currenciesLogoContainer">
            <img src={Tron} alt="#" className="imageLogo" />
            <span className="imageWalletName">Tron(USDT)</span>
          </div>

          <div className="currenciesLogoContainer">
            <img src={BinanceChain} alt="#" className="imageLogo" />
            <span className="imageWalletName">BNB beacon chain</span>
          </div>

          <div className="currenciesLogoContainer">
            <img src={BinanceSmartChain} alt="#" className="imageLogo" />
            <span className="imageWalletName">BNB smart chain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currencies;
