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
import CreateFood from "../components/CreateFood/CreateFood";
import OrderTable from "../components/OrderTable/OrderTable";
import AddCategory from "../components/AddCategory/AddCategory";
import RoutePrivate from "./RoutePrivate";
import RouteBuyer from "./BuyerRoute";
import RouteSeller from "./SellerRoute";
import Admin from "../components/Admin/Admin";
import Logout from "../pages/Logout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<RoutePrivate />}>
        <Route element={<RouteBuyer />}>
          <Route path="/order" element={<OrderTable />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route element={<RouteSeller />}>
          <Route path="/food/category/create" element={<AddCategory />} />
          <Route path="/food/create" element={<CreateFood />} />
          <Route path="/seller" element={<Admin />} />
          <Route path="/all-foods" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routers;
