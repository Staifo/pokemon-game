const pokedex = require("../database/pokedex.json");

const PokemonController = {
  getAll: (req, res) => {
    res.send(pokedex);
  },

  getOne: (req, res) => {
    const { id } = req.params;
    const pokemon = pokedex.find((el) => el.id === parseInt(id, 10));
    if (!pokemon) {
      res.status(404).send("This resource does not exist!");
    }
    res.send(pokemon);
  },

  getInfo: (req, res) => {
    const { id, info } = req.params;
    if (info !== "name" && info !== "type" && info !== "base")
      res.status(404).send("This resource does not exist!");
    res.send(pokedex.filter((el) => el.id === parseInt(id, 10))[0][info]);
  },
};

module.exports = PokemonController;
