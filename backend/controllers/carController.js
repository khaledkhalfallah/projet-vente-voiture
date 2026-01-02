const Car = require("../models/Car");

exports.createCar = async (req, res) => {
  const car = await Car.create(req.body);
  res.status(201).json(car);
};

exports.getCars = async (req, res) => {
  const cars = await Car.find().populate("reviews");
  res.json(cars);
};

exports.deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Voiture supprimée" });
};
