import React from "react";
import { useContext } from "react";
import AuthContext from "../auth/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("alo", user.isAuthenticated);
  return user.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
