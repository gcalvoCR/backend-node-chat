const express = require("express");
const response = require("../../network/response");
const controller = require("./todoController");
const config = require("../../config");
const router = express.Router();


router.get("/", function (req, res) {
  const filterTodos = req.query.title || null;
  controller
    .getTodos(filterTodos)
    .then((todoList) => {
      response.success(req, res, todoList, 200);
    })
    .catch((error) => {
      response.error(req, res, "Unexpected error", 500, error);
    });
});

router.get("/:id", function (req, res) {
  controller
    .getTodoById(req.params.id)
    .then((todo) => {
      console.log(todo)
      response.success(req, res, todo, 200);
    })
    .catch((error) => {
      response.error(req, res, "Unexpected error", 500, error);
    });
});

router.post("/", function (req, res) {
  controller
    .addTodo(req.body)
    .then((data) => response.success(req, res, data))
    .catch((error) => {
      response.error(req, res, "Wrong data provided", 400, error);
    });
});

router.put("/:id", function (req, res) {
  controller
    .updateTodo(req.params.id, req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Something went wrong", 500, error);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteTodo(req.params.id)
    .then(() => {
      response.success(req, res, `Resource ${req.params.id} deleted`, 200);
    })
    .catch((error) => {
      response.error(req, res, "Something went wrong", 500, error);
    });
});

module.exports = router;
