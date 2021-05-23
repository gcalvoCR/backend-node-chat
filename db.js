const db = require("mongoose");

db.Promise = global.Promise;

async function connect(uri) {
  await db
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("[db connection] Database connected");
    })
    .catch((error) => {
      console.error("[db connection] Connection failed", error.message);
    });
}

module.exports = connect;
