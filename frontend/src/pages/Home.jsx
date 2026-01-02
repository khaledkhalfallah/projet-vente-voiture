import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const containerStyle = {
    minHeight: "100vh",
    padding: "40px 20px",
    textAlign: "center",
    backgroundImage: "url('https://sf1.autoplus.fr/wp-content/uploads/autoplus/2021/01/mercedes-audi-bmw-qui-vendu-plus-voitures-2020-1.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const overlayStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "900px",
    width: "100%"
  };

  const cardStyle = {
    border: "1px solid #1e90ff",
    borderRadius: "12px",
    padding: "10px",
    width: "300px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={{ fontSize: "2.5rem", color: "#1e90ff", marginBottom: "10px" }}>
          Bienvenue dans notre agence !
        </h1>

        <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>
          Votre satisfaction est notre intérêt
        </p>

        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "25px" }}>
          Trouvez la voiture de vos rêves
        </p>

        <div style={{
          fontSize: "1.1rem",
          marginBottom: "40px",
          color: "#1e90ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}>
          <FaPhoneAlt /> <span>73210210</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={cardStyle}>
            <img src="https://images.unsplash.com/photo-1549924231-f129b911e442" alt="Voiture économique" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h3 style={{ marginTop: "10px", color: "#333" }}>Voitures économiques</h3>
          </div>

          <div style={cardStyle}>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" alt="Voiture de luxe" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h3 style={{ marginTop: "10px", color: "#333" }}>Voitures de luxe</h3>
          </div>

          <div style={cardStyle}>
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" alt="SUV" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h3 style={{ marginTop: "10px", color: "#333" }}>SUV & 4x4</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
