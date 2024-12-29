const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error connecting to the database");
    process.exit(1);
  }
};

module.exports = connectDB;
