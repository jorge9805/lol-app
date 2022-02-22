import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const MagesScreen = () => {
  const { search } = React.useContext(SearchContext);
  return (
    <div>
      <p>Mages</p>
      <ChampionList tag="Mage" search={search} />
    </div>
  );
};

export default MagesScreen;
