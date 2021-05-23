const Model = require("./model");

//let list = []

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    // return list;
    let filter = {};
    if (filterUser) {
      // using regex you could amplify the filter
      filter = { user: new RegExp(filterUser, "i") };
      // extrict way
      // filter = { user: filterUser };
    }
    Model.find(filter)
      .populate("user")
      .exec((error, populated) => {
        if (error) {
          return reject(error);
        }
        resolve(populated);
      });
  });
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;

  const newMessage = foundMessage.save();
  return newMessage;
}

async function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

async function existDB(id) {
  const exist = await Model.exists({
    _id: id,
  });
  return exist;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  remove: removeMessage,
  existDB,
};
