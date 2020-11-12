const Player = require("../models/Player");

const playerController = {
  getAllPlayers: (req, res) => {
    Player.find()
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },

  createPlayer: (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    Player.create({ username, password })
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
};

module.exports = playerController;
