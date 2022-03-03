import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const MagesScreen = () => {
  const { search } = React.useContext(SearchContext);
  return <ChampionList tag="Mage" search={search} />;
};

export default MagesScreen;
