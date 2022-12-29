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
      <Route element={<RoutePrivate />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/food/create" element={<CreateFood />} />
        <Route path="/order" element={<OrderTable />} />
        <Route path="/food/category/create" element={<AddCategory />} />
      </Route>
    </Routes>
  );
};

export default Routers;
