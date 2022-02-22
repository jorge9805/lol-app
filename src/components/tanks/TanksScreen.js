import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const TanksScreen = () => {
  const { search } = React.useContext(SearchContext);
  return (
    <div>
      <p>Tanks</p>
      <ChampionList tag="Tank" search={search} />
    </div>
  );
};

export default TanksScreen;
