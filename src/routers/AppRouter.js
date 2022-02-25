import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import Navbar from "../components/navbar/Navbar";
import NavBarRoutes from "./NavBarRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <NavBarRoutes />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
