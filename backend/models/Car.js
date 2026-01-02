const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  marque: String,
  modele: String,
  annee: Number,
  prix: Number,
  image: String,
  disponible: { type: Boolean, default: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = mongoose.model("Car", carSchema);
