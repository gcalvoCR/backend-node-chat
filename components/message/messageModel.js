const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines the shape of what we want to store
const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: "Chat",
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});

// The model requires 2 fields--> name, type
const model = mongoose.model("Message", mySchema);

module.exports = model;
