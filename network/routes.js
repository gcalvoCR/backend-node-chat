const express = require("express");
const message = require("../components/message/network");
const user = require("../components/user/network");
const chat = require("../components/chat/network");

//function to add all routes
// it also define the names of the different routes
const routes = function (server) {
  server.use("/messages", message);
  server.use("/users", user);
  server.use("/chats", chat);
};

module.exports = routes;
