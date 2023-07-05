const store = require("./userStore");

function getUsers(filterUser) {
  return store.list(filterUser);
}

module.exports = {
  getUsers,
};
