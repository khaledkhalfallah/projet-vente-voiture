const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  rating: Number,
  comment: String
});

module.exports = mongoose.model("Review", reviewSchema);
