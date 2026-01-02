import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // Si pas de token, redirige vers login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Sinon, affiche le composant demandé
  return children;
}
