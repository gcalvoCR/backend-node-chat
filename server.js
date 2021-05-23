// import express from "express"; //ES6 way of importing packages, both should work
const express = require("express"); // Native way Node import packages
const app = express();
const server = require("http").Server(app);

const config = require("./config");

const cors = require("cors");
const socket = require("./socket");
const db = require("./db");
const router = require("./network/routes");

db(config.uri);

app.use(cors());

// parse Json objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

socket.connect(server);

router(app);

// serve static files
app.use(config.publicRoute, express.static("public"));

server.listen(config.port, function () {
  console.log(`La aplicacion esta escuchando en ${config.host}:${config.port}`);
});
