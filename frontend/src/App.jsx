import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cars from "./pages/Cars";
import AddCar from "./pages/AddCar";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import './styles.css';

export default function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Déconnecté ✅");
    navigate("/login");
  };

  const handleAddCarClick = () => {
    const email = prompt("Entrez l'email admin:");
    const password = prompt("Entrez le mot de passe:");

    if (email === "adminne@gamil.com" && password === "12347") {
      navigate("/add-car"); 
    } else {
      alert("Accès refusé : identifiants incorrects");
    }
  };

  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#1e90ff",
    color: "#fff",
    textDecoration: "none"
  };

  return (
    <div>
      <nav style={{ display: "flex", alignItems: "center", padding: 10, gap: "10px" }}>
        <Link style={buttonStyle} to="/">Accueil</Link>
        <Link style={buttonStyle} to="/cars">Voitures</Link>
        <Link style={buttonStyle} to="/login">Login</Link>
        <Link style={buttonStyle} to="/register">Register</Link>
        <button style={buttonStyle} onClick={handleAddCarClick}>Ajouter voiture</button>
        <Link style={buttonStyle} to="/cart">Panier</Link>

        {/* Bouton Déconnexion à droite */}
        <button style={{ ...buttonStyle, marginLeft: "auto" }} onClick={handleLogout}>
          Déconnexion
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages protégées */}
        <Route
          path="/cars"
          element={
            <ProtectedRoute>
              <Cars />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-car"
          element={
            <ProtectedRoute>
              <AddCar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
