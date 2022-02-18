import React, { useEffect, useState } from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const AllScreen = () => {
  const { search } = React.useContext(SearchContext);
  return (
    <div>
      <p>All</p>
      <ChampionList tag="all" search={search} />
    </div>
  );
};

export default AllScreen;
