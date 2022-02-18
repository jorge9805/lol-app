
import { Link } from "react-router-dom";
import useGetChampionsByTags from "../../hooks/useGetChampionsByTags";
const ChampionList = ({ tag, search }) => {

  const { data: championList, loading } = useGetChampionsByTags(tag, search);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {championList.map((champion) => (
            <div key={champion.id}>
              {champion.name}
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.name}
              />
              <Link to={`/champion/${champion.id}`}> View</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChampionList;
