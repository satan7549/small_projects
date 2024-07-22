import React from "react";
import "./GameBoard.css";

const GameBoard = ({ positions }) => {
  const cells = Array.from({ length: 100 }, (_, index) => 100 - index);

  const renderCell = (cell) => {
    const playersAtCell = Object.entries(positions)
      .filter(([, pos]) => {
        return pos === cell;
      })
      .map(([player]) => player);

    return (
      <div key={cell} className="cell">
        <span className="cell-number">{cell}</span>
        {playersAtCell.map((player) => (
          <div key={player} className="player">
            {player[0]}
          </div>
        ))}
      </div>
    );
  };

  return <div className="board">{cells.map(renderCell)}</div>;
};

export default GameBoard;
