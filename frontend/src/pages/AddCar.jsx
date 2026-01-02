import { useState } from "react";
import api from "../api/axios";

export default function AddCar() {
  const [isAdmin, setIsAdmin] = useState(false); // état pour vérifier si c'est l'admin
  const [form, setForm] = useState({
    marque: "",
    modele: "",
    annee: "",
    prix: "",
    image: ""
  });

  // Vérification admin
  const handleAdminLogin = () => {
    const email = prompt("Entrez l'email admin :");
    const password = prompt("Entrez le mot de passe :");

    if (email === "adminne@gamil.com" && password === "12347") {
      setIsAdmin(true);
      alert("Authentification réussie ✅");
    } else {
      alert("Accès refusé : identifiants incorrects");
    }
  };

  // Soumission du formulaire
  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/cars", form);
      alert("Voiture ajoutée ✅");
      setForm({ marque: "", modele: "", annee: "", prix: "", image: "" });
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'ajout de la voiture");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('https://uploads.audi-mediacenter.com/system/production/media/83705/images/4ff7f06d73d84f673fddc0dbb87be8ed3ce13a2c/A1911586_web_960.jpg?1698390664')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#1e90ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      {!isAdmin ? (
        <button style={buttonStyle} onClick={handleAdminLogin}>
          Authentification Admin
        </button>
      ) : (
        <form style={formStyle} onSubmit={submit}>
          <h2 style={{ color: "#1e90ff", textAlign: "center", marginBottom: "20px" }}>
            Ajouter une voiture
          </h2>
          <input
            style={inputStyle}
            placeholder="Marque"
            value={form.marque}
            onChange={e => setForm({ ...form, marque: e.target.value })}
            required
          />
          <input
            style={inputStyle}
            placeholder="Modèle"
            value={form.modele}
            onChange={e => setForm({ ...form, modele: e.target.value })}
            required
          />
          <input
            style={inputStyle}
            placeholder="Année"
            value={form.annee}
            onChange={e => setForm({ ...form, annee: e.target.value })}
            required
          />
          <input
            style={inputStyle}
            placeholder="Prix"
            value={form.prix}
            onChange={e => setForm({ ...form, prix: e.target.value })}
            required
          />
          <input
            style={inputStyle}
            placeholder="URL Image"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />

          <button style={buttonStyle} type="submit">Ajouter</button>
        </form>
      )}
    </div>
  );
}
