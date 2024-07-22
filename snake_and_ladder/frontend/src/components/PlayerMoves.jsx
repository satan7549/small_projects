import React from "react";
import "./PlayerMoves.css";

const PlayerMoves = ({ moves }) => {
  return (
    <div className="moves">
      <h2>Player Moves</h2>
      {moves.map((move, index) => (
        <div key={index} className="move">
          {move.player} rolled a {move.roll} and moved from{" "}
          {move.initialPosition} to {move.finalPosition}
        </div>
      ))}
    </div>
  );
};

export default PlayerMoves;
