var express = require("express");
var pokemonRouter = express.Router();
let PokemonController = require("../controllers/pokemonController");

pokemonRouter.get("/", PokemonController.getAll);
pokemonRouter.get("/:id", PokemonController.getOne);
pokemonRouter.get("/:id/:info", PokemonController.getInfo);

module.exports = pokemonRouter;
