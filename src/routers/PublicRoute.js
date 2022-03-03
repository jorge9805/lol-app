import React from "react";
import { useContext } from "react";
import AuthContext from "../auth/authContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  console.log("Navigate", Navigate);
  const { user } = useContext(AuthContext);
  return user.isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
