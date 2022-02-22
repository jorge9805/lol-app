import React from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const SupportsScreen = () => {
  const { search } = React.useContext(SearchContext);
  return (
    <div>
      <p>Mages</p>
      <ChampionList tag="Support" search={search} />
    </div>
  );
};

export default SupportsScreen;
