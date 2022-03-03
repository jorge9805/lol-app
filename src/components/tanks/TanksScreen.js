import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const TanksScreen = () => {
  const { search } = React.useContext(SearchContext);
  return <ChampionList tag="Tank" search={search} />;
};

export default TanksScreen;
