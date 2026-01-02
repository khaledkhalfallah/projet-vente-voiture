const Review = require("../models/Review");
const Car = require("../models/Car");

exports.addReview = async (req, res) => {
  const review = await Review.create({
    user: req.user.id,
    car: req.body.car,
    rating: req.body.rating,
    comment: req.body.comment
  });

  await Car.findByIdAndUpdate(req.body.car, {
    $push: { reviews: review._id }
  });

  res.status(201).json(review);
};
