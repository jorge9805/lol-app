import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const FigthersScreen = () => {
  const { search } = React.useContext(SearchContext);
  return (
    <div>
      <p>Fighters</p>
      <ChampionList tag="Fighter" search={search} />
    </div>
  );
};

export default FigthersScreen;
