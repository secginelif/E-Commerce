import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/foods" />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
};

export default Routers;
