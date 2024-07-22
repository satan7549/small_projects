// src/components/RainEffect.js
import React, { useEffect, useState } from "react";
import "./RainEffect.css";

const RainEffect = ({ rows, cols }) => {
  const [drops, setDrops] = useState(Array(cols).fill(null));
  const [dropColors, setDropColors] = useState(Array(cols).fill(null));

  useEffect(() => {
    const interval = setInterval(() => {
      setDrops((prevDrops) => {
        const newDrops = [...prevDrops];
        for (let col = 0; col < cols; col++) {
          if (newDrops[col] === null || newDrops[col] >= rows - 0) {
            // Start a new drop in this column with some randomness
            if (Math.random() > 0.95) {
              newDrops[col] = 0;
              setDropColors((prevColors) => {
                const newColors = [...prevColors];
                newColors[col] = getRandomColor();
                return newColors;
              });
            }
          } else {
            newDrops[col]++;
          }
        }
        return newDrops;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [rows, cols]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      className="rain-grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * cols }, (_, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const isDrop =
          drops[col] !== null && row >= drops[col] && row < drops[col] + 6;
        const dropColor = isDrop ? dropColors[col] : null;
        return (
          <div
            key={idx}
            className="drop"
            style={{ backgroundColor: dropColor }}
          ></div>
        );
      })}
    </div>
  );
};

export default RainEffect;
