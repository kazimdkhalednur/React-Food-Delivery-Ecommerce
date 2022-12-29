import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckAuthenticated from "../utils/CheckAuthenticated";
import storage from "../utils/storage";

export default function useAuth() {
  CheckAuthenticated();
  const { user, userType, authenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const login = () => {
    if (authenticated) {
      navigate("/");
    } else {
      storage.remove("AuthToken");
      navigate("/");
    }
  };

  const logout = () => {
    storage.remove("AuthToken");
    window.location.reload();
  };

  return { user, userType, authenticated, login, logout };
}
