import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function BuyerRoute() {
  const { userType } = useAuth();
  console.log(userType);
  return userType === "buyer" ? <Outlet /> : <Navigate to="/login" />;
}
