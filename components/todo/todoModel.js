const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines the shape of what we want to store
const mySchema = new Schema({
  title: String,
  description: String,
  reminder: Boolean
});

const model = mongoose.model("Todo", mySchema);

module.exports = model;
