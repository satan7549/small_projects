// src/components/Board.js
import React from "react";
import Cell from "./Cell"; 

const Board = ({ grid, onCellClick }) => {
  return (
    <div style={styles.board}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  board: {
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "5px",
    width: "150px",
    margin: "20px auto",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "5px",
  },
};

export default Board;
