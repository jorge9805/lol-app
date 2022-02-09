import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import NavBarRoutes from "./NavBarRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/*" element={<NavBarRoutes />} />
    </Routes>
  );
};

export default AppRouter;
