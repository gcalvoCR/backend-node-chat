const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines the shape of what we want to store
const mySchema = new Schema({
  name: String,
});

const model = mongoose.model("User", mySchema);

module.exports = model;
