// class Game {
//   constructor(snakes, ladders, players) {
//     this.snakes = new Map(snakes);
//     this.ladders = new Map(ladders);
//     this.players = players;
//     this.positions = new Map(players.map((player) => [player, 0]));
//     this.currentPlayerIndex = 0;
//   }

//   rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
//   }

//   movePlayer(player, roll) {
//     let initialPosition = this.positions.get(player);
//     let finalPosition = initialPosition + roll;

//     if (finalPosition > 100) {
//       finalPosition = initialPosition;
//     } else {
//       while (
//         this.snakes.has(finalPosition) ||
//         this.ladders.has(finalPosition)
//       ) {
//         if (this.snakes.has(finalPosition)) {
//           finalPosition = this.snakes.get(finalPosition);
//         } else if (this.ladders.has(finalPosition)) {
//           finalPosition = this.ladders.get(finalPosition);
//         }
//       }
//     }

//     this.positions.set(player, finalPosition);

//     return { player, roll, initialPosition, finalPosition };
//   }

//   nextPlayer() {
//     this.currentPlayerIndex =
//       (this.currentPlayerIndex + 1) % this.players.length;
//     return this.players[this.currentPlayerIndex];
//   }

//   getCurrentPlayer() {
//     return this.players[this.currentPlayerIndex];
//   }
// }

// const initializeGame = (snakes, ladders, players) => {
//   return new Game(snakes, ladders, players);
// };

// const rollDice = (game) => {
//   const player = game.getCurrentPlayer();
//   const roll = game.rollDice();
//   const moveResult = game.movePlayer(player, roll);
//   const winner = moveResult.finalPosition === 100 ? player : null;
//   if (!winner) {
//     game.nextPlayer();
//   }
//   return { ...moveResult, winner };
// };

// module.exports = { initializeGame, rollDice };

//---------------------------------------------------------//
// functional component

let snakes = [];
let ladders = [];
let players = [];
let positions = {};
let currentPlayerIndex = 0;
let gameInitialized = false;

function initializeGame(req, res) {
  const { snakes: s, ladders: l, players: p } = req.body;
  snakes = s;
  ladders = l;
  players = p;
  positions = {};

  players.forEach((player) => {
    positions[player] = 0;
  });

  currentPlayerIndex = 0;
  gameInitialized = true;
  res.json({ positions });
}

function roll(req, res) {
  if (!gameInitialized) {
    return res.status(400).json({ error: "Game not initialized" });
  }

  const player = players[currentPlayerIndex];
  const roll = rollDice();
  const { initialPosition, finalPosition } = movePlayer(player, roll);
  let response = { player, roll, initialPosition, finalPosition, positions };

  if (finalPosition === 100) {
    response.message = `${player} wins the game`;
    gameInitialized = false;
  }

  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

  // console.log(`Current Player: ${player}`);
  // console.log(`Roll: ${roll}`);
  // console.log(`Initial Position: ${initialPosition}`);
  // console.log(`Final Position: ${finalPosition}`);
  // console.log(`Next Player Index: ${currentPlayerIndex}`);

  res.json(response);
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function movePlayer(player, roll) {
  let initialPosition = positions[player];
  let finalPosition = initialPosition + roll;

  if (finalPosition > 100) {
    finalPosition = initialPosition;
  } else {
    snakes.forEach(([head, tail]) => {
      if (finalPosition === head) {
        finalPosition = tail;
      }
    });

    ladders.forEach(([start, end]) => {
      if (finalPosition === start) {
        finalPosition = end;
      }
    });
  }

  positions[player] = finalPosition;
  return { initialPosition, finalPosition };
}

module.exports = { initializeGame, roll };
