import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function DeliverPrivate() {
  const { userType } = useAuth();
  return userType === "deliver" ? <Outlet /> : <Navigate to="/login" />;
}
