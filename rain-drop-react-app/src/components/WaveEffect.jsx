import React, { useState } from "react";
import "./WaveEffect.css";

const WaveEffect = ({ rows, cols }) => {
  const [matrix, setMatrix] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(0))
  );

  const handleClick = (row, col) => {
    const newMatrix = matrix.map((row) => [...row]);
    const queue = [[row, col]];
    let steps = 0;

    console.log(newMatrix, "newMatrix", queue, "queue");

    while (queue.length) {
      const [r, c] = queue.shift();
      if (r >= 0 && r < rows && c >= 0 && c < cols && newMatrix[r][c] === 0) {
        newMatrix[r][c] = steps + 1;
        queue.push([r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]);
      }
      steps++;
    }

    setMatrix(newMatrix);
  };
  console.log(matrix, "matrix");
  return (
    <div
      className="wave-grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {matrix.flatMap((row, rIdx) =>
        row.map((cell, cIdx) => (
          <div
            key={`${rIdx}-${cIdx}`}
            className="cell"
            style={{
              backgroundColor: `rgba(0, 0, 255, ${cell / (rows + cols)})`,
            }}
            onClick={() => handleClick(rIdx, cIdx)}
          ></div>
        ))
      )}
    </div>
  );
};

export default WaveEffect;
