import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home1.js";
import Login from "../Screens/Login.js";
import MyOrder from "../Screens/MyOrder.js";
import Signup from "../Screens/SignUp";
import Cart from "../Screens/Cart.js";

const RoutesLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myorder" element={<MyOrder />} /> */}
      </Routes>
    </Router>
  );
};

export default RoutesLayout;
