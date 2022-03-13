import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BankDetails from "./Pages/BankDetails";
import FavoriteBanks from "./Pages/FavoriteBanks";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";

const Markup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/all-banks" />} />
        <Route path="/all-banks" element={<HomePage />} />
        <Route path="/favorites" element={<FavoriteBanks />} />
        <Route path="/bank-details/:ifsc_code" element={<BankDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Markup;
