const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true,
  },
  discriminator: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: true
  }

},{minimize: false});

module.exports = mongoose.model("User", UserSchema);