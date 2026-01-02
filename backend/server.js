require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());

// ⚡ CORS
app.use(cors({
  origin: "http://localhost:5173", // URL de ton frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Connexion à la DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/cars", require("./routes/carRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));

// Lancement du serveur
app.listen(5000, () =>
  console.log("🚀 Backend MERN prêt pour l'examen")
);
