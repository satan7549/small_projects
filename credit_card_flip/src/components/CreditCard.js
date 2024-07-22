// src/CreditCard.js
import React from "react";
import "./CreditCard.css";
import chipImage from "../assets/chip_logo.png";
import visaLogo from "../assets/visa_logo.png";

const CreditCard = ({ cardNumber, cardName, expiryDate, cvv, isFlipped }) => {
  return (
    <div className={`credit-card ${isFlipped ? "flipped" : ""}`}>
      <div className="credit-card-front">
        <img src={chipImage} alt="Chip" className="chip" />
        <div className="card-number">{cardNumber || "#### #### #### ####"}</div>
        <div className="card-name">{cardName || "FULL NAME"}</div>
        <div className="expiry-date">
          <span className="valid-thru">Valid Thru</span> {expiryDate || "MM/YY"}
        </div>
        <img src={visaLogo} alt="Visa" className="visa-logo" />
      </div>
      <div className="credit-card-back">
        <div className="cvv">{cvv || "###"}</div>
      </div>
    </div>
  );
};

export default CreditCard;
