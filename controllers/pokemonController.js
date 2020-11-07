const pokedex = require("../database/pokedex.json");
const axios = require("axios");

const PokemonController = {
  getAll: (req, res) => {
    res.send(pokedex);
  },

  // OLD ROUTE FOR GETTING INFO ON SPECIFIC POKEMON
  // getOne: (req, res) => {
  //   const { id } = req.params;
  //   const pokemon = pokedex.find((el) => el.id === parseInt(id, 10));
  //   if (!pokemon) {
  //     res.status(404).send("This resource does not exist!");
  //   }
  //   res.send(pokemon);
  // },

  // NEW ROUTE FOR SPECIFC INFO, ATTACHES PICTURES TO EACH POKEMON
  getOne: (req, response) => {
    const { id } = req.params;
    const pokemon = pokedex.find((el) => el.id === parseInt(id, 10));
    if (!pokemon) {
      res.status(404).send("This resource does not exist!");
    }
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name.english.toLowerCase()}/`
      )
      .then((res) => {
        pokemon.pics = {
          front: res.data.sprites.front_default,
          back: res.data.sprites.back_default,
          animated:
            res.data.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
        };
        response.send(pokemon);
      })
      .catch((err) => console.log(err));
  },

  getInfo: (req, res) => {
    const { id, info } = req.params;
    if (info !== "name" && info !== "type" && info !== "base")
      res.status(404).send("This resource does not exist!");
    res.send(pokedex.filter((el) => el.id === parseInt(id, 10))[0][info]);
  },
};

module.exports = PokemonController;
