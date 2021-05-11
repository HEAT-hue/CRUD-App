//jshint esversion:6
const mongoose = require("mongoose");

// DB Schema
const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
});

// DB model based on Schema
const PersonModel = mongoose.model("people", peopleSchema);

module.exports = PersonModel;