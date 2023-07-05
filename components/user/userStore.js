const Model = require("./userModel");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function getUsers(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const user = await Model.find(filter);
  return user;
}

async function getUserByEmail(filterEmail) {
  let filter = {};
  if (filterEmail !== null) {
    console.log('email', filterEmail)
    filter = { email: filterEmail };
  }
  const user = await Model.findOne(filter);
  return user;
}

module.exports = {
  add: addUser,
  list: getUsers,
  getByEmail: getUserByEmail,
};
