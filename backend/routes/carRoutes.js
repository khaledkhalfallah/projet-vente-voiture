const router = require("express").Router();
const { createCar, getCars, deleteCar } = require("../controllers/carController");
const auth = require("../middleware/authMiddleware");

router.get("/", getCars);
router.post("/", auth, createCar);
router.delete("/:id", auth, deleteCar);

module.exports = router;
