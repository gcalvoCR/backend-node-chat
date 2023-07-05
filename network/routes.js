const message = require("../components/message/messageNetwork");
const user = require("../components/user/userNetwork");
const chat = require("../components/chat/chatNetwork");
const todos = require("../components/todo/todoNetwork");
const auth = require("../components/auth/authNetwork");
const authenticateJWT = require('../middleware/authentication')

//function to add all routes
// it also define the names of the different routes
const routes = function (server) {
  server.use("/messages", authenticateJWT, message);
  server.use("/users", authenticateJWT, user);
  server.use("/chats", authenticateJWT, chat);
  server.use("/todos", authenticateJWT, todos);
  server.use("/auth", auth)
};

module.exports = routes;
