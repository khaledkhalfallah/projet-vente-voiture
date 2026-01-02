const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user.id,
    cars: req.body.cars,
    total: req.body.total
  });
  res.status(201).json(order);
};
