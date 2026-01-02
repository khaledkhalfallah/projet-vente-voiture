import { useEffect, useState } from "react";
import api from "../api/axios";

const defaultImages = [
  "https://images.unsplash.com/photo-1549924231-f129b911e442",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
  "https://images.unsplash.com/photo-1511910849309-0dffb8785146"
];

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    api.get("/cars").then(res => setCars(res.data));
  }, []);

  const handleBuy = (car) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(car);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Ajouté au panier : ${car.marque} ${car.modele}`);
  };

  const handleDelete = async (carId) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette voiture ?")) return;

    try {
      await api.delete(`/cars/${carId}`);
      setCars(cars.filter(car => car._id !== carId));
      alert("Voiture supprimée ✅");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la suppression");
    }
  };

  return (
    <div 
      style={{
        padding: 20,
        backgroundImage: "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        color: "#fff"
      }}
    >
      <h1 style={{
        position: "absolute",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "3rem",
        fontWeight: "bold",
        textShadow: "2px 2px 6px rgba(0,0,0,0.7)"
      }}>
        Agence de confort
      </h1>

      <h2 style={{ marginTop: "100px", textAlign: "center", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
        Liste des voitures
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: 20
        }}
      >
        {cars.map((car, index) => (
          <div
            className="card"
            key={car._id}
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "12px",
              padding: "10px",
              color: "#000",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}
          >
            <img
              src={car.image || defaultImages[index % defaultImages.length]}
              alt={car.modele}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3>{car.marque} {car.modele}</h3>
            <p><strong>Année : </strong>{car.annee}</p>
            <p><strong>Prix : </strong>{car.prix} €</p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="buy" onClick={() => handleBuy(car)}>Acheter</button>
              <button className="delete" onClick={() => handleDelete(car._id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
