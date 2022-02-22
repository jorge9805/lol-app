import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const MarksmenScreen = () => {
  const { search } = React.useContext(SearchContext);
  return (
    <div>
      <p>Mages</p>
      <ChampionList tag="Marksman" search={search} />
    </div>
  );
};

export default MarksmenScreen;
