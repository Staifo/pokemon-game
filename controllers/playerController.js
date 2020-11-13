const Player = require("../models/Player");
const bcrypt = require('bcrypt');

const playerController = {
  getAllPlayers: (req, res) => {
    Player.find()
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },

  createPlayer: async (req, res) => {
    const { username, password } = req.body;
    try {
      let player = await Player.findOne({username})
      if (player) return res.status(400).send('player already exists')
      player = new Player({ username, password: await bcrypt.hash(password, 10)})
      await player.save()
      res.set('x-authorization-token', token).send({_id: player._id, username: player.username})
      // res.json({username: username})
    } catch(err) {
      console.log(err.message)
    }
    
  },
};

module.exports = playerController;
