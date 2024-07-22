// src/components/Cell.js
import React from "react";
 
const Cell = ({ value, onClick }) => {
  return (
    <button style={styles.cell} onClick={onClick}>
      {value}
    </button>
  );
};

const styles = {
  cell: {
    width: "50px",
    height: "50px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fff",
    border: "2px solid #000",
    cursor: "pointer",
  },
};

export default Cell;
