const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: { type: String, requiered: true },
  subTitle: { type: String, requiered: true },
  desc: { type: String, requiered: true },
  image: { type: String, requiered: true },
  poster: { type: String, requiered: true },
  movies: { type: String, requiered: true },
});

module.exports = new mongoose.model("Movie", movieSchema);
