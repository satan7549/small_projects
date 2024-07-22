// src/CreditCardForm.js
import React, { useState } from "react";
import CreditCard from "./CreditCard";
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(value.replace(/(\d{4})/g, "$1 ").trim());
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value.toUpperCase());
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setExpiryDate(value.replace(/(\d{2})(\d{2})/, "$1/$2"));
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
  };

  const handleFocusCvv = () => {
    setIsFlipped(true);
  };

  const handleBlurCvv = () => {
    setIsFlipped(false);
  };

  return (
    <div className="credit-card-form">
      <CreditCard
        cardNumber={cardNumber}
        cardName={cardName}
        expiryDate={expiryDate}
        cvv={cvv}
        isFlipped={isFlipped}
      />
      <form>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="form-group">
          <label>Card Name</label>
          <input type="text" value={cardName} onChange={handleCardNameChange} />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onFocus={handleFocusCvv}
            onBlur={handleBlurCvv}
            onChange={handleCvvChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
