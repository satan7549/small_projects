// src/components/GameMessage.js
import React from "react";

const GameMessage = ({ message }) => {
  return <div style={styles.message}>{message}</div>;
};

const styles = {
  message: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default GameMessage;
