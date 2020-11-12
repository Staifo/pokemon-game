const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  username: { type: String, min: 5, max: 20 },
  password: { type: String, min: 5, max: 20 },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
