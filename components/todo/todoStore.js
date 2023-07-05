const Model = require("./todoModel");

function addTodo(todo) {
  const myTodo = new Model(todo);
  return myTodo.save();
}

async function getTodos(filterTodo) {
  let filter = {};
  if (filterTodo !== null) {
    filter = { todo: filterTodo };
  }
  const todo = await Model.find(filter);
  return todo;
}

async function getTodoByTitle(title) {
  let filter = {};
  if (title !== null) {
    filter = { title };
  }
  const todo = await Model.findOne(filter);
  return todo;
}

async function findTodoById(id) {
  return await Model.findById(id);
}

async function updateTodo(todo) {
  return await Model.updateOne(todo);
}

async function removeTodo(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addTodo,
  list: getTodos,
  getByTitle: getTodoByTitle,
  update: updateTodo,
  delete: removeTodo,
  findById: findTodoById,
};
