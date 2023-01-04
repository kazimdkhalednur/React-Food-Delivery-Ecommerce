import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateFood from "../components/Admin/CreateFood";
import OrderTable from "../components/User/OrderTable";
import AddCategory from "../components/Admin/AddCategory";
import RoutePrivate from "./RoutePrivate";
import RouteBuyer from "./BuyerRoute";
import RouteSeller from "./SellerRoute";
import Admin from "../components/Admin/Admin";
import Logout from "../pages/Logout";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/Profile/EditProfile";
import UpdateCategory from "../components/Admin/UpdateCategory";
import RouteDeliver from "./RouteDeliver";
import Table from "../components/Deliver/Table";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<RoutePrivate />}>
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route element={<RouteBuyer />}>
          <Route path="/order" element={<OrderTable />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route element={<RouteSeller />}>
          <Route path="/food/category/create" element={<AddCategory />} />
          <Route
            path="/food/category/update/:id"
            element={<UpdateCategory />}
          />
          <Route path="/food/create" element={<CreateFood />} />
          <Route path="/seller" element={<Admin />} />
          <Route path="/all-foods" element={<Admin />} />
        </Route>
        <Route element={<RouteDeliver />}>
          <Route path="/deliver-table" element={<Table />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routers;
