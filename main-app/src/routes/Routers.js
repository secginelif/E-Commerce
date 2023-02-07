import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/urunler" />} />
      <Route path="/urunler" element={<AllProducts />} />
      <Route path="/sepetim" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
};

export default Routers;
