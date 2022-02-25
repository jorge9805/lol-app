import React from "react";
import { useContext } from "react";
import AuthContext from "../auth/authContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("jelo", user.isAuthenticated);
  return user.isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
