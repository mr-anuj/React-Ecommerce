import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import DealsPage from "./pages/DealsPage";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const MyRoute = () => {
  return (
    <Router>
      {/* <NavTest /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default MyRoute;
