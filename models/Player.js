const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const playerSchema = new mongoose.Schema({
  username: { type: String, min: 5, max: 20 },
  password: { type: String, min: 5, max: 20 },
});

playerSchema.methods.createToken = function() {
  const payload = {_id: this._id, username: this.username}
  const secretKey = process.env.JWT_SECRET
  const token = jwt.sign(payload, secretKey)
  return token;
}

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
