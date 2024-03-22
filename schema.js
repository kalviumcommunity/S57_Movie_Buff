const { default: mongoose } = require("mongoose");

const data = new mongoose.Schema({
  Movie_Title: {
    type: String,
    required: true,
  },
  Director: {
    type: String,
    required: true,
  },
  Release_Year: {
    type: Number,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
});

const dataSet = mongoose.model("dataset", data);
module.exports = dataSet;
