const express = require("express");
const response = require("../../network/response");
const controller = require("./authController");
const router = express.Router();

router.post("/register", (req, res) => {
    controller
      .addUser(req.body)
      .then((data) => {
        response.success(req, res, data, 201);
    })
      .catch((err) => {
        response.error(req, res, "Internal error", 500, err);
    });
});

router.post("/login", (req, res) => {
    controller
      .login(req.body)
      .then((data) => {
        console.log(data)
        response.success(req, res, data, 201);
    })
      .catch((err) => {
        response.error(req, res, "Not authorized", 401, err);
    });
});

module.exports = router;