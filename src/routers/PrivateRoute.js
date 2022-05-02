import React from "react";
import { useContext } from "react";
import AuthContext from "../auth/authContext";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  let currentLocation = location.pathname;
  localStorage.setItem("currentLocation", currentLocation);
  return user.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
