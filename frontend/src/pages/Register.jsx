import { useState } from "react";
import api from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      console.log("REGISTER OK :", res.data);
      alert("Utilisateur créé avec succès ✅");
      setForm({ name: "", email: "", password: "" }); // Réinitialiser le formulaire
    } catch (err) {
      console.error("REGISTER ERROR :", err.response?.data || err.message);
      alert("Erreur lors du register");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('https://occasion.automobile.tn/2025/10/119780/8gSXfrQPC_ujw0H8KGx1hzcu4_max.jpeg?t=72bdea10c8c162a8c6082823955228cd')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center"
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
      <form style={formStyle} onSubmit={submit}>
        <h2 style={{ color: "#1e90ff", marginBottom: "20px" }}>Register</h2>

        <input
          style={inputStyle}
          placeholder="Nom"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          style={inputStyle}
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          style={inputStyle}
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />

        <button style={buttonStyle} type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
