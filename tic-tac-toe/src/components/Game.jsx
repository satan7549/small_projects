// src/components/Game.js
import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [grid, setGrid] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (row, col) => {
    if (grid[row][col] !== "-" || winner) return;

    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? currentPlayer : cell
      )
    );

    setGrid(newGrid);
    checkWinner(newGrid);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (grid) => {
    const winningCombos = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        grid[a[0]][a[1]] !== "-" &&
        grid[a[0]][a[1]] === grid[b[0]][b[1]] &&
        grid[a[0]][a[1]] === grid[c[0]][c[1]]
      ) {
        setWinner(grid[a[0]][a[1]]);
        return;
      }
    }

    if (grid.every((row) => row.every((cell) => cell !== "-"))) {
      setWinner("Draw");
    }
  };

  const resetGame = () => {
    setGrid([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div style={styles.container}>
      <h1>Tic Tac Toe</h1>
      <Board grid={grid} onCellClick={handleCellClick} />
      {winner && (
        <div style={styles.winner}>
          {winner === "Draw" ? "Game Over: Draw" : `Winner: ${winner}`}
        </div>
      )}
      <button onClick={resetGame} style={styles.resetButton}>
        Reset Game
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  winner: {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Game;


//-------------------------------------------------///

// // src/components/Game.js
// import React, { useState } from "react";
// import Board from "./Board";
// import PlayerInput from "./PlayerInput";
// import GameMessage from "./GameMessage";

// const Game = () => {
//   const [grid, setGrid] = useState([
//     ["-", "-", "-"],
//     ["-", "-", "-"],
//     ["-", "-", "-"],
//   ]);
//   const [currentPlayer, setCurrentPlayer] = useState("X");
//   const [winner, setWinner] = useState(null);
//   const [player1, setPlayer1] = useState("");
//   const [player2, setPlayer2] = useState("");
//   const [message, setMessage] = useState("");

//   const handlePlayerSubmit = (p1, p2) => {
//     setPlayer1(p1);
//     setPlayer2(p2);
//   };

//   const handleCellClick = (row, col) => {
//     if (grid[row][col] !== "-" || winner) {
//       setMessage("Invalid Move");
//       return;
//     }

//     const newGrid = grid.map((r, rowIndex) =>
//       r.map((cell, colIndex) =>
//         rowIndex === row && colIndex === col ? currentPlayer : cell
//       )
//     );

//     setGrid(newGrid);
//     checkWinner(newGrid);
//     setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
//     setMessage("");
//   };

//   const checkWinner = (grid) => {
//     const winningCombos = [
//       [
//         [0, 0],
//         [0, 1],
//         [0, 2],
//       ],
//       [
//         [1, 0],
//         [1, 1],
//         [1, 2],
//       ],
//       [
//         [2, 0],
//         [2, 1],
//         [2, 2],
//       ],
//       [
//         [0, 0],
//         [1, 0],
//         [2, 0],
//       ],
//       [
//         [0, 1],
//         [1, 1],
//         [2, 1],
//       ],
//       [
//         [0, 2],
//         [1, 2],
//         [2, 2],
//       ],
//       [
//         [0, 0],
//         [1, 1],
//         [2, 2],
//       ],
//       [
//         [0, 2],
//         [1, 1],
//         [2, 0],
//       ],
//     ];

//     for (const combo of winningCombos) {
//       const [a, b, c] = combo;
//       if (
//         grid[a[0]][a[1]] !== "-" &&
//         grid[a[0]][a[1]] === grid[b[0]][b[1]] &&
//         grid[a[0]][a[1]] === grid[c[0]][c[1]]
//       ) {
//         const winnerName = grid[a[0]][a[1]] === "X" ? player1 : player2;
//         setWinner(winnerName);
//         setMessage(`${winnerName} won the game!`);
//         return;
//       }
//     }

//     if (grid.every((row) => row.every((cell) => cell !== "-"))) {
//       setWinner("Draw");
//       setMessage("Game Over: Draw");
//     }
//   };

//   const resetGame = () => {
//     setGrid([
//       ["-", "-", "-"],
//       ["-", "-", "-"],
//       ["-", "-", "-"],
//     ]);
//     setCurrentPlayer("X");
//     setWinner(null);
//     setMessage("");
//     setPlayer1("");
//     setPlayer2("");
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Tic Tac Toe</h1>
//       {!player1 || !player2 ? (
//         <PlayerInput onSubmit={handlePlayerSubmit} />
//       ) : (
//         <>
//           <Board grid={grid} onCellClick={handleCellClick} />
//           <GameMessage message={message} />
//           {winner && (
//             <button onClick={resetGame} style={styles.resetButton}>
//               Reset Game
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "20px",
//   },
//   resetButton: {
//     marginTop: "10px",
//     padding: "10px 20px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

// export default Game;
