// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import GameBoard from "./components/GameBoard";
// import PlayerMoves from "./components/PlayerMoves";
// import "./App.css";

// const App = () => {
//   const [game, setGame] = useState(null);
//   const [moves, setMoves] = useState([]);
//   const [winner, setWinner] = useState("");

//   useEffect(() => {
//     const initializeGame = async () => {
//       const snakes = [
//         [62, 5],
//         [33, 6],
//         [49, 9],
//         [88, 16],
//         [41, 20],
//         [56, 53],
//         [98, 64],
//         [93, 73],
//         [95, 75],
//       ];
//       const ladders = [
//         [2, 37],
//         [27, 46],
//         [10, 32],
//         [51, 68],
//         [61, 79],
//         [65, 84],
//         [71, 91],
//         [81, 100],
//       ];
//       const players = ["Gaurav", "Sagar"];
//       const response = await axios.post("http://localhost:3001/initialize", {
//         snakes,
//         ladders,
//         players,
//       });
//       setGame(response.data);
//     };

//     initializeGame();
//   }, []);

//   const rollDice = async () => {
//     const response = await axios.post("http://localhost:3001/roll");
//     setMoves([...moves, response.data]);
//     if (response.data.message) {
//       setWinner(response.data.message);
//     }
//   };

//   if (!game) return <div>Loading...</div>;

//   return (
//     <div className="app">
//       <h1>Snake and Ladder Game</h1>
//       {winner ? (
//         <h2 className="winner">{winner}</h2>
//       ) : (
//         <button className="roll-button" onClick={rollDice}>
//           Roll Dice
//         </button>
//       )}
//       <div className="game-container">
//         <GameBoard positions={game.positions} />
//         <PlayerMoves moves={moves} />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GameBoard from "./components/GameBoard";
import PlayerMoves from "./components/PlayerMoves";

const App = () => {
  const [game, setGame] = useState(null);
  const [moves, setMoves] = useState([]);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const initializeGame = async () => {
      const snakes = [
        [62, 5],
        [33, 6],
        [49, 9],
        [88, 16],
        [41, 20],
        [56, 53],
        [98, 64],
        [93, 73],
        [95, 75],
      ];
      const ladders = [
        [2, 37],
        [27, 46],
        [10, 32],
        [51, 68],
        [61, 79],
        [65, 84],
        [71, 91],
        [81, 100],
      ];
      const players = ["Gaurav", "Sagar"];
      const response = await axios.post("http://localhost:3001/initialize", {
        snakes,
        ladders,
        players,
      });
      setGame(response.data);
    };

    initializeGame();
  }, []);

  const rollDice = async () => {
    const response = await axios.post("http://localhost:3001/roll");
    setMoves([...moves, response.data]);
    setGame(response.data);

    if (response.data.message) {
      setWinner(response.data.message);
    }
  };
 
  if (!game) return <div>Loading...</div>;

  return (
    <div className="app">
      <h1>Snake and Ladder Game</h1>
      {winner ? (
        <h2 className="winner">{winner}</h2>
      ) : (
        <button className="roll-button" onClick={rollDice}>
          Roll Dice
        </button>
      )}
      <div className="game-container">
        <GameBoard positions={game.positions} />
        <PlayerMoves moves={moves} />
      </div>
    </div>
  );
};

export default App;
