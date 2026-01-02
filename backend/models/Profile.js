const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  phone: String,
  address: String
});

module.exports = mongoose.model("Profile", profileSchema);
