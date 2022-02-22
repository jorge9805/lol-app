import { Link } from "react-router-dom";
import useGetChampionsByTags from "../../hooks/useGetChampionsByTags";
const ChampionList = ({ tag, search }) => {
  const { data: championList, loading } = useGetChampionsByTags(tag, search);
  return (
    <div>
      {loading ? (
        <div className="scroll-auto snap-start flex justify-center items-center h-screen">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="animate-fade p-10 grid grid-cols-1 scroll-auto sm:grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
