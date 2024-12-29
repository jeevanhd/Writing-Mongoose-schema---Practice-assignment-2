const mongoose = require("mongoose");

const blogComments = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  createdAT: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
  },
  author: {
    type: String,
  },
  tags: {
    type: [String],
  },
  category: {
    type: String,
    default: "General",
  },
  likes: {
    type: [String],
  },
  createdAT: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  updatedAT: {
    type: Date,
    default: Date.now(),
  },
  comments: [blogComments],
});

module.exports = mongoose.model("BlogPost", blogPostSchema);
