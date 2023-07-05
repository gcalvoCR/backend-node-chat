const store = require("../user/userStore");
const config = require("../../config")

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);

function addUser(data) {
  console.log(user)
  if (!data.name) return Promise.reject("No name was provided");
  if (!data.email) return Promise.reject("No email was provided");
  if (!data.password) return Promise.reject("No password was provided");

  
  const user = {
    name: data.name,
    email: data.email,
    password: bcrypt.hashSync(data.password, salt)
  };

  return store.add(myUser);
}

async function login(data) {
  if (!data.email) return Promise.reject("No email was provided");
  if (!data.password) return Promise.reject("No password was provided");

  const res = await store.getByEmail(data.email);
  let passwordIsValid = bcrypt.compareSync(data.password, res.password);
  if (!passwordIsValid) return Promise.reject({ auth: false, token: null });
  let token = jwt.sign({ id: res.id }, config.secret, { expiresIn: 86400 });
  return Promise.resolve({ auth: true, token: token, user: res });
}

module.exports = {
  addUser,
  login,
};
