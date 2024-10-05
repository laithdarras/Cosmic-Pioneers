const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  journals: [{ type: Schema.Types.ObjectId, ref: "Journal" }],
});

const User = model("User", userSchema);
module.exports = User;
