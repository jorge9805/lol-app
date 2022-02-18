import "./LolApp.css";
import AppRouter from "./routers/AppRouter";
import React from "react";
export const SearchContext = React.createContext({
  search: "",
  setSearch: () => {},
});
const LolApp = () => {
  const [search, setSearch] = React.useState("");
  const value = React.useMemo(
    () => ({ search, setSearch }),
    [search, setSearch]
  );
  return (
    <SearchContext.Provider value={value}>
      <AppRouter />
    </SearchContext.Provider>
  );
};

export default LolApp;
