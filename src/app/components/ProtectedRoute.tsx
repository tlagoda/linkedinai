import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  // Ajoute un nouvel état pour suivre si l'authentification de l'utilisateur est en cours de vérification
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    } else {
      // L'utilisateur est authentifié, donc arrête le chargement
      setLoading(false);
    }
  }, [currentUser]);

  // Ne rend rien tant que l'authentification de l'utilisateur est en cours de vérification
  if (loading) {
    return null;
  }

  // Une fois que l'authentification de l'utilisateur a été vérifiée, rend le composant enfant ou redirige vers la page de connexion
  return currentUser ? <>{children}</> : null;
};

export default ProtectedRoute;
