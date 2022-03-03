import React, { useEffect, useState } from "react";
import ChampionList from "../championList/ChampionList";
import { SearchContext } from "../../LolApp";
const AllScreen = () => {
  const { search } = React.useContext(SearchContext);
  return <ChampionList tag="all" search={search} />;
};

export default AllScreen;
