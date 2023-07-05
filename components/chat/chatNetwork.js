const express = require("express");
const response = require("../../network/response");
const controller = require("./chatController");
const router = express.Router();

router.get("/:userId", (req, res) => {
  controller
    .listChats(req.params.userId)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unespected Error", 500, e);
    });
});

router.post("/", (req, res) => {
  console.log(users);
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internanl error", 500, err);
    });
});

module.exports = router;
