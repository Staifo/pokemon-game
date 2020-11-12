require("dotenv").config();
require("./database/client");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var pokemonRouter = require("./routes/pokemon");
const playerRouter = require("./routes/players");

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/pokemon", pokemonRouter);
app.use("/players", playerRouter);

module.exports = app;
