const express = require("express");
const playerRouter = express.Router();
const playerController = require("../controllers/playerController");
const authorizePlayer = require('../middleware/authorizePlayer');

playerRouter.get("/", playerController.getAllPlayers);
playerRouter.post("/signup", playerController.createPlayer);

module.exports = playerRouter;
