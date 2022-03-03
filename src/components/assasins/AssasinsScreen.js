import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const AssasinsScreen = () => {
  const { search } = React.useContext(SearchContext);
  return <ChampionList tag="Assassin" search={search} />;
};

export default AssasinsScreen;
