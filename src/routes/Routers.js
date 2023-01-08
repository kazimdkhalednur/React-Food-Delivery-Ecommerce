import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateFood from "../components/Admin/Food/CreateFood";
import UpdateFood from "../components/Admin/Food/UpdateFood.js";
import OrderTable from "../components/User/OrderTable";
import AddCategory from "../components/Admin/Category/AddCategory";
import RoutePrivate from "./RoutePrivate";
import RouteBuyer from "./BuyerRoute";
import RouteSeller from "./SellerRoute";
import Admin from "../components/Admin/Admin";
import Logout from "../pages/Logout";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/Profile/EditProfile";
import UpdateCategory from "../components/Admin/Category/UpdateCategory";
import RouteDeliver from "./RouteDeliver";
import Table from "../components/Deliver/Table";
import DeleteFood from "../components/Admin/Food/DeleteFood";
import DeleteCategory from "../components/Admin/Category/DeleteCategory";

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
          <Route
            path="/food/category/delete/:id"
            element={<DeleteCategory />}
          />
          <Route path="/food/create" element={<CreateFood />} />
          <Route path="/food/update/:id" element={<UpdateFood />} />
          <Route path="/food/delete/:id" element={<DeleteFood />} />
          <Route path="/seller" element={<Admin navlink="pendingorder" />} />
          <Route path="/all-foods" element={<Admin navlink="allfoods" />} />
          <Route
            path="/all-categories"
            element={<Admin navlink="allcategories" />}
          />
        </Route>
        <Route element={<RouteDeliver />}>
          <Route path="/deliver-table" element={<Table />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routers;
