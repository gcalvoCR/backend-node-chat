const store = require("./todoStore");

function getTodos(filterTodo) {
  return store.list(filterTodo);
}

function getTodoById(id) {
  return store.findById(id);
}

function addTodo(todo) {
  return store.add(todo);
}

function getTodoByTitle(filterTodo) {
  return store.getByTitle(filterTodo);
}

function deleteTodo(id) {
  return store.delete(id);
}
async function updateTodo(id, filterTodo) {
  const todo = await store.findById(id);
  console.log(id)
  todo.title = filterTodo.title;
  todo.description = filterTodo.description;
  todo.comments = filterTodo.comments;

  console.log(todo);
  
  return store.update(filterTodo);
}

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  getTodoByTitle,
  deleteTodo,
  updateTodo
};
