const router = require("express").Router();
const { createOrder } = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createOrder);

module.exports = router;
