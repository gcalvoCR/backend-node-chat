const express = require("express");
const response = require("../../network/response");
const controller = require("./userController");
const router = express.Router();

router.get("/", (req, res) => {
  const filterUser = req.query.user || null;
  controller
    .getUsers(filterUser)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unespected Error", 500, e);
    });
});

module.exports = router;
