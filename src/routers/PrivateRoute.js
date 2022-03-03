import React from "react";
import { useContext } from "react";
import AuthContext from "../auth/authContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  localStorage.setItem("currentLocation", location.pathname);
  return user.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
