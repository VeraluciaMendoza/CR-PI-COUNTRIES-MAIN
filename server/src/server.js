const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
// configuracion de los middlewares
server.use(morgan("dev"));
server.use(express.json()); // funcion de parseo
server.use(cors());

// configuracion del router principal
server.use(router);

module.exports = server;
