const express = require("express");
const cors = require("cors");
const { initializeGame, roll } = require("./game");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let game;

// // Endpoint to initialize the game
// app.post("/initialize", (req, res) => {
//   const { snakes, ladders, players } = req.body;
//   game = initializeGame(snakes, ladders, players);
//   res.json(game);
// });

// // Endpoint to roll the dice for the current player
// app.post("/roll", (req, res) => {
//   const result = rollDice(game);
//   if (result.winner) {
//     res.json({ message: `${result.winner} wins the game` });
//   } else {
//     res.json(result);
//   }
// });

//-----------------------------------//
//functional component

app.post("/initialize", initializeGame);

app.post("/roll", roll);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
