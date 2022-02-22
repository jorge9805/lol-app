import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import Navbar from "../components/navbar/Navbar";
import NavBarRoutes from "./NavBarRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<NavBarRoutes />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};

export default AppRouter;
