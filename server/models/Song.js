const { Schema, model } = require("mongoose");
const songSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  playlist: {
    type: String,
  },
});
const Song = model("Song", songSchema);
module.exports = Song;
