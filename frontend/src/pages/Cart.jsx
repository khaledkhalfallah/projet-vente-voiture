import { useState, useEffect } from "react";
import api from "../api/axios";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Charger le panier depuis localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Supprimer une voiture du panier
  const handleRemove = (index) => {
    const removedCar = cart[index];
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`Voiture supprimée : ${removedCar.marque} ${removedCar.modele}`);
  };

  // Confirmer l'achat
  const handleConfirm = async () => {
    if (cart.length === 0) {
      alert("Le panier est vide !");
      return;
    }

    try {
      for (let car of cart) {
        await api.post("/orders", {
          carId: car._id,
          nom: "Nom test",
          adresse: "Adresse test",
          telephone: "0000000000"
        });
      }
      localStorage.removeItem("cart");
      setCart([]);
      alert("Achat confirmé avec succès ✅");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur lors de l'achat");
    }
  };

  const containerStyle = {
    padding: "40px 20px",
    minHeight: "100vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "#fff"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.35)",
    zIndex: 0,
    borderRadius: "0px"
  };

  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#000",
    borderRadius: "12px",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s",
    cursor: "pointer"
  };

  const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    fontWeight: "bold",
    transition: "0.3s"
  };

  const confirmButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    width: "100%",
    marginTop: "20px",
    fontSize: "1rem"
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2.5rem", textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>Panier</h2>

        {cart.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Le panier est vide</p>
        ) : (
          <>
            {cart.map((car, index) => (
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div>
                  {car.marque} {car.modele} - {car.prix} €
                </div>
                <button style={buttonStyle} onClick={() => handleRemove(index)}>Supprimer</button>
              </div>
            ))}

            <button style={confirmButtonStyle} onClick={handleConfirm}>
              Confirmer l'achat
            </button>
          </>
        )}
      </div>
    </div>
  );
}
