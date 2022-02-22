import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const AssasinsScreen = () => {
  const { search } = React.useContext(SearchContext);
  return (
    <div>
      <p>Assassin</p>
      <ChampionList tag="Assassin" search={search} />
    </div>
  );
};

export default AssasinsScreen;
