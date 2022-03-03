import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const MarksmenScreen = () => {
  const { search } = React.useContext(SearchContext);
  return <ChampionList tag="Marksman" search={search} />;
};

export default MarksmenScreen;
