const express = require("express");
const multer = require("multer");
const response = require("../../network/response");
const controller = require("./messageController");
const router = express.Router();
const config = require("../../config");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/files/");
//   },
//   filename: function (req, file, cb) {
//     const [name, extension] = file.originalname.split(".");
//     cb(null, `${name}-${Date.now()}.${extension}`);
//   },
// });

// const upload = multer({ storage: storage });

const upload = multer({
  dest: `public/${config.filesRoute}/`,
});

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((error) => {
      response.error(req, res, "Unexpected error", 500, error);
    });
});

router.post("/", upload.single("file"), function (req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((data) => response.success(req, res, data))
    .catch((error) => {
      response.error(req, res, "Wrong data provided", 400, error);
    });
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Something went wrong", 500, error);
    });
});

router.delete("/:id", function (req, res) {
  if (req.query.error == "true") {
    return response.error(
      req,
      res,
      "Unexpected error",
      500,
      "This is just a simulation of an error"
    );
  }
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `User ${req.params.id} deleted`, 200);
    })
    .catch((error) => {
      response.error(req, res, "Something went wrong", 500, error);
    });
});

module.exports = router;
