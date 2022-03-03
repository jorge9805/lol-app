import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const SupportsScreen = () => {
  const { search } = React.useContext(SearchContext);
  return <ChampionList tag="Support" search={search} />;
};

export default SupportsScreen;
