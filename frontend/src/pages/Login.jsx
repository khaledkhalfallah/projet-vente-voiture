import { useState } from "react";
import api from "../api/axios";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password
      });

      // Sauvegarde du token et utilisateur
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify({ email: form.email }));

      alert("Connexion réussie ✅");
      setForm({ email: "", password: "" }); // Réinitialiser le formulaire
    } catch (err) {
      console.error("LOGIN ERROR :", err.response?.data || err.message);
      alert(err.response?.data?.message || "Erreur lors du login");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('https://www.wandaloo.com/files/Voiture-Neuve/seat/SEAT-ATECA-2017-neuve-Maroc-13.jpg')",
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
        <h2 style={{ color: "#1e90ff", marginBottom: "20px" }}>Login</h2>

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

        <button style={buttonStyle} type="submit">Login</button>
      </form>
    </div>
  );
}
