const router = require("express").Router();
const { addReview } = require("../controllers/reviewController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, addReview);

module.exports = router;
