import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
const useGetChampionById = (championId) => {
  const firstState = {
    data: [],
    loading: true,
  };
  const [champion, setChampion] = useState(firstState);
  useEffect(() => {
    axios
      .get(
        `https://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${championId}.json`
      )
      .then((res) => {
        let data = res.data.data;
        data = data[championId];
        setChampion({
          data: data,
          loading: false,
        });
      });
  }, [championId]);

  return champion;
};
export default useGetChampionById;
