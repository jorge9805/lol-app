import "./LolApp.css";
import AppRouter from "./routers/AppRouter";
import React, { useEffect, useReducer } from "react";
import AuthContext from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
export const SearchContext = React.createContext({
  search: "",
  setSearch: () => {},
});
const LolApp = () => {
  const init = () => {
    return (
      JSON.parse(localStorage.getItem("user")) || {
        name: null,
        isAuthenticated: false,
      }
    );
  };
  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [search, setSearch] = React.useState("");
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const value = React.useMemo(
    () => ({ search, setSearch }),
    [search, setSearch]
  );
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <SearchContext.Provider value={value}>
        <AppRouter />
      </SearchContext.Provider>
    </AuthContext.Provider>
  );
};

export default LolApp;
