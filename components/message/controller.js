const store = require("./store");
const { socket } = require("../../socket");
const config = require("../../config");

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error("[messageController] There's no user or message");
      return reject("Wrong input data");
    }

    let fileUrl = "";
    if (file) {
      fileUrl = `${config.host}:${config.port}${config.publicRoute}/${config.filesRoute}/${file.filename}`;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    };
    store.add(fullMessage);
    socket.io.emit("message", fullMessage);
    return resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise((resolve, reject) => {
    if (!id || !message) {
      return reject(new Error("Invalid data"));
    }
    store
      .update(id, message)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject(new Error("Invalid data"));
    }
    store.existDB(id).then((exists) => {
      if (!exists) {
        reject("Id doesn't exist in DB");
      } else {
        store
          .remove(id)
          .then(() => resolve("User deleted"))
          .catch((error) => reject(error));
      }
    });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
