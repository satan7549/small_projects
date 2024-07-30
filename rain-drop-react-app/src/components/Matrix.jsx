import React, { useState } from "react";
import "./Matrix.css";

const Matrix = ({ rows, cols }) => {
  const initialMatrix = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
  const [matrix, setMatrix] = useState(initialMatrix);

  const handleClick = (row, col) => {
    let step = 0;
    const interval = setInterval(() => {
      const newMatrix = matrix.map((r, rowIndex) =>
        r.map((c, colIndex) => {
          const distance = Math.abs(rowIndex - row) + Math.abs(colIndex - col);
          return distance === step ? true : c;
        })
      );
      setMatrix(newMatrix);
      step++;
    
      // if (step > rows + cols - 1) clearInterval(interval);
      if (step > rows && step > cols) clearInterval(interval);
    }, 500);
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${cell ? "active" : ""}`}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
