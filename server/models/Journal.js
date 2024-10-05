const { Schema, model } = require("mongoose");
const journalschema = new Schema({
  content: {
    type: String,
  },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
const Journal = model("Journal", journalschema);
module.exports = Journal;
