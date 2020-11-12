const express = require("express");
const playerRouter = express.Router();
const playerController = require("../controllers/playerController");

playerRouter.get("/", playerController.getAllPlayers);
playerRouter.post("/", playerController.createPlayer);

module.exports = playerRouter;
