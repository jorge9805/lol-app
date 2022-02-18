import axios from "axios";
import { useState, useEffect } from "react";
const useGetChampionsByTags = (tag, search) => {
  console.log("useGetChampionsByTags", "tag", tag, "search", search);
  const firstState = {
    data: [],
    loading: true,
  };
  const [champions, setChampions] = useState(firstState);
  useEffect(() => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json`
      )
      .then((res) => {
        const data = res.data.data;
        let championsArray = Object.values(data);

        if (search) {
          championsArray = championsArray.filter((champion) => {
            return champion.name.toLowerCase().includes(search.toLowerCase());
          });
        }
        if (tag == "all") {
          setChampions({
            data: championsArray,
            loading: false,
          });
        } else {
          const championsArray = championsArray.filter((champion) =>
            champion.tags.includes(tag)
          );
          setChampions({
            data: championsArray,
            loading: false,
          });
        }
      });
  }, [tag, search]);

  return champions;
};
export default useGetChampionsByTags;
