var express = require("express");
var router = express.Router();
let pokedex = require("../pokedex.json");

/* GET users listing. */
// router.get("/users", function (req, res, next) {
//   res.send("respond with a resource");
// });

// GET ALL POKEMON
router.get("/pokemon", (req, res) => {
  res.send(pokedex);
});

// GET SPECIFIC POKEMON
router.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  res.send(pokedex.filter((el) => el.id === parseInt(id, 10)));
});

// GET SPECIFIC INFO
router.get("/pokemon/:id/:info", (req, res) => {
  const { id, info } = req.params;
  if (info !== "name" && info !== "type" && info !== "base")
    res.status(404).send("This resource does not exist!");
  res.send(pokedex.filter((el) => el.id === parseInt(id, 10))[0][info]);
});

module.exports = router;
