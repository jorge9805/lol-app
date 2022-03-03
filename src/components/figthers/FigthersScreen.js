import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const FigthersScreen = () => {
  const { search } = React.useContext(SearchContext);
  return <ChampionList tag="Fighter" search={search} />;
};

export default FigthersScreen;
