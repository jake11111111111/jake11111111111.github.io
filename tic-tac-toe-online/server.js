
// Tic Tac Toe Multiplayer Server (Node.js + Socket.IO with Matchmaking Lobby)
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

let lobbyQueue = [];

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("join-lobby", () => {
    lobbyQueue.push(socket);
    checkForMatch();
  });

  function checkForMatch() {
    while (lobbyQueue.length >= 2) {
      const playerX = lobbyQueue.shift();
      const playerO = lobbyQueue.shift();

      const room = playerX.id + "#" + playerO.id;
      playerX.join(room);
      playerO.join(room);

      playerX.data.symbol = "X";
      playerO.data.symbol = "O";
      playerX.data.opponent = playerO;
      playerO.data.opponent = playerX;

      playerX.emit("init", "X");
      playerO.emit("init", "O");

      playerX.emit("your-turn");
      playerO.emit("wait-turn");
    }
  }

  socket.on("move", (index) => {
    const symbol = socket.data.symbol;
    const opponent = socket.data.opponent;
    const room = [...socket.rooms][1];

    io.to(room).emit("turn", { index, symbol });
    socket.emit("wait-turn");
    if (opponent) opponent.emit("your-turn");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected", socket.id);
    lobbyQueue = lobbyQueue.filter(s => s !== socket);
    const opponent = socket.data.opponent;
    if (opponent) {
      opponent.emit("opponent-disconnected");
      opponent.data.opponent = null;
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
