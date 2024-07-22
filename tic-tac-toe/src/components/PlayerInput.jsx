// src/components/PlayerInput.js
import React, { useState } from "react";

const PlayerInput = ({ onSubmit }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player1 && player2) {
      onSubmit(player1, player2);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Player 1 (X)"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Player 2 (O)"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Start Game
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  input: {
    margin: "10px",
    padding: "10px",
    fontSize: "16px",
    width: "200px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default PlayerInput;
